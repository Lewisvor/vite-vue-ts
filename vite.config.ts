import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { resolve } from 'path';

// https://vite.dev/config/
export default defineConfig({
	plugins: [vue()],
	resolve: {
		alias: {
			'@': resolve(__dirname, 'src'),
			'@components': resolve(__dirname, 'src/components'),
			'@assets': resolve(__dirname, 'src/assets'),
			'@utils': resolve(__dirname, 'src/utils'),
			'@views': resolve(__dirname, 'src/views'),
			'@types': resolve(__dirname, 'src/types'),
		},
	},
});
