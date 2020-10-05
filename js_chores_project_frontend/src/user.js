class User {
    constructor(user) {
        this.id = user.id;
        this.name = user.name;
        this.chores = user.chores;
    }

    static userForm(){
        let newForm = document.getElementById('new-user-form');
        newForm.innerHTML += `
            <form id='new-user'>
                <label>Enter Name:</label>
                <input type="text" id="name" placeholder="Please Enter Your Name">
                <input type="submit">
            </form>
        `
    }
}


document.addEventListener('DOMContentLoaded', (event) => {
    // event.preventDefault()
    User.userForm();
    
})

document.getElementById('new-user-form').addEventListener("submit", createUser);

function createUser(event) {
    event.preventDefault()
    console.log('test');
}






