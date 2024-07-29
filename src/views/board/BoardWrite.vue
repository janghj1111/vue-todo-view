<template>
  <div class="board-detail">
    <div class="common-buttons">
      <button type="button" class="w3-button w3-round w3-blue-gray" @click="saveBoard()">저장</button>&nbsp;
      <button type="button" class="w3-button w3-round w3-gray" @click="goBoardList()">목록</button>
    </div>
    <div class="board-contents">
      <input type="text" v-model="resBoardObj.title" class="w3-input w3-border" placeholder="제목을 입력해주세요.">
      <input v-if="boardIdx === undefined" type="text" v-model="resBoardObj.writer" class="w3-input w3-border" placeholder="작성자를 입력해주세요." >
    </div>
    <div class="board-contents">
      <textarea id="" cols="30" rows="10" v-model="resBoardObj.contents" class="w3-input w3-border" style="resize: none;">
      </textarea>
    </div>
    <div class="common-buttons">
      <button type="button" class="w3-button w3-round w3-blue-gray" @click="saveBoard()">저장</button>&nbsp;
      <button type="button" class="w3-button w3-round w3-gray" @click="goBoardList()">목록</button>
    </div>
  </div>
</template>

<script setup>
//import HelloWorld from '@/components/HelloWorld.vue' // @는 /src를 의미함.
import { onMounted, ref, inject } from "vue";
import { useRouter } from 'vue-router';
import { goPage } from '@/util/utils.js' // * as util

const $api = inject('$axios');
const serverUrl = inject('$serverUrl');
const router = useRouter();
const routerquery = router.currentRoute.value.query;

const boardList = ref([]); // 리스트 데이터
const boardIdx = ref(routerquery.idx);
const resBoardObj = ref({
  title: '',
  writer: '',
  contents: '',
  writedate: ''
}); 
 
/* 목록으로 이동 */
const goBoardList = () => {
  const path = '/board/list';
  const params = {};
  goPage(path, params, 'Y');
}

/* 수정할 글 가져오기 */
const getBoardDtl = async () => {
  try {
    const params = {}                                                               // jhj 리퀘스트바디 수정해야 댐
    await $api.get(`${serverUrl}/board/${boardIdx.value}`, { 
      params : params//,headers : {}
    }).then((res) => {
      console.log(res);
      resBoardObj.value = res.data;                                                 
    })
  } catch (e) {
    console.log('Error : ', e);
    if(e?.response?.status != 500) {
      console.log('네트워크가 원활하지 않습니다. 잠시 후 다시 시도해주세요.');      
    }
  }
}

/* 저장 or 수정버튼 클릭 */
const saveBoard = async () => {
  const apiUrl = `${serverUrl}/board`;
  const params = {
    "idx" : boardIdx.value,
    "title" : resBoardObj.value.title,
    "contents" : resBoardObj.value.contents,
    "writer" : resBoardObj.value.writer,
  };
  try{
    if( boardIdx.value === undefined ){
      // INSERT
      await $api.post(apiUrl, params).then((res) => {
        console.log(res);
        alert("글이 저장되었습니다.");
        goPage('./detail', { idx : res.data.idx} , 'Y'); // 상세페이지로 이동
      })
    } else {
      // UPDATE  
      await $api.patch(apiUrl, params).then((res) => {
        console.log(res);
        alert("글이 수정되었습니다.");
        goPage('./detail', { idx : res.data.idx} , 'Y'); // 상세페이지로 이동
      })
    }
  } catch (e){
    console.log('Error : ', e);
    if(e?.response?.status != 500) {
      console.log('네트워크가 원활하지 않습니다. 잠시 후 다시 시도해주세요.');      
    }
  }
  const path = './write';
  
  //goPage(path, params);
}

/* 페이지 진입 */
const init = () => {
  if( boardIdx.value !== undefined ) getBoardDtl();
}

onMounted(()=>{
  init();
})
</script>
