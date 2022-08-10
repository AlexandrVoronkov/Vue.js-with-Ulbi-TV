<template>
  <div class="post" v-for="post in posts" :key="post.id">
    <div><strong>Id:</strong>{{ post.id}}</div>
    <div><strong>Название:</strong>{{ post.title}}</div>
    <div><strong>Описание:</strong>{{ post.body}}</div>
  </div>
</template>

<script>
export default {
 props: {
   posts: {
     type: Array,
     required: true
   }
 }
}
</script>

<style scoped>
.post {
  padding: 15px;
  border: 2px solid rebeccapurple;
  margin-top: 10px;
}
</style>