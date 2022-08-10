<template>
  <form @submit.prevent>
    <h4>Создание поста</h4>
    <!--  Без явного указания атрибута (v-model), v-model работает с пропсом modelValue  -->
    <my-input
        v-model="post.title"
        type="text"
        placeholder="Название"
    ></my-input>
    <my-input
        v-model="post.body"
        type="text"
        placeholder="Описание"
    ></my-input>
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

form {
  display: flex;
  flex-direction: column;
}

</style>