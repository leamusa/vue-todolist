# vue-todolist

# Description:

Redo the exercise of the to do list. This time, however, each todo will be an object, formed by two properties:
text, a string that indicates the text of todo
done, a boolean (true/false) that indicates whether the todo has been done or not

# MILESTONE 1

Print within an HTML list an item for each todo. If the done property is equal to true, display the crossed-out todo text.

# MILESTONE 2

Display next to each item has an "x": clicking on it, the todo is removed from the list.

# MILESTONE 3

Prepare a text input field and an "add" button: by clicking on the button, the typed text is read and used to create a new todo, which is then added to the list of existing todos.
Bonus:

1. - in addition to clicking on the button, also intercept the ENTER key to add todo to the list
2. - clicking on the item text, reverse the value of the corresponding todo’s done property (if it was equal to false, set true and vice versa)
     :date: I remind you that this afternoon there will be a recap on Vue around 16 you will contact your fantastic guardians for further details later.

### Features

- **Add Task**: Users can add new tasks to the list.
- **Delete Task**: Users can delete tasks from the list.
- **Mark as Complete**: Users can mark tasks as complete by checking them off.

# Tools

-**v-for**: The `v-for="(task, index) directive in tasks"` is used to iterate on the `tasks` array and dynamically create a `<li>` element for each array element. Each item in the list represents a task to do.

**v-if and v-else**: The directive `v-if="errorString"` checks if the variable `errorString` is defined and not empty. If `errorString` contains an error message, the paragraph with class `error`is shown, otherwise the paragraph with class `success`is shown. This dynamically displays an error message if an error occurs when adding a new task, otherwise a success message is displayed.

In this case, `v-for` is used to iterate on the `tasks` array and dynamically render the task list elements:

- `v-if` and `v-else` are used to handle the conditional display of error or success messages based on the content of the `errorString`variable.

### JavaScript Logic

- Vue.js is initialized using `createApp()` and `mount(ed)` to the `#app` element in the HTML document.
- Inside the Vue instance, data properties and methods are defined to manage task data and handle user interactions:
- **Vue.js Integration**: The application is built using Vue.js. Vue's reactivity system is utilized to dynamically update the task list as tasks are added, deleted, or marked as complete.

- **Data Management**: The application manages tasks data using Vue's `data` option. Tasks are stored in an array named `tasks`, and a string variable `newString` holds the value of the new task to be added.

- **Methods**: Vue methods are defined to handle user interactions. These methods include `createTask()` to add a new task to the list, `setTask(task)` to toggle the completion status of a task, and `deleteTask(index)` to remove a task from the list.
