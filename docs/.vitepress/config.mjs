import {
  defineConfig
} from 'vitepress'
import { atomcss } from '@meizhou/atomcss'
import { preset } from "@meizhou/atomcss/preset";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  vite: {
  	plugins: [
  		atomcss({ unit: 'px', prefix: 'a-', presets: [preset()] })
  	]
  },
  base: '/atom-css-doc/',
  title: "@meizhou/atomcss",
  description: "uniapp的css原子化引擎",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/logo.png',
    nav: [
      // { text: '首页', link: '/' },
      {
        text: '指引',
        link: '/guide/start'
      },
      {
        text: '配置',
        link: '/config/'
      },
      // { text: '预设样式', link: '/preset/' }
    ],

    sidebar: {
      '/guide/': [{
          text: '指引',
          items: [{
              text: '简介',
              link: '/guide/start'
            },
            {
              text: '为什么是',
              link: '/guide/why'
            },
            // { text: '入门', link: '/guide/why' }
          ]
        },
        {
          text: '安装',
          items: [{
              text: 'uniapp',
              link: '/guide/install/uniapp'
            },
            // {
            //   text: 'vite',
            //   link: '/guide/install/vite'
            // },
            // {
            //   text: 'webpack',
            //   link: '/guide/install/webpack'
            // },
            // {
            //   text: 'vitepress',
            //   link: '/guide/install/vitepress'
            // }
          ]
        },
        {
          text: 'ide 插件',
          items: [{
              text: 'HBuilderX',
              link: '/guide/ide/HBuilderX'
            },
            {
              text: 'VSCode',
              link: '/guide/ide/VSCode'
            },
          ]
        },
        {
          text: '预设样式',
          items: [
            {
              text: '布局',
              items: [
                {
                  text: 'flex',
                  link: '/guide/preset/flex'
                },
                {
                  text: 'display',
                  link: '/guide/preset/display'
                },
                {
                  text: '上下左右',
                  link: '/guide/preset/top'
                },
                {
                  text: 'zIndex',
                  link: '/guide/preset/zIndex'
                },
              ]
            },
            {
              text: 'flex',
              items: [
                {
                  text: 'flex',
                  link: '/guide/preset/flex'
                },
              ]
            },
            {
              text: '间隔',
              items: [
                {
                  text: 'm、p边距',
                  link: '/guide/preset/marginPadding'
                },
              ]
            },
            {
              text: '宽高',
              items: [
                {
                  text: '宽高',
                  link: '/guide/preset/widthHeight'
                },
              ]
            },
            {
              text: '文字排版',
              items: [
                {
                  text: 'color颜色',
                  link: '/guide/preset/color'
                },
                {
                  text: 'font字体',
                  link: '/guide/preset/font'
                },
                {
                  text: 'line-height行高',
                  link: '/guide/preset/lineHeight'
                },
                {
                  text: 'line省略',
                  link: '/guide/preset/line'
                },
              ]
            },
            {
              text: '背景',
              items: [
                {
                  text: '背景',
                  link: '/guide/preset/bg'
                },
              ]
            },
            {
              text: '边框',
              items: [
                {
                  text: 'border边框',
                  link: '/guide/preset/border'
                },
              ]
            },
           {
              text: 'Transforms',
              items: [
                {
                  text: 'translate变换',
                  link: '/guide/preset/translate'
                },
              ]
            },
            {
              text: 'shadow阴影',
              link: '/guide/preset/shadow'
            },
            {
              text: 'poiter鼠标样式',
              link: '/guide/preset/poiter'
            },


          ]
        }
      ],
      '/config/': [{
        text: '指引',
        items: [{
            text: 'presets预设',
            link: '/config/presets'
          },
          {
            text: 'rules规则',
            link: '/config/rules'
          },
          {
            text: 'css权重',
            link: '/config/i'
          },
          {
            text: 'shortcuts缩写',
            link: '/config/shortcuts'
          },
          {
            text: '前后缀',
            link: '/config/fix'
          },
          {
            text: '预览生成css',
            link: '/config/outPutCss'
          },
          {
            text: '文件转规则',
            link: '/config/file2rule'
          }
        ]
      }],
      '/preset/': [{
        text: '指引',
        items: [{
            text: '默认预设',
            link: '/preset/presets'
          },
          {
            text: '为什么是',
            link: '/preset/why'
          },
          {
            text: '入门',
            link: '/preset/why'
          }
        ]
      }]

    },

    // socialLinks: [{
    //   icon: 'github',
    //   link: 'https://github.com/vuejs/vitepress'
    // }]
  }
})