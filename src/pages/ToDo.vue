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
                    :done="todo.done"
                    :task="todo.task"
                    @remove="removeToDo(todo.id)"
                    @toggleDone="toggleTodo(todo)"
        />
      </transition-group>

    </div>
  </div>
</template>

<script>
  import ButtonC from '@/components/Button'
  import InputField from '@/components/InputField'
  import ToDoItem from '@/components/ToDoItem'
  import idb from '@/idb'

  export default {
    name: 'ToDo',
    components: { ButtonC, ToDoItem, InputField },
    data() {
      return {
        todos: [],
        newToDo: ''
      }
    },
    async created() {
      // await idb.saveTodo({ id: 1, task: 'Solve coding challenge' })
      // await idb.saveTodo({ id: 2, task: 'Get offer' })
      this.todos = await idb.getTodos()

    },
    methods: {
      async addNewTodo() {
        if (this.newToDo) {
          await idb.saveTodo({
            task: this.newToDo,
            done: false
          })
          this.todos = await idb.getTodos()
          this.newToDo = ''
        }
      },
      async removeToDo(todo_id) {
        await idb.deleteTodo(todo_id)
        this.todos = await idb.getTodos()
      },
      async toggleTodo(todo) {
        todo.done = !todo.done
        await idb.saveTodo(todo)
        this.todos = await idb.getTodos()
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
