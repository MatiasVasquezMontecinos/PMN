/** @type {import('next').NextConfig} */
import path from 'path';

const nextConfig = {
    sassOptions: {
        includePaths: [path.join(process.cwd(), 'src/sass')],
        prependData: `@import "main.sass"`, 
    },
};

export default nextConfig;
