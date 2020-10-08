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



// document.getElementById('new-chore-form').addEventListener("submit", createChore);

// function createChore(event) {
//     event.preventDefault();
//     const chore = {
//         task: document.getElementById('task').value,
//         duration: document.getElementById('duration').value
//     }
//     fetch("http://localhost:3000/chores", {
//         method: 'POST',
//         body: JSON.stringify(chore),
//         headers: { 
//             'Content-Type': 'application/json',
//             'Accept': 'application/json'
//         }
//     })
//         .then(response => response.json())
//         .then(json => {
//             const newChore = new Chore(json);
//             console.log(newChore);
//         })
// }




