class User {
    constructor(user) {
        this.id = user.id;
        this.name = user.name;
        this.chores = user.chores;
    }
}

document.getElementById('new-user-form').addEventListener("submit", createUser);

function createUser(event) {
    event.preventDefault();
    const user = {
        name: document.getElementById('name').value
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
        })
}

function hideUserForm() {
    document.getElementById('new-user-form').style.display="none";
}


