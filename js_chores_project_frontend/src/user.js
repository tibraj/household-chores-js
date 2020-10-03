class User {
    constructor(user) {
        this.id = user.id;
        this.name = user.name;
        this.chores = user.chores;
    }
}

document.getElementById("new-user").addEventListener("submit", createUser);

function createUser(e) {
    e.preventDefault;
    const user = {
        name: document.getElementById('name').value
    }
    fetch("http://localhost:3000/users", {
        method: 'POST',
        body: JSON.stringify(user), 
        headers: {
            'Content-Type' : 'application/json',
            'Accept' : 'application/json'
        }
    })
    .then(resp => resp.json())
    .then(json => {
        const newUser = new User(json);
    })
}