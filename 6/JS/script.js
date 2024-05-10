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

function ServiesClick(value){
    var id = value.id;
        if(id == "Html"){
            alert("مازلنا لم نوفر خدمة HTML");
        }else if(id == "Css"){
            alert("مازلنا لم نوفر خدمة Css");

        }else if(id == "JS"){
            alert("مازلنا لم نوفر خدمة Java Script");

        }
};
