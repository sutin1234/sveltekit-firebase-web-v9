import preprocess from 'svelte-preprocess';
import WindiCSS from 'vite-plugin-windicss';
import adapter from '@sveltejs/adapter-static';

const config = {
	preprocess: preprocess(),
	kit: {
		target: '#svelte',
		// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
		vite: () => ({
			plugins: [WindiCSS.default()]
		}),
		adapter: adapter({
			fallback: 'index.html'
		})
	}
};

export default config;
