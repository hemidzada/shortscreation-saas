const { defineConfig } = require('@vue/cli-service')

module.exports = defineConfig({
  transpileDependencies: true,
  
  // Development server tənzimləmələri
  devServer: {
    allowedHosts: 'all', // Bütün hostlara icazə
    host: '0.0.0.0', // Bütün network interfacelərdə dinlə
    port: 8080,
    
    // WebSocket connection
    client: {
      webSocketURL: 'auto://0.0.0.0:0/ws',
    },
    
    // Köhnə Vue CLI versiyaları üçün (əgər yuxarıdakı işləməsə)
    disableHostCheck: true,
  },
  
  // Performance warning-lərini söndür
  configureWebpack: {
    performance: {
      hints: false, // Asset size warning-lərini gizlət
      maxEntrypointSize: 5000000,
      maxAssetSize: 5000000
    }
  },
  
  // ESLint console.log warning-lərini söndür
  lintOnSave: false,
  
  // Production source maps-ı söndür (daha kiçik build)
  productionSourceMap: false,
})
