module.exports = {
  runtimeCompiler: true,
  publicPath: process.env.NODE_ENV === 'production'
      ? '/final-project-atlanta-community/'
      : '/'
}