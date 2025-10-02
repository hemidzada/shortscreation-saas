const { defineConfig } = require('@vue/cli-service')

module.exports = defineConfig({
  transpileDependencies: true,
  
  // Development server tənzimləmələri
  devServer: {
    allowedHosts: 'all', // Bu yeni webpack-dev-server üçün düzgün parametrdir
    host: '0.0.0.0',
    port: 8080,
    
    // WebSocket connection
    client: {
      webSocketURL: 'auto://0.0.0.0:0/ws',
    },
    
    // QEYD: disableHostCheck artıq dəstəklənmir!
    // Əvəzinə allowedHosts: 'all' istifadə edirik
  },
  
  // Performance warning-lərini söndür
  configureWebpack: {
    performance: {
      hints: false,
      maxEntrypointSize: 5000000,
      maxAssetSize: 5000000
    }
  },
  
  // ESLint console.log warning-lərini söndür
  lintOnSave: false,
  
  // Production source maps-ı söndür
  productionSourceMap: false,
})
