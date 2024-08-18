<template>
    <div class="app">
    <h3>매개변수 없음</h3>
    <ol>
      <li> getCount = {{ getCount }}</li>
      <li> getMax = {{ getMax }}</li>
    </ol>
    <h3>매개변수 있음</h3>
    <ol>
      <li>itemA = {{ itemA }}</li>
      <li>itemB(1) = {{ itemB(1) }}</li>
      <li>nameA = {{ nameA }}</li>
      <li>nameB(1) = {{ nameB(1) }}</li>
    </ol>
    <h3>로컬과 스토어 메세지 비교</h3>
    <li> msg = {{ msg }} </li>
    <EditForm />
  </div>
</template>

<script setup>
import { inject, onMounted, onUnmounted, ref,computed, watch } from "vue";
import { useStore } from 'vuex';
import EditForm from '@/components/blog/EditForm.vue';
const store = useStore();

const getCount = computed(()=> store.getters.getCount);
const getMax = computed(()=> store.getters.getMax);
const itemA = computed(()=> store.getters.getItem(1));
const nameA = computed(()=> store.getters.getName(1));
const msg = computed(() => store.getters.getMsg);

/*
매개변수가 있는 게터(itemB / nameB)는 편리하지만, 결과가 캐시되지 않습니다. 
산출 속성을 통하지 않는 경우도 마찬가지입니다. 
컴포넌트의 가상 DOM에 변화가 있을 때마다 호출되어 버리므로, 
비용이 높은 처리를 하는 경우에는 주의해서 사용하세요.

=> 즉 메모리에 연산결과가 저장되지 않는다. 가상 DOM이 업데이트할때마다
연산을 호출하게 되기 때문에 성능문제가 발생한다.
*/
const itemB = (id) => {
    return store.getters.getItem(id);
};
const nameB = (id) => {
    return store.getters.getName(id)
};

</script>