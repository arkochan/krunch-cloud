/** @type {import('next').NextConfig} */
//create nextconfig to optimize imgaes or freepik.com
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "img.freepik.com",
        port: "",
        pathname: "/free-psd/**",
      },
    ],
  },
};

export default nextConfig;
