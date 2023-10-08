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
                text: 'Documentation', link: '/guide/get-started/introduction'
            },
            {
                text: 'API Reference', link: '/api-reference/widgets/'
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
                        {text: 'First simple application', link: '/guide/essentials/first-simple-application'},
                        {text: 'Scaffold widget', link: '/guide/essentials/scaffold-widget'},
                        {text: 'Container widget', link: '/guide/essentials/container-widget'},
                        {text: 'Add style', link: '/guide/essentials/add-style'},
                        {text: 'Custom widget', link: '/guide/essentials/custom-widget'},
                        {text: 'Add attribute', link: '/guide/essentials/add-attribute'},
                        {text: 'Column widget', link: '/guide/essentials/column-widget'},
                    ]
                },
            ],
            '/api-reference/': [
                {
                    text: 'Widgets', link: '/api-reference/widgets/',
                    items: [
                        {text: 'MaterialApp', link: '/api-reference/widgets/material-app'},
                        {text: 'Scaffold', link: '/api-reference/widgets/scaffold'},
                        {text: 'Text', link: '/api-reference/widgets/text'},
                        {text: 'Center', link: '/api-reference/widgets/center'},
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
