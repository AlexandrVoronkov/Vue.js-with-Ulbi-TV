<template>
<input :value="modelValue" @input="updateInput" class="input" type="text">
</template>

<script>
export default {
  name: "my-input",
  props: {
    modelValue: [String, Number] //пропсом принимаем modelValue, которое может быть строкой или числом
  },
  methods: {
    updateInput(event){
      this.$emit('update:modelValue', event.target.value) // эммитим по особому шаблону,
                                                          // вторым параметром значение которое должно обновиться.
                                                          // Когда вводят в input, вызывается событие modelValue
    }
  }
}
</script>

<style scoped>
.input {
  width: 90%;
  border: 1px solid rebeccapurple;
  padding:  10px 15px;
  margin-top: 15px;
}
</style>