function login() {
const email = document.getElementById("email").value;
const role = document.getElementById("role").value;


if(email === "") {
alert("Please enter email");
return;
}


document.getElementById("loginPage").style.display = "none";
document.getElementById("dashboardPage").style.display = "block";
document.getElementById("userRole").innerText = "Logged in as: " + role;
}


function logout() {
document.getElementById("dashboardPage").style.display = "none";
document.getElementById("loginPage").style.display = "block";
}


function showSection(section) {
let content = "";
if(section === "members") {
content = "<h3>Member Management</h3><p>Here you can add, update, or delete members.</p>";
} else if(section === "billing") {
content = "<h3>Billing</h3><p>Generate bills and view payment history here.</p>";
} else if(section === "notifications") {
content = "<h3>Notifications</h3><p>Send and view notifications here.</p>";
}
document.getElementById("sectionContent").innerHTML = content;
}