<template>
<div class="chat-box">
    <a-avatar :style="{ backgroundColor: props.color,marginTop:'5px' }" size="30"><slot name="avatarText"></slot></a-avatar>
    <div class="content-box">
        <div class="content"><slot></slot></div>
    </div>
</div>
</template>
  
  <script lang="ts" setup>
import { computed, ref, defineProps } from "vue";

const props = defineProps({
  color: {
    type: String,
    default: "#00d0b6",
  },
});
</script>
  
  <style scoped>
.chat-box {
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: flex-start;
  margin: 20px 0;
}
.content-box {
  width: calc(100% - 60px);
  min-height: 50px;
  /*父级给相对定位，伪元素根据父级给绝对定位 */
  position: relative;
  background-color: v-bind("props.color");
  box-shadow: 5px 5px 15px #e3e3e3;
  border-radius: 20px;
  line-height: 30px;
  padding:10px 20px;
  color: #fff;
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: flex-start;
}

.content-box::after {
  content: "";
  width: 0px;
  height: 0px;
  border: 15px solid;
  border-left: 15px solid transparent;
  border-right: 15px solid v-bind("props.color");
  border-bottom: 15px solid transparent;
  border-top: 15px solid transparent;
  /*给绝对定位，根据需求设置三角形的位置*/
  position: absolute;
  top: 10px;
  left: -25px;
}

:deep(.content a) {
    color: #ffffff;
    padding:0 10px;
}

</style>