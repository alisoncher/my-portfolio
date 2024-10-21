import adapter from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter({
			fallback: '404.html', // ensures routing works
		}),
		paths: {
			base: '/your-repo-name', // Replace with your actual repository name
		},
	},
};

export default config;

