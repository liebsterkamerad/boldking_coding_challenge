<template>
  <div class="todo-item">
    <input class="done-button"
           type="checkbox"
           @click="done = !done">
    <div :class="done && 'done'"
         class="task">{{ task }}
    </div>
    <button class="remove-button"
            @click="$emit('remove')">x
    </button>
  </div>
</template>

<script>

  export default {
    name: 'ToDoItem',
    props: {
      task: {
        type: String
      }
    },
    data() {
      return {
        done: false
      }
    }
  }
</script>

<style scoped>

.todo-item {
  display: flex;
  flex-direction: row;
}

.done {
  text-decoration: line-through;
}

.done-button {
  margin-top: 5px;
  margin-right: 5px;
}

.remove-button {
  margin-left: 5px;
  border-color: transparent;
}

.remove-button {
  margin-left: 5px;
  border-color: transparent;
  border-radius: 5px;
  font-weight: bold;
  color: red;
  display: none;
  cursor: pointer;
}

.todo-item:hover > .remove-button {
  display: block;
}

</style>
