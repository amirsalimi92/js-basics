let todos = localStorage.getItem("todos")

try {
    todos = JSON.parse(todos)
    todos = todos.length ? todos : null
} catch (e) {
    todos = null
}

if (!todos) {
    todos = [
        { content: "Inserting something in your Todo...", status: "true" },
        { content: "hey delete it", status: "false" },
    ]
    localStorage.setItem("todos", JSON.stringify(todos))
}


// Create or update the todo lists
function createTodos(todos) {
    let todoList = document.querySelector(".list-group")
    todoList.innerHTML = ""

    // create list tag
    todos.forEach((todo, index) => {
        let li = document.createElement("li")
        li.className = "list-group-item"
        let content = document.createElement("span")
        // content in right is the key of todos
        content.textContent = todo.content

        // for loop in one line!
        // content.style.textDecoration = todo.status ? "initial" : 'line-through'
        if (todo.status === true) {
            content.style.textDecoration = "initial"
        } else if (todo.status === false) {
            content.style.textDecoration = "line-through"
        }

        let deleteBtn = document.createElement("img")
        deleteBtn.src = "media/delete.png"
        deleteBtn.alt = "delete icon"
        deleteBtn.className = "float-right"

        // append content and deleteBtn to li
        li.append(content)
        li.append(deleteBtn)

        // append li to ul
        todoList.append(li)

        deleteBtn.addEventListener("click", e => {
            todos.splice(index, 1)
            localStorage.setItem("todos", JSON.stringify(todos))
            createTodos(todos)
        })

        content.addEventListener("click", e => {

            // you can also write todo[index].status = ...
            todo.status = !(todo.status)
            localStorage.setItem("todos", JSON.stringify(todos))
            createTodos(todos)
        })

    });
}

createTodos(todos)


// Add todo in lists

