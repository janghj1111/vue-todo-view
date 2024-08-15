<template>
    <!-- <script src="https://cdn.jsdelivr.net/npm/smooth-scroll@12.1.5"></script> -->
    <div>
     <h1>0. 복습</h1> 
    <ul>
        <li>v-model은 양방향 데이터제공, value는 단방향 (:value는 양방향)</li>
        <li>ww2</li>
    </ul>
   </div><br/> 

   <div>
     <h1>1. 입력폼</h1> 
    <div>
        <textarea v-model="message"></textarea>
        <pre>v-model : {{ message }}</pre>
    </div>
   </div><br/> 

   <div> 
    <h1>2. 체크박스</h1>
    <span>어떻게 알고 오셨나요?</span><br/> 
    checkItems : {{ checkItems }}
    <div v-for="(item, idx) in checkList" :key="idx">
        <label>
            <input type="checkbox" v-model="checkItems" :value="item">
            {{ item }}
        </label>
    </div>
   </div><br/>  

   <div> 
    <h1>3. 라디오박스</h1>
    <span>현재 직무에 만족하시나요?</span><br/> 
    radioItems : {{ radioItems }}
    <div v-for="(item, idx) in radioList" :key="idx">
        <label>
            <input type="radio" v-model="radioItems" :value="item">
            {{ item }}
        </label>
    </div>
   </div><br/> 
   <!-- Q. 만약 설문조사들이 나열되고 고른 선택지에 따라 점수를 매겨야 한다면? (computed 사용해서 구현할 것.)  -->

   <div> 
    <h1>4. 셀렉트박스</h1>
    <span>현재 직업이 어떻게 되시나요?</span><br/> 
    selectItems : {{ selectItems }}<br/> 
    <select v-model="selectItems">
        <option value="default" disabled="disabled">선택해 주세요.</option>
        <option v-for="(item,idx) in selectList" :key="idx" :value="item">
            {{ item }}
        </option>
    </select>
   </div><br/> 

   <div> 
    <h1>5. 파일 선택</h1>
    <span>이미지를 등록해주세요.</span><br/> 
    <input type="file" @change="handleChange">
    <div v-if="preview"><img :src="preview"></div>
   </div><br/> 

   <div >
    <h1>6. computed</h1>
    <input v-model="budget">원 이하 필터링하기/<br/>
    <input v-model="limit"> 개의 결과 출력하기
    <p>{{ filterList.length }}개 중에 {{ limitList.length }}개를 출력하고 있습니다.</p>
    <ul>
        <!-- v-for에 최종 결과라고 할 수 있는 산출 속성 limited 사용하기 -->
        <li v-for="item in limitList" :key="item.id">
        {{ item.name }} {{ item.price }}원
        </li>
    </ul>
    </div><br/> 

    <div>
    <h1>7. watch </h1>
    <input v-model="userPW" placeholder="새 비밀번호를 입력하세요.">
    <p>Current Password: {{ userPW }}</p>
    <p>Previous Password: {{ previousPW }}</p>
    </div><br/> 

   <div @click="scrollTop()">
    <p style="red">페이지 상단으로 이동하기</p>
  </div>
</template>
<script setup>
import { onMounted, onUnmounted, ref,computed, watch } from "vue";

// 입력폼
const message = ref("ㅎ2ㅎ2");
// 체크박스
const checkList = ref(["블로그", "SNS", "지인"]);
const checkItems = ref([]);
// 라디오박스
const radioList = ref(["매우 만족", "보통", "매우 불만족"]);
const radioItems = ref("");
/* Q. 만약 설문조사들이 나열되고 고른 선택지에 따라 점수를 매겨야 한다면? (computed 사용해서 구현할 것.) */
// 셀렉트박스
const selectList = ref(["UI/UX 개발", "응용SW 개발", "DBA"]);
const selectItems = ref("default");
// 파일열기
const preview = ref("");
// 스크롤
const timer = ref();
const scrollY = ref(0);
// computed
const budget = ref(3000);
const limit = ref(2);
const fruitsList = ref([
    { id: 1, name: '사과', price: 1000 },
    { id: 2, name: '바나나', price: 2000 },
    { id: 3, name: '딸기', price: 4000 },
    { id: 4, name: '오렌지', price: 3000 },
    { id: 5, name: '메론', price: 5000 }
]);
const filterList = computed(()=> {
    let result = fruitsList.value.filter((el)=>{
        return el.price <= budget.value;
    })
    return result;
})
const limitList = computed(() => {
    return filterList.value.slice(0, limit.value);
})
// watch
const userPW = ref('');
const previousPW = ref('');


// 파일 선택 change 이벤트
const handleChange = () => {
    let file = event.target.files[0];
    if (file && file.type.match(/^image\/(png|jpeg)$/)) {
        preview.value = window.URL.createObjectURL(file) // URL이 할당됨
    }
}

// 스크롤 이벤트 추출
const handleScroll = () => {
    console.log('handleScroll');
    if(timer.value === null){
        timer.value = setTimeout(()=>{
            scrollY.value = window.scrollY; // 현재 스크롤 위치 저장
            clearTimeout(timer.value); // 메모리누수 방지를 위해 타이머제거
            timer.value = null; // 타이머 초기화
        },200)
    }
}

// watch 예제. userPW 감시
watch(userPW , (newVal, oldVal) => {
   previousPW.value = oldVal;
   console.log(`${oldVal}에서 ${newVal}로 바뀜`) 
})



// 페이지 상단이동
const scrollTop = () => {
    //scroll.animateScroll(0);
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    })
}

onMounted(()=>{
    console.log('스크롤 핸들러 등록하기');
    window.addEventListener('scroll', handleScroll());
});

onUnmounted(()=>{
    console.log('스크롤 핸들러 제거하기');
    window.removeEventListener('scroll', handleScroll());
});

</script>