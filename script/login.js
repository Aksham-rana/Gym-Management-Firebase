function login() {
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();
  const role = document.getElementById("role").value;
  const message = document.getElementById("loginMessage");

  message.innerText = "";

  if (email === "" || password === "") {
    message.innerText = "Please enter both email and password.";
    return;
  }

  signInWithEmailAndPassword(window.firebaseAuth, email, password)
    .then((userCredential) => {
      if (role === "admin") {
        window.location.href = "admin.html";
      } else {
        window.location.href = "member.html";
      }
    })
    .catch((error) => {
      message.innerText = "Login failed: " + error.message;
    });
}
