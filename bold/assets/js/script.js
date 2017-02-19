$(document).ready(function(){
  console.log("DOM is ready!");
  $("input[type='button']").on("click", setBold);
});

var setBold = function(){
  console.log("[setBold] Function called.");
  var text = getText();
  console.log(text);
  document.getElementById("result").innerHTML = "The text you selected was " + text + "!";
}

var getText = function(){
  var field = document.getElementById("field");
  var startPos = field.selectionStart;
  var endPos = field.selectionEnd;
  var field_value = field.value;
  var selectedText = field_value.substring(startPos,endPos);
  return selectedText;
}
