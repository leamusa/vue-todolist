const { createApp } = Vue;

createApp({
  data() {
    return {
      logo: "./assets/img/logo.png",
      tasks: [
        //array with some tasks
        {
          text: "study",
          done: false,
        },
        {
          text: "eat",
          done: false,
        },
        {
          text: "sleep",
          done: false,
        },
      ],
      newString: "", // A string to hold the value of the new task
    };
  },

  methods: {
    createTask() {
      // Push the new task to the tasks array
      this.tasks.push({
        text: this.newString,
        done: false,
      });
      // Reset newString after adding the task
      this.newString = "";
    },
    setTask(task) {
      // Method to toggle the completion status of a task
      const newDone = !task.done; // Toggle the done property
      this.$set(task, "done", newDone); // Update the done property of the task
    },
    deleteTask(index) {
      // Method to delete a task
      this.tasks.splice(index, 1); // Remove the task from the tasks array
    },
  },
}).mount("#app");
