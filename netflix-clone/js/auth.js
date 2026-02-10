function login() {
    let user = document.getElementById("username").value;
    let pass = document.getElementById("password").value;

    if(user && pass){
        localStorage.setItem("loggedIn", "true");
        window.location.href = "browse.html";
    } else {
        alert("Please enter credentials");
    }
}

function logout() {
    localStorage.removeItem("loggedIn");
    window.location.href = "index.html";
}

// Protect browse page
if(window.location.pathname.includes("browse.html")){
    if(localStorage.getItem("loggedIn") !== "true"){
        window.location.href = "login.html";
    }
}
