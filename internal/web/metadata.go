package web

import (
	"html"
	"io/fs"
	"net/http"
	"os"
	"strings"

	"github.com/pocketbase/pocketbase/core"
)

const (
	inviteOGTitle       = "Bli med i min tippekonkurranse for VM på Midttunet!"
	inviteOGDescription = "Klikk her for å utfordre meg."
	inviteOGImagePath   = "/screenshots/Frontpage.png"
)

type inviteMeta struct {
	PageTitle   string
	Title       string
	Description string
	URL         string
	ImageURL    string
	SiteName    string
}

// ResolveAppName returns the application name configured in the PocketBase
// admin settings (Settings → Application), falling back to the default when
// the field is left empty.
func ResolveAppName(app core.App) string {
	if name := strings.TrimSpace(app.Settings().Meta.AppName); name != "" {
		return name
	}
	return "VM Tipping"
}

// RegisterPublicMeta exposes a small public JSON endpoint so the SPA can read
// the application name configured in the admin settings without admin auth.
func RegisterPublicMeta(app core.App, se *core.ServeEvent) {
	se.Router.GET("/api/app/meta", func(e *core.RequestEvent) error {
		return e.JSON(http.StatusOK, map[string]any{"appName": ResolveAppName(app)})
	})
}

// RegisterInviteMetadata serves the SPA shell for invite landing pages with
// route-specific Open Graph metadata. Social crawlers see the rich tags, while
// browsers still boot the SvelteKit /join/[code] route from the same HTML.
func RegisterInviteMetadata(app core.App, se *core.ServeEvent) {
	se.Router.GET("/join/{code}", func(e *core.RequestEvent) error {
		code := strings.ToUpper(strings.TrimSpace(e.Request.PathValue("code")))
		leagueName := ""
		if code != "" {
			if league, err := app.FindFirstRecordByFilter("leagues", "inviteCode = {:c}", map[string]any{"c": code}); err == nil {
				leagueName = strings.TrimSpace(league.GetString("name"))
			}
		}

		origin := requestOrigin(e.Request)
		appName := ResolveAppName(app)
		meta := inviteMeta{
			PageTitle:   invitePageTitle(appName, leagueName),
			Title:       inviteOGTitle,
			Description: inviteOGDescription,
			URL:         origin + e.Request.URL.EscapedPath(),
			ImageURL:    origin + inviteOGImagePath,
			SiteName:    appName,
		}

		index, err := fs.ReadFile(DistFS(), "index.html")
		if err != nil {
			return e.Blob(http.StatusNotFound, "text/plain; charset=utf-8", []byte("web app is not built"))
		}

		htmlPage := injectInviteMetadata(string(index), meta)
		return e.Blob(http.StatusOK, "text/html; charset=utf-8", []byte(htmlPage))
	})
}

func invitePageTitle(appName, leagueName string) string {
	if leagueName == "" {
		return appName + " · Midttunet"
	}
	return "Bli med i " + leagueName + " · " + appName
}

func injectInviteMetadata(index string, meta inviteMeta) string {
	page := replaceTitle(index, meta.PageTitle)
	tags := renderInviteMeta(meta)
	if strings.Contains(page, "</head>") {
		return strings.Replace(page, "</head>", tags+"\n\t</head>", 1)
	}
	return page + "\n" + tags
}

func replaceTitle(index string, title string) string {
	start := strings.Index(index, "<title>")
	end := strings.Index(index, "</title>")
	if start < 0 || end < start {
		return index
	}
	end += len("</title>")
	return index[:start] + "<title>" + html.EscapeString(title) + "</title>" + index[end:]
}

func renderInviteMeta(meta inviteMeta) string {
	values := []string{
		metaName("description", meta.Description),
		metaProperty("og:type", "website"),
		metaProperty("og:site_name", meta.SiteName),
		metaProperty("og:title", meta.Title),
		metaProperty("og:description", meta.Description),
		metaProperty("og:url", meta.URL),
		metaProperty("og:image", meta.ImageURL),
		metaProperty("og:image:alt", meta.SiteName+" på Midttunet"),
		metaName("twitter:card", "summary_large_image"),
		metaName("twitter:title", meta.Title),
		metaName("twitter:description", meta.Description),
		metaName("twitter:image", meta.ImageURL),
	}
	return "\t\t" + strings.Join(values, "\n\t\t")
}

func metaName(name string, content string) string {
	return `<meta name="` + html.EscapeString(name) + `" content="` + html.EscapeString(content) + `" />`
}

func metaProperty(property string, content string) string {
	return `<meta property="` + html.EscapeString(property) + `" content="` + html.EscapeString(content) + `" />`
}

func requestOrigin(r *http.Request) string {
	if configured := strings.TrimRight(strings.TrimSpace(os.Getenv("PUBLIC_APP_URL")), "/"); configured != "" {
		return configured
	}

	host := forwardedHeader(r.Header.Get("X-Forwarded-Host"))
	if host == "" {
		host = r.Host
	}
	proto := forwardedHeader(r.Header.Get("X-Forwarded-Proto"))
	if proto == "" {
		proto = "http"
		if r.TLS != nil {
			proto = "https"
		}
	}
	return proto + "://" + host
}

func forwardedHeader(value string) string {
	first, _, _ := strings.Cut(value, ",")
	return strings.TrimSpace(first)
}
