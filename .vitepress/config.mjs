import {defineConfig} from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
    title: "Flutter documentation",
    description: "Flutter documentation in Uzbek language",
    srcDir: "src/pages/",
    head: [
        ['link', {rel: 'icon', href: 'https://docs.flutter.dev/assets/images/shared/brand/flutter/logo/square.svg'}],
    ],
    themeConfig: {
        search: {
            provider: 'local'
        },
        editLink: {
            pattern: 'https://github.com/documentation-uz/flutter/tree/main/src/pages/:path',
            text: 'Edit this page on GitHub',
        },
        // https://vitepress.dev/reference/default-theme-config
        nav: [
            {text: 'Home', link: '/'},
            {
                text: 'Documentation', link: '/get-started/introduction'
            },
            {
                text: 'API Reference', link: '/api-reference/'
            }
        ],

        sidebar: {
            '/guide/': [
                {
                    text: 'Get started',
                    items: [
                        {text: 'Introduction', link: '/guide/get-started/introduction'},
                        {text: 'Installation', link: '/guide/get-started/installation'}
                    ]
                },
                {
                    text: 'Essentials',
                    items: [
                        {text: 'Syntax', link: '/guide/essentials/syntax'},
                    ]
                },
            ],
            '/api-reference/': [
                {
                    text: 'API Reference',
                    items: [
                        {text: 'print', link: '/api-reference/print'},
                        {text: 'input', link: '/api-reference/input'},
                    ]
                }
            ]
        },

        socialLinks: [
            {icon: 'youtube', link: 'https://youtube.com/documentation-uz'},
            {icon: 'twitter', link: 'https://twitter.com/documentation-uz'},
            {icon: 'github', link: 'https://github.com/documentation-uz/python'}
        ]
    }
})
