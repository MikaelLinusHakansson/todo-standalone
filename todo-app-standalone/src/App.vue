<template>
  <div>
    <h2>Todo list</h2>
      <label for="taskname">Task: </label>
      <input type="text" id="taskname" name="taskname" v-model="newTask">
      <br>
      
      <label for="date">Date: </label>
      <input type="text" id="date" name="date" v-model="date">
      
      <br>
      <button @click="addNewTask">Add task</button>
      
      <ul>
        <li
        v-for="(tasks, index) in tasks"
        :key="tasks.id"
        @click="this.removeTask(index)">
        {{ tasks.name }}  | {{ tasks.date }}
        </li>
      </ul>

      <ul>
        <li
        v-for="(items) in this.items"
        :key="items.date"
        @click="removeTask(items.date)">
        {{ items.title }}
        </li>
      </ul>


      <!-- <button @click="fetchJsonTasks">Saved todo's from store objekt</button> -->
  </div>
</template>

<script>
  import { mapState, mapActions } from "pinia"
  import { useTodoStore } from "./stores/TodoStore";

  import dayjs from 'dayjs'

  export default {
    data() {
      return {
        task: '',
        // newTask: [],
        items: [],
        date: ''
      }
    },

    computed: {
      ...mapState(useTodoStore, ['tasks', 'getTask']),
    },

    methods: {
      ...mapActions(useTodoStore, ['addTask', 'removeTasks', 'markDone']),

      addNewTask() {
        const newTask = {
          id: new Date().toJSON,
          name: this.newTask.trim(),
          date: dayjs().format('YY-MM-DD HH:mm')
        }

        this.addTask(newTask)
        this.task = this.tasks
      },

      validateDate() {
        return dayjs(this.date).isValid();
      },

      validateTask(item) {
        return item !== null
      },
      
      removeTask(task) {
        this.removeTasks(task)
      },

      fetchJsonTasks() {
              for (let i = 0; i < this.getTask.length; i++) {
                this.items.push(this.getTask[i])
              }
      },

      testDayjs() {
        this.date = dayjs()
        return this.date
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
