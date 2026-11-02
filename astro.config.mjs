import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import node from '@astrojs/node';
import { fileURLToPath } from 'url';
import path from 'path';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// https://astro.build/config
export default defineConfig({
  site: 'https://travltik.com',
  output: 'server',
  adapter: node({
    mode: 'standalone'
  }),
  integrations: [
    react(),
    tailwind({
      applyBaseStyles: false,
    }),
  ],
  server: {
    host: true,
    port: 4321,
  },
  vite: {
    server: {
      host: true,
      port: 4321,
      hmr: {
        port: 4321,
        clientPort: 4321,
      },
      headers: {
        'Cross-Origin-Opener-Policy': 'unsafe-none',
      },
    },
    envPrefix: ['PUBLIC_', 'NEXT_PUBLIC_', 'RESEND_', 'EMAIL_', 'DATABASE_', 'TURNSTILE_'],
    ssr: {
      external: ['resend', 'pg', 'bcryptjs', 'nodemailer', 'firebase-admin', 'firebase-admin/app', 'firebase-admin/auth'],
      noExternal: ['lucide-react', 'firebase', 'firebase/app', 'firebase/auth', '@marsidev/react-turnstile'],
    },
    resolve: {
      dedupe: ['react', 'react-dom', 'react/jsx-runtime', 'react/jsx-dev-runtime'],
      alias: {
        '@': path.resolve(__dirname, './src'),
      },
    },
    optimizeDeps: {
      holdUntilCrawlEnd: true,
      include: [
        'react',
        'react-dom',
        'react/jsx-runtime',
        'react/jsx-dev-runtime',
        'gsap',
        'gsap/ScrollTrigger',
        'lenis',
        'split-type',
        'lucide-react',
        'firebase/app',
        'firebase/auth',
        '@marsidev/react-turnstile',
      ],
    },
    build: {
      chunkSizeWarningLimit: 1200,
      rollupOptions: {
        output: {
          manualChunks(id) {
            if (id.includes('node_modules')) {
              const nid = id.replace(/\\/g, '/');
              if (nid.includes('firebase')) return 'vendor-firebase';
              if (nid.includes('gsap') || nid.includes('lenis')) return 'vendor-anim';
              if (nid.includes('lucide-react')) return 'vendor-icons';
              if (nid.includes('/react') || nid.includes('/scheduler')) return 'vendor-react';
            }
          }
        }
      }
    }
  },
});
