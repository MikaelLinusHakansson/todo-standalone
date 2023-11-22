<template>
  <div>
      <h2>Todo list</h2>
        <input type="text" v-model="newTask">
        <button @click="addNewTask">Add task</button>
      
        <ul>
          <li
          v-for="(tasks, index) in task"
          :key="tasks.id"
          @click="removeTask(index)">
          {{ tasks.name }}
          </li>
        </ul>

        <ul>
          <li
          v-for="(items, notIndex) in this.items"
          :key="items.date"
          @click="removeTask(notIndex)">
          {{ items.title }}
          </li>
        </ul>

        <button @click="fetchJsonTasks">Saved todo's from .jsonfile</button>

        <button @click="testDayjs">dayjs</button>

        <div>
          <table>
          <div>
            <ul>
              <span>
                {{ date }}
              </span>
            </ul>
          </div>
        </table>
        </div>
  </div>
</template>


<script>
  import { mapState } from "pinia"
  import { useTodoStore } from "@/stores/todoStore.js";

  import dayjs from 'dayjs'

  export default {
    data() {
      return {
        task: [],
        newTask: '',
        items: [],
        date: ''
      }
    },

    computed: {
      ...mapState(useTodoStore, ['getItems']),
    },

    methods: {
      addNewTask() {
        const newTask = {
          id: new Date().toJSON,
          name: this.newTask.trim()
        }

        if (this.validateTask(this.newTask)) {
          this.task.unshift(newTask);
          this.newTask = "";
        } else {
          alert("Task is empty")
        }
      },

      validateTask(item) {
        return item.length > 0
      },
      
      removeTask(list) {
        this.task.splice(list, 1);
        this.items.splice(list, 1)
      },

      fetchJsonTasks() {
              for (let i = 0; i < this.getItems.length; i++) {
                this.items.push(this.getItems[i])
              }
      },

      testDayjs() {
        this.date = dayjs(new Date()).toDate()
        return this.date
      }
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
