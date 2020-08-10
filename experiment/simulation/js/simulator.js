var arr = [];
window.onload = function(){       
console.log("js connected");
var crd = document.getElementsByClassName("card");
for(let i=0;i<8;i++){
  let rndm = Math.floor((Math.random() * 100) + 1);
  arr.push(rndm);
  crd[i].innerHTML=rndm;

// console.log(crd.getElementsByClassName("card"));
// crd[1].innerHTML = "Milk";   
        }
}
const myFunction = ()=>{
  let n = document.getElementById('nsize').value;
  let arr = document.getElementById('lname');
  let ele = document.getElementById('fname').value;
  let r=0;
  arr = (arr.value).split(',');
   for(let i=0;i<n;i++){
        if(arr[i]!=Number(arr[i])){
            alert("Please enter integer number only");
            r=1;
            break;
        }
        else if((Number(arr[i])-Math.floor(Number(arr[i])))!==0){
            alert("Please enter integer number only");
            r=1;
            break;
        }
   }
   if(!r)
  {for(let i=0;i<n;i++)
  {
      if(ele == arr[i])
      {
          document.getElementById("result").innerHTML = "Great..Element found at position " + (i+1);
          r=1;
          break;
      }
  }
  if(r===0)
  document.getElementById("result").innerHTML = "Element not found";}
}

const srchFunct=()=>{
  console.log("connected");
  var crd = document.getElementsByClassName("card");
  let r=0;
  let s = document.getElementById("search").value;
  for(let i=0;i<8;i++){
    crd[i].style.backgroundColor="yellow";
    if(s==arr[i])
    {
      document.getElementById("rslt").innerHTML=("Element Found at position "+(i+1));
      r=1;
      break;
    }
    crd[i].style.backgroundColor="silver";
  }
  if(!r)
    document.getElementById("rslt").innerHTML=("Element not Found");
}


const rstFunct=()=>{
  var crd = document.getElementsByClassName("card");
  for(let i=0;i<8;i++){
    crd[i].style.backgroundColor="#f2f2f2";
  }
  document.getElementById("search").value="";
  document.getElementById("rslt").innerHTML="";
}
