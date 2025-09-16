// // get users from local storage
// var users = [];
// if (localStorage.getItem("user") != null) {
//   users = JSON.parse(localStorage.getItem("user"));
// }

// var loginBtn = document.querySelector("button");
// var loginEmail = document.getElementById("loginEmail");
// var loginPassword = document.getElementById("loginPassword");

// var message = document.createElement("p");
// loginPassword.insertAdjacentElement("afterend", message);

// loginBtn.addEventListener("click", function () {
//   var email = loginEmail.value;
//   var password = loginPassword.value;

//   // validation for empty fields
//   if (email === "" || password === "") {
//     message.innerText = "please fill inputs correctly";
//     message.style.cssText = `
//       color: red;
//       font-weight: 600;`;
//     return;
//   }

//   // check if user exists
//   var found = false;
//   for (var i = 0; i < users.length; i++) {
//     if (users[i].email === email && users[i].password === password) {
//       found = true;
//       break;
//     }
//   }

//   if (found) {
//     // success: go to success page
//     window.location.href = "success.html";
//   } else {
//     message.innerText = "invalid email or password";
//     message.style.cssText = `
//       color: orange;
//       font-weight: 600;`;
//   }
// });

// var btn = document.querySelector(".btn") ;
// var mailInput = document.querySelector("#mail");
// var passInput = document.querySelector("#pass");

// var massage = document.createElement("p");
// loginPasswordInput.insertAdjacentElement("afterend", message);

// btn.addEventListener("click" , function() {
//     var users = JSON.parse(localStorage.getItem("user")) || [];

// })

var btn = document.querySelector(".btn");
var mailInput = document.querySelector("#mail");
var passInput = document.querySelector("#pass");

var message = document.createElement("p");
passInput.insertAdjacentElement("afterend", message);

btn.addEventListener("click", function() {
    var users = JSON.parse(localStorage.getItem("user")) || [];

    for (var i = 0; i < users.length; i++) {
        if (users[i].email === mailInput.value && users[i].password === passInput.value) {
            message.innerText = "Login Success";
            message.style.color = "green";
            
            setTimeout(function() {
                window.location.href = "signsuccess.html";
            }, 1500);

            return; 
        }
    }

    // لو مفيش user مطابق
    message.innerText = "This email is not registered or wrong password";
    message.style.color = "red";
});