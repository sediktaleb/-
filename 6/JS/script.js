document.getElementById("loader").style.display="none";


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
            window.scroll(0,2200);
        }else if(id == "Css"){
            window.scroll(0,2200);

        }else if(id == "JS"){
            window.scroll(0,2200);

        }
};

function order(){
    var username = document.getElementById("uname");
    var email = document.getElementById("email");
    var order = document.getElementById("order");
        if(username.value && email.value && order.value){
            //alert("Name ("+username.value+"),"+"Email ("+email.value+"),"+"Order ("+order.value+").");
            document.getElementById("loader").style.display="block";

            sendEmail();
        }else{
            alert("ادخل المعلومات اولا")       
         }

}

function sendEmail(){
    var parmas = {
        name : document.getElementById("uname").value,
        email : document.getElementById("email").value,
        order : document.getElementById("order").value,

    };
    const serviceID = "service_9jj3m2r";
    const templateID = "template_d458ss4";
    
    emailjs.send(serviceID,templateID,parmas).then(function(red){
        var name = document.getElementById("uname").value;
        var email = document.getElementById("email").value;
        var order = document.getElementById("order").value;
        alert(name+" , "+email+" , "+order,+" ;");
        alert(" ان كانت المعلومات صحيحة سوف يتم التواصل معك");
        document.getElementById("loader").style.display="none";

    }
            
      
    
    )};
    function Opinion(){

        var username = document.getElementById("usname");
        var opinion = document.getElementById("opinion");
            if(username.value && opinion.value ){
                //alert("Name ("+username.value+"),"+"Email ("+email.value+"),"+"Order ("+order.value+").");
                document.getElementById("loader").style.display="block";
                sendEmailOpnion();
            }else{
                alert("ادخل المعلومات اولا")       
             }
    
    }
    function sendEmailOpnion(){

        var parmas = {
            name : document.getElementById("usname").value,
            opinion : document.getElementById("opinion").value,
    
        };
        const serviceID = "service_9jj3m2r";
        const templateID = "template_pwc64ze";
        
        emailjs.send(serviceID,templateID,parmas).then(function(red){
            alert(" تم ارسال رايك شكرا جزيرة سوف يفيدنا ان شاء الله ");
            document.getElementById("loader").style.display="none";

        }

    )};
        const FurutTeam = "FuturTeam";
        const Elements = document.getElementById("title1");
        
        let count = 0;
        
        let inter = setInterval(() => {
            if(count == FurutTeam.length){
                count = 0;
                Elements.innerText="";
    
            }else{
                Elements.innerText += FurutTeam[count];
                count++;
                
            }
        }, 200);
