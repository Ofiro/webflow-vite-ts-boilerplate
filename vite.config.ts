import { defineConfig } from 'vite'
import path from 'path'
import dotenv from 'dotenv'
import eslintPlugin from 'vite-plugin-eslint'

// Load environment variables based on the current mode
export default defineConfig(({ mode }) => {
  const env = dotenv.config({ path: `.env.${mode}` }).parsed

  return {
    plugins: [eslintPlugin()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src'),
        '@components': path.resolve(__dirname, 'src/components'),
        '@assets': path.resolve(__dirname, 'src/assets'),
        '@libs': path.resolve(__dirname, 'src/libs'),
        '@utils': path.resolve(__dirname, 'src/utils'),
      }
    },
    server: {
      host: 'localhost',
      cors: true, // Set the cors property to a valid value (e.g., true)
      hmr: {
        host: 'localhost',
        protocol: 'ws',
      },
      open: true, // Automatically open the app in the browser
      port: 3000, // Specify the port to run the development server on
    },
    build: {
      outDir: 'dist', // Specify the output directory for the production build
      sourcemap: true, // Generate source maps for debugging
      minify: true, // Minify the output
      manifest: true, // Generate a manifest file
      rollupOptions: {
        input: './src/index.ts',
        output: {
          format: 'umd',
          entryFileNames: 'main.js',
          esModule: false,
          compact: true,
          globals: {
            jquery: '$',
          },
        },
        external: ['jquery'],
      },
    },
    define: {
      'process.env': env
    }
  }
})
