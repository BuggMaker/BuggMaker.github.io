module.exports = {
    base: '/build/',
    title: "Ranger的小屋",
    description: "得一林,护一生!",
    head: [],
    port: 8080,
    dest: './build',
    themeConfig: {
        nav: [{
                text: '客厅',
                link: '/'
            },
            {
                text: '书房',
                link: '/guide/'
            },
            {
                text: '后厨',
                link: 'https://github.com/BuggMaker/BuggMaker.github.io'
            },
        ]
    },
    configureWebpack: {
        resolve: {
            alias: {
                '@imgs': './public/img'
            }
        }
    }
}