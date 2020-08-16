var arr = [];
window.onload = function () {
  console.log("js connected");
  var crd = document.getElementsByClassName("card");
  for (let i = 0; i < 8; i++) {
    let rndm = Math.floor((Math.random() * 100) + 1);
    arr.push(rndm);
    crd[i].innerHTML = rndm;
  }
}
const myFunction = () => {
  let n = document.getElementById('in1').value;
  let arr = document.getElementById('in2');
  let ele = document.getElementById('in3').value;
  let r = 0;
  arr = (arr.value).split(',');
  if (n != Number(n)) {
    document.getElementById("result").style.color = "red";
    document.getElementById("result").innerHTML = "Error: Invalid data";
    return;
  }
  if (((Number(n) - Math.floor(Number(n))) !== 0)) {
    document.getElementById("result").style.color = "red";
    document.getElementById("result").innerHTML = "Error: Please enter valid datatype";
    return;
  }
  if (ele == "") {
    document.getElementById("result").style.color = "red";
    document.getElementById("result").innerHTML = "Error: Please provide element to be searched";
    return;
  }
  if (arr == "") {
    document.getElementById("result").style.color = "red";
    document.getElementById("result").innerHTML = "Error: Please provide an array";
    return;
  }
  if (n != arr.length) {
    document.getElementById("result").style.color = "red";
    document.getElementById("result").innerHTML = "Error: Enter all&nbsp;" + (n) + "&nbsp;elements";
    return;
  }
  if (n == "") {

    document.getElementById("result").style.color = "red";
    document.getElementById("result").innerHTML = "Error: Please provide number of elements";
    return;
  }
  // console.log(ele,typeof (ele));
  if (ele != Number(ele) || ((Number(ele) - Math.floor(Number(ele))) !== 0)) {
    console.log("error"); document.getElementById("result").style.color = "red";
    document.getElementById("result").innerHTML = "Error: Invalid data";
    return;
  }
  for (let i = 0; i < n; i++) {
    if (arr[i] != Number(arr[i])) {
      r = 1;
      document.getElementById("result").style.color = "red";
      document.getElementById("result").innerHTML = "Error: Please provide a integer number";
      break;
    }
    else if ((Number(arr[i]) - Math.floor(Number(arr[i]))) !== 0) {
      r = 1;
      document.getElementById("result").style.color = "red";
      document.getElementById("result").innerHTML = "Error: Please provide a integer number";
      break;
    }
  }
  if (!r) {
    let re = 0;
    for (let i = 0; i < n; i++) {
      if (ele == arr[i]) {
        document.getElementById("result").style.color = "blue";
        document.getElementById("result").innerHTML = "Great..Element found at position " + (i + 1);
        re = 1;
        document.getElementsByClassName("inst4")[0].style.color = "red";
        document.getElementsByClassName("inst5")[0].style.color = "black";
        break;
      }
    }
    if (re == 0) {
      document.getElementById("result").style.color = "blue";
      document.getElementById("result").innerHTML = "Element not found";
      document.getElementsByClassName("inst5")[0].style.color = "red";
      document.getElementsByClassName("inst4")[0].style.color = "black";
    }
  }
}
const rstFunctsimulator = () => {
  console.log("reset");
  var crd = document.getElementsByClassName("in1");
  var crd = document.getElementsByClassName("in2");
  var crd = document.getElementsByClassName("in3");
  document.getElementById("in1").value = "";
  document.getElementById("in2").value = "";
  document.getElementById("in3").value = "";
  document.getElementById("result").innerText = "";
  document.getElementsByClassName("inst1")[0].style.color = "black";
  document.getElementsByClassName("inst2")[0].style.color = "black";
  document.getElementsByClassName("inst3")[0].style.color = "black";
  document.getElementsByClassName("inst4")[0].style.color = "black";
  document.getElementsByClassName("inst5")[0].style.color = "black";
}

const wt = (i, r) => {
  setTimeout(function () {
    var crd = document.getElementsByClassName("card");
    crd[i - 1].style.backgroundColor = "yellow";
    if (i == r) {
      document.getElementById("rslt").style.display = "block";
    }
    else {
      crd[i - 1].style.backgroundColor = "silver";
      if (i === 8) {
        document.getElementById("rslt").style.display = "block";
      }
    }
  }, 1000 * (i - 1));
}

const srchFunct = () => {
  console.log("connected");
  var crd = document.getElementsByClassName("card");
  let r = 0;
  let s = document.getElementById("search").value;
  for (let i = 1; i <= 9; i++) {

    if (s == arr[i - 1]) {
      document.getElementById("rslt").style.color = "blue";
      document.getElementById("rslt").innerHTML = ("Element found at position " + (i));
      r = i;

    }
    wt(i, r);
    if (r) { break; }

  }
  if (!r) {
    document.getElementById("rslt").style.color = "blue";
    document.getElementById("rslt").innerHTML = ("Element not found");
  }
}

const rstFunct = () => {
  var crd = document.getElementsByClassName("card");
  for (let i = 0; i < 8; i++) {
    crd[i].style.backgroundColor = "white";
  }
  document.getElementById("search").value = "";
  document.getElementById("rslt").innerHTML = "";
  document.getElementById("rslt").style.display = "none";
}

function showFunc1() {
  console.log("hello");
  var checkBox = document.getElementById("check1");
  if (checkBox.checked == true) {

    document.getElementById("in1").removeAttribute("disabled");
    document.getElementsByClassName("inst1")[0].style.color = "red";
  } else {

    document.getElementById("in1").setAttribute("disabled", true);
    document.getElementsByClassName("inst1")[0].style.color = "black";
  }



}
function showFunc2() {
  var checkBox = document.getElementById("check2");
  var text = document.getElementById("in2");
  if (checkBox.checked == true) {
    document.getElementById("in2").removeAttribute("disabled");
    document.getElementsByClassName("inst2")[0].style.color = "red";
  } else {
    document.getElementById("in2").setAttribute("disabled", true);
    document.getElementsByClassName("inst2")[0].style.color = "black";
  }

}
function showFunc3() {
  var checkBox = document.getElementById("check3");
  var text = document.getElementById("in3");
  if (checkBox.checked == true) {
    document.getElementById("in3").removeAttribute("disabled");
    document.getElementsByClassName("inst3")[0].style.color = "red";
  } else {
    document.getElementById("in3").setAttribute("disabled", true);
    document.getElementsByClassName("inst3")[0].style.color = "black";
  }
}
