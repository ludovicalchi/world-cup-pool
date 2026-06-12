import { describe, expect, it } from 'vitest';
import { resolveTvChannel } from './tvChannels';

describe('resolveTvChannel', () => {
	it('resolves NRK variants to the NRK logo', () => {
		expect(resolveTvChannel('NRK1')).toMatchObject({ id: 'nrk', src: '/tv-logos/NRK.png', fullBleed: true });
		expect(resolveTvChannel('NRK 2')).toMatchObject({ id: 'nrk' });
	});

	it('resolves TV 2 variants to the dark TV2 plate', () => {
		expect(resolveTvChannel('TV2')).toMatchObject({ id: 'tv2', src: '/tv-logos/tv2.png', plate: '#050505' });
		expect(resolveTvChannel('TV 2 Direkte')).toMatchObject({ id: 'tv2' });
	});

	it('resolves M6 to the M6 logo on a light plate', () => {
		expect(resolveTvChannel('m6')).toMatchObject({ id: 'm6', src: '/tv-logos/m6.png', plate: '#ffffff' });
		expect(resolveTvChannel('M6')).toMatchObject({ id: 'm6' });
	});

	it('resolves beIN Sports variants to the beIN logo on a light plate', () => {
		expect(resolveTvChannel('bein-sports')).toMatchObject({
			id: 'beinsports',
			src: '/tv-logos/bein-sports.png',
			plate: '#ffffff'
		});
		expect(resolveTvChannel('beIN SPORTS 1')).toMatchObject({ id: 'beinsports' });
	});

	it('returns null for unknown channels', () => {
		expect(resolveTvChannel('')).toBeNull();
		expect(resolveTvChannel('Some Channel')).toBeNull();
		expect(resolveTvChannel('MTV2')).toBeNull();
	});
});