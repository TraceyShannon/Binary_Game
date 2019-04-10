let num = "", num2 = "";
let result = 0, result2 = 0, finalResult = 0;
let index1 = 0, index2 = 0, index3 = 0, index4 = 0;
let index5 = 0, index6 = 0, index7 = 0, index8 = 0;
let choices = document.querySelectorAll(".choice"),
    numberDisplay = document.querySelector(".number-display"),
    decision = document.querySelector(".decision"),
    rightOrWrong = document.querySelector(".right-or-wrong");
    nextBtn = document.querySelector(".next-btn");
    next = document.querySelector(".next");

init();

function init() {
  getBinaryNum();
  indexing();
  getResults();
}

function reset() {
  num = "", num2 = "";
  result = 0, result2 = 0, finalResult = 0;
  index1 = 0, index2 = 0, index3 = 0, index4 = 0;
  index5 = 0, index6 = 0, index7 = 0, index8 = 0;
  rightOrWrong.style.display = "none";
  nextBtn.style.display = "none";
}

function getBinaryNum() {
  for (var i = 0; i < 4; i++) {
    let rand1 = Math.floor(Math.random() * 2);
    num += rand1;
  }

  for (var i = 0; i < 4; i++) {
    let rand2 = Math.floor(Math.random() * 2);
    num2 += rand2;
  }

  numberDisplay.innerHTML = num + " " + num2;
}

function indexing() {

  let numArray = Array.from(num);
  let num2Array = Array.from(num2);

  for (var i = 0; i < numArray.length; i++) {
    if (numArray[0] == 1) {
      index1 = 128;
    }
    if (numArray[1] == 1) {
      index2 = 64;
    }
    if (numArray[2] == 1) {
      index3 = 32;
    }
    if (numArray[3] == 1) {
      index4 = 16;
    }
  }

  for (var i = 0; i < num2Array.length; i++) {
    if (num2Array[0] == 1) {
      index5 = 8;
    }
    if (num2Array[1] == 1) {
      index6 = 4;
    }
    if (num2Array[2] == 1) {
      index7 = 2;
    }
    if (num2Array[3] == 1) {
      index8 = 1;
    }
  }
}

function getResults() {
  result = index1 + index2 + index3 + index4;
  result2 = index5 + index6 + index7 + index8;
  finalResult = result + result2;
  // console.log(finalResult);

  for (var i = 0; i < choices.length; i++) {
    let randomRightAnswer = Math.floor(Math.random() * 4);
    let randomChoice = Math.floor(Math.random() * 255);
    if (i == randomRightAnswer) {
      choices[i].innerHTML = finalResult;
    } else {
      choices[i].innerHTML = randomChoice;
    }
  }
}

choices.forEach(function(choice) {
  choice.addEventListener("click", function(e) {
    if (finalResult == e.target.innerHTML) {
      decision.innerHTML = "Right! :)";
    } else {
      decision.innerHTML = "Wrong :(";
    }
    for (var i = 0; i < choices.length; i++) {
      if (choices[i] != e.target) {
        choices[i].style.display = "none";
      }
    }
    rightOrWrong.style.display = "block";
    nextBtn.style.display = "block";
  });
});

next.addEventListener("click", function(e) {
  for (var i = 0; i < choices.length; i++) {
    choices[i].style.display = "inline-block";
  }
  reset();
  init();
});
