/// <reference types="vitest" />
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';
export default defineConfig({
    plugins: [react(), svgr()],
    server: {
        port: 3000
    },
    test: {
        globals: true,
        environment: 'jsdom',
        setupFiles: './testSetup.js',
    },
});
