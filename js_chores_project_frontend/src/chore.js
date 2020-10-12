class Chore {
    constructor(chore) {
         this.id = chore.id;
         this.task = chore.task;
          this.duration = chore.duration;
          this.user_id = chore.user_id
      }

      static newChoreForm() {
          let newChoreForm = document.getElementById('new-chore-form');
          newChoreForm.innerHTML += `
              <form id='new-chore'>
                  <label>Enter Task:</label>
                  <input type="text" id="task" placeholder="Please Enter Task">
                  <label>Enter Chore Duration (in minutes):</label>
                  <input type="number" id="duration" placeholder="Enter a Number">
                  <input type="submit">
              </form>
          `
      }
  }



document.getElementById('new-chore-form').addEventListener("submit", createChore);

function createChore(event) {
    event.preventDefault();
    let choreContainer = document.getElementById('chore-container');
    let userId = choreContainer.getAttribute('user-id');
    const chore = {
        task: document.getElementById('task').value,
        duration: document.getElementById('duration').value,
        user_id: userId
    }
    fetch("http://localhost:3000/chores", {
        method: 'POST',
        body: JSON.stringify(chore),
        headers: { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
    })
        .then(response => response.json())
        .then(json => {
            const newChore = new Chore(json);
            console.log(newChore);
            clearChoresList();
            printChores(`${chore.user_id}`)
        })
}

function printChores(idUser) {
    fetch("http://localhost:3000/chores")
    .then(response => response.json())
    .then(chores => {
        chores.forEach(function(chore) {
            if(chore.user.id == `${idUser}`) {
                document.getElementById('chore-container').innerHTML += `
                <div class="container" data-chore-id="${chore.id}">
                <p>Task: ${chore.task} || Duration: ${chore.duration}</p>
                <button type="button" id="chore-button">Done</button>
                </div>
                `
                document.getElementById('chore-button').addEventListener('click', deleteChore)
            }
        }) 
    })
}
{/* <div id="chore-${chore.id}" chore-id=${chore.id}></div> */}
function clearChoresList () {
    document.getElementById('chore-container').innerHTML = ''
}



function deleteChore() {
    let choreId = this.parentElement.getAttribute('data-chore-id')
    console.log(choreId)
    fetch(`http://localhost:3000/chores/${choreId}`, {
        method: 'DELETE',
    })
    let deletedChore = document.querySelector(`.container[data-chore-id="${choreId}"]`);
    deletedChore.remove();
    // chore.style.setAttribute('text-decoration', 'line-through');
    // console.log(document.querySelector(div#'chore-container' p#chore[chore-id=`${chore.id}`]));
        // deletedChore.remove();
    // })
}


