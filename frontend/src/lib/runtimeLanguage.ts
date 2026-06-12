export type RuntimeLanguageCode = 'nb' | 'nn' | 'en' | 'fr';

const STORAGE_KEY = 'language';
const DEFAULT_LANGUAGE: RuntimeLanguageCode = 'en';

function detectBrowserLanguage(): RuntimeLanguageCode {
	if (typeof window === 'undefined') return DEFAULT_LANGUAGE;
	const lang = ((window.navigator.languages?.[0] ?? window.navigator.language) || '').toLowerCase();
	if (lang.startsWith('fr')) return 'fr';
	if (lang.startsWith('en')) return 'en';
	if (lang === 'nn' || lang.startsWith('nn-')) return 'nn';
	return DEFAULT_LANGUAGE;
}

function normalizeRuntimeLanguage(value: string | null | undefined): RuntimeLanguageCode | null {
	if (value === 'en') return 'en';
	if (value === 'fr') return 'fr';
	if (value === 'nn') return 'nn';
	if (value === 'nb') return 'nb';
	return null;
}

export function readRuntimeLanguage(): RuntimeLanguageCode {
	if (typeof window !== 'undefined') {
		try {
			const stored = normalizeRuntimeLanguage(localStorage.getItem(STORAGE_KEY));
			return stored ?? detectBrowserLanguage();
		} catch {
			const htmlLang = document.documentElement.lang.toLowerCase();
			if (htmlLang.startsWith('en')) return 'en';
			if (htmlLang.startsWith('fr')) return 'fr';
			if (htmlLang.startsWith('nn')) return 'nn';
			if (htmlLang.startsWith('nb')) return 'nb';
			return DEFAULT_LANGUAGE;
		}
	}
	return DEFAULT_LANGUAGE;
}

export function isRuntimeEnglish() {
	return readRuntimeLanguage() === 'en';
}

export function isRuntimeFrench() {
	return readRuntimeLanguage() === 'fr';
}

export function runtimeText<T>(nb: T, nn: T, en: T, fr?: T): T {
	const lang = readRuntimeLanguage();
	if (lang === 'fr') return fr !== undefined ? fr : en;
	if (lang === 'en') return en;
	if (lang === 'nn') return nn;
	return nb;
}

export function readRuntimeLocale() {
	const lang = readRuntimeLanguage();
	if (lang === 'en') return 'en-US';
	if (lang === 'fr') return 'fr-FR';
	return 'no-NO';
}
