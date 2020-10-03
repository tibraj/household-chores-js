document.addEventListener('DOMContentLoaded', () => {
    User.createUser();
})

class User {
    constructor(user) {
        this.id = user.id;
        this.name = user.name;
        this.chores = user.chores;
    }

    static createUser(user) {
        document.getElementById("new-user").addEventListener("submit", function(e) {
            e.preventDefault();
            const userName = {
                name: document.getElementById('name').value
            }
            fetch("http://localhost:3000/users", {
            method: 'POST',
            body: JSON.stringify(userName), 
            headers: {
                'Content-Type' : 'application/json',
                'Accept' : 'application/json'
            }
            })
            .then(resp => resp.json())
            .then(json => {
                const newUser = new User(json);
                console.log(newUser)
            })
        })
    } 
}

