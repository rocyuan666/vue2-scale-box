<template>
  <div
    class="vue2-scale-box"
    ref="vue2ScaleBox"
    :style="{
      ...style,
      width: width + 'px',
      height: height + 'px',
      backgroundColor: bgc,
    }"
  >
    <slot></slot>
  </div>
</template>

<script>
/**
 * width        宽
 * height       高
 * bgc          背景颜色
 * delay        自适应缩放防抖延迟时间（ms）
 * isFlat       是否启用拉伸模式
 * @scaleChange 缩放值发生改变的方法 可动态获取 scale 改变后的值
 */
export default {
  name: "Vue2ScaleBox",
  props: {
    width: {
      type: Number,
      default: 1920,
    },
    height: {
      type: Number,
      default: 1080,
    },
    bgc: {
      type: String,
      default: "transparent",
    },
    delay: {
      type: Number,
      default: 100,
    },
    isFlat: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      scale: 0,
      scaleX: 0,
      scaleY: 0,
      style: {
        position: "fixed",
        transform: "scale(var(--scale)) translate(-50%, -50%)",
        transformOrigin: "0 0",
        left: "50%",
        top: "50%",
        zIndex: 999,
      },
    };
  },
  created() {
    if (this.isFlat) {
      // 拉伸模式
      this.style["transform"] =
        "scaleX(var(--scaleX)) scaleY(var(--scaleY)) translate(-50%, -50%)";
    } else {
      // 等比缩放模式
      this.style["transform"] = "scale(var(--scale)) translate(-50%, -50%)";
    }
  },
  watch: {
    scale: {
      handler(scale) {
        let args;
        if (this.isFlat) {
          args = [this.scaleX, this.scaleY];
        } else {
          args = scale;
        }
        this.$emit("scaleChange", args);
      },
      immediate: true,
    },
  },
  mounted() {
    this.setScale();
    window.addEventListener("resize", this.debounce(this.setScale));
  },
  methods: {
    getScale() {
      const { width, height } = this;
      const wh = window.innerHeight / height;
      const ww = window.innerWidth / width;
      return ww < wh ? ww : wh;
    },
    getScaleX() {
      const ww = window.innerWidth / this.width;
      return ww;
    },
    getScaleY() {
      const wh = window.innerHeight / this.height;
      return wh;
    },
    setScale() {
      this.scale = this.getScale();
      if (this.$refs.vue2ScaleBox) {
        if (this.isFlat) {
          // 拉伸模式
          this.scaleX = this.getScaleX();
          this.scaleY = this.getScaleY();
          this.$refs.vue2ScaleBox.style.setProperty("--scaleX", this.scaleX);
          this.$refs.vue2ScaleBox.style.setProperty("--scaleY", this.scaleY);
        } else {
          // 等比缩放模式
          this.scale = this.getScale();
          this.$refs.vue2ScaleBox.style.setProperty("--scale", this.scale);
        }
      }
    },
    debounce(fn, delay) {
      const delays = delay || this.delay;
      let timer;
      return function () {
        const th = this;
        const args = arguments;
        if (timer) {
          clearTimeout(timer);
        }
        timer = setTimeout(function () {
          timer = null;
          fn.apply(th, args);
        }, delays);
      };
    },
  },
};
</script>
