var Signin = document.querySelector('.SIGNIN');
var Signup = document.querySelector('.SIGNUP');

var btnin = document.querySelector('.in');
var btnup = document.querySelector('.up');
btnin.addEventListener("click",function(event){

    Signup.style.display="none";
    Signin.style.display="block";
    btnin.style.borderBottom="2px solid rgba(56, 163, 224, 0.699)";
    btnup.style.borderBottom="2px solid transparent";
    btnin.style.color="white";
    btnup.style.color="#e3e3e356";
    

});
btnup.addEventListener("click",function(event){
   

    btnup.style.borderBottom="2px solid rgba(56, 163, 224, 0.699)";
    btnin.style.borderBottom="2px solid transparent";
    Signin.style.display="none";
    Signup.style.display="block";
    btnup.style.color="white";
    btnin.style.color="#e3e3e356";

});
