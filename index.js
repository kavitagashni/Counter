//initialising a variable name data
var data = 0;

//printing default value of data that is 0 in h2 tag
document.getElementById("change").innerText = data;

//creation of increment function
function increment() {
      data = data + 1;
      document.getElementById("change").innerText = data;
      console.log(data)
      if(data>10){
            document.getElementById("info").textContent="You Have Cross 10 Keep Going";   
      }

}
//creation of decrement function
function decrement() {
      data = data - 1;
      document.getElementById("change").innerText = data;
      console.log(data)
      if(data<10){
            document.getElementById("info").textContent="";   
      }

}
function reset(){
//     var data = document.getElementById("back");
//       console.log(data)
}
