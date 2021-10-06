function myFunction(){
  document.getElementById("btn2").style.borderRadius="18px";
  document.body.style.backgroundImage = "url('bck.jpg')";
}

function changeColor(obj){
  if (obj.style.color =='yellow'){
    obj.style.color='black';
  }
  else{
    obj.style.color='yellow';
  }
}
