function check(){
    let a=document.getElementById("number").Value;
    if(a%2===0){
        document.getElementById("final").innerHTML="even number";
    }
    else{
        document.getElementById("final").innerHTML="odd number";
    }
}