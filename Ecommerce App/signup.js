let form = document.querySelector("form");
//console.log(form);

form.addEventListener("submit", (e) => {
  e.preventDefault();

  //Get all the input values
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;
  let confirmPassword = document.getElementById("confirmPassword").value;

  console.log({ name, email, password, confirmPassword });

  //checking all inputs are filled or not
  if (!name || !email || !password || !confirmPassword)
    return alert("fill all the fields");

  //checking the passwords
  if (password !== confirmPassword) {
    return alert("passoword wrong");
  }

  // we are fetching the users from localstorage
  let users = JSON.parse(localStorage.getItem("users")) || [];

  console.log(users);

  //we are creating the new user
  let newuser = {
    id: Date.now(),
    name: name,
    email: email,
    password: password,
    cart: [],
  };

  //we are updating the users that we got from  localStorage
  users.push(newuser);

  //we are adding the updated users in localstorage
  localStorage.setItem("users", JSON.stringify(users));

  alert("Registered User Succesfully ");

  window.location.href = "login.html";
});
