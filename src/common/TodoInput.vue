<template>
  <div class="inputBox shadow">
    <input type="text" v-model="newTodoItem"  @keyup.enter="addTodo">
    <span class="addContainer" @click="addTodo">
      <i class="far fa-plus-square addBtn"></i>
    </span>
    <!-- <br/>
    {{ todoList }} -->
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";

const todoList = ref([]);
const newTodoItem = ref("");

const addTodo = () => {
  //console.log(this.newTodoItem);
  console.log(newTodoItem.value);
  localStorage.setItem("newTodoItem", newTodoItem.value);
  todoList.value.push(newTodoItem.value);
  newTodoItem.value=""; //초기화
}

onMounted(()=>{
  todoList.value = [];
})
</script>

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
</style>
