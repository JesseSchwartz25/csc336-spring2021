function InToCm() {
  let inches = prompt("tell me a number in inches");
  let cm = inches * 2.54;

  document.write("Length in inches: " + inches + " inches\n");
  document.write("Length in cm: " + cm + " cms");
  
}

InToCm();
