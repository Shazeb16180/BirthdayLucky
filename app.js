function check(){
    var d=document.querySelector("#dt").value;
    var txt=parseInt(document.querySelector("#txt1").value);
    var sum=0;
    d=d.replaceAll('-','');
    for(var i=0;i<d.length;i++){
        sum=sum+parseInt(d[i]);
    }
    if(sum==txt){
        document.querySelector("#check2").style.display="block";
        document.querySelector("#check1").style.display="none";
    }
    else{
        document.querySelector("#check1").style.display="block";
        document.querySelector("#check2").style.display="none";
    }
}