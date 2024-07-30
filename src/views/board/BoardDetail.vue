<template>
  <div class="board-detail">
    <CommonButton :btnInfo="btnInfo" @blue="updateBoard()" @red="deleteBoard()" @gray="goBoardList()" />
    <div class="board-contents">
      <h3>{{ resBoardObj.title }}</h3>
      <div>
        <strong class="w3-large">{{ resBoardObj.writer }}</strong>
        <br />
        <span>{{ resBoardObj.writedate }}</span>
      </div>
    </div>
    <div class="board-contents">
        <span>{{ resBoardObj.contents }}</span>
    </div>
    <div class="common-buttons">
      <!-- 추후 로그인 기능이 생기면 작성자와 일치하는지 확인 후 보여줄 것. -->
      <button type="button" class="w3-button w3-round w3-blue-gray" @click="updateBoard()">수정</button>&nbsp;
      <button type="button" class="w3-button w3-round w3-red" @click="deleteBoard()">삭제</button>&nbsp;
      <button type="button" class="w3-button w3-round w3-gray" @click="goBoardList()">목록</button>
    </div>
  </div>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>

<script setup>
//import HelloWorld from '@/components/HelloWorld.vue' // @는 /src를 의미함.
import { onMounted, ref, inject } from "vue";
import { useRouter } from 'vue-router';
import { goPage } from '@/util/utils.js' // * as util
import CommonButton from '@/components/CommonButton.vue';

const $api = inject('$axios');
const serverUrl = inject('$serverUrl');
const router = useRouter();
const routerquery = router.currentRoute.value.query;
const btnInfo = ref({
  blue : {
    showYn : true,
    btnNm : '수정'
  },
  red : {
    showYn : true,
    btnNm : '삭제'
  },
  gray : {
    showYn : true,
    btnNm : '목록'
  }
})
const boardList = ref([]); // 리스트 데이터
const boardIdx = routerquery?.idx ? routerquery?.idx : 1;
const resBoardObj = ref({}); 
 

/* 수정화면 이동 */
const updateBoard = () => {
  const path = './write'
  const params = {}
  //goPage(path, params);
}

/* 목록으로 이동 */
const goBoardList = () => {
  const path = '/board/list';
  const params = {};
  goPage(path, params, 'Y');
}

/* 삭제하기 */
const deleteBoard = async () => {  
  try{
    if(!confirm("삭제하시겠습니까?")) return;
    await $api.delete(`${serverUrl}/board/${boardIdx}`, {})
      .then((res)=>{
        alert('삭제되었습니다.');
        goBoardList();
      })
  } catch (e) {
    console.log('Error : ', e);
    if(e?.response?.status != 500) {
      console.log('네트워크가 원활하지 않습니다. 잠시 후 다시 시도해주세요.');
    }
  }
}

/* 상세 글 가져오기 */
const getBoardDtl = async () => {
  try {
    const params = {}
    await $api.get(`${serverUrl}/board/${boardIdx}`,{ // ${serverUrl}
      params : params//,headers : {}
    }).then((res) => {
      console.log(res);
      resBoardObj.value = res.data;
      // if(res?.data != undefined || res.data.length != 0){
      //   boardList.value = res.data;
      // } 
    })
  } catch (e) {
    console.log('Error : ', e);
    if(e?.response?.status != 500) {
      console.log('네트워크가 원활하지 않습니다. 잠시 후 다시 시도해주세요.');      
    }
  }
}

/* 페이지 진입 */
const init = () => {
  getBoardDtl();
}

onMounted(()=>{
  init();
})
</script>

