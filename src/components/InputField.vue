<template>
  <div class="input-field-container">
    <input
        :placeholder="placeholder"
        :type="password ? 'password' : 'text'"
        :value="value"
        class="input"
        @input="handleInput"
    >
    <span v-if="errorMessage"
          class="error-message">{{ errorMessage }}</span>
  </div>
</template>

<script>
  export default {
    name: 'InputField',
    props: {
      password: { type: Boolean, default: false },
      placeholder: { type: String, required: true },
      value: { type: String, required: true },
      errorMessage: { type: String, default: null }
    },
    methods: {
      handleInput(event) {
        this.$emit('input', event.target.value)
      }
    }
  }
</script>

<style scoped>

.input-field-container {
  width: 100%;
}

.input {
  font-size: 16px;
  position: relative;
  border: none;
  border-radius: 4px;
  background-color: #F5F5F5;
  height: 50px;
  width: 100%;
  padding: 15px;
}

.input::placeholder {
  color: #A5ABB3;
  font-size: 16px;
}

.input:focus {
  outline: none;
}

.input:hover {
  filter: brightness(98%);
}

.error-message {
  color: red;
}
</style>
