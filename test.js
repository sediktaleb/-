function Click(person){
var name = person.id;

    document.querySelector(".nsba").style.display='block';
    document.querySelector(".panel").style.display='none';
    var nsba = document.getElementById("s7a");
    var blyma = Math.floor(Math.random() * (100-0))+0;

    if(name == "Aryam"){
        nsba.innerHTML=" 1000 %";
    }
    else if(name == "Douaa"){
        nsba.innerHTML="I Cant Count Maybe Inf %";


    }
    else if(name == "Sirine"){
        nsba.innerHTML="She is Start Cry";


    }
    else if(name == "Sedik"){
        nsba.innerHTML="0 %";


    } else if(name == "Fwaz"){
        nsba.innerHTML="Eror 404";


    }
    else if(name == "Iyad"){
        var aryam = Math.floor(Math.random() * (200-100))+100;
        nsba.innerHTML=aryam+"%";


    }
    else{
        nsba.innerHTML=blyma + "%";

    }

}
document.querySelector(".nsba").style.display='none';
