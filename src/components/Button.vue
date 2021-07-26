<template>
  <div>
    <button class="button"
            @click="$emit('click', $event);">
      <slot/>
    </button>
  </div>
</template>

<script>
  export default {
    name: 'ButtonC'
  }
</script>

<style scoped>

button {
  background-color: #41FFB4;
  border: none;
  border-radius: 4px;
  font-weight: bold;
  font-size: 14px;
  letter-spacing: .1rem;
  min-width: 50px;
  height: 50px;
  cursor: pointer;
  padding-left: 20px;
  padding-right: 20px;
}


.button:focus:before {
  filter: brightness(90%);
}

.button:hover {
  filter: brightness(90%);
}

</style>
