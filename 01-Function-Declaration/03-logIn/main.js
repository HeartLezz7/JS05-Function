let username = prompt("Enter username ");
let password = prompt("Enter password ");

function login (name, pass) {
    if (name == "admin" && pass === "P@ssw0rd") {
        alert("login success");
    }else {
        alert("access denind");
    }
}

login(username, password)