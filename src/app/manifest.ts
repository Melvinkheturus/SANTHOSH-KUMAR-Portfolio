import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Manikandan S Portfolio',
    short_name: 'Manikandan S',
    description: 'Creative Technologist and UI/UX Designer Portfolio',
    start_url: '/',
    display: 'standalone',
    background_color: '#000000',
    theme_color: '#A56CFF',
    icons: [
      {
        src: '/Favicon/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
      {
        src: '/Favicon/web-app-manifest-192x192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/Favicon/web-app-manifest-512x512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  };
}
