# vue2-scale-box

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
