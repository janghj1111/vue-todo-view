<template>
  <div class="clearAllContainer">
      <span class="clearAllBtn" @click="clearClick">Clear All
      </span>
  </div>
</template>

<style scoped>
.clearAllContainer {
  width: 8.5rem;
  height: 50px;
  line-height: 50px;
  background-color: white;
  border-radius: 5px;
  margin: 0 auto;
}
.clearAllBtn {
  color: #e20303;
  display: block;
}
</style>

<script setup>
import { defineEmits/*, onMounted, ref*/ } from "vue";

const emits = defineEmits(['clear']);

const clearClick = () =>{
  emits('clear');
}


</script>
