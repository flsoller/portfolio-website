import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  transpilePackages: ['next-mdx-remote'],

  async headers() {
    return [
      {
        // Apply security headers to all routes
        source: '/:path*',
        headers: [
          {
            key: 'Content-Security-Policy',
            value: [
              // Default source policy
              "default-src 'self'",
              // Script sources - allow same origin and Vercel Analytics
              "script-src 'self' 'unsafe-eval' 'unsafe-inline' va.vercel-scripts.com",
              // Style sources - allow same origin and inline styles (required for Next.js)
              "style-src 'self' 'unsafe-inline'",
              // Image sources - allow same origin, data URIs, and Vercel
              "img-src 'self' data: https:",
              // Font sources - allow same origin and data URIs
              "font-src 'self' data:",
              // Connect sources - allow same origin and Vercel Analytics
              "connect-src 'self' vitals.vercel-insights.com",
              // Frame sources - block all iframes for security
              "frame-src 'none'",
              // Object sources - block plugins like Flash
              "object-src 'none'",
              // Base URI - restrict to same origin
              "base-uri 'self'",
              // Form actions - restrict to same origin
              "form-action 'self'",
              // Upgrade insecure requests to HTTPS
              "upgrade-insecure-requests",
            ].join('; '),
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=(), interest-cohort=()',
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=31536000; includeSubDomains',
          },
          {
            key: 'Cross-Origin-Opener-Policy',
            value: 'same-origin-allow-popups',
          },
          {
            key: 'Cross-Origin-Embedder-Policy',
            value: 'require-corp',
          },
          {
            key: 'Cross-Origin-Resource-Policy',
            value: 'cross-origin',
          },
        ],
      },
    ];
  },
};

export default nextConfig;
