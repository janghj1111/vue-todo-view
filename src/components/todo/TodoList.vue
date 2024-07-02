<template>
  <div>
    <ul>
      <li v-for="(item,i) in props.todoList" :key="item" >
        {{ item }}
        <span class="removeBtn" @click="rmBtnClick(i)" >
          <i class="fas fa-trash-alt"></i>
        </span>
      </li>  
    </ul>    
  </div>
</template>

<script setup>
import { defineProps, defineEmits/*, onMounted, ref*/ } from "vue";

const props = defineProps({
  todoList : {
    type:Array
  }
});
const emits = defineEmits(['remove']);

const rmBtnClick = (index) =>{
  emits('remove', index);
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
ul {
  list-style-type: none;
  padding-left: 0;
  margin-top: 0;
  text-align: left;
}

li {
  display: flex;
  min-height: 50px;
  height: 50px;
  line-height: 50px;
  margin: 0.5rem 0;
  padding: 0 0.9rem;
  background: white;
  border-radius: 5px;
}

.checkBtn {
  line-height: 45px;
  color: #62acde;
  margin-right: 5px;
}
.checkBtnCompleted {
  color: #b3adad;
}
.textCompleted {
  text-decoration: line-through;
  color: #b3adad;
}
.removeBtn {
  margin-left: auto;
  color: #de4343;
}
</style>
