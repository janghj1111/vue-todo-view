<template>
  <div class="inputBox shadow">
    <input type="text" :v-model="newItem"  @keyup.enter="addBtnClick">
    <span class="addContainer" @click="addBtnClick">
      <i class="far fa-plus-square addBtn"></i>
    </span>
  </div>
</template>

<script setup>
import { /*onMounted,*/ ref, /*defineProps,*/ defineEmits } from "vue";

// input인데 props가 필요없을 거 같아
// const props = defineProps({
//   newItem :{
//     type : String,
//     defalut : ''
//   }
// });
const emits = defineEmits(['add']);
const newItem = ref('');

const addBtnClick = (e) => {
  console.log(e);
  console.log(newItem.value);
  emits('add', newItem.value);
}
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

input:focus {
  outline: none;
}
.inputBox {
  background: white;
  height: 50px;
  line-height: 50px;
  border-radius: 5px;
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
