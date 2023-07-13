import { defineConfig } from "vite"
import vue from "@vitejs/plugin-vue"

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [vue()],
	base: "/vue-web/",
	server: {
		port: 3000,
		open: true,
		proxy: {
			"/api": {
				target: "https://jsonplaceholder.typicode.com",
				changeOrigin: true,
				secure: false,
				rewrite: (path) => path.replace(/^\/api/, ""),
			},
		},
	},
})
