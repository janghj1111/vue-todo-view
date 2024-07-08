<template>
  <div class="board-list">
    <div class="common-buttons">
      <!-- class="btn btn-primary" -->
      <button type="button" class="w3-button w3-round w3-blue-gray" @click="goWrite()">등록</button>
    </div>
    <table class="w3-table-all">
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
          <td>{{item.writeDate}}</td>
        </tr> 
      </tbody>
    </table>
    <div>
      {{ responseData }}
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
body {
  text-align: center;
  background-color: #F6F6F6;
}
input {
  border-style: groove;
  width: 200px;
}
button {
  border-style: groove;
}
.shadow {
  box-shadow: 5px 10px 10px rgba(0, 0, 0, 0.03);
}
</style>

<script setup>
//import HelloWorld from '@/components/HelloWorld.vue' // @는 /src를 의미함.
import { onMounted, ref, inject } from "vue";
import { useRouter } from 'vue-router';

const $api = inject('$axios');
const serverUrl = inject('$serverUrl');
//import $api from '@/core/request';

const router = useRouter();
const requestBody = ref({});
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
const pageNumberArr = ref([]);

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

const responseData = ref();

const paginavigation = () => {
      // let pageNumber = [] //;
      //   let start_page = this.paging.start_page;
      //   let end_page = this.paging.end_page;
      //   for (let i = start_page; i <= end_page; i++) pageNumber.push(i);
      //   return page Number;
}

const test = async () => {
  try {
    const response = await $api.get(`${serverUrl}/board/list`,{ // ${serverUrl}
      params : {
        keyword: keyword.value,
        page: page.value,
        size: size.value
      },
      headers : {}
    })
    console.log(response);
    responseData.value = response;
  } catch (e) {
    console.log('Error : ', e)
  }

  // this.$axios.get(this.$serverUrl + "/board/list", {
  //       params: this.requestBody,
  //       headers: {}
  //     }).then((res) => {      

  //       this.list = res.data  //서버에서 데이터를 목록으로 보내므로 바로 할당하여 사용할 수 있다.

  //     }).catch((err) => {
  //       if (err.message.indexOf('Network Error') > -1) {
  //         alert('네트워크가 원활하지 않습니다.\n잠시 후 다시 시도해주세요.')
  //       }
  //     })
}

onMounted(()=>{
  boardList.value = dummyList.value
  test();
})
</script>

