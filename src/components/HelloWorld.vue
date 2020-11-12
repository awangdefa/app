<template>
  <div class="hello">
    <van-button type="primary">主要按钮</van-button>
  </div>
</template>

<script>
import { Button } from "vant";
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  components: {
    [Button.name]: Button,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
