module.exports = {
    devServer: {
        overlay: false,
        proxy: {
            '/api': {
                target: 'http://fjbox.jinong.co.kr/api',
                changeOrigin: true,
                pathRewrite: {
                    '^/api': ''
                }
            }
        }
    },
    outputDir: '../api/public'
}