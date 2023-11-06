<template>
  <div class="container mx-auto lg:max-w-[1152px]">
    <div class="w-full text-center">
      <span class="w-full text-center text-base lg:text-xl font-bold lg:my-2 block"
        >最新消息</span
      >
    </div>
    <div class="w-full flex flex-col lg:flex-row lg:flex-wrap lg:justify-center lg:items-center lg:relative">
      <div
        class="w-11/12 mx-auto lg:w-[calc(33%-10px)] rounded-xl bg-gray-100 lg:min-h-[150px] py-3 lg:py-5 my-2 px-5 lg:px-10 flex flex-col justify-center items-left border border-gray-100 lg:hover:border lg:hover:border-gray-400 transition lg:hover:scale-105"
        v-for="(newinfo, index) in list"
        :key="index"
      >
        <div class="flex flex-row justify-between items-center">
          <h2 class="font-bold text-xs lg:text-sm">{{ newinfo.title }}</h2>
          <span class="text-xs text-gray-400">{{ newinfo.date }}</span>
        </div>
        <p class="text-gray-500 text-xs mt-1 lg:mt-2 line-clamp-3">
          {{ newinfo.desc }}
        </p>
        <span
          v-if="newinfo.urls && newinfo.urls.length !== 0"
          class="flex flex-row"
        >
          <span v-for="(url, indx) in newinfo.urls" :key="indx">
            <a-link
              class="text-xs"
              :href="url.url"
              size="small"
              icon
              target="_blank"
              >{{ url.text }}</a-link
            >
          </span>
        </span>
      </div>
    </div>
    <a-divider orientation="center"
      ><a-link href="/news">查看更多消息</a-link></a-divider
    >
  </div>
</template>

<script lang="ts" setup>
import { computed, onMounted, ref } from "vue";
import { data as newlist } from "../../../../news.data";

const list = ref<any>([]);

onMounted(() => {
  const nowyear = new Date().getFullYear();
  const lastyear = new Date().getFullYear() - 1;
  const nowindex = newlist.findIndex((newsinfo) => newsinfo.year === nowyear);
  const lastindex = newlist.findIndex((newsinfo) => newsinfo.year === lastyear);
  if (newlist[nowindex]) {
    if (newlist[nowindex].news && newlist[nowindex].news.length >= 12) {
      for (let newindex in newlist[nowindex].news) {
        if (Number(newindex) < 12) {
          list.value.push(newlist[nowindex].news[newindex]);
        }
      }
    } else if (
      newlist[nowindex].news &&
      newlist[nowindex].news.length !== 0 &&
      newlist[nowindex].news.length < 12
    ) {
      for (let newindex in newlist[nowindex].news) {
        if (Number(newindex) < newlist[nowindex].news.length) {
          list.value.push(newlist[nowindex].news[newindex]);
        }
      }
      for (let newindex1 in newlist[lastindex].news) {
        if (Number(newindex1) < 12 - newlist[nowindex].news.length) {
          list.value.push(newlist[lastindex].news[newindex1]);
        }
      }
    }
  } else {
    for (let newindex in newlist[lastindex].news) {
      if (Number(newindex) < 12) {
        list.value.push(newlist[lastindex].news[newindex]);
      }
    }
  }
});
</script>