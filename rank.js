let h3 = document.querySelectorAll("h3")
h3.onclick=function(){
  console.log(this.innerHTML,3333333333)
}
for(let i=0; i<h3.length; i++){
  h3[i].onclick = function(){
    console.log(this.innerHTML)
  }
}