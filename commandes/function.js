module.exports={
    //fonction

    //Permet de faire les calculs
    calculator:function(num1,type,num2){
        if(type=='+') return num1+num2;
        if(type=='-') return num1-num2;
        if(type=='*') return num1*num2;
        if(type=='/') return num1/num2;
        
    }
}