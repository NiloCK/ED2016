/// <reference path="src/ace.js"/>

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
  for (var i=1; i<=10; i++){
    grades.push(unitTests[i]() ? "\u2713" : "");
    $('#grade' + i).text(grades[i-1].toString());
  }
}

var unitTests = {
  cases: [ -5, -3, -1, 0, 5, 2342, 80000 ],
  1: function(){
    return calledMe;
  },
  2: function(){
    eval(editor.getValue());
    try{
      for(var i=0; i<this.cases.length; i++){
        if (twoMoreThan(this.cases[i]) != this.cases[i] + 2 ||
            oneThirdOf(this.cases[i]) != this.cases[i] / 3){
              return false;
            }
      }
      return true;
    } catch(e) {
      return false;
    }
  },
  3: function(){
    eval(editor.getValue());
    try{
      for(var i=0; i<this.cases.length; i++){
        for(var j=0; j<this.cases.length; j++){
          if ((this.cases[i] + this.cases[j]) / 2 != average(this.cases[i], this.cases[j]) ){
            return false;
          }
        }
      }
      return true;
    } catch (e) {
      return false;
    }
  },
  4: function(){
    return false;
  },
  5: function(){
    return false;
  },
  6: function(){
    return false;
  },
  7: function(){
    return false;
  },
  8: function(){
    return false;
  },
  9: function(){
    return false;
  },
  10: function(){
    return false;
  }
}
