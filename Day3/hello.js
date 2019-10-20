var pageCounter = 1;
var animalContainer = document.getElementById("products-info");
var btn = document.getElementById("btn");

btn.addEventListener("click", function() {
    var ourRequest = new XMLHttpRequest();
    
    ourRequest.open('GET', 'products.json');
    ourRequest.onload = function() {
      if (ourRequest.status >= 200 && ourRequest.status < 400) {
        var ourData = JSON.parse(ourRequest.responseText);
        //console.log(ourRequest.responseText);
        renderHTML(ourData);
      } else {
        console.log("We connected to the server, but it returned an error.");
      }
     };
  
    ourRequest.onerror = function() {
      console.log("Connection error");
    };
  
    ourRequest.send();
   });


  function renderHTML(data){
      var htmlString = "";
      for(var i=0;i<data.length;i++){
        htmlString += "<p>"+data[i].productName+"</p>";
        htmlString += "<hr>";
      }
    animalContainer.insertAdjacentHTML('beforeend', htmlString);
  }
  