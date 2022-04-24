const todoForm = document.querySelector("#todo-form");
const todoInput = todoForm.querySelector("input");
const todoList = document.querySelector("#todo-list");
const todos = [];

const localTodos = JSON.parse(localStorage.getItem("todos"));
//localStorage에 있는 데이터에 접근합니다
if (localTodos) localTodos.forEach((e) => {addTodo(e.todo)});
//localStorage에 데이터가 존재한다면 불러온 데이터를 addTodo로 넘깁니다

function addTodo(todoText) {
    const li = document.createElement("li");
    const span = document.createElement("span");
    const button = document.createElement("button");
    //li, span, button 3개의 fragment 노드를 생성합니다.
    span.innerText = todoText;
    //span의 내부 텍스트에 인자로 받은 todoText를 넣어줍니다.
    button.addEventListener("click", removeTodo);
    //button에 이벤트를 추가합니다.
    todos.push({todo: todoText, id: todos.length + 1});
    //todos 배열에 string과 id값으로 이루어진 객체를 추가해줍니다.
    button.id = todos.length;
    //button의 id에다가 id값을 저장해줍니다.
    button.innerText = "X";
    //button의 내부 텍스트를 X로 지정해줍니다.
    li.appendChild(span);
    li.appendChild(button);
    //li의 자식 노드로 span과 button을 추가해줍니다.
    todoList.appendChild(li);
    //li를 리스트의 자식 노드로 추가해줍니다.
}//html의 todo리스트에 입력받은 todo를 추가해주는 함수

function removeTodo(e) {
    const idNumb = e.target.id; 
    //이벤트 객체를 통해서 이벤트가 발생한 버튼의 id를 받아옴
    todos.splice(idNumb - 1, 1); 
    //todos리스트에서 해당 id값을 가진 객체를 삭제함
    e.target.parentElement.remove(); 
    //이벤트가 발생한 버튼의 부모 노드인 li를 삭제함
    todos.map((todo, i) => {document.getElementById(`${todo.id}`).id = i + 1 ; todo.id = i + 1});
    //todos배열을 map함수를 통해서 순회함
    //todo는 todos배열 안의 객체를, i는 0부터 1씩 늘어나는 인자임
    //todo.id를 통해서 아직 id가 변하지 않은 button에 접근함
    //아직 todo.id는 변하지 않았기 때문에 지워진 id값의 button은 건너뛸 수 있습니다
    //i+1을 통해서 1, 2, 3, 4... 순으로 id를 다시 지정해줍니다
    //todo.id값으로 비어있는 자리에 이미 접근했기 때문에 더이상 사용할 필요가 없으므로 todo.id 또한 다시 지정해줍니다
    saveTodos();
    //saveTodos를 통해서 localStorage에 바뀐 데이터를 갱신합니다
}//html의 todo리스트에서 선택된 li와 todos리스트에 담긴 객체를 삭제하는 함수

function saveTodos() {
    localStorage.setItem("todos", JSON.stringify(todos));
    //localStorage에 갱신된 todos배열을 JSON형태로 삽입합니다
}//localStorage를 갱신합니다

function handleSubmit(e) {
    e.preventDefault(); 
    // form의 submit의 새로고침 기능을 정지한다
    addTodo(todoInput.value);
    //addTodo에 form에 입력된 value를 넘깁니다
    todoInput.value = "";
    //form 안의 내용을 초기화해줍니다
    saveTodos();
    //localStorage를 갱신해줍니다
}//form의 기본기능을 제한하고 입력받은 값을 저장한 뒤 초기화합니다

todoForm.addEventListener("submit", handleSubmit);
//todoForm에 handleSubmit을 연결해줍니다

//1.부모 노드에 접근한다.
//2.부모 노드 내 자식 노드의 개수를 구한다.
//3.자식 노드에서 정보?를 얻는다
//4.자식 노드에서 얻은 정보를 기반으로 부모 노드에서 검색해 index값을 얻는다.
//todos 배열에 String과 id로 이루어진 객체를 추가하는 방식으로 ㄱㄱ
/*
todo-form의 submit을 preventDefault()로 막는다
todos로 기본적인 배열을 작성해놓는다. todos는 String만으로 이루어진 단순 배열이다.
todos에 id값을 추가해준 객체 배열을 따로 만들어준다
배열의 .find함수를 통해서 버튼의 해당 id값에 해당하는 li를 지울수 있도록 한다.
*/
/*
const localTodos = JSON.parse(localStorage.getItem("todos"));
localTodos.forEach((elements)=>{todos.push(elements); paintTodo(elements)});

function saveTodos() {
    localStorage.setItem("todos", JSON.stringify(todos));
}

function paintTodo(newTodo) {
    const li = document.createElement("li");
    const span = document.createElement("span");
    const button = document.createElement("button");
    span.innerText = newTodo;
    button.innerText = "X";
    button.addEventListener("click", (e)=>{e.target.parentElement.remove();})
    li.appendChild(span);
    li.appendChild(button);
    todoList.appendChild(li);
}

function handleTodoSubmit(e) {
    e.preventDefault();
    const newTodo = todoInput.value;
    todoInput.value = "";
    todos.push(newTodo);
    paintTodo(newTodo);
    saveTodos()
}*/