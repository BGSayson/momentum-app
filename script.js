//Current date
let dateToday = document.getElementById("uptextContainer1")

function getToday() {
  const date = new Date();
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const dateFormat = `${day}-${month}-${year}`;
  dateToday.innerHTML += `<img src="./icons/calendar.png" class="Icons" id="calendarIcon" style="margin-right: 5px;" >${dateFormat} 
`;
  // console.log("Wait, They don't love you like I love you")
}

//Day of the week on upper right text container
let DOTW = document.getElementById("uptextContainer2")

function getDay() {
  const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
  const d = new Date();
  let day = weekday[d.getDay()];
  DOTW.innerHTML += `${day} <img src="./icons/DAY.png" class="Icons" id="calendarIcon" id="dayIcon"style="width: 50px; height: 50px">`;
}


//USER STORY #2
//Clock function in id="main"
var Clock = document.getElementById("tempTime");

function currentTime() {
  var date = new Date(); 
  let hh = date.getHours();
  let mm = date.getMinutes();
  let ss = date.getSeconds();
  let session = "AM";

  if(hh == 0){
      hh = 12;
  }
  if(hh > 12){
      hh = hh - 12;
      session = "PM";
   }

   hh = (hh < 10) ? "0" + hh : hh;
   mm = (mm < 10) ? "0" + mm : mm;
   ss = (ss < 10) ? "0" + ss : ss;
    
   let time = hh + ":" + mm + " " + session;

  document.getElementById("tempTime").innerText = time; 
  let t = setTimeout(function(){ currentTime() }, 1000);
}


//USER STORY #7
let addQuoteBtn = document.getElementById('addQuoteBtn')

addQuoteBtn.addEventListener('click', () => {
  if (quoteAdderDiv.style.display === "none") {
    quoteAdderDiv.style.display = "block";
  } else {
    quoteAdderDiv.style.display = "none"
  }

})


//USER STORY #5
let wisdomWords = [
  "We do not remember days, we remember moments.", 
  "Like a spring bear.", 
  "If saving you is a sin, then I'll gladly become a sinner", 
  "You won’t, it’s a leap of fate. That’s all it is Miles, a leap of fate.",
  "I just need someone to say, 'Fuck it. This kid deserves a chance.'",
  "It was me, Dio!"
];

const savedQuotes = localStorage.getItem('wisdomWords')
if (savedQuotes) {
  wisdomWords = JSON.parse(savedQuotes);
}

function gimmeQuotes() {
  const quoteIndex = Math.floor(Math.random() * wisdomWords.length);
  const message = wisdomWords[quoteIndex];
  document.getElementById("quotes").textContent = `"${message}"`;
}

const quoteAdderDiv = document.getElementById('quoteAdderDiv')
const qformDiv = document.getElementById('qformDiv')
var qFormInput = document.getElementById('qFormInput')
const qFormBtn = document.getElementById('qFormBtn')

qFormBtn.addEventListener('click', (e) => {
  e.preventDefault()
  addnewQuote();
})

function addnewQuote() {
  if (qFormInput.value === '') {
    qFormInput.placeholder = 'Cannot add a blank quote'
} else {
    wisdomWords.push(`${qFormInput.value}`);
    localStorage.setItem('wisdomWords', JSON.stringify(wisdomWords)); 
    qFormInput.value = '';
    gimmeQuotes();
} 

}

const mybodyisReady = document.getElementById("Reggie")

//function for background image cycle
function bgimageCycle() {
  const bgimages = ["./bgimages/image1.jpg", "./bgimages/image2.jpg", "./bgimages/image3.jpg", "./bgimages/image4.png", "./bgimages/image5.png", "./bgimages/image6.jpg", "./bgimages/image7.jpg", "./bgimages/image8.jpg"]
  
  const bgimageIndex = Math.floor(Math.random() * bgimages.length);
  const currentBgimage = bgimages[bgimageIndex];
  mybodyisReady.style.backgroundImage = `url('${currentBgimage}')`;
}


//USER STORY #1
////////////////////NAME CHANGE////////////////////
var namingInput = document.getElementById('nameInput')
var greetUser = document.getElementById('greetUser')
var namechangeBtn = document.getElementById('namechangeBtn')
const savedName =  localStorage.getItem("userName") 


//function to load saved name from localstorage
function savingName() {
  if (savedName) {
  greetUser.textContent = savedName;
  namingInput.style.display = 'none';
  namechangeBtn.style.display = 'inline-block'
  }
}

namechangeBtn.addEventListener('click', enableNameEditing)
greetUser.addEventListener('dblclick', enableNameEditing)

//USER STORY #3
function enableNameEditing() {
    namingInput.value = greetUser.textContent;
    namingInput.style.display = 'inline';
    namechangeBtn.style.display = 'none';
    greetUser.textContent = '';
}

//event listener/function that saves the name upon pressing enter
namingInput.addEventListener("keypress", (event)  => {
  if (event.key === "Enter") {
    var name = namingInput.value
    localStorage.setItem("userName", name);
      greetUser.textContent = name;
      namingInput.style.display = 'none';
      namechangeBtn.style.display = 'inline-block'
  }
})
////////////////////NAME CHANGE END////////////////////


//USER STORY #4
////////////////////GOAL CHANGE////////////////////
var goalInput = document.getElementById('goalInput')
var goalSet = document.getElementById('goalSet')
var goalchangeBtn = document.getElementById('goalchangeBtn')
const currentGoal =  localStorage.getItem("goalToday") 

//function to load current set goal from localstorage
function settheGoal() {
  if (currentGoal) {
  goalSet.textContent = currentGoal;
  goalInput.style.display = 'none';
  goalchangeBtn.style.display = 'inline-block'
  }
}

goalchangeBtn.addEventListener('click', enableGoalEditing)
goalSet.addEventListener('dblclick', enableGoalEditing)

function enableGoalEditing() {
    goalInput.value = goalSet.textContent;
    goalInput.style.display = 'inline';
    goalchangeBtn.style.display = 'none';
    goalSet.textContent = '';
}

//event listener/function that saves the name upon pressing enter
goalInput.addEventListener("keypress", (event)  => {
  if (event.key === "Enter") {
    var goal = goalInput.value
    localStorage.setItem("goalToday", goal);
      goalSet.textContent = goal;
      goalInput.style.display = 'none';
      goalchangeBtn.style.display = 'inline-block'
  }
})

////////////////////GOAL CHANGE END////////////////////


///Opens and closes the task list
let openSesame = document.getElementById('taskBtn')

openSesame.addEventListener('click', openCloseForm)

function openCloseForm() {
  var closeOpenList = document.getElementById("myTasks");
  if (closeOpenList.style.display === "none") {
    closeOpenList.style.display = "block";
  } else {
    closeOpenList.style.display = "none"
  }
}

//USER STORY #6
//////////////////TODO LIST///////////////////////////
const addTaskForm = document.getElementById('addTaskForm');
const todoInput = document.getElementById('todo-input');
const todoList = document.getElementById('todo-list');


addTaskForm.addEventListener('submit', (e) => {
  e.preventDefault();
  addaTask();
});

function addaTask() {
  if (todoInput.value === '') {
    // alert('You need to enter a task!')
      todoInput.placeholder = "Task cannot be blank!"
      todoInput.style.setProperty('--placeholder-color', '#ddd');
  } else {
    //creates <div>
    const div = document.createElement('div')
    div.className = 'divClass'
    
    //creates the <li> of the task
    const theTask = document.createElement('li')
      theTask.className = 'taskContainer'
      theTask.innerHTML = todoInput.value


    const buttonRow = document.createElement('div');
    buttonRow.className = 'buttonRow';

    //creates the checkmark button and its .checkmark class name
    const taskCheckBtn = document.createElement('input')
      taskCheckBtn.type = 'checkbox';
      taskCheckBtn.className = 'checkmark'

    //creates the delete and edit button
    const taskDelBtn = document.createElement('button')
      taskDelBtn.textContent = 'Delete'
      taskDelBtn.className = 'deleteEditBtns'
      
    //edits the inner content/HTML of the newly created <li> elements using whatever is inputted in the add a task input bar
    let taskEditBtn = document.createElement('button')
      taskEditBtn.textContent = 'Edit'  
      taskEditBtn.className = 'deleteEditBtns'
    

    buttonRow.appendChild(taskCheckBtn);
    buttonRow.appendChild(taskEditBtn);
    buttonRow.appendChild(taskDelBtn);

    div.appendChild(theTask);
    div.appendChild(buttonRow);

    todoList.appendChild(div);

    todoInput.value = '';

    //the following makes the elements actually show on the page
    todoList.appendChild(div)
    
    let newEditedTask;
    saveTaskData();

  taskEditBtn.addEventListener('click', function() {
    if (taskEditBtn.textContent === 'Edit') {
        newEditedTask = document.createElement('input');
        newEditedTask.type = 'text';
        newEditedTask.className = 'editInputBox';
        newEditedTask.value = theTask.innerHTML;
        div.appendChild(document.createElement('br'));
        div.appendChild(newEditedTask);
        theTask.innerHTML = '';
        taskEditBtn.textContent = 'Save';
        saveTaskData();
      } else if (taskEditBtn.textContent === 'Save') {
        theTask.innerHTML = newEditedTask.value
        div.removeChild(newEditedTask)
        taskEditBtn.textContent = 'Edit';
        saveTaskData();
    } 

  newEditedTask.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') {
          theTask.innerHTML = newEditedTask.value
          div.removeChild(newEditedTask)
      } 
        saveTaskData();
    });
  });

  taskDelBtn.addEventListener('click', () => {
      todoList.removeChild(div)
  });
  }
}

function attachListeners() {
  const divs = todoList.querySelectorAll('.divClass');
  divs.forEach(div => {
    const theTask = div.querySelector('.taskContainer');
    const deleteEditBtns = div.querySelectorAll('.deleteEditBtns');
    const taskEditBtn = deleteEditBtns[0];
    const taskDelBtn = deleteEditBtns[1];
    
    let newEditedTask;

    taskEditBtn.addEventListener('click', function() {
      if (taskEditBtn.textContent === 'Edit') {
        newEditedTask = document.createElement('input');
        newEditedTask.type = 'text';
        newEditedTask.size = 1;
        newEditedTask.className = 'editInputBox'
        newEditedTask.value = theTask.innerHTML;
        div.appendChild(document.createElement('br'));
        div.appendChild(newEditedTask);
        theTask.innerHTML = '';
        taskEditBtn.textContent = 'Save';
        saveTaskData();
      } else if (taskEditBtn.textContent === 'Save') {
        theTask.innerHTML = newEditedTask.value;
        div.removeChild(newEditedTask);
        taskEditBtn.textContent = 'Edit';
        saveTaskData();
      }

      newEditedTask.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
          theTask.innerHTML = newEditedTask.value;
          div.removeChild(newEditedTask);
          taskEditBtn.textContent = 'Edit';
          saveTaskData();
        }
      });
    });

    taskDelBtn.addEventListener('click', () => {
      todoList.removeChild(div);
      saveTaskData();
    });
  });
}

function saveTaskData() {
  localStorage.setItem("data", todoList.innerHTML)
}

function showTasks() {
  todoList.innerHTML = localStorage.getItem("data")
}

window.addEventListener("load", () => {
    currentTime();
    getDay();
    getToday();
    gimmeQuotes();
    bgimageCycle();
    savingName();
    settheGoal();
    showTasks();
    attachListeners();
});

