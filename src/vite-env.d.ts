/// <reference types="vite/client" />

// 图片
declare module '*.png' {
	const value: string;
	export default value;
}
declare module '*.jpg' {
	const value: string;
	export default value;
}
declare module '*.jpeg' {
	const value: string;
	export default value;
}
declare module '*.svg' {
	import type { DefineComponent } from 'vue';
	const component: DefineComponent<{}, {}, any>;
	export default component;
}

// 样式
declare module '*.css';
declare module '*.scss';
declare module '*.sass';
