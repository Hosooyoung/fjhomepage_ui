module.exports = {
    devServer: {
        overlay: false,
        proxy: {
            '/api': {
                target: 'http://localhost:80/api',
                changeOrigin: true,
                pathRewrite: {
                    '^/api': ''
                }
            }
        }
    },
    outputDir: '../api/public'
}