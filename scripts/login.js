const loginForm = document.querySelector('#login');
// console.log(loginForm);
loginForm.addEventListener('submit', function (event){
    event.preventDefault();
    const messageH1 = document.querySelector('#message')
    messageH1.textContent ='successfully logged in';
})


// Write fullName function
 function fullName(firstName, lastName) {
    // return firstName + lastName;
    return `${firstName} ${lastName}`;
 }

 const myName = fullName('Micheal','Hammond');
 console.log(myName);

