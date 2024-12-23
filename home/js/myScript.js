function myFunction() {
    document.getElementById("demo").innerHTML = "Paragraph changed.";
  }

  function myFunction2() {
    const element = document.getElementsByTagName("h1");
    document.getElementById("demo").innerHTML = 'The text in first <br tag is >(index 0) is: ' + element[0].innerHTML;
  }