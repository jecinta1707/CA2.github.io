

function validateInput(){
	
	var Username = document.getElementById("Username").value
	var pass = document.getElementById("Password").value
	var Email= document.getElementById("Email").value
	var Quantity= document.getElementById("Quantity").value
	var Discountcode = document.getElementById("Discountcode").value
	console.log("Form Submitted!");
	
	if(Username === ""){
		alert("please enter username");
		return false;
	}
	
	
	 if(pass === "") {  
     alert("please enter password!"); 
     return false;  
  }  
 
	   
 //minimum password length validation  
  if(pass.length < 11) {  
     alert ( "password length to short!");  
     return false;  
  } 
  
  
  if (Quantity ===""){
	alert("quantity cannot be empty!");
	return false;
  }	
  if (isNaN(Quantity)){
	  alert("please enter a number!");
	  return false  
  }
  
  if (Discountcode === "mextexgood"){
	  alert("congratulation you got 13.5% discount off")
  }
  return true;
}

function validateSize(){
	var size =document.getElementById("sizes").value
	
	if ( size === "Supersize" ){
		alert("Can't select supersize due to health reasons");
		document.getElementById("sizes").value = "Large";
	}

 
		
	
}


		
	