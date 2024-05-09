var names = document.getElementById("names")
names.style.display="none";
var click = 1;
function Names(){
    if (click == 1){
     
        names.style.display="block";
    click = 0
    }else{
        names.style.display="none";
    click = 1;
    }
}