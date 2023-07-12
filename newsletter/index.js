var emailfield = document.getElementById("email-field");
var emailerror = document.getElementById("email-error");

       //// for email  ////////
function validateEmail() {
    if(!emailfield.value.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
        emailerror.innerHTML ="Valid email required";
        emailfield.style.borderColor ="red";
        emailfield.style.backgroundColor =" rgb(248, 200, 200)";
        return false;
     }
     emailerror.innerHTML ="";
     emailfield.style.borderColor ="green";
     emailfield.style.backgroundColor ="";
     return true; 
}



        //// for popup  ////////
  let popup = document.getElementById("popup");
  function openPopup(){
    popup.classList.add("open-popup");
  }
  function closePopup(){
    popup.classList.remove("open-popup");
  }
  

  //// for first page= to  ////////
  let page = document.getElementById("page");
  function closepage(){
    page.classList.add("open-page");
  }
  function openpage(){
    page.classList.remove("open-page");
  }
 


 
    

 
