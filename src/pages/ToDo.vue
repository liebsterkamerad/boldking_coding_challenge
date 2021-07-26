<template>
  <div class="todo-background">
    <div class="todo-list">
      <div class="todo-input">
        <input-field v-model="newToDo"
                     placeholder="Add new todo"
                     @keyup.enter.native="addNewTodo"
        />
        <button-c style="margin-left: 10px"
                  @click="addNewTodo">Add
        </button-c>
      </div>

      <transition-group name="fade">
        <to-do-item v-for="(todo) in todos"
                    :key="todo.id"
                    :task="todo.task"
                    @remove="removeToDo(todo.id)"
        />
      </transition-group>

    </div>
  </div>
</template>

<script>
  import ButtonC from '@/components/Button'
  import InputField from '@/components/InputField'
  import ToDoItem from '@/components/ToDoItem'

  export default {
    name: 'ToDo',
    components: { ButtonC, ToDoItem, InputField },
    data() {
      return {
        todos: [
          { id: 'todo-1', task: 'Solve coding challenge' },
          { id: 'todo-2', task: 'Get offer' }
        ],
        newToDo: null
      }
    },
    methods: {
      addNewTodo() {

        if (this.newToDo) {
          this.todos.unshift({
            id: 'todo-' + Math.round(Math.random() * 1000000),
            task: this.newToDo
          })
          this.newToDo = ''
        }
      },
      removeToDo(index) {
        this.todos.splice(index, 1)
      }
    }
  }
</script>

<style scoped>

.todo-background {
  position: absolute;
  width: 100%;
  height: calc(100vh);
}

.todo-list {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 22rem;
}

.todo-input {
  display: flex;
  flex-direction: row;
  margin-bottom: 20px
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .2s
}

.fade-enter, .fade-leave-active {
  opacity: 0
}
</style>
