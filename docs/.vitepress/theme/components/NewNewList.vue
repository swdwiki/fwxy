<template>
  <div class="container mx-auto" style="max-width: 1152px">
    <div class="w-full text-center">
      <span class="w-full text-center text-xl font-bold my-2 block"
        >最新消息</span
      >
    </div>
    <div class="flex flex-row flex-wrap justify-between items-center relative">
      <div
        class="rounded-xl bg-gray-100 min-h-[150px] py-5 my-2 px-10 flex flex-col justify-center items-left border border-gray-100 hover:border hover:border-gray-400 transition hover:scale-105"
        style="width: calc(33% - 10px)"
        v-for="(newinfo, index) in list"
        :key="index"
      >
        <div class="flex flex-row justify-between items-center">
          <h2 class="font-bold text-sm">{{ newinfo.title }}</h2>
          <span class="text-xs text-gray-400">{{ newinfo.date }}</span>
        </div>
        <p class="text-gray-500 text-xs mt-2 line-clamp-3">
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