const path = require('path');
module.exports = {
  webpack: {
    alias: {
      '~': path.resolve(__dirname, 'src'),
      '~Api': resolvePath('src/api'),
      '~Store': resolvePath('src/store'),
      '~Components': resolvePath('src/components'),
    },
  },
};