// vue.config.js
const path = require("path");

module.exports = {
  // configureWebpack: config => {
  //     if (process.env.NODE_ENV === "production") {
  //         // mutate config for production...
  //     } else {
  //         // mutate for development...
  //     }
  // },
  devServer: {
    proxy: {
      // proxyTable 설정
      "/api": {
        target: "http://localhost:3000/",
        changeOrigin: true,
        pathRewrite: {
          "^/api": "/api"
        }
      },
      "/login-api": {
        target: "http://localhost:8090/",
        changeOrigin: true,
        pathRewrite: {
          "^/login-api": "/login-api"
        }
      },
      "/users-api": {
        target: "http://localhost:8091/",
        changeOrigin: true,
        pathRewrite: {
          "^/users-api": "/user-api"
        }
      }
    }
  },
  outputDir: path.resolve(__dirname, "../backend/public")
};