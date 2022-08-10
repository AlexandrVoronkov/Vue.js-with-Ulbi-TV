<template>
  <form @submit.prevent>
    <h4>Создание поста</h4>
    <input
        v-model="post.title"
        class="input"
        type="text"
        placeholder="Название">
    <input
        v-model="post.body"
        class="input"
        type="text"
        placeholder="Описание">
    <my-button
        class="btn"
        style="align-self: flex-end; margin-top: 15px"
        @click="createPost"
    >
      Создать
    </my-button>
  </form>
</template>

<script>

export default {

  data(){
    return {
      post: {
        title: '',
        body: ''
      }
    }
  },
  methods: {
    createPost(){
      this.post.id = Date.now();
      this.$emit('create', this.post) //создание события, первый аргумент - название,
                                      // остальные передаются в функцию родителя
      this.post = {
        title: '',
        body: ''
      }
    }
  }
}
</script>

<style scoped>
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

</style>