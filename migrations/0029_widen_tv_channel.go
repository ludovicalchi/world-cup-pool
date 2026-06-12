package migrations

import (
	"github.com/pocketbase/pocketbase/core"
	m "github.com/pocketbase/pocketbase/migrations"

	"github.com/oyvhov/world-cup-pool/internal/seed"
)

// Widen the tvChannel field so it fits broadcaster labels longer than the
// original Norwegian ones (e.g. "bein-sports" is 11 chars; the field was Max 8).
func init() {
	m.Register(func(app core.App) error {
		col, err := app.FindCollectionByNameOrId("matches")
		if err != nil {
			return err
		}
		if tf, ok := col.Fields.GetByName("tvChannel").(*core.TextField); ok {
			tf.Max = 32
			if err := app.Save(col); err != nil {
				return err
			}
		}
		return seed.ApplyTVChannels(app)
	}, func(app core.App) error {
		return nil
	})
}
