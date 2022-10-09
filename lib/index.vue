<template>
  <div
    class="roc-scale-box"
    ref="rocScaleBox"
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
 * width      宽
 * height     高
 * bgc        背景颜色
 * delay      自适应缩放防抖延迟时间（ms）
 */
export default {
  name: "RocScaleBox",
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
      default: "rgba(4, 53, 114, 0.6)",
    },
    delay: {
      type: Number,
      default: 100,
    },
  },
  data() {
    return {
      scale: 0,
      style: {
        position: "fixed",
        transform: "scale(var(--scale)) translate(-50%, -50%)",
        display: "flex",
        flexDirection: "column",
        transformOrigin: "0 0",
        left: "50%",
        top: "50%",
        transition: "0.3s",
        zIndex: 999,
      },
    };
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
    setScale() {
      this.scale = this.getScale();
      if (this.$refs.rocScaleBox) {
        this.$refs.rocScaleBox.style.setProperty("--scale", this.scale);
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
