<template>
  <div id="app">
    <RocScaleBox :width="1920" :height="1080" bgc="rgba(4, 53, 114, 0.6)" :delay="100">
      <h1>vue大屏等比缩放适应方案</h1>
    </RocScaleBox>
  </div>
</template>

<script>
import RocScaleBox from "../lib/index.vue";
export default {
  name: "App",
  components: {
    RocScaleBox,
  },
};
</script>

<style>
* {
  padding: 0;
  margin: 0;
}
#app {
  width: 100vw;
  height: 100vh;
  background-color: #02234d;
  text-align: center;
}
h1 {
  color: #eee;
}
</style>
