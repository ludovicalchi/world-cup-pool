import type { LanguageCode } from '$lib/language.svelte';

export const strings: Record<
	LanguageCode,
	{
		nav: {
			home: string;
			matchTips: string;
			worldCupTips: string;
			bracket: string;
			leagues: string;
		};
		chrome: {
			settings: string;
			about: string;
			logout: string;
			lightTheme: string;
			darkTheme: string;
			worldCupTheme: string;
			standardTheme: string;
			language: string;
			languageAria: string;
		};
		auth: {
			tagline: string;
			subtitle: string;
			emailLabel: string;
			passwordLabel: string;
			emailPlaceholder: string;
			login: string;
			forgotPassword: string;
			or: string;
			newHere: string;
			createAccount: string;
			google: string;
			wrongCredentials: string;
			googleFailed: string;
		};
		register: {
			title: string;
			subtitle: string;
			nameLabel: string;
			passwordHint: string;
			create: string;
			loginPrompt: string;
			loginLink: string;
			error: string;
			passwordTooShort: string;
		};
		forgotPassword: {
			title: string;
			subtitle: string;
			emailLabel: string;
			send: string;
			success: string;
			back: string;
			error: string;
		};
		resetPassword: {
			title: string;
			subtitle: string;
			newPasswordLabel: string;
			confirmLabel: string;
			update: string;
			success: string;
			back: string;
			errorInvalid: string;
			errorMismatch: string;
			passwordTooShort: string;
			updateError: string;
		};
		search: {
			trigger: string;
			panelAria: string;
			placeholder: string;
			close: string;
			loading: string;
			empty: string;
			noResults: string;
			matches: string;
			teams: string;
			groups: string;
			leagues: string;
			noLeagues: string;
		};
		pwa: {
			installTitle: string;
			installBody: string;
			installButton: string;
			close: string;
			iosTitle: string;
			iosStep1: string;
			iosStep2: string;
			iosStep3: string;
			understood: string;
		};
		introCard: {
			kicker: string;
			title: string;
			body: string;
			leaguesTitle: string;
			leaguesBody: string;
			matchTipsTitle: string;
			matchTipsBody: string;
			worldCupTipsTitle: string;
			worldCupTipsBody: string;
			primaryCta: string;
			secondaryCta: string;
			footnote: string;
			close: string;
			settingsTitle: string;
			settingsBody: string;
			settingsActive: string;
			settingsDismissed: string;
			settingsButton: string;
			settingsSuccess: string;
			settingsLink: string;
		};
		tipCard: {
			lockedResult: string;
			noTipLocked: string;
			showFriendTips: string;
			hideFriendTips: string;
			noFriendTips: string;
			saved: string;
			loading: string;
			stageGroup: string;
			stageOther: string;
			day: string;
			live: string;
			locked: string;
			missing: string;
			result: string;
			goThrough: string;
			penalties: string;
			save: string;
			visiting: string;
			crowdTitle: string;
			crowdEmpty: string;
			crowdHome: string;
			crowdDraw: string;
			crowdAway: string;
			crowdTotal: string;
		};
		playerCard: {
			title: string;
			hitRate: string;
			hitRateSub: string;
			longestStreak: string;
			longestStreakSub: string;
			currentStreak: string;
			largestMiss: string;
			largestMissSub: string;
			noStats: string;
		};
		common: {
			languageName: string;
		};
		odds: {
			sourceOddsApi: string;
			sourceRankings: string;
			toggleToDecimal: string;
			toggleToPct: string;
		};
	}
> = {
	nb: {
		nav: {
			home: 'Hjem',
			matchTips: 'Kamptips',
			worldCupTips: 'VM-tips',
			bracket: 'Turnering',
			leagues: 'Ligaer'
		},
		chrome: {
			settings: 'Innstillinger',
			about: 'Info om spillet',
			logout: 'Logg ut',
			lightTheme: 'Lyst tema',
			darkTheme: 'Mørkt tema',
			worldCupTheme: 'VM-tema',
			standardTheme: 'Standard',
			language: 'Nynorsk',
			languageAria: 'Bytt til nynorsk'
		},
		auth: {
			tagline: 'Kamptips og VM-tips i samme liga.',
			subtitle: 'Samle vennene dine, tipp kampene og følg VM-dramaet fra første avspark.',
			emailLabel: 'E-post',
			passwordLabel: 'Passord',
			emailPlaceholder: 'navn@eksempel.no',
			login: 'Logg inn',
			forgotPassword: 'Glemt passord?',
			or: 'ELLER',
			newHere: 'Ny her?',
			createAccount: 'Opprett konto.',
			google: 'Fortsett med Google',
			wrongCredentials: 'Feil e-post eller passord.',
			googleFailed: 'Google-innlogging feilet.'
		},
		register: {
			title: 'Opprett konto',
			subtitle: 'Bli med i tippekonkurransen for VM.',
			nameLabel: 'Visningsnavn',
			passwordHint: 'Passordet må være minst 8 tegn.',
			create: 'Opprett konto',
			loginPrompt: 'Har du konto allerede?',
			loginLink: 'Logg inn',
			error: 'Kunne ikke opprette konto.',
			passwordTooShort: 'Passordet må være minst 8 tegn.'
		},
		forgotPassword: {
			title: 'Tilbakestill passord',
			subtitle: 'Skriv e-posten du registrerte deg med, så sender vi deg en lenke.',
			emailLabel: 'E-post',
			send: 'Send lenke',
			success: 'Hvis e-posten er registrert, er en lenke på vei.',
			back: 'Tilbake til innlogging',
			error: 'Kunne ikke sende lenken.'
		},
		resetPassword: {
			title: 'Velg nytt passord',
			subtitle: 'Skriv inn og bekreft det nye passordet ditt.',
			newPasswordLabel: 'Nytt passord',
			confirmLabel: 'Bekreft passord',
			update: 'Oppdater passord',
			success: 'Passordet er oppdatert - sender deg til innlogging...',
			back: 'Tilbake til innlogging',
			errorInvalid: 'Lenken er ugyldig eller utløpt.',
			errorMismatch: 'Passordene er ikke like.',
			passwordTooShort: 'Passordet må være minst 8 tegn.',
			updateError: 'Kunne ikke oppdatere passordet.'
		},
		search: {
			trigger: 'Søk',
			panelAria: 'Søk i VM Tipping',
			placeholder: 'Søk kamp, lag, gruppe eller liga',
			close: 'Lukk søk',
			loading: 'Laster søk...',
			empty: 'Finn kamp, lag eller liga.',
			noResults: 'Ingen treff.',
			matches: 'Kamper',
			teams: 'Lag',
			groups: 'Grupper',
			leagues: 'Mine ligaer',
			noLeagues: 'Ingen ligaer'
		},
		pwa: {
			installTitle: 'Installer VM Tipping',
			installBody: 'Appikon på hjemskjermen, fullskjerm og raskere start.',
			installButton: 'Installer',
			close: 'Lukk',
			iosTitle: 'Legg VM Tipping på hjemskjermen',
			iosStep1: 'Trykk på Del-knappen i Safari-verktøylinjen.',
			iosStep2: 'Bla ned og velg Legg til på hjemskjerm.',
			iosStep3: 'Trykk Legg til øverst til høyre.',
			understood: 'Greit'
		},
		introCard: {
			kicker: 'Ny i appen?',
			title: 'Velkommen til VM Tipping',
			body: 'Tipp kampene, bli med i ligaer og følg poengene dine gjennom VM.',
			leaguesTitle: 'Ligaer',
			leaguesBody: 'Opprett en liga eller bruk kode.',
			matchTipsTitle: 'Kamptips',
			matchTipsBody: 'Lever tips før avspark.',
			worldCupTipsTitle: 'VM-tips',
			worldCupTipsBody: 'Tipp sluttspill og vinner.',
			primaryCta: 'Åpne ligaer',
			secondaryCta: 'Se kamptips',
			footnote: '',
			close: 'Lukk introkort',
			settingsTitle: 'Introkort',
			settingsBody: 'Vis velkomstkortet på forsiden igjen hvis du vil ha en rask omvisning.',
			settingsActive: 'Kortet er aktivt og vises på forsiden til du lukker det.',
			settingsDismissed: 'Kortet er skjult for denne brukeren på denne enheten.',
			settingsButton: 'Vis kortet igjen',
			settingsSuccess: 'Velkomstkortet er klart til å vises på forsiden igjen.',
			settingsLink: 'Gå til forsiden'
		},
		tipCard: {
			lockedResult: 'Resultat',
			noTipLocked: 'Ingen kamptips - kampen ble låst.',
			showFriendTips: 'Vis kamptips fra venner',
			hideFriendTips: 'Skjul kamptips fra venner',
			noFriendTips: 'Ingen i denne ligaen har tippet denne kampen.',
			saved: 'Lagret',
			loading: 'Lagrer...',
			stageGroup: 'Gruppe',
			stageOther: 'Runde',
			day: 'I dag',
			live: 'Live',
			locked: 'låst',
			missing: 'mangler',
			result: 'Ditt kamptips',
			goThrough: 'videre',
			penalties: 'Straffer',
			save: 'Lagre',
			visiting: 'Ditt tips',
			crowdTitle: 'Slik tippet alle',
			crowdEmpty: 'Ingen andre har tippet denne kampen.',
			crowdHome: 'Hjemme',
			crowdDraw: 'Uavgjort',
			crowdAway: 'Borte',
			crowdTotal: 'tips totalt'
		},
		playerCard: {
			title: 'Spillerkort',
			hitRate: 'Treffprosent',
			hitRateSub: 'helt rette',
			longestStreak: 'Lengste rekke',
			longestStreakSub: 'kamper på rad med poeng',
			currentStreak: 'Aktiv rekke',
			largestMiss: 'Største bom',
			largestMissSub: 'Du tippet',
			noStats: 'Ingen kamper med poeng ennå.'
		},
		common: {
			languageName: 'Bokmål'
		},
		odds: {
			sourceOddsApi: 'Odds',
			sourceRankings: 'FIFA-rangering',
			toggleToDecimal: 'Vis odds',
			toggleToPct: 'Vis %'
		}
	},
	nn: {
		nav: {
			home: 'Heim',
			matchTips: 'Kamptips',
			worldCupTips: 'VM-tips',
			bracket: 'Turnering',
			leagues: 'Ligaer'
		},
		chrome: {
			settings: 'Innstillingar',
			about: 'Info om spelet',
			logout: 'Logg ut',
			lightTheme: 'Lyst tema',
			darkTheme: 'Mørkt tema',
			worldCupTheme: 'VM-tema',
			standardTheme: 'Vanleg tema',
			language: 'English',
			languageAria: 'Bytt til engelsk'
		},
		auth: {
			tagline: 'Kamptips og VM-tips i same liga.',
			subtitle: 'Samle venene dine, tipp kampane og følg VM-dramaet frå første avspark.',
			emailLabel: 'E-post',
			passwordLabel: 'Passord',
			emailPlaceholder: 'di.e-post@eksempel.no',
			login: 'Logg inn',
			forgotPassword: 'Gleymt passord?',
			or: 'ELLER',
			newHere: 'Ny her?',
			createAccount: 'Opprett konto.',
			google: 'Fortsett med Google',
			wrongCredentials: 'Feil e-post eller passord.',
			googleFailed: 'Google-pålogging feila.'
		},
		register: {
			title: 'Opprett konto',
			subtitle: 'Bli med i tippekonkurransen for VM.',
			nameLabel: 'Visingsnamn',
			passwordHint: 'Passordet må vere minst 8 teikn.',
			create: 'Opprett konto',
			loginPrompt: 'Har du allereie konto?',
			loginLink: 'Logg inn',
			error: 'Kunne ikkje opprette konto.',
			passwordTooShort: 'Passordet må vere minst 8 teikn.'
		},
		forgotPassword: {
			title: 'Tilbakestill passord',
			subtitle: 'Skriv e-posten du registrerte deg med — vi sender deg ei tilbakestillingslenke.',
			emailLabel: 'E-post',
			send: 'Send tilbakestillingslenke',
			success: 'Viss e-posten er registrert, er ei lenke på veg.',
			back: 'Tilbake til pålogging',
			error: 'Kunne ikkje sende tilbakestillingslenke.'
		},
		resetPassword: {
			title: 'Vel nytt passord',
			subtitle: 'Skriv inn og stadfest det nye passordet ditt.',
			newPasswordLabel: 'Nytt passord',
			confirmLabel: 'Stadfest nytt passord',
			update: 'Oppdater passord',
			success: 'Passordet er oppdatert — sender deg til pålogging…',
			back: 'Tilbake til pålogging',
			errorInvalid: 'Lenka er ugyldig eller utløpt.',
			errorMismatch: 'Passorda er ikkje like.',
			passwordTooShort: 'Passordet må vere minst 8 teikn.',
			updateError: 'Kunne ikkje oppdatere passord.'
		},
		search: {
			trigger: 'Søk',
			panelAria: 'Søk i VM Tipping',
			placeholder: 'Søk kamp, lag, gruppe eller liga',
			close: 'Lukk søk',
			loading: 'Lastar søk…',
			empty: 'Finn kamp, lag eller liga.',
			noResults: 'Ingen treff.',
			matches: 'Kampar',
			teams: 'Lag',
			groups: 'Grupper',
			leagues: 'Mine ligaer',
			noLeagues: 'Ingen ligaer'
		},
		pwa: {
			installTitle: 'Installer VM Tipping',
			installBody: 'Appikon på heimskjermen, fullskjerm og raskare start.',
			installButton: 'Installer',
			close: 'Lukk',
			iosTitle: 'Legg VM Tipping til på heimskjermen',
			iosStep1: 'Trykk på Del-knappen i Safari-verktøylinja.',
			iosStep2: 'Bla ned og vel Legg til på heimskjerm.',
			iosStep3: 'Trykk Legg til øvst til høgre.',
			understood: 'Skjønar'
		},
		introCard: {
			kicker: 'Ny i appen?',
			title: 'Velkomen til VM Tipping',
			body: 'Tipp kampane, bli med i ligaer og følg poenga dine gjennom VM.',
			leaguesTitle: 'Ligaer',
			leaguesBody: 'Opprett eller bli med med kode.',
			matchTipsTitle: 'Kamptips',
			matchTipsBody: 'Lever tips før avspark.',
			worldCupTipsTitle: 'VM-tips',
			worldCupTipsBody: 'Tipp sluttspel og vinnar.',
			primaryCta: 'Opne ligaer',
			secondaryCta: 'Sjå kamptips',
			footnote: '',
			close: 'Lukk introkort',
			settingsTitle: 'Introkort',
			settingsBody: 'Vis velkomstkortet på forsida igjen viss du vil ha ei rask omvising.',
			settingsActive: 'Kortet er aktivt og blir vist på forsida til du lukkar det.',
			settingsDismissed: 'Kortet er skjult for denne brukaren på denne eininga.',
			settingsButton: 'Vis velkomstkortet igjen',
			settingsSuccess: 'Velkomstkortet er klart til å visast på forsida igjen.',
			settingsLink: 'Gå til forsida'
		},
		tipCard: {
			lockedResult: 'Resultat',
			noTipLocked: 'Ingen kamptips — denne kampen vart låst.',
			showFriendTips: 'Vis kamptips frå vener',
			hideFriendTips: 'Skjul kamptips frå vener',
			noFriendTips: 'Ingen i denne ligaen har tippa denne kampen.',
			saved: 'Lagra',
			loading: 'Lagrar…',
			stageGroup: 'Gruppe',
			stageOther: 'Runde',
			day: 'I dag',
			live: 'Live',
			locked: 'låst',
			missing: 'manglar',
			result: 'Ditt kamptips',
			goThrough: 'vidare',
			penalties: 'Straffespark',
			save: 'Lagre',
			visiting: 'Ditt tips',
			crowdTitle: 'Slik tippa alle',
			crowdEmpty: 'Ingen andre har tippa denne kampen.',
			crowdHome: 'Heime',
			crowdDraw: 'Uavgjort',
			crowdAway: 'Borte',
			crowdTotal: 'tips totalt'
		},
		playerCard: {
			title: 'Spelarkort',
			hitRate: 'Treffprosent',
			hitRateSub: 'heilt rette',
			longestStreak: 'Lengste streak',
			longestStreakSub: 'kampar på rad med poeng',
			currentStreak: 'Aktiv streak',
			largestMiss: 'Største skivebom',
			largestMissSub: 'Du tipa',
			noStats: 'Ingen scora kampar enno.'
		},
		common: {
			languageName: 'Nynorsk'
		},
		odds: {
			sourceOddsApi: 'Odds',
			sourceRankings: 'FIFA-rangering',
			toggleToDecimal: 'Vis odds',
			toggleToPct: 'Vis %'
		}
	},
	en: {
		nav: {
			home: 'Home',
			matchTips: 'Match Tips',
			worldCupTips: 'World Cup Tips',
			bracket: 'Bracket',
			leagues: 'Leagues'
		},
		chrome: {
			settings: 'Settings',
			about: 'About the game',
			logout: 'Log out',
			lightTheme: 'Light theme',
			darkTheme: 'Dark theme',
			worldCupTheme: 'World Cup theme',
			standardTheme: 'Standard theme',
			language: 'Français',
			languageAria: 'Switch to French'
		},
		auth: {
			tagline: 'Match tips and World Cup tips in one league.',
			subtitle: 'Build your crew, pick the games, and follow the World Cup drama from kickoff.',
			emailLabel: 'Email',
			passwordLabel: 'Password',
			emailPlaceholder: 'name@example.com',
			login: 'Log in',
			forgotPassword: 'Forgot password?',
			or: 'OR',
			newHere: 'New here?',
			createAccount: 'Create account.',
			google: 'Continue with Google',
			wrongCredentials: 'Wrong email or password.',
			googleFailed: 'Google sign-in failed.'
		},
		register: {
			title: 'Create account',
			subtitle: 'Join the World Cup tipping competition.',
			nameLabel: 'Display name',
			passwordHint: 'Password must be at least 8 characters.',
			create: 'Create account',
			loginPrompt: 'Already have an account?',
			loginLink: 'Log in',
			error: 'Could not create account.',
			passwordTooShort: 'Password must be at least 8 characters.'
		},
		forgotPassword: {
			title: 'Reset password',
			subtitle: 'Enter the email you signed up with and we will send a reset link.',
			emailLabel: 'Email',
			send: 'Send reset link',
			success: 'If the email is registered, a link is on the way.',
			back: 'Back to sign in',
			error: 'Could not send reset link.'
		},
		resetPassword: {
			title: 'Choose a new password',
			subtitle: 'Enter and confirm your new password.',
			newPasswordLabel: 'New password',
			confirmLabel: 'Confirm new password',
			update: 'Update password',
			success: 'Password updated — sending you to sign in…',
			back: 'Back to sign in',
			errorInvalid: 'The link is invalid or expired.',
			errorMismatch: 'The passwords do not match.',
			passwordTooShort: 'Password must be at least 8 characters.',
			updateError: 'Could not update password.'
		},
		search: {
			trigger: 'Search',
			panelAria: 'Search in VM Tipping',
			placeholder: 'Search match, team, group or league',
			close: 'Close search',
			loading: 'Loading search…',
			empty: 'Find a match, team or league.',
			noResults: 'No results.',
			matches: 'Matches',
			teams: 'Teams',
			groups: 'Groups',
			leagues: 'My leagues',
			noLeagues: 'No leagues'
		},
		pwa: {
			installTitle: 'Install VM Tipping',
			installBody: 'Home screen icon, full screen, and faster start.',
			installButton: 'Install',
			close: 'Close',
			iosTitle: 'Add VM Tipping to the home screen',
			iosStep1: 'Tap the Share button in the Safari toolbar.',
			iosStep2: 'Scroll down and choose Add to Home Screen.',
			iosStep3: 'Tap Add in the top right corner.',
			understood: 'Got it'
		},
		introCard: {
			kicker: 'New here?',
			title: 'Welcome to VM Tipping',
			body: 'Pick matches, join leagues, and follow your points through the World Cup.',
			leaguesTitle: 'Leagues',
			leaguesBody: 'Create one or join with a code.',
			matchTipsTitle: 'Match tips',
			matchTipsBody: 'Submit before kickoff.',
			worldCupTipsTitle: 'World Cup tips',
			worldCupTipsBody: 'Pick the bracket and winner.',
			primaryCta: 'Open leagues',
			secondaryCta: 'See match tips',
			footnote: '',
			close: 'Close intro card',
			settingsTitle: 'Welcome card',
			settingsBody: 'Show the welcome card on the home page again if you want a quick refresher.',
			settingsActive: 'The card is active and will stay on the home page until you close it.',
			settingsDismissed: 'The card is hidden for this user on this device.',
			settingsButton: 'Show the welcome card again',
			settingsSuccess: 'The welcome card is ready to appear on the home page again.',
			settingsLink: 'Go to home'
		},
		tipCard: {
			lockedResult: 'Result',
			noTipLocked: 'No match tip — this game is locked.',
			showFriendTips: 'Show friends’ tips',
			hideFriendTips: 'Hide friends’ tips',
			noFriendTips: 'No one in this league has picked this match.',
			saved: 'Saved',
			loading: 'Saving…',
			stageGroup: 'Group',
			stageOther: 'Round',
			day: 'Today',
			live: 'Live',
			locked: 'locked',
			missing: 'missing',
			result: 'Your tip',
			goThrough: 'through',
			penalties: 'Penalties',
			save: 'Save',
			visiting: 'Your tip',
			crowdTitle: 'How everyone tipped',
			crowdEmpty: 'No one else has picked this match.',
			crowdHome: 'Home',
			crowdDraw: 'Draw',
			crowdAway: 'Away',
			crowdTotal: 'tips total'
		},
		playerCard: {
			title: 'Player card',
			hitRate: 'Hit rate',
			hitRateSub: 'exact scores',
			longestStreak: 'Longest streak',
			longestStreakSub: 'matches in a row with points',
			currentStreak: 'Current streak',
			largestMiss: 'Biggest miss',
			largestMissSub: 'You tipped',
			noStats: 'No scored matches yet.'
		},
		common: {
			languageName: 'English'
		},
		odds: {
			sourceOddsApi: 'Betting odds',
			sourceRankings: 'FIFA ranking',
			toggleToDecimal: 'Show odds',
			toggleToPct: 'Show %'
		}
	},
	fr: {
		nav: {
			home: 'Accueil',
			matchTips: 'Pronostics',
			worldCupTips: 'Pronostics CM',
			bracket: 'Tableau',
			leagues: 'Ligues'
		},
		chrome: {
			settings: 'Paramètres',
			about: 'À propos',
			logout: 'Déconnexion',
			lightTheme: 'Thème clair',
			darkTheme: 'Thème sombre',
			worldCupTheme: 'Thème Coupe du Monde',
			standardTheme: 'Thème standard',
			language: 'Bokmål',
			languageAria: 'Passer en Bokmål'
		},
		auth: {
			tagline: 'Pronostics de matchs et Coupe du Monde dans une seule ligue.',
			subtitle: 'Formez votre équipe, pariez sur les matchs et suivez la Coupe du Monde dès le coup d’envoi.',
			emailLabel: 'E-mail',
			passwordLabel: 'Mot de passe',
			emailPlaceholder: 'nom@exemple.com',
			login: 'Connexion',
			forgotPassword: 'Mot de passe oublié ?',
			or: 'OU',
			newHere: 'Première fois ?',
			createAccount: 'Créer un compte.',
			google: 'Continuer avec Google',
			wrongCredentials: 'E-mail ou mot de passe incorrect.',
			googleFailed: 'Échec de la connexion Google.'
		},
		register: {
			title: 'Créer un compte',
			subtitle: 'Rejoignez la compétition de pronostics.',
			nameLabel: 'Nom d’affichage',
			passwordHint: 'Le mot de passe doit comporter au moins 8 caractères.',
			create: 'Créer un compte',
			loginPrompt: 'Déjà un compte ?',
			loginLink: 'Connexion',
			error: 'Impossible de créer le compte.',
			passwordTooShort: 'Le mot de passe doit comporter au moins 8 caractères.'
		},
		forgotPassword: {
			title: 'Réinitialiser le mot de passe',
			subtitle: 'Saisissez l’e-mail avec lequel vous vous êtes inscrit et nous vous enverrons un lien.',
			emailLabel: 'E-mail',
			send: 'Envoyer le lien de réinitialisation',
			success: 'Si l’e-mail est enregistré, un lien est en route.',
			back: 'Retour à la connexion',
			error: 'Impossible d’envoyer le lien.'
		},
		resetPassword: {
			title: 'Choisir un nouveau mot de passe',
			subtitle: 'Saisissez et confirmez votre nouveau mot de passe.',
			newPasswordLabel: 'Nouveau mot de passe',
			confirmLabel: 'Confirmer le mot de passe',
			update: 'Mettre à jour le mot de passe',
			success: 'Mot de passe mis à jour — redirection vers la connexion…',
			back: 'Retour à la connexion',
			errorInvalid: 'Le lien est invalide ou expiré.',
			errorMismatch: 'Les mots de passe ne correspondent pas.',
			passwordTooShort: 'Le mot de passe doit comporter au moins 8 caractères.',
			updateError: 'Impossible de mettre à jour le mot de passe.'
		},
		search: {
			trigger: 'Rechercher',
			panelAria: 'Rechercher dans VM Tipping',
			placeholder: 'Rechercher un match, équipe, groupe ou ligue',
			close: 'Fermer la recherche',
			loading: 'Chargement…',
			empty: 'Trouvez un match, une équipe ou une ligue.',
			noResults: 'Aucun résultat.',
			matches: 'Matchs',
			teams: 'Équipes',
			groups: 'Groupes',
			leagues: 'Mes ligues',
			noLeagues: 'Aucune ligue'
		},
		pwa: {
			installTitle: 'Installer VM Tipping',
			installBody: 'Icône sur l’écran d’accueil, plein écran et démarrage rapide.',
			installButton: 'Installer',
			close: 'Fermer',
			iosTitle: 'Ajouter VM Tipping à l’écran d’accueil',
			iosStep1: 'Appuyez sur le bouton Partager dans la barre Safari.',
			iosStep2: 'Faites défiler et choisissez Ajouter à l’écran d’accueil.',
			iosStep3: 'Appuyez sur Ajouter dans le coin supérieur droit.',
			understood: 'Compris'
		},
		introCard: {
			kicker: 'Première fois ?',
			title: 'Bienvenue sur VM Tipping',
			body: 'Pariez sur les matchs, rejoignez des ligues et suivez vos points tout au long de la Coupe du Monde.',
			leaguesTitle: 'Ligues',
			leaguesBody: 'Créez une ligue ou rejoignez-en une avec un code.',
			matchTipsTitle: 'Pronostics de matchs',
			matchTipsBody: 'Soumettez avant le coup d’envoi.',
			worldCupTipsTitle: 'Pronostics Coupe du Monde',
			worldCupTipsBody: 'Choisissez le tableau et le vainqueur.',
			primaryCta: 'Ouvrir les ligues',
			secondaryCta: 'Voir les pronostics',
			footnote: '',
			close: 'Fermer la carte d’accueil',
			settingsTitle: 'Carte de bienvenue',
			settingsBody: 'Réafficher la carte de bienvenue si vous souhaitez un rappel rapide.',
			settingsActive: 'La carte est active et restera sur la page d’accueil jusqu’à ce que vous la fermiez.',
			settingsDismissed: 'La carte est masquée pour cet utilisateur sur cet appareil.',
			settingsButton: 'Afficher à nouveau la carte de bienvenue',
			settingsSuccess: 'La carte de bienvenue est prête à apparaître sur la page d’accueil.',
			settingsLink: 'Aller à l’accueil'
		},
		tipCard: {
			lockedResult: 'Résultat',
			noTipLocked: 'Aucun pronostic — ce match est verrouillé.',
			showFriendTips: 'Voir les pronostics des amis',
			hideFriendTips: 'Masquer les pronostics des amis',
			noFriendTips: 'Aucun ami n’a parié sur ce match.',
			saved: 'Enregistré',
			loading: 'Enregistrement…',
			stageGroup: 'Groupe',
			stageOther: 'Tour',
			day: 'Aujourd’hui',
			live: 'En direct',
			locked: 'verrouillé',
			missing: 'manquant',
			result: 'Votre pronostic',
			goThrough: 'qualifié',
			penalties: 'Tirs au but',
			save: 'Enregistrer',
			visiting: 'Votre pronostic',
			crowdTitle: 'Pronostics de tout le monde',
			crowdEmpty: 'Personne d’autre n’a parié sur ce match.',
			crowdHome: 'Domicile',
			crowdDraw: 'Nul',
			crowdAway: 'Extérieur',
			crowdTotal: 'pronostics au total'
		},
		playerCard: {
			title: 'Fiche joueur',
			hitRate: 'Taux de réussite',
			hitRateSub: 'scores exacts',
			longestStreak: 'Plus longue série',
			longestStreakSub: 'matchs consécutifs avec des points',
			currentStreak: 'Série actuelle',
			largestMiss: 'Plus grande erreur',
			largestMissSub: 'Vous avez parié',
			noStats: 'Aucun match noté pour l’instant.'
		},
		common: {
			languageName: 'Français'
		},
		odds: {
			sourceOddsApi: 'Cotes de paris',
			sourceRankings: 'Classement FIFA',
			toggleToDecimal: 'Afficher les cotes',
			toggleToPct: 'Afficher en %'
		}
	}
};
