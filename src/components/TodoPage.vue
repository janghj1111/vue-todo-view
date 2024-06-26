<template>
  <div id="app">
    <TodoHeader></TodoHeader>
    <TodoInput @add="addTodo"/>
    <TodoList></TodoList>
    <TodoFooter></TodoFooter>
  </div>
</template>

<script setup>
import TodoHeader from '@/common/TodoHeader.vue'
import TodoInput from '@/common/TodoInput.vue'
import TodoList from '@/common/TodoList.vue'
import TodoFooter from '@/common/TodoFooter.vue'
import { onMounted, ref } from "vue";

const todoList = ref([]);
const newTodoItem = ref("");

const addTodo = (e) => {
  console.log(newTodoItem.value);
  console.log(todoList.value);
  console.log(e);
  
  
  // if(newTodoItem.value.length == 0){
  //   alert("입력된 내용이 없음!!");
  // }
  // else{
  //   console.log(newTodoItem.value);
  //   //localStorage.setItem("newTodoItem", newTodoItem.value);
  //   todoList.value.push(newTodoItem.value);
  //   newTodoItem.value=""; //초기화
  // }
}

onMounted(()=>{
  todoList.value = [];
})



</script>

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
