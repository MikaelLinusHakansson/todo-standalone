<template>
  <div>
    <h2>Todo list</h2>

    <div>
        <label for="taskname">Task: </label>
        <input
        type="text" 
        id="taskname" 
        name="taskname" 
        v-model="newTaskName">
    </div>
    
    <div>
      <label for="date">Date: </label>
      <input 
      type="text"
      id="date" 
      name="date" 
      v-model="newTaskDate" 
      placeholder="YYYY-MM-DD">
    </div>

    
    <div>
      <ul>
        <li 
          v-for="(task, index) in tasks" 
          :key="task.id">
          <input 
          type="checkbox" 
          v-model="task.status"
          @click="markDone(index)">
          {{ task.name }}  | {{ task.date }}
          <div>
            <label for="editTask"></label>
            <label for="editDate"></label>
            <input type="text" id="editTask" placeholder="Task:" :hidden="isVisable">
            <input type="text" id="editDate" placeholder="YYYY-MM-DD" :hidden="isVisable">
          </div>
          <button @click="this.removeTasks(index)">x</button>
          <button @click="editTask(index)">edit</button>
          <br>
          <button :hidden="isVisable">save</button>
        </li>
      </ul>
    </div>

    <button @click="addNewTask">Add</button>
  </div>
</template>

<script>
  import { mapState, mapActions } from "pinia"
  import { useTodoStore } from "./stores/TodoStore";

  export default {
    data() {
      return {
        newTaskName: '',
        newTaskDate: '',
        isVisable: false
      }
    },

    computed: {
      ...mapState(useTodoStore, ['tasks']),
    },

    methods: {
      ...mapActions(useTodoStore, ['createNewTask', 'removeTasks', 'markDone']),

      addNewTask() {
        if (this.createNewTask({name: this.newTaskName, date: this.newTaskDate})) {
          this.newTaskName = ''
          this.newTaskDate = ''
        } else {
          alert("Invalid input")
        }
      },

      editTask(index) {
        this.isVisable = !this.isVisable
        console.log(index)
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
