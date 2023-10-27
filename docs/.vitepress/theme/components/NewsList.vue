<template>
  <a-timeline mode="left" labelPosition="relative">
    <a-timeline-item
      lineType="dashed"
      :label="newinfo.date"
      v-for="(newinfo, index) in props.news"
      :key="index"
    >
      <div class="mb-5 dark:text-white">
        {{ newinfo.title }}
        <br />
        <a-typography-text :style="{ fontSize: '12px', marginTop: '4px' }" class="dark:text-white">
          {{ newinfo.desc }}
        </a-typography-text>
        <!-- <br> -->
        <template
          v-if="
            newinfo.urls &&
            Array.isArray(newinfo.urls) &&
            newinfo.urls.length !== 0
          "
        >
          <a-link
          target="_blank"
            style="font-size: 12px"
            :href="url.url"
            v-for="(url, index) in newinfo.urls"
            :key="index"
            icon
            >{{ url.text }}</a-link
          >
        </template>
      </div>
    </a-timeline-item>
  </a-timeline>
</template>

<script setup>
import { ref, defineProps } from "vue";

const props = defineProps({
  news: {
    type: Array,
    default: () => {
      return [
        {
          title: "",
          date: "",
          desc: "",
          urls: [],
        },
      ];
    },
  },
});

console.log(1);

console.log(props.news);
</script>
