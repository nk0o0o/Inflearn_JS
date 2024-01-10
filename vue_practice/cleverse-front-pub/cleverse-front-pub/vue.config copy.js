const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  productionSourceMap: false,
  devServer: {
		port: 5004, // CHANGE YOUR PORT HERE!
	},
  transpileDependencies: true,

  pluginOptions: {
    vuetify: {
			// https://github.com/vuetifyjs/vuetify-loader/tree/next/packages/vuetify-loader
		}
  },
  css: {
		sourceMap: true,
		loaderOptions: {
			scss: {
				// sassOptions: {outputStyle: 'compressed'}, //설정시 크롬 개발자도구 stylesheet line 자동 감지 안됌
			},
      postcss: {
        postcssOptions: {
          plugins: [
            require('postcss-pxtorem')({
              rootValue: '10',
              propList: ['*'],
              unitPrecision: 2,
              mediaQueries: false,
            }),
          ],
        }
      },
		}
	},
})