function convertDollar(){
    var dollar = document.getElementById("dollar").value;
    var result = document.getElementById("result");
    
    if(isNaN(dollar)){
        result.innerHTML = "Enter Number Not Text";
    }
    else if(dollar<0){
        result.innerHTML = "Enter positive Number";
    }
    else if(dollar==0){
        result.innerHTML = "Enter Number Rather Than Number";
    }
    else{
        result.innerHTML = dollar* 50 ;
        return false;
    }
}