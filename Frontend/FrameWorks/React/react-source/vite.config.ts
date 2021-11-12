import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'


export default defineConfig({
    plugins: [react()],
    clearScreen: false,
    mode: "development",
    server: {
        port: 14588,
        open: true
    }
})
