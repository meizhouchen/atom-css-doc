<template>
  <view class="a-icon-svg" :style="[boxStyle]">
    <image class="a-icon-svg-image" :src="url" mode="aspectFit"></image>
  </view>
</template>

<script>
import FolderOne from './FolderOne.js'
// // 描边连接类型
// export type StrokeLinejoin = 'miter' | 'round' | 'bevel';

// // 描边端点类型
// export type StrokeLinecap = 'butt' | 'round' | 'square';

// // 主题
// export type Theme = 'outline' | 'filled' | 'two-tone' | 'multi-color';

export default {
  name: 'AIconSvg',
  components: {},
  props: {
    size: {
      type: [String, Number],
      default: 24
    },
    strokeWidth: {
      type: [String, Number],
      default: 4
    },
    theme: {
      type: String,
      default: 'outline'
    },
    color: {
      type: [String, Array],
      default: '#000000'
    }
  },

  data() {
    return {
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      rtl: false,
      colors1: {
        outline: {
          fill: '#333',
          background: 'transparent'
        },
        filled: {
          fill: '#333',
          background: '#FFF'
        },
        twoTone: {
          fill: '#333',
          twoTone: '#2F88FF'
        },
        multiColor: {
          outStrokeColor: '#333',
          outFillColor: '#2F88FF',
          innerStrokeColor: '#FFF',
          innerFillColor: '#43CCF8'
        }
      },
      prefix: 'i'
    }
  },

  computed: {
    fillColor() {
      return typeof this.color === 'string' ? [this.color] : this.color || []
    },
    outStrokeColor() {
      return typeof this.fillColor[0] === 'string' ? this.fillColor[0] : 'currentColor'
    },
    outFillColor() {
      return typeof this.fillColor[1] === 'string' ? this.fillColor[1] : 'currentColor'
    },
    innerStrokeColor() {
      return typeof this.fillColor[2] === 'string'
        ? this.fillColor[2]
        : this.colors1.multiColor.innerStrokeColor
    },
    innerFillColor() {
      return typeof this.fillColor[3] === 'string'
        ? this.fillColor[3]
        : this.colors1.multiColor.innerFillColor
    },
    colors() {
      const ff = {
        outline: 'outline',
        fill: 'fill',
        two: 'twoTone',
        multi: 'multi'
      }
      return this[this.theme]()
    },
    boxStyle() {
      const style = {
        width: this.size + 'px',
        height: this.size + 'px'
      }
      return style
    },
    url() {
      return  'data:image/svg+xml,' + encodeURIComponent(this.url11);
    },
    url11() {
      return FolderOne(this)
    }
  },

  watch: {},

  mounted() {},

  methods: {
    multi() {
      return [this.outStrokeColor, this.outFillColor, this.innerStrokeColor, this.innerFillColor]
    },
    two() {
      return [this.outStrokeColor, this.outFillColor, this.outStrokeColor, this.outFillColor]
    },
    fill() {
      return [this.outStrokeColor, this.outStrokeColor, '#FFF', '#FFF']
    },
    outline() {
      return [this.outStrokeColor, 'none', this.outStrokeColor, 'none']
    }
  }
}
</script>

<style lang="scss" scoped>
.a-icon-svg-image {
  width: 100%;
  height: 100%;
  vertical-align: middle;
}
.a-icon-svg {
  position: relative;
  display: inline-flex;
}
</style>
