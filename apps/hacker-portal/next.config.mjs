import { composePlugins, withNx } from '@nx/next';

const nextConfig = {
  nx: {
    svgr: false,
  },
};

const plugins = [
  withNx,
];

export default composePlugins(...plugins)(nextConfig);
