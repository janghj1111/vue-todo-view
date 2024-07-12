<template>
  <div class="common-buttons">
    <!-- 추후 로그인 기능이 생기면 작성자와 일치하는지 확인 후 보여줄 것. -->
    <button v-if="showBlueYn" type="button" class="w3-button w3-round w3-blue-gray" @click="blueBtnClick()">{{ blueBtnNm }}수정</button>&nbsp;
    <button v-if="showRedYn" type="button" class="w3-button w3-round w3-red" @click="redBtnClick()">{{ redBtnNm }}삭제</button>&nbsp;
    <button v-if="showGrayYn" type="button" class="w3-button w3-round w3-gray" @click="grayBtnClick()">{{ grayBtnNm }}목록</button>
  </div>
</template>
<script setup>
//import HelloWorld from '@/components/HelloWorld.vue' // @는 /src를 의미함.
import { defineProps, defineEmits, ref, inject } from "vue";
import { useRouter } from 'vue-router';
import { goPage } from '@/util/utils.js' // * as util

const props = defineProps({
  showBlueYn : {
    type: Boolean,
    default : true
  },
  showRedYn : {
    type: Boolean,
    default : true
  },
  showGrayYn : {
    type: Boolean,
    default : true
  }
});
const emits = defineEmits(['blue','red','gray']);

 

/* blue button 클릭 */
const blueBtnClick = () => {
  emits('blue');
}

/* blue button 클릭 */
const redBtnClick = () => {
  emits('red');
}


/* blue button 클릭 */
const grayBtnClick = () => {
  emits('gray');
}

</script>

