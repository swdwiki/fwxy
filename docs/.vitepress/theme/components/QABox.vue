<template>
  <div class="qa-box">
    <ChatBox>
      <template #avatarText>Q</template>
      <slot name="question"></slot>
    </ChatBox>
    <ChatBox color="#fc5531">
      <template #avatarText>A</template>
      <slot name="answer"></slot>
    </ChatBox>
    <a-divider />
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
.qa-box {
  display: block;
}
</style>
