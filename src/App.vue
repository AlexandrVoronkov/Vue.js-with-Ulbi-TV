<template>
<div class="app">
  <form @submit.prevent>
    <h4>Создание поста</h4>
    <input
        v-bind:value="title"
        @input="title = $event.target.value"
        class="input"
        type="text"
        placeholder="Название">
    <input
        v-bind:value="body"
        @input="body = $event.target.value"
        class="input"
        type="text"
        placeholder="Описание">
    <button
        class="btn"
        @click="createPost">
        Создать
    </button>
  </form>
  <div class="post" v-for="post in posts" :key="post.id">
    <div><strong>Id:</strong>{{ post.id}}</div>
    <div><strong>Название:</strong>{{ post.title}}</div>
    <div><strong>Описание:</strong>{{ post.body}}</div>
  </div>
</div>
</template>

<script>
export default {
 data(){
   return{
     posts : [
       {id: 1, title: 'JavaScript 1', body: 'Описание поста 1'},
       {id: 2, title: 'JavaScript 2', body: 'Описание поста 2'},
       {id: 3, title: 'JavaScript 3', body: 'Описание поста 3'},
       {id: 4, title: 'JavaScript 4', body: 'Описание поста 4'},
       {id: 5, title: 'JavaScript 5', body: 'Описание поста 5'},
     ],
     title: '',
     body: ''
   }
 },
  methods: {
  createPost(){
    const newPost = {
      id: Date.now(),
      title: this.title,
      body: this.body,
    }
    this.posts.push(newPost);
    this.title = '';
    this.body = '';
  },
 }
}
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.input {
  width: 100%;
  border: 1px solid rebeccapurple;
  padding:  10px 15px;
  margin-top: 15px;
}
form {
  display: flex;
  flex-direction: column;
}
.post {
  padding: 15px;
  border: 2px solid rebeccapurple;
  margin-top: 10px;
}
.btn {
  margin-top: 15px;
  align-self: flex-end;
  padding: 10px 15px;
  background: none;
  color: rebeccapurple;
  border: 1px solid rebeccapurple;
}
</style>