$(document).ready(function(){
  console.log("DOM is ready!");
  $("input[type='button']").on("click", displayText);
});

var displayText = function(){
  console.log("[displayText] Function called.");
  var text = getText();
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
