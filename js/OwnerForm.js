var usernameOwner = sessionStorage.getItem("username") 
var passwordOwner = sessionStorage.getItem("password")
var emailOwner = sessionStorage.getItem("email")
var roleOwner = sessionStorage.getItem("role")
var owner_id = 0;
var urlO =
  "http://localhost:8080/FourPawsCitizens-LazarusAES-25-1.0-SNAPSHOT/api/owners/"+usernameOwner;
var formOwner = document.getElementById("formOwner");
console.log(sessionStorage.getItem('username'));
if(usernameOwner != null){

formOwner.addEventListener("submit", function (e) {
  owner_id ++;
console.log(owner_id);
  e.preventDefault();
  var data = new FormData(formOwner);
   
  fetch(urlO, {
    method: 'POST',
    body: JSON.stringify({

      "username":usernameOwner,
      "password":passwordOwner,
      "email": emailOwner,
      "role": roleOwner,
      "person_id":owner_id,
      "name":data.get('nameO'),
      "address":data.get('addressO'),
      "neighborhood": data.get('neigborhoodO'),
      
      
       }),
  
       headers: {
        'Content-type': 'application/json',
      },
   
  })
  
    .then((response) => response.text())
    .then((json) => {validate_Owner2(json)});
  });
}


// funcion que lo lleva a la pagina de owner directamente 

function validate_Owner (response){
    if(roleOwner == "owner"){
      window.location.href = "/components/Owner.html"
    }else{
      alert("a ocurrido un problema, porfavor verifique su informacion");
      location.reload();
    }
}

//escogan la que les gusta mas


//Funcion que lo lleva a la pagina publica
 
function validate_Owner2 (response){
  if(roleOwner == "owner"){
    alert("su Registro a sido exitoso");
    window.location.href = "/components/index.html"
  }else{
    alert("a ocurrido un problema, porfavor verifique su informacion");
    location.reload();
  }
}



