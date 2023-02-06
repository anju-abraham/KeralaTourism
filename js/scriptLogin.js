function validEmail(){
    let regExEmail=/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

    let email=document.getElementById('email');
    let emailerror=document.getElementById("emailerror")

    if(email.value.trim()=="")
    {
        emailerror.innerHTML="*email cannot be blank";
        emailerror.style.color="red";
        return false;
    }
   else if(email.value.match(regExEmail)){
        //emailerror.innerHTML="";
        emailerror.innerHTML="valid email.";
        emailerror.style.color="green";
        return true;  
    }
    else{       
        emailerror.innerHTML="";
        emailerror.innerHTML="*email not valid format..";
        emailerror.style.color="red";
        return false;
    }
}
//----------------------password-----------------------------------

function validPwd(){

    let pwd=document.getElementById('password-field');
    let pwderror=document.getElementById("pwderror");

    var regExPwd = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,20}$/;
    
        if(pwd.value.trim()=='')
        {
            pwderror.innerHTML="password cannot be blank";
            return false;
        }
         if(pwd.value.length<8)
        {
            pwderror.innerHTML="Password length must be atleast 8 characters";  
			pwderror.style.color="red";
            return false;
        }
		if(pwd.value.length>20)
        {
            pwderror.innerHTML="Password length not more than 20 characters";  
			pwderror.style.color="red";
            return false;
        }
		
       if(pwd.value.match(regExPwd)){
			pwderror.innerHTML="valid password..";
			pwderror.style.color="green";
			return true;  
        }      
        else{
          pwderror.innerHTML="invalid password..use atleast one uppercase ,one lowercase,one digit.";
          pwderror.style.color="green";
            return false;
        }
    }


let password = document.querySelector("#password-field");
let strengthContainer = document.querySelector(".strength-container");
let strengthBar = document.querySelector("#strength-bar");
let strengthText = document.querySelector(".strength-text");

let pwderror=document.getElementById("pwderror");
password.addEventListener("focus", function(){
	strengthContainer.style.display = "block";
});
password.addEventListener("blur", function(){
	strengthContainer.style.display = "none";
});

function setStrength(value){
	strengthBar.style.width = value + "%";
}

function setColorAndText(color, text){
	strengthBar.style.backgroundColor = color;
	strengthText.innerHTML = text;
	strengthText.style.color = color;
}

function clearStrength(){
	strengthBar.style.width = 0;
	strengthBar.style.backgroundColor = "";
	strengthText.innerHTML = "";
}

password.addEventListener("keyup", checkPasswordStrength);
function checkPasswordStrength(){


	validPwd();
	let strength = 0;

	if(password.value == ""){
		pwderror.innerHTML="password cannot be blank";
		pwderror.style.color="red";
		clearStrength();
		return false;
	}

	if(password.value.match(/\s/)){
		setColorAndText("red", "White space is not allowed");
		return false;
	}

	if(password.value.match(/<|>/)){
		setColorAndText("red", "< > characters are not allowed");
		return false;
	}

	// if(password.value.length > 12){
	// 	setColorAndText("red", "Password greater than 12 char.");
	// 	return false;
	// }

	if(password.value.length < 8){
		strength = 20;
		setColorAndText("red", "Too short"); // short
        return false;
	}else{
		
		let lowerCase = password.value.match(/[a-z]/);
		let upperCase = password.value.match(/[A-Z]/);
		let numbers = password.value.match(/[0-9]/);
		let specialCharacters = password.value.match(/[\!\~\@\&\#\$\%\^\&\*\(\)\{\}\?\-\_\+\=]/);

		if(lowerCase || upperCase || numbers || specialCharacters){
			strength = 40;
			setColorAndText("red", "Weak"); // weak
		}

		if( 
			(lowerCase && upperCase) || (lowerCase && numbers) || (lowerCase && specialCharacters) ||
			(upperCase && numbers) || (upperCase && specialCharacters) || (numbers && specialCharacters)
		  )
		{
			strength = 60;
			setColorAndText("orange", "Medium");	// medium		
		} 
		
		if( (lowerCase && upperCase && numbers) || (lowerCase && upperCase && specialCharacters) ||
		    (lowerCase && numbers && specialCharacters) ||  (upperCase && numbers && specialCharacters)
		  )
		{
			strength = 80;
			setColorAndText("#088f08", "Strong");	// strong
		}

		if( lowerCase && upperCase && numbers && specialCharacters ) 
		{
			strength = 100;
			setColorAndText("green", "Very Strong");	// very strong
			return true;
		}



	}
	setStrength(strength);
}
//--------------------------------------password------------------------------------------
function validateForm()
 {
    // if(!validEmail()||!checkPasswordStrength())
	if(!validEmail()||!validPwd())
          return false;
         else
          return true;
 }
 