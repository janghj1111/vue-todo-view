<template>
  <div class="board-list">
    <div class="common-buttons">
      <button type="button" class="w3-button w3-round w3-blue-gray" @click="goWrite()">등록</button>
    </div> 
    <CommonButton  />
    <table v-if="boardList.length != 0" class="w3-table-all">
      <thead>
        <tr>
          <th>No</th>
          <th>제목</th>
          <th>작성자</th>
          <th>등록일시</th>
        </tr> 
      </thead>
      <tbody>
        <tr v-for="(item,index) in boardList" :key="index">
          <td>{{item.idx}}</td>
          <td><a @click="goView(item.idx)">{{item.title}}</a></td>
          <td>{{item.writer}}</td>
          <td>{{item.writedate}}</td>
        </tr> 
      </tbody>
    </table>
    <div v-else>
      <h1>No data</h1>
    </div>
    <!-- <div v-if="paging.total_list_cnt > 0" class="pagination w3-bar w3-padding-16 w3-small" >
      <span class="pg">
      <a href="javascript:;" @click="goPage(1)" class="first w3-button w3-border">&lt;&lt;</a>
      <a href="javascript:;" v-if="paging.startPage > 10" @click="goPage(`${paging.startPage-1}`)"
         class="prev w3-button w3-border">&lt;</a>
      <template v-for=" (n,index) in paginavigation()">
          <template v-if="paging.page==n">
              <strong class="w3-button w3-border w3-green" :key="index">{{ n }}</strong>
          </template>
          <template v-else>
              <a class="w3-button w3-border" href="javascript:;" @click="goPage(`${n}`)" :key="index">{{ n }}</a>
          </template>
      </template>
      <a href="javascript:;" v-if="paging.total_page_cnt > paging.end_page"
         @click="goPage(`${paging.end_page+1}`)" class="next w3-button w3-border">&gt;</a>
      <a href="javascript:;" @click="goPage(`${paging.total_page_cnt}`)" class="last w3-button w3-border">&gt;&gt;</a>
      </span>
    </div> -->
  </div>
</template>

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

