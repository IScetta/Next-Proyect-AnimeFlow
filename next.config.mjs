/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      dangerouslyAllowSVG: true,
      remotePatterns: [
        { hostname: "sm.ign.com" },
        { hostname: "static0.gamerantimages.com"},
        { hostname: "www.tokyoweekender.com"},
        { hostname: "imgix.ranker.com"},
        { hostname: "cdn.myanimelist.net"},
        { hostname: "img.youtube.com"}

      ],
    },
  };
  
  export default nextConfig;