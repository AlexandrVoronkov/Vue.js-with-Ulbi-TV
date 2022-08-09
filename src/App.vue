<template>
<div>
  <div class="post">
    <div><strong>Название:</strong> Пост о JS</div>
    <div><strong>Описание:</strong> Не удалось загрузить карту исходного кода с помощью инструментов разработчика: Не удалось загрузить контент для chrome-extension://dipiagiiohfljcicegpgffpbnjmgjcnf/js/content.js.map: </div>
  </div>
  <div class="post">
    <div><strong>Название:</strong> Пост о JS</div>
    <div><strong>Описание:</strong> Не удалось загрузить карту исходного кода с помощью инструментов разработчика: Не удалось загрузить контент для chrome-extension://dipiagiiohfljcicegpgffpbnjmgjcnf/js/content.js.map: </div>
  </div>
  <div class="post">
    <div><strong>Название:</strong> Пост о JS</div>
    <div><strong>Описание:</strong> Не удалось загрузить карту исходного кода с помощью инструментов разработчика: Не удалось загрузить контент для chrome-extension://dipiagiiohfljcicegpgffpbnjmgjcnf/js/content.js.map: </div>
  </div>
</div>
</template>

<script>
export default {
 data(){
   return{
     likes: 0,
   }
 },
  methods: {
   addLike(){
     this.likes += 1;
   }
  }
}
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.post {
  padding: 15px;
  border: 2px solid rebeccapurple;
  margin-top: 10px;
}

</style>