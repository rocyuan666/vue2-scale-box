# roc-scale-box

vue大屏适配缩放组件

## 安装
```bash
npm install roc-scale-box
```

## 使用
```html
<template>
  <div id="app">
    <RocScaleBox
      :width="1920"
      :height="1080"
      bgc="transparent"
      :delay="100"
    >
      <template>
        <h1>大屏内容</h1>
      </template>
    </RocScaleBox>
  </div>
</template>
```

``` javascript
import RocScaleBox from 'roc-scale-box'

export default {
  components: {
    RocScaleBox
  }
}
```

## 属性
- ` width ` 宽度 默认 ` 1920 `
- ` height ` 高度 默认 ` 1080 `
- ` bgc ` 背景颜色 默认 ` "transparent" `
- ` delay `自适应缩放防抖延迟时间（ms） 默认 ` 100 `
