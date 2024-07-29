<template>
  <div class="common-buttons">
    <!-- 추후 로그인 기능이 생기면 작성자와 일치하는지 확인 후 보여줄 것. -->
    <button v-if="btnInfo.blue.showYn" type="button" class="w3-button w3-round w3-blue-gray" @click="blueBtnClick()">
        {{ btnInfo.blue.btnNm }}
    </button>&nbsp;
    <button v-if="btnInfo.red.showYn" type="button" class="w3-button w3-round w3-red" @click="redBtnClick()">
        {{ btnInfo.red.btnNm }}
    </button>&nbsp;
    <button v-if="btnInfo.gray.showYn" type="button" class="w3-button w3-round w3-gray" @click="grayBtnClick()">
        {{ btnInfo.gray.btnNm }}
    </button>
  </div>
</template>
<style scoped>
body {
  text-align: center;
  background-color: #F6F6F6;
}
input {
  border-style: groove;
  width: 200px;
}
/* button {
  border-style: groove;
} */
.shadow {
  box-shadow: 5px 10px 10px rgba(0, 0, 0, 0.03);
}
</style>

<script setup>
//import HelloWorld from '@/components/HelloWorld.vue' // @는 /src를 의미함.
import { defineProps, defineEmits, ref, inject } from "vue";
import { useRouter } from 'vue-router';
import { goPage } from '@/util/utils.js' // * as util

const props = defineProps({
  btnInfo : {
    type : Object,
    default : () => ({
      blue : {
        showYn : true,
        btnNm : '등록'
      },
      red : {
        showYn : true,
        btnNm : '삭제'
      },
      gray : {
        showYn : true,
        btnNm : '목록'
      },
    })
  }
});
const emits = defineEmits(['blue','red','gray']);

 

/* blue button 클릭 */
const blueBtnClick = () => {
  console.log('blue');
  emits('blue');
}

/* blue button 클릭 */
const redBtnClick = () => {
  console.log('red');
  emits('red');
}

/* blue button 클릭 */
const grayBtnClick = () => {
  console.log('gray');
  emits('gray');
}

</script>

