import { pb } from './pb';

const FALLBACK = 'VM Tipping';

// Application name configured in the PocketBase admin settings
// (Settings → Application → meta.appName), exposed publicly via /api/app/meta.
// Loaded once at startup; falls back to the default until (and if) it resolves.
class AppNameStore {
	#value = $state(FALLBACK);
	#loaded = false;

	get value() {
		return this.#value || FALLBACK;
	}

	async load() {
		if (this.#loaded) return;
		this.#loaded = true;
		try {
			const d = await pb.send<{ appName: string }>('/api/app/meta', { method: 'GET' });
			if (d?.appName) this.#value = d.appName;
		} catch {
			// keep the fallback
		}
	}
}

export const appName = new AppNameStore();

// Interpolate the {app} token in a (possibly translated) template with the
// resolved application name. Reads appName.value so it stays reactive when
// called inside a $derived.
export function fillApp(template: string): string {
	return template.replaceAll('{app}', appName.value);
}
