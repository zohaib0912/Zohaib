function convertCtoF(celsius) {
    let fahrenheit = celsius * (9 / 5) + 32;
    console.log(celsius + "°C is " + fahrenheit + "°F" );
  }
  function convertFtoC(fahrenheit) {
    let celsius = (fahrenheit - 32) * 5/9
   console.log(fahrenheit + "°F is " + celsius + "°C" );
  }
  const celsiusTemp = prompt("Enter a temp in celsius: ")
  convertCtoF(celsiusTemp);
  const fahrenheitTemp = prompt("Enter a temp in fahrenheit: ")
  convertFtoC(fahrenheitTemp);
  