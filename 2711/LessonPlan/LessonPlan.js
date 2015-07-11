
var editor = ace.edit("editor");

editor.setTheme("ace/theme/twilight");
// editor.setTheme("ace/theme/tomorrow_night");

var jsMode = ace.require("ace/mode/javascript").Mode;
editor.getSession().setMode(new jsMode());


$('#CommandLine').keyup(function(event){
  if (event.keyCode === 13){
    repl();
  }
});

function repl(){
  var input = $('#CommandLine').val();

  eval(editor.getValue());
  var output = eval(input);

  print(">> " + output);
  $('#CommandLine').val("");
}

function compile(){
  // squareRoot = undefined;
  // upperBound = undefined;
  // lowerBound = undefined;
  // guess = undefined;
  var userCode = editor.getValue();
  eval(userCode);
}

function print(text){
  console.log(text);
  $("#Output").append(text);
  $('#Output').append(document.createElement('br'));
}
$('.ace_function').click(function(){
  eval(editor.getValue());
  result = eval($(this).text() + "();")
  print(result);
});

var calledMe = false;

var grades = [];

function updateGrades(){
  var grades = [];

  // q1
  grades.push(calledMe ? "\u2713" : "");
  //q2



  for (var i = 1; i <= 1; i++){
    $('#grade' + i).text(grades[i-1].toString());
  }
}
