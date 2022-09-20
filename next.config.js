const path = require('path')
/** @type {import('next').NextConfig} */

const { PHASE_DEVELOPMENT_SERVER } = require('next/constants')

const isProd = process.env.NODE_ENV === "production";
module.exports = (phase, { defaultConfig }) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      /* development only config options here */
      reactStrictMode: true,
      // assetPrefix: isProd ? "" : "/",
      // basePath: isProd ? "": "/",
      experimental: {
        images: {
          unoptimized: true,
        },
      }
    }
  }
  return {
    /* config options for all phases except development here */
    reactStrictMode: true,
    assetPrefix: "/MWS_NextJS_ISR_SSG", //static assets are in the /out folder
    basePath: "/MWS_NextJS_ISR_SSG",
    experimental: {
      images: {
        unoptimized: true,
      },
    }
  }
}
