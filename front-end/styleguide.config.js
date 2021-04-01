const path = require('path');

module.exports = {
  components: 'src/components/**/*.jsx',
  styleguideComponents: {
    Wrapper: path.join(__dirname, 'src/ThemeProvide.js'),
  },
};
