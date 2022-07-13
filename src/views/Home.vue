<template>
  <div>
    <span> {{ count }}</span>
    <button @click="increment">+</button>
    <span>{{ count }}</span>
    {{ word }}
    <input v-model="testScanf" />
    <hr />
    测试watch 方法: {{ question }}
    <hr />
    {{ z }}
    <base-input :input-data="inputData" @handlerClickCount="aaa">
      <button>这是slot 到子组件的按钮</button>
    </base-input>
    <button>测试Emit</button>
    <div>vue 动态注册组件</div>
    <el-divider />
    <!-- 使用button模拟tabs 切换实现动态注册组件 -->
    <div>
      <el-button
        v-for="(_, item) in BaseList"
        :key="item"
        @click="handerCurrentTab(item)"
      >
        {{ item }}
      </el-button>
      <component :is="BaseList[currentTab]"></component>
    </div>
    <el-divider />
    <!-- 使用 element -plus 切换时进行动态组件创建 -->
    <el-tabs v-model="currentTab" @tab-change="handerCurrentTab">
      <el-tab-pane v-for="(_, item) in BaseList" :key="item" :name="item">
        <template #label>
          <span> {{ item }}</span>
        </template>
        <component :is="BaseList[currentTab]"></component>
      </el-tab-pane>
    </el-tabs>
  </div>
  <el-divider />
  <el-button style="width: 100%; margin-top: 40px"
    >我是动态组件下面的第二个demo attribute01</el-button
  >
  <el-divider />
  <!-- prop 并使用ts进行接收参数 -->
  <div>
    <attribute01
      :data-prop="inputData"
      @handlerAttributeCount="handerAttriClick"
    >
      <slot>
        <el-button
          >通过调用子组件的方法获取第 {{ attrCount }}次点击事件</el-button
        >
      </slot>
    </attribute01>
  </div>
</template>

<script lang="ts" setup>
import debounce from "lodash/debounce";
import BaseInput from "@/components/BaseInput.vue";
import Attribute01 from "@/components/Attribute01.vue";
import Attribute02 from "@/components/Attribute02.vue";
import { reactive, computed, ref, watch } from "vue";
// *****************************************************************************
let attrCount = ref(0);
const handerAttriClick = (val: number) => {
  attrCount.value = val;
  console.log(val);
};
// *****************************************************************************
const currentTab = ref("BaseInput");
let BaseList = { BaseInput, Attribute01, Attribute02 };
const state = reactive({
  count: 0,
});
const handerCurrentTab = (tab: string) => {
  currentTab.value = tab;
};
// 实现对于click的防抖事件

let count = computed(() => state.count);
interface Idata {
  a: string;
  bbb: (string | number)[];
}
const dataList = ref<Idata>({
  a: "111",
  bbb: [1, 2, 3, 4, 5, 6, 7, 8, 9, "10"],
});
const aaa = (val: number) => {
  console.log(111);
  console.log(val);
};
const increment = debounce(function () {
  state.count++;
}, 2000);
const word = computed(() => {
  return dataList.value.bbb;
});
const testScanf = ref("");
const question = ref("");
watch(testScanf, (val) => {
  question.value = val;
});
// watch 的第一个参数可以是不同的来源,可以是函数function 数组,或字符串或响应式对象
// 单个ref
watch(testScanf, (val) => {
  question.value = val;
});
//getter 函数
const x = ref(1);
const y = ref(2);
setTimeout(() => {
  x.value = 3;
}, 1000);
const z = ref();
watch(
  () => x.value + y.value,
  (sum) => {
    z.value = sum;
  }
);
// const url = ref("https://www.baidu.com");
// const data = ref(null);
// async function fetchData() {
//   const response = await fetch(url.value);
//   data.value = await response.json();
// }
// fetchData();
// watch(url, fetchData);
// console.log(url);
// // 使用watchEffect 来监听数据变化
// watchEffect(() => {
//   console.log(url.value);
// });
interface IInputData {
  age: number;
  name: string;
  habby: string[];
}
const inputData = ref<IInputData>({
  age: 18,
  name: "yu",
  habby: ["篮球", "足球", "排球"],
});
setTimeout(() => {
  inputData.value.name = "苦瓜";
}, 3000);
setTimeout(() => {
  inputData.value.age = 19;
}, 3000);
</script>
