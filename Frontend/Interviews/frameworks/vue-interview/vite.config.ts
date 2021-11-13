import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [vue()],
    clearScreen: false,
    server: {
        port: 13488,
        open: true
    }
})
