let loginform=document.getElementById("loginform");
let login=document.getElementById('login')
 login.addEventListener('click',(e)=>{
      e.preventDefault();
     const email2=loginform.email.value;
     const pass2=loginform.pass.value;
    
    if ( (pass2=="1234567")&&(email2=="gallery@gmail.com") ){
        document.location.href= "index.html";
        
    }else{
       alert('please enter correct values')
       
    }
    
})
function myFunction() {
    alert('MAIL: gallery@gmail.com ,PASSWORD: 1234567' )
    var popup = document.getElementById("myPopup");
    
  }
