<template>
  <div class="home">
    "예시 내용 표시"
    <!-- <HelloWorld msg= /> -->
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
import { onMounted, ref } from "vue";

const todoList = ref([]);

// const addTodo = (param) => {
//   console.log(param);
//   todoList.value.push(param); 
//   //localStorage.setItem("newTodoItem", newTodoItem.value);
// }

// const removeTodo = (index) => {
//   console.log(index);
//   todoList.value.splice(index,1);
// }

// const clearAllTodo = () => {
//   console.log('전부삭제');
// }

onMounted(()=>{
  todoList.value = [];
})
</script>

