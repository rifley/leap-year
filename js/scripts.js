var testLeapYear = function(input){
  result = false;

  if(input % 4 === 0){
    if((input % 100 !== 0) || (input % 100 === 0 && input % 400 === 0)){
      result = true;
    } else{
      result = false;
    }
  }else{
    result = false;
  }

  return result;
}


$(function(){
  $("#formOne").submit(function(){
    event.preventDefault();
    // Get input and parse as an input
    var input = parseInt($("#inputOne").val());
    
    console.log(input);
    if(isNaN(input)){
      alert("Please enter a valid number.");
      location.reload();
    } else{
      // Test if it's a leap year
      var leapYear = testLeapYear(input);
    }

    console.log(leapYear);

  });
});
