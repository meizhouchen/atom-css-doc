import { defineConfig } from 'vitepress'
import { atomcss } from '@meizhou/atomcss'
import { preset } from "@meizhou/atomcss/preset";
import { version } from "@meizhou/atomcss";
import { layout } from "./config/layout.mjs";
import custom from "./config/custom.mjs";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  vite: {
    plugins: [
      atomcss({
        unit: 'px',
        prefix: 'a-',
        presets: [preset()]
      })
    ]
  },
  base: '/atom-css-doc/',
  title: "@meizhou/atomcss",
  description: "uniapp的css原子化引擎",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/logo.png',
    outlineTitle: '本页目录',
    nav: [{
        text: '指引',
        link: '/guide/start'
      },
      {
        text: '组件',
        items: [{
          text: 'iconPark字节图标',
          link: '/components/icon/icon'
        }]
      },
      {
        text: '模板',
        link: '/template/popup'
      },
      { text: `v${version}`, link: '/change-log/change-log' }
      // { text: '预设样式', link: '/preset/' }
    ],

    sidebar: {
      '/components/': [{
        text: 'iconPark',
        items: [{
          text: '使用',
          link: '/components/icon/install'
        }, {
          text: '图标列表',
          link: '/components/icon/icon'
        }, ]
      }],
      '/template/': [{
        text: '模板',
        items: [{
          text: '弹窗',
          link: '/template/popup'
        }, {
          text: '按钮',
          link: '/template/btn'
        }, ]
      }],
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
            //   text: 'vue3',
            //   link: '/guide/install/vite'
            // },
            // {
            //   text: 'vue2',
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
        custom,
        {
          text: '预设样式',
          items: [
            // {
            //   text: '命名规则',
            //   link: '/guide/preset/index'
            // },
            // {
            //   text: 'loading加载动画',
            //   items: [
            //     {
            //       text: 'text文字',
            //       link: '/guide/preset/loading/text'
            //     },
            //     {
            //       text: 'dot圆点',
            //       link: '/guide/preset/loading/dot'
            //     },
            //     {
            //       text: 'bar柱状',
            //       link: '/guide/preset/loading/bar'
            //     },
            //   ]
            // },
            layout,
            {
              text: 'flex & grid',
              items: [{
                  text: 'flex',
                  link: '/guide/preset/flexGrid/flex'
                },
                {
                  text: 'flex-direction',
                  link: '/guide/preset/flexGrid/flex-direction'
                },
                {
                  text: 'flex-wrap',
                  link: '/guide/preset/flexGrid/flex-wrap'
                },
                {
                  text: 'flex-basis',
                  link: '/guide/preset/flexGrid/flex-basis'
                },
                {
                  text: 'flex-grow',
                  link: '/guide/preset/flexGrid/flex-grow'
                },
                {
                  text: 'flex-shrink',
                  link: '/guide/preset/flexGrid/flex-shrink'
                },
                {
                  text: 'order',
                  link: '/guide/preset/flexGrid/order'
                },
                {
                  text: 'gap',
                  link: '/guide/preset/flexGrid/gap'
                },
                {
                  text: 'grid-template-columns',
                  link: '/guide/preset/flexGrid/grid-template-columns'
                },
                {
                  text: 'grid-template-rows',
                  link: '/guide/preset/flexGrid/grid-template-rows'
                },
                {
                  text: 'justify-content',
                  link: '/guide/preset/flexGrid/justify-content'
                },
                {
                  text: 'justify-items',
                  link: '/guide/preset/flexGrid/justify-items'
                },
                {
                  text: 'justify-self',
                  link: '/guide/preset/flexGrid/justify-self'
                },
                {
                  text: 'align-content',
                  link: '/guide/preset/flexGrid/align-content'
                },
                {
                  text: 'align-items',
                  link: '/guide/preset/flexGrid/align-items'
                },
                {
                  text: 'align-self',
                  link: '/guide/preset/flexGrid/align-self'
                },
                {
                  text: 'columns',
                  link: '/guide/preset/flexGrid/columns'
                },
                {
                  text: 'place-content',
                  link: '/guide/preset/flexGrid/place-content'
                },
                {
                  text: 'place-items',
                  link: '/guide/preset/flexGrid/place-items'
                },
                {
                  text: 'place-self',
                  link: '/guide/preset/flexGrid/place-self'
                },
              ]
            },
            {
              text: '间隔',
              items: [{
                text: 'margin',
                link: '/guide/preset/marginPadding/margin'
              }, {
                text: 'padding',
                link: '/guide/preset/marginPadding/padding'
              }, ]
            },
            {
              text: '宽高',
              items: [{
                  text: 'width',
                  link: '/guide/preset/widthHeight/width'
                },
                {
                  text: 'maxWidth',
                  link: '/guide/preset/widthHeight/maxWidth'
                },
                {
                  text: 'minWidth',
                  link: '/guide/preset/widthHeight/minWidth'
                },
                {
                  text: 'height',
                  link: '/guide/preset/widthHeight/height'
                },
                {
                  text: 'maxHeight',
                  link: '/guide/preset/widthHeight/maxHeight'
                },

                {
                  text: 'minHeight',
                  link: '/guide/preset/widthHeight/minHeight'
                },
                {
                  text: 'width & height',
                  link: '/guide/preset/widthHeight/wh'
                },
              ]
            },
            {
              text: '文字排版',
              items: [{
                  text: 'color颜色',
                  link: '/guide/preset/font/color'
                },
                {
                  text: 'font-size',
                  link: '/guide/preset/font/font-size'
                },
                {
                  text: 'font-weight',
                  link: '/guide/preset/font/fw'
                },
                {
                  text: 'text-align',
                  link: '/guide/preset/font/text-align'
                },
                {
                  text: 'text-decoration',
                  link: '/guide/preset/font/text-decoration-line'
                },
                {
                  text: 'text-indent',
                  link: '/guide/preset/font/text-indent'
                },
                {
                  text: 'vertical-align',
                  link: '/guide/preset/font/vertical-align'
                },

                {
                  text: 'letter-spacing',
                  link: '/guide/preset/font/letter-spacing'
                },
                {
                  text: 'line-height行高',
                  link: '/guide/preset/font/line-height'
                },
                {
                  text: 'line-clamp省略',
                  link: '/guide/preset/font/line-clamp'
                },
              ]
            },
            {
              text: '背景',
              items: [{
                  text: 'background-attachment',
                  link: '/guide/preset/bg/attachment'
                },
                {
                  text: 'background-clip',
                  link: '/guide/preset/bg/clip'
                },
                {
                  text: 'background-color',
                  link: '/guide/preset/bg/bg'
                },
                {
                  text: 'background-origin',
                  link: '/guide/preset/bg/origin'
                },
                {
                  text: 'background-position',
                  link: '/guide/preset/bg/position'
                },
                {
                  text: 'background-size',
                  link: '/guide/preset/bg/size'
                },
              ]
            },
            {
              text: '边框',
              items: [{
                  text: 'border-radius',
                  link: '/guide/preset/border/border-radius'
                },
                {
                  text: 'border-width',
                  link: '/guide/preset/border/border-width'
                },
                {
                  text: 'border-color',
                  link: '/guide/preset/border/border-color'
                },
                {
                  text: 'border-style',
                  link: '/guide/preset/border/border-style'
                },
                {
                  text: 'border边框',
                  link: '/guide/preset/border/border'
                },
              ]
            },
 
            {
              text: '效果',
              items: [{
                  text: 'shadow阴影',
                  link: '/guide/preset/effects/shadow'
                },
              ]
            },
            {
              text: 'filters',
              items: [{
                  text: 'blur',
                  link: '/guide/preset/filters/blur'
                },
                {
                  text: 'brightness',
                  link: '/guide/preset/filters/brightness'
                },
              ]
            },
            {
              text: 'Transforms',
              items: [{
                text: 'scale',
                link: '/guide/preset/transforms/scale'
              }, 
              {
                text: 'rotate',
                link: '/guide/preset/transforms/rotate'
              }, 
              {
                text: 'skew',
                link: '/guide/preset/transforms/skew'
              }, 
              {
                text: 'translate',
                link: '/guide/preset/transforms/translate'
              }, 
              {
                text: 'transform-origin',
                link: '/guide/preset/transforms/transform-origin'
              }, 
              ]
            },
            {
              text: 'interactivity',
              items: [{
                text: 'resize',
                link: '/guide/preset/interactivity/resize'
              }, 
              {
                text: 'user-select',
                link: '/guide/preset/interactivity/user-select'
              }, 
              {
                text: 'will-change',
                link: '/guide/preset/interactivity/will-change'
              }, 
              {
                text: 'cursor',
                link: '/guide/preset/interactivity/cursor'
              },
              ]
            },
            
          ]
        }
      ],
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