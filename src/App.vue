<template>
<div class="app">
  <h1>Страница с постами</h1>

  <my-button
      @click="showDialog"
      style="margin: 15px 0;"
  >
    Создать пользователя
  </my-button>
  <my-dialog v-model:show="dialogVisible">
    <post-form
        @create="createPost"
    />
  </my-dialog>

  <post-list
      :posts="posts"
      @remove="removePost"
  />
</div>
</template>

<script>
import PostForm from "@/components/PostForm";
import PostList from "@/components/PostList";
import axios from 'axios';
export default {
  components: {
    PostList, PostForm
  },
 data(){
   return{
     posts : [

     ],
     dialogVisible: false,
   }
 },
  methods: {
  createPost(post){
    this.posts.push(post);
    this.dialogVisible = false;
  },
  removePost(post){
    this.posts = this.posts.filter(p => p.id !== post.id) // т.к. filter возвращает новый массив, перезаписываем старый
  },
    showDialog(){
      this.dialogVisible = true;
    },
    async fetchPosts() {
    try {
      setTimeout(async () => {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts?_limit=10');
        this.posts = response.data;
      }, 1000);

    } catch (e){
      alert('Ошибка')
    }
    }
 },
  mounted() { // хук mounted
    this.fetchPosts();
  }
}
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}


</style>