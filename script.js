/* LOGIN SIDE */

  /* skiftende tekst */
  function updateText() {
    var textElement = document.getElementById("changingText"); // kalder id 
    var dayOfWeek = new Date().getDay(); 
  
    var days = [ // teksten til 7 dage om ugen 
      "Hold fri!",
      "Hop om bord!",
      "Du gør det godt!",
      "Du ser fantastisk ud!",
      "You can do it!",
      "Du klarede en ny uge!",
      "God weekend!"
    ];
  
    var newText = " " + days[dayOfWeek]; // ændring hver dag 
    textElement.textContent = newText;
  }
  updateText();

  /* login */
  function login() { // jeg kan taste mail og kode 
    var email = document.getElementById("e-mail").value;
    var password = document.getElementById("password").value;
  
    if (email === "Brianna@dot.dk" && password === "Brian90") {
      document.getElementById("loginMessage").innerHTML = "Login velykket!";
    } else {
      document.getElementById("loginMessage").innerHTML = "Fejl i e-mail eller password. Vennligst prøv igen.";
    }
  }

  document.getElementById('toggle-password').addEventListener('click', function() {
    const password = document.getElementById('password');
    const icon = document.getElementById('icon');
    
    if (password.type === 'password') {
      password.type = 'text';
      icon.src = 'eye-icon.png'; // ikon
      console.log('Password vises');
    } else {
      password.type = 'password';
      icon.src = 'eye-icon.png'; // ikon
      console.log('Password skjules');
    }
  });

/* SØG SIDE */

  /* søge feltet */
  function search(event) { // søge felterne
    console.log("")
    event.preventDefault(); 

  var alle = document.getElementById("allSelect").value;
  var date = document.getElementById("dateInputFrom").value;
  var date = document.getElementById("dateInputTill").value;
  var name = document.getElementById("nameInput").value;
  
  console.log("AllSelect:", alle, name, date);
  console.log("Dato:", date);
  console.log("Dato:", date);
  console.log("Navn:", name);


  /* søge resultatet */
  var data = [
    { alle: "Alle", date: "29/4/2024", date: "29/4/2024", name: "Søs" }, // resultaterne
    { alle: "Alle", date: "29/4/2024", date: "29/4/2024", name: "Søs" },
    { alle: "Alle", date: "29/4/2024", date: "29/4/2024", name: "Søs" },
    { alle: "Alle", date: "29/4/2024", date: "29/4/2024", name: "Søs" },
    { alle: "Alle", date: "29/4/2024", date: "29/4/2024", name: "Søs" },
    { alle: "Alle", date: "29/4/2024", date: "29/4/2024", name: "Søs" },
    { alle: "Alle", date: "29/4/2024", date: "29/4/2024", name: "Søs" },
    { alle: "Alle", date: "29/4/2024", date: "29/4/2024", name: "Søs" },
    { alle: "Alle", date: "29/4/2024", date: "29/4/2024", name: "Søs" },
  ];
  
    var alle = document.getElementById("allSelect").value;
    var date = document.getElementById("dateInputFrom").value;
    var date = document.getElementById("dateInputTill").value;
    var name = document.getElementById("nameInput").value;
  
    var filteredData = data.filter(function(item) {
      return item.name.toLowerCase().includes(name.toLowerCase());
    });
  
    var resultElement = document.getElementById("searchResult");
    resultElement.innerHTML = (""); 
  
    if (filteredData.length > 0) {
      var resultList = document.createElement("ul");
  
      filteredData.forEach(function(item) {
        var listItem = document.createElement("p");
        listItem.textContent = "Nav 11.11.11 \n Delivered \n Søs Nielsen \n 24/05/2024 \n 1.123"; // resultatet som kommer frem

        resultList.appendChild(listItem);
      });
  
      resultElement.appendChild(resultList);
    } else {
      resultElement.textContent = "Ingen resultater fundet."; // teskten der kommer frem hvis navnet der er søgt ikke eksistere
    }
  }

/* IKON */

  /* info knap ved søg */
  function click() {
  document.getElementById('ikonInfo')
    document.getElementById('popup').style.display = 'block';
  };
  
  function click() {
  document.getElementById('close-popup')
    document.getElementById('popup').style.display = 'none';
  };
  
  /* Luk popup */
  window.onclick = function(event) {
    if (event.target === document.getElementById('popup')) {
      document.getElementById('popup').style.display = 'none';
    }
  }