<template>
  <div>
    <h2>Todo list</h2>
      <label for="taskname">Task: </label>
      <input 
      type="text"
      id="taskname"
      name="taskname"
      v-model="newTask">
      <br>
      
      <label for="date">Date: </label>
      <input
      type="text"
      id="date"
      name="date"
      v-model="date"
      placeholder="YYYY-MM-DD">
      <br>

      <button @click="addNewTask">Add task</button>
      
      <ul>
        <li
        v-for="(tasks, index) in tasks"
        :key="tasks.id">
        <input type="checkbox" v-model="changeStatusOfTask">
        {{ tasks.name }}  | {{ tasks.date }}
        <button @click="this.removeTask(index)">x</button>
        </li>
      </ul>
  </div>
</template>

<script>
  import { mapState, mapWritableState, mapActions } from "pinia"
  import { useTodoStore } from "./stores/TodoStore";

  import dayjs from 'dayjs'

  export default {
    data() {
      return {
        completedTask: false,
        newTask: '',
        date: '',
      }
    },

    computed: {
      ...mapState(useTodoStore, ['tasks', 'getTask']),
      ...mapWritableState(useTodoStore, ['tasks']),
    },

    methods: {
      ...mapActions(useTodoStore, ['addTask', 'removeTasks', 'markDone']),

      addNewTask() {
        const task = {
          id: new Date().toJSON(),
          name: this.newTask.trim(),
          date: this.date,
        }

        if (this.validateTask(task.name) === '' || !this.validateDate(task.date)) {  // TODO: seperate logic to the store
          if (task.name === '') {
            alert("No task found")
          } else if (task.name !== '' && !this.validateDate(task.date)) {
            alert("Wrong date format")
          } else {
            alert("Invalid input")
          }
        } else {
          this.addTask(task)
          this.newTask = ''
          this.date = ''
        }
      },

      completeStatus() {
        changeStatusOfTask != this.completedTask
      },
      
      validateTask(task) {
        if (task.length > 0) {
          return task
        } else {
          return ''
        }
      },

      validateDate(date) {
        return dayjs(date).isValid()
      },

      removeTask(task) {
        this.removeTasks(task)
      },
    }
  }
</script>

<style>
  * {
  box-sizing: border-box;
}

html {
  font-family: 'Jost', sans-serif;
}

body {
  margin: 0;
}

header {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  margin: 3rem;
  border-radius: 10px;
  padding: 1rem;
  background-color: #1b995e;
  color: white;
  text-align: center;
}

#app {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  margin: 3rem;
  border-radius: 10px;
  padding: 1rem;
  text-align: center;
}

#app h2 {
  font-size: 2rem;
  border-bottom: 4px solid #ccc;
  color: #1b995e;
  margin: 0 0 1rem 0;
}

#app ul {
  list-style: none;
  margin: 1rem 0;
  padding: 0;
}

#app li {
  margin: 1rem 0;
  font-size: 1.25rem;
  font-weight: bold;
  background-color: #8ddba4;
  padding: 0.5rem;
  color: #1f1f1f;
  border-radius: 25px;
}

#app input {
  font: inherit;
  border: 1px solid #ccc;
}

#app input:focus {
  outline: none;
  border-color: #1b995e;
  background-color: #d7fdeb;
}

#app button {
  font: inherit;
  cursor: pointer;
  border: 1px solid #ff0077;
  background-color: #ff0077;
  color: white;
  padding: 0.05rem 1rem;
  box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.26);
}

.small-button {
  display: inline-block;
  font: inherit;
  cursor: pointer;
  border: 1px solid #ff0077;
  background-color: black;
  
}

#app button:hover,
#app button:active {
  background-color: #ec3169;
  border-color: #ec3169;
  box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.26);
}
</style>
