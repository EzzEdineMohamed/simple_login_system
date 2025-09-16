
var users = [];

if (localStorage.getItem("user") != null) {
  users = JSON.parse(localStorage.getItem("user"));
} else {
  users = [];
}

var button = document.querySelector("button");
var useremailInput = document.getElementById("email");
var userNameInput = document.getElementById("username");
var userpasswordInput = document.getElementById("password");

var message = document.createElement("p");
userpasswordInput.insertAdjacentElement("afterend", message);

button.addEventListener("click", function () {
  // in case of data is not valid
  if (
    useremailInput.value === "" ||
    userNameInput.value === "" ||
    userpasswordInput.value === ""
  ) {
    message.innerText = "please fill inputs correctly";
    message.style.cssText = `
      color : red ;
      font-weight : semi-bold ;`;
    return;
  }

  // user object
  var AddUser = {
    email: useremailInput.value,
    name: userNameInput.value,
    password: userpasswordInput.value,
  };

  // check if email already exists BEFORE push
  for (var i = 0; i < users.length; i++) {
    if (users[i].email === AddUser.email) {
      message.innerText = "This data of user is already registered";
      message.style.cssText = `
        color: orange;
        font-weight: bold;
        margin-top : 5px`;
      return;
    }
  }

  // add user in users array
  users.push(AddUser);

  // store properties of user in local storage
  localStorage.setItem("user", JSON.stringify(users));

  // success message
  message.innerText = "Sign Up Success";
  message.style.cssText = `
    padding-block: 10px;
    color: green;
    font-weight: bold;
    margin-top : 5px;
  `;
});
