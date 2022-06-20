let todos = localStorage.getItem("todos")

try {
    todos = JSON.parse(todos)
    todos = todos.length ? todos : null
} catch (e) {
    todos = null
}

if (!todos) {
    todos = [
        "Inserting something in your Todo..."
    ]
    localStorage.setItem("todos", JSON.stringify(todos))
}

console.log(todos)