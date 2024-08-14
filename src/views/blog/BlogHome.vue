<template>

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

</template>

<style>

</style>

<script setup>
import { onMounted, ref, inject } from "vue";

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

const handleChange = () => {
    let file = event.target.files[0];
    if (file && file.type.match(/^image\/(png|jpeg)$/)) {
        preview.value = window.URL.createObjectURL(file) // URL이 할당됨
    }
}

</script>