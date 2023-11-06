<template>
    <div>
        <div class="flex flex-row justify-between items-center">
            <h1>{{ selectYear }}年</h1>
        <a-select :style="{width:'320px'}" placeholder="请选择年份" :default-value="nowyear+'年'" @change="selectYears">
            <a-option v-for="year in years" :key="year.index" :value="year.year+'年'" :label="`${year.year}年`"></a-option>
        </a-select>
        </div>
        <div class="mt-10">
            <template v-if="list[selectYearIndex] && list[selectYearIndex].length!==0">
                <NewsList :news="list[selectYearIndex]" />
            </template>
            <template v-else>
               <a-empty description="暂无登记资讯"></a-empty>
            </template>
        </div>
    </div>
</template>

<script lang="ts" setup>
  import { computed,onMounted,ref } from 'vue';
  import { data as newlist } from '../../../../news.data';

  const years = ref<any>([]);
  const selectYear = ref(new Date().getFullYear());
  const selectYearIndex = ref<number>(0);
  const list = ref<any>([]);
  const nowyear = ref(new Date().getFullYear());

  const selectYears = (year: string) => {
    selectYear.value = Number(year.split('年')[0]);
    const selectIndex = years.value.find((yearinfo)=>yearinfo.year === Number(year.split('年')[0]));
    selectYearIndex.value  = selectIndex.index;
  }

  onMounted(()=>{
    const now_year = new Date().getFullYear();
    newlist.forEach((newsinfo:any,index)=>{
        years.value.push({
            index,
            year: newsinfo.year
        })
        list.value.push(newsinfo.news || []);
    })
    years.value = years.value.reverse();
    selectYear.value = now_year;
    const selectIndex = years.value.find((yearinfo)=>yearinfo.year === Number(now_year));
    selectYearIndex.value  = selectIndex.index;
  })
</script>
<style scoped>

</style>