<template>
  <div id="app">
    <ScaleBox ref="scaleBox" :width="1920" :height="1080" bgc="rgba(4, 53, 114, 0.6)" :delay="100" :isFlat="false" @scaleChange="scaleChange">
      <template>
        <!-- 缩放导致地图上偏移 解决方案 -->
        <div class="map-box">
          <MapCpn :style="{ transform: `scale(${scale})` }" />
        </div>
      </template>
    </ScaleBox>
  </div>
</template>

<script>
import ScaleBox from "../lib/index.vue";
import MapCpn from "./components/mapCpn.vue";

export default {
  name: "App",
  data() {
    return {
      scale: 1,
    };
  },
  components: {
    ScaleBox,
    MapCpn,
  },
  methods: {
    scaleChange(scale) {
      /*
        默认为关闭拉伸模式(等比缩放模式)
        开启拉伸模式(isFlat = true) scaleVal = [x缩放值, y缩放值]
        关闭拉伸模式(isFlat = false) scaleVal = 等比缩放值
      */
      // 缩放导致地图上偏移 解决方案
      this.scale = 1 / scale;
    },
  },
};
</script>

<style>
* {
  padding: 0;
  margin: 0;
}
.map-box {
  width: 1200px;
  height: 600px;
  margin: 0 auto;
  margin-top: 200px;
  overflow: hidden;
}
</style>
