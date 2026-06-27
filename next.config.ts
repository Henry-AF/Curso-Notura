import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  experimental: {},
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [384, 640, 750, 1080, 1200],
    imageSizes: [128, 256, 384],
  },
}

export default nextConfig

import('@opennextjs/cloudflare').then(m => m.initOpenNextCloudflareForDev());
