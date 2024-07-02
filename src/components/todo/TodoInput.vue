<template>
  <div class="inputBox shadow">
    <input type="text" v-model="newItem"  @keyup.enter="addBtnClick">
    <span class="addContainer" @click="addBtnClick">
      <i class="far fa-plus-square addBtn" aria-hidden="true"></i>
    </span>
  </div>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

input:focus {
  outline: none;
}
.inputBox {
  background: white;
  height: 60px;
  line-height: 60px;
  border-radius: 10px;
}
.inputBox input {
  border-style: none;
  font-size: 1.2rem;
}
.addContainer {
  float: right;
  background: linear-gradient(to right, #62EAC6, #32CEE6);
  display: block;
  width: 3rem;
  border-radius: 0 5px 5px 0;
}
.addBtn {
  color: white;
  vertical-align: middle;
}

</style>

<script setup>
import { /*onMounted,*/ ref, /*defineProps,*/ defineEmits } from "vue";
const emits = defineEmits(['add']);
const newItem = ref('');

const addBtnClick = () => {
  if(newItem.value.length == 0){
    alert("입력된 내용이 없음!!");
  } else {
    emits('add', newItem.value);
    newItem.value=""; //초기화
  }
}
</script>
