/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects(){
    return [
      {
        source: '/cats',
        destination: 'https://www.youtube.com/watch?v=T_R9EcqEyhI',
        permanent: false
      },
      {
        source: '/charity',
        destination: 'https://www.eurogroupforanimals.org/',
        permanent: false
      },
      {
        source: '/video',
        destination: 'https://youtu.be/wUt5NjXHSO4',
        permanent: false
      }
    ]
  }
};

export default nextConfig;
