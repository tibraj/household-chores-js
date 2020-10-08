class User {
    constructor(user) {
        this.id = user.id;
        this.name = user.name;
        this.chores = user.chores;
    }

    static newUserForm() {
        let newUserForm = document.getElementById('new-user-form');
        newUserForm.innerHTML += `
            <form>
                <label>Enter Name:</label>
                <input type="text" id="name" placeholder="Please Enter Your Name">
                <input type="submit">
            </form>
        `   
    }
}

document.addEventListener('DOMContentLoaded', (event) => {
    User.newUserForm();
 })

document.getElementById('new-user-form').addEventListener("submit", createUser);

function createUser(event) {
    event.preventDefault();
    const user = {
        name: document.getElementById("name").value
    }
    fetch("http://localhost:3000/users", {
        method: 'POST',
        body: JSON.stringify(user),
        headers: { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
    })
        .then(response => response.json())
        .then(json => {
            const newUser = new User(json);
            console.log(newUser);
            Chore.newChoreForm();
            clearUserForm();
            userHeader(`${newUser.name}`)
        })
}

function clearUserForm() {
    const userForm = document.getElementById('new-user-form');
    userForm.innerHTML = ''
}

function userHeader(name) {
    let userContainer = document.getElementById('user-container');
    // userContainer.setAttribute('user-id', `${newUser.id}`);
    userContainer.innerHTML= `<h1>${name}'s Chores:</h1>`;
}

    





