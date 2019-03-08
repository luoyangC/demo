<template>
  <div id="app">
    <h1>表格测试</h1>
    <a href="https://github.com/luoyangC/demo" target="_blank">源码地址</a>
    <data-from></data-from>
  </div>
</template>

<script>
import DataFrom from './components/DataFrom.vue'

export default {
  name: 'app',
  components: {
    DataFrom,
  }
}
</script>
