<template>
  <div class="board-detail">
    <div class="common-buttons">
      <!-- 추후 로그인 기능이 생기면 작성자와 일치하는지 확인 후 보여줄 것. -->
      <button type="button" class="w3-button w3-round w3-blue-gray" @click="updateBoard()">수정</button>&nbsp;
      <button type="button" class="w3-button w3-round w3-red" @click="deleteBoard()">삭제</button>&nbsp;
      <button type="button" class="w3-button w3-round w3-gray" @click="goBoardList()">목록</button>
    </div>
    <div class="board-contents">
      <h3>{{ title }}</h3>
      <div>
        <strong class="w3-large">{{ writer }}</strong>
        <br />
        <span>{{ writedate }}</span>
      </div>
    </div>
    <div class="board-contents">
        <span>{{ contents }}</span>
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

const $api = inject('$axios');
const serverUrl = inject('$serverUrl');
const router = useRouter();
const boardList = ref([]); // 리스트 데이터
const page = ref(router?.query?.page ? router?.query?.page : 1);
const size = ref(router?.query?.size ? router?.query?.size : 10);
const keyword = ref(router?.query?.keyword);
const paging = ref({
  block: 0,
  endPage: 0,
  nextBlock: 0,
  page: 0,
  pageSize: 0,
  prevBlock: 0,
  startIdx: 0,
  startPage: 0,
  totalBlockCnt: 0,
  totalListCnt: 0,
  totalPageCnt: 0,
})
const dummyList = ref([
  {
    'idx': 1,
    'title' : '제목1',
    'writer' : '작성자1',
    'writeDate' : '작성일시1'
  },
  {
    'idx': 2,
    'title' : '제목2',
    'writer' : '작성자2',
    'writeDate' : '작성일시2'
  },
  {
    'idx': 3,
    'title' : '제목3',
    'writer' : '작성자3',
    'writeDate' : '작성일시3'
  }
]);
const pageNumberArr = ref([]);


const paginavigation = () => {
      // let pageNumber = [] //;
      //   let start_page = this.paging.start_page;
      //   let end_page = this.paging.end_page;
      //   for (let i = start_page; i <= end_page; i++) pageNumber.push(i);
      //   return page Number;
}


/* 상세보기 */
const goView = (idx) => {
  const path = './detail'
  const params = {
    idx : idx
  }
  goPage(path, params); // 유틸함수로 빼놓음
}

/* 등록화면 이동 */
const goWrite = () => {
  const path = './write';
  const params = {};
  goPage(path, params);
}

/* 페이징 이동 */
const movePage = ( num ) => {
  if(page.value !== num ){
    page.value = num;
  }
  getBoardList();
}


/* 리스트 가져오기 */
const getBoardList = async () => {
  try {
    const params = {
      keyword: keyword.value,
      page: page.value,
      size: size.value
    }
    await $api.get(`${serverUrl}/board/list`,{ // ${serverUrl}
      params : params//,headers : {}
    }).then((res) => {
      console.log(res);
      if(res?.data != undefined || res.data.length != 0){
        boardList.value = res.data;
      } 
    })
  } catch (e) {
    console.log('Error : ', e)
    if(e.response.status != 500) {
      console.log('네트워크가 원활하지 않습니다. 잠시 후 다시 시도해주세요.')      
    }
  }
}

/* 페이지 진입 */
const init = () => {
  getBoardList();
}

onMounted(()=>{
  init();
})
</script>

