<template>
<div class="app">
  <h1>Страница с постами</h1>
  <div class="app__btns">
    <my-button
        @click="showDialog"
    >
      Создать пользователя
    </my-button>
     <my-select
        v-model="selectedSort"
        :options="sortOptions"
     />
  </div>
  <my-dialog v-model:show="dialogVisible">
    <post-form
        @create="createPost"
    />
  </my-dialog>
  <post-list
      :posts="sortedPosts"
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
     posts : [],
     dialogVisible: false,
     selectedSort: '',
     sortOptions: [
       {value: 'title', name: 'По названию'},
       {value: 'body', name: 'По содержимому'},
     ]
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
  },
  computed: {
    sortedPosts() {
      // в новый массив, без мутации старого
      return [...this.posts].sort((post1, post2) => post1[this.selectedSort]?.localeCompare(post2[this.selectedSort]))
    }
  },

  // watch: {
  //   selectedSort(newValue) {
  //     this.posts.sort((post1, post2) => {
  //       return post1[newValue]?.localeCompare(post2[newValue])
  //     })
  //   }
  // }

}
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.app__btns {
  margin: 15px 0;
  display: flex;
  justify-content: space-between;
}

</style>