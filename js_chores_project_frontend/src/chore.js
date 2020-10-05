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

document.addEventListener('DOMContentLoaded', (event) => {
    // event.preventDefault()
    Chore.newChoreForm();
    console.log('success');
})

document.getElementById('new-chore-form').addEventListener("submit", createChore);





