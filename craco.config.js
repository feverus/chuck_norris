const path = require('path');
module.exports = {
  webpack: {
    alias: {
      '~': path.resolve(__dirname, 'src'),
      '~Api': path.resolve(__dirname, 'src/api'),
      '~Lib': path.resolve(__dirname, 'src/lib'),
      '~Store': path.resolve(__dirname, 'src/store'),
      '~Components': path.resolve(__dirname, 'src/components'),
    },
  },
};