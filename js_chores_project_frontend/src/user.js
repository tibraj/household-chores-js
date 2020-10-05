class User {
    constructor(user) {
        this.id = user.id;
        this.name = user.name;
        this.chores = user.chores;
    }
}

document.getElementById('new-user-form').addEventListener("submit", createUser);




