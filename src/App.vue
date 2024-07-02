<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
  <!-- vue 부트스트랩 테스트 -->
  <!-- <div>
    <button type="button" class="btn btn-primary">Primary</button>
  </div> -->

  <!-- todo화면 -->
  <!-- <TodoPage /> -->
  <PageHeader/> <!-- 헤더 컴포넌트 -->
    <router-view /> <!-- 페이지 이동이 보여질 곳 -->
  <PageFooter/> <!-- 푸터 컴포넌트 -->
</template>

<script>
//import TodoPage from './components/TodoPage.vue'
import PageHeader from '@/components/PageHeader.vue'
import PageFooter from '@/components/PageFooter.vue'

export default {
  name: 'App',
  components: {
    PageHeader,
    PageFooter
    //TodoPage
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

</style>
