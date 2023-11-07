import {
  defineConfig
} from 'vitepress'
import {
  atomcss
} from '@meizhou/atomcss'
import {
  preset
} from "@meizhou/atomcss/preset";
import {
  version
} from "@meizhou/atomcss";
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
    outlineTitle : '本页目录',
    nav: [
      {
        text: '指引',
        link: '/guide/start'
      },
      {
        text: '配置',
        link: '/config/'
      },
      {
        text: '模板',
        link: '/template/popup'
      },
      { text: `v${version}`, link: '/change-log/change-log' }
      // { text: '预设样式', link: '/preset/' }
    ],

    sidebar: {
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
            {
              text: '布局',
              items: [

                {
                  text: 'display',
                  link: '/guide/preset/layout/display'
                },
                {
                  text: 'position',
                  link: '/guide/preset/layout/position'
                },
                {
                  text: '上下左右',
                  link: '/guide/preset/layout/top'
                },
                {
                  text: 'z-index',
                  link: '/guide/preset/layout/zIndex'
                },
                {
                  text: 'visibility',
                  link: '/guide/preset/layout/visibility'
                },
                {
                  text: 'opacity',
                  link: '/guide/preset/layout/opacity'
                },
                {
                  text: 'vertical-align',
                  link: '/guide/preset/layout/vertical-align'
                },
                {
                  text: 'overflow',
                  link: '/guide/preset/layout/overflow'
                },
                {
                  text: 'object-fit',
                  link: '/guide/preset/layout/object-fit'
                },
                {
                  text: 'box-sizing',
                  link: '/guide/preset/layout/box-sizing'
                },
              ]
            },
            {
              text: 'flex',
              items: [{
                  text: 'flex',
                  link: '/guide/preset/flex/flex'
                },

                {
                  text: 'justify-content',
                  link: '/guide/preset/flex/justify-content'
                },
                {
                  text: 'justify-items',
                  link: '/guide/preset/flex/justify-items'
                },
                {
                  text: 'justify-self',
                  link: '/guide/preset/flex/justify-self'
                },
                {
                  text: 'align-items',
                  link: '/guide/preset/flex/align-items'
                },
                {
                  text: 'align-content',
                  link: '/guide/preset/flex/align-content'
                },
                {
                  text: 'align-self',
                  link: '/guide/preset/flex/align-self'
                },
                {
                  text: 'flex-basis',
                  link: '/guide/preset/flex/flex-basis'
                },
                {
                  text: 'flex-direction',
                  link: '/guide/preset/flex/flex-direction'
                },
                {
                  text: 'flex-grow',
                  link: '/guide/preset/flex/flex-grow'
                },
                {
                  text: 'flex-shrink',
                  link: '/guide/preset/flex/flex-shrink'
                },
                {
                  text: 'flex-wrap',
                  link: '/guide/preset/flex/flex-wrap'
                },
                {
                  text: 'columns',
                  link: '/guide/preset/flex/columns'
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
                text: '宽高',
                link: '/guide/preset/widthHeight/widthHeight'
              }, {
                text: '最大最小宽高',
                link: '/guide/preset/widthHeight/maxWH'
              }, ]
            },
            {
              text: '文字排版',
              items: [{
                  text: 'color颜色',
                  link: '/guide/preset/color'
                },
                {
                  text: 'font-size',
                  link: '/guide/preset/font/font-size'
                },
                {
                  text: 'text-align',
                  link: '/guide/preset/font/text-align'
                },
                {
                  text: 'font-weight',
                  link: '/guide/preset/font/fw'
                },
                {
                  text: 'text-decoration-line',
                  link: '/guide/preset/font/text-decoration-line'
                },
                {
                  text: 'line-height行高',
                  link: '/guide/preset/lineHeight'
                },
                {
                  text: 'ellipsis省略',
                  link: '/guide/preset/line'
                },
              ]
            },
            {
              text: '背景',
              items: [{
                text: '背景颜色',
                link: '/guide/preset/bg/bg'
              }, ]
            },
            {
              text: '边框',
              items: [{
                  text: 'border边框',
                  link: '/guide/preset/border/border'
                },
                {
                  text: 'border-color',
                  link: '/guide/preset/border/border-color'
                },
                {
                  text: 'border-radius',
                  link: '/guide/preset/border/border-radius'
                },
                {
                  text: 'border-width',
                  link: '/guide/preset/border/border-width'
                },
              ]
            },
            {
              text: 'Transforms',
              items: [{
                text: 'translate变换',
                link: '/guide/preset/translate'
              }, ]
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
        text: '配置项',
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
            text: 'icons图标',
            link: '/config/icon'
          },
          // {
          //   text: 'shortcuts缩写',
          //   link: '/config/shortcuts'
          // },
          {
            text: '前后缀',
            link: '/config/fix'
          },
          // {
          //   text: '预览生成css',
          //   link: '/config/outPutCss'
          // },
          // {
          //   text: '文件转规则',
          //   link: '/config/file2rule'
          // }
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