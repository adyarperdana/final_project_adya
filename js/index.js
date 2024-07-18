let numbers = [];

let i = 1;
while (i <=30) {
    numbers.push(i);
    i++;
}

// Highlight Javascript Object
let portfoliodata =[
    {
      "title": "Pantai Kelan",
      "category": "Bali",
      "image": "./images/7.jpg",
      "like": "34",
      "date": "Juli 14, 2024"
    },
    {
      "title": "Pantai Sanur",
      "category": "Bali",
      "image": "./images/8.jpg",
      "like": "84",
      "date": "Juli 14, 2024"
    },
    {
      "title": "Pulau Komodo",
      "category": "Labuan Bajo",
      "image": "./images/14.jpg",
      "like": "29",
      "date": "Juli 14, 2024"
    },
    {
        "title": "Ubud",
        "category": "Bali",
        "image": "./images/15.jpg",
        "like": "51",
        "date": "Juli 14, 2024"
    },
    {
        "title": "Nusa Penida",
        "category": "Bali",
        "image": "./images/12.jpg",
        "like": "100",
        "date": "Juli 14, 2024"
    },
    {
      "title": "Pink Beach",
      "category": "Labuan Bajo",
      "image": "./images/13.jpg",
      "like": "12",
      "date": "Juli 14, 2024"
    },
    {
     "title": "Pulau Padar",
      "category": "Labuan Bajo",
      "image": "./images/11.jpg",
      "like": "10",
      "date": "Juli 14, 2024"
    },
    {
        "title": "Kintamani",
        "category": "Bali",
        "image": "./images/9.jpg",
        "like": "11",
        "date": "Juli 14, 2024"
      },
    {
     "title": "Sembalun Rinjani",
      "category": "Lombok",
      "image": "./images/10.jpg",
      "like": "14",
      "date": "Juli 14, 2024"
    }
  ]

let konten_el = document.getElementById("konten-holder");


const display = (data = portfoliodata) => {
    konten_el.innerHTML = "";

    // Highlight ForEach Loop
    data.forEach(function(item) {
      konten_el.innerHTML += `
        <div class="col-md-4">
          <div class="card mb-4 bg-light">
            <img src="${item.image}" class="w-100 img-thumbnail" alt="${item.title}">
            <div class="card-body">
              <div class="row">
                <div class="col">
                  <h5 class="card-title text-dark">${item.title}</h5>
                </div>
                <div class="col d-flex justify-content-end text-right">
                  <p class="bi-hand-thumbs-up-fill text-dark">${item.like}</p>
                </div>
              </div>
              <i class="card-text text-secondary">${item.date}</i>
            </div>
          </div>
        </div>
      `;
    });
}

// Highlight Function
function show_all() {
    display();
}

function show_bali() {
    konten_el.innerHTML = "";

    // Highlight Symbol ===
    let filtered_category = portfoliodata.filter(item => item.category === "Bali");
    display(filtered_category);
}

function show_labuanbajo() {
    konten_el.innerHTML = "";

    // Highlight Symbol ==
    let filtered_category = portfoliodata.filter(item => item.category == "Labuan Bajo");
    display(filtered_category);
}

function show_lombok() {
    konten_el.innerHTML = "";

    // Highlight Filter Function
    let filtered_category = portfoliodata.filter(item => item.category === "Lombok");
    display(filtered_category);
}

 

function displayTodo() {
    let dataLocalStorage = localStorage.getItem("todos")
    console.log(dataLocalStorage, "==> VALUE LOCAL");
    let dataTodos = JSON.parse(dataLocalStorage)

    let listTodo = ""

    if (dataTodos) {
        
        for (let index = 0; index < dataTodos.length; index++) {
            // const element = array[index];
            listTodo += `
                <ul class="list-group list-group-horizontal rounded-0 bg-transparent m-2">
                    <li class="list-group-item d-flex align-items-center ps-0 pe-3 py-1 rounded-0 bg-transparent">
                        <div class="form-check">
                            <input type="checkbox" onchange="setComplete(checked, id)" value="" name="" id=${dataTodos[index].id} aria-label="..." ${dataTodos[index].chekced ? "checked" : ""}>
                        </div>
                    </li>
                    <li class="list-group-item px-3 py-1 d-flex align-items-center flex-grow-1 border-0 bg-transparent">
                        <div class="form-check">
                            <p class="lead fw-normal mb-0">
                                ${dataTodos[index].name}
                            </p>
                        </div>
                    </li>
            
                    <li class="list-group-item px-3 py-1 d-flex align-items-center flex-grow-1 border-0 bg-transparent">
                        <button type="button" class="btn btn-danger" onclick=(deleteTodo(${dataTodos[index].id}))>
                            Delete
                        </button>
                    </li>
                </ul>
            `
        }
    }

    // console.log(listTodo);

    document.getElementById("list-todo").innerHTML = listTodo

}

function submitTodo() {
    
    const todo = document.getElementById("add-todo").value

    // console.log(todo, "==> APA");
    let todos = JSON.parse(localStorage.getItem("todos"))
    // console.log(todos, "==> APA");

    if (todos) {
        // console.log("masuk if");
        let inputUser = {
            id: todos[todos.length-1].id + 1,
            name: todo,
            chekced: false
        }
        // console.log(inputUser, "==> apa ini");

        todos.push(inputUser)
    } else {
        console.log("masuk else");
        todos = [{
            id: 0,
            name: todo,
            chekced: false
        }]
    }

    localStorage.setItem("todos", JSON.stringify(todos))

    document.getElementById("add-todo").value = ""

    displayTodo()
}

function setComplete(checked, id) {

    // console.log(checked, "=> VALUE 1");
    // console.log(id," ==> Value 2");

    let todos = JSON.parse(localStorage.getItem("todos"))

    todos = todos.map(el => {
        if (el.id === Number(id)) {
            el.chekced = checked
        }
        return el
    })

    let resultStringfy = JSON.stringify(todos)

    localStorage.setItem("todos", resultStringfy)
    // console.log(todos, "==> INI NEW TODOS AFTER CHECKED");
}

function deleteTodo (id) {
    let todos = JSON.parse(localStorage.getItem("todos"))

    todos = todos.filter(el => el.id !== Number(id))

    // console.log(todos, "==> RESULT DELETE");
    // if (todos.length) {
    //     localStorage.setItem("todos", JSON.stringify(todos))
    // }else {
    //     localStorage.removeItem("todos")
    // }

    // Highlight ternary operator 
    todos.length ? localStorage.setItem("todos", JSON.stringify(todos)) : localStorage.removeItem("todos");

    displayTodo()
}

