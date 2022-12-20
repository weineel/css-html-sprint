<script setup lang="ts">
</script>

<template>
  <div class="css-keyword">
    <div class="word"> 这是话 </div>
    <div class="word1"> 这是第一句话 </div>
    <div class="word2"> 这是第二句话 </div>
  </div>
</template>

<style scoped>
.css-keyword {
  color: red;
  height: 200px;
}
.word1 {
  color: blue;
  /* display 属性的 initial 值是 inline */
  all: initial;
}

.word2 {
  all: initial;
  color: blue;
}
</style>
