
// let userEmail = prompt("please enter your email")
// alert(userEmail)
// if (userEmail === "example@gmail.com") {
//     alert('thank you for subscribing')
// } else if (userEmail !== "example@gmail.com"){
//     alert('sorry, there was an error with your subscription')
//     }

document.querySelector('form').onsubmit = function(){
    const mail = document.querySelector('#mail').value;
    alert(`Hello, ${mail}, welcome to my page!`)
};
