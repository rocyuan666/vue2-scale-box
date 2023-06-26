# vue2-scale-box

[![npm version](https://img.shields.io/npm/v/vue2-scale-box.svg?logo=npm&style=flat-square)](https://www.npmjs.com/package/vue2-scale-box)
[![npm downloads](https://img.shields.io/npm/dt/vue2-scale-box.svg?style=flat-square)](https://www.npmjs.com/package/vue2-scale-box)

vue2大屏适配缩放组件

vue3版本：[https://www.npmjs.com/package/vue3-scale-box](https://www.npmjs.com/package/vue3-scale-box)

## 安装
```bash
npm install vue2-scale-box
or
yarn add vue2-scale-box
```

## 使用
```html
<template>
  <div id="app">
    <ScaleBox
      :width="1920"
      :height="1080"
      bgc="transparent"
      :delay="100"
      :isFlat="false"
    >
      <template>
        <h1>大屏内容</h1>
      </template>
    </ScaleBox>
  </div>
</template>
```

``` javascript
import ScaleBox from 'vue2-scale-box'

export default {
  components: {
    ScaleBox
  }
}
```

## 属性
- ` width ` 宽度 默认 ` 1920 `
- ` height ` 高度 默认 ` 1080 `
- ` bgc ` 背景颜色 默认 ` "transparent" `
- ` delay `自适应缩放防抖延迟时间（ms） 默认 ` 100 `
- ` isFlat `是否启用拉伸模式 默认 ` false `
- ` @scaleChange `  缩放值发生改变的方法 可动态获取 scale 改变后的值  注意：拉伸模式下scale值为： ` [x缩放值, y缩放值] `；非拉伸模式下scale值为：` 等比缩放值 `
