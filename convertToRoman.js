function convertToRoman(num) {
  var arr=[];
  var arrDigit=[];
  var digit=num%10;
  var arrTen=[];
  var ten=num%100-digit;
  var arrHundred=[];
  var hundred=num%1000-digit-(num%100-num%10);
  var arrThousand=[];
  var thousand=num%10000-digit-(hundred)-(digit);
  var i;
  var result='';
  
  //Digits
  if(digit<=3&&digit>0){
    for(i=0;i<digit;i++){
    arrDigit.push("I");
    }
  }
  else if(digit===4){
    arrDigit.push("IV");
    }
  else if(digit===5){
    arrDigit.push("V");
  }
  else if(digit<9&&digit>5){
    arrDigit=["V"];
    for(i=5;i<digit;i++){
    arrDigit.push("I");
    }
  }
  else if(digit===9){
    arrDigit.push("IX");
  }
  
  //Ten
  if(ten>=10&&ten<20){
    arrTen.push("X");
  }
  else if(ten>=20&&ten<30){
    arrTen.push("XX");
  }
  else if(ten>=30&&ten<40){
    arrTen.push("XXX");
  }
  else if(ten>=40&&ten<50){
    arrTen.push("XL");
  }
  else if(ten>=50&&ten<60){
    arrTen.push("L");
  }
  else if(ten>=60&&ten<70){
    arrTen.push("LX");
  }
  else if(ten>=70&&ten<80){
    arrTen.push("LXX");
  }
  else if(ten>=80&&ten<90){
    arrTen.push("LXXX");
  }
  else if(ten>=90&&ten<100){
    arrTen.push("XC");
  }

  //Hundred
  if(hundred>=100&&hundred<200){
    arrHundred.push("C");
  }
  else if(hundred>=200&&hundred<300){
    arrHundred.push("CC");
  }
  else if(hundred>=300&&hundred<400){
    arrHundred.push("CCC");
  }
  else if(hundred>=400&&hundred<500){
    arrHundred.push("CD");
  }
  else if(hundred>=500&&hundred<600){
    arrHundred.push("D");
  }
  else if(hundred>=600&&hundred<700){
    arrHundred.push("DC");
  }
  else if(hundred>=700&&hundred<800){
    arrHundred.push("DCC");
  }
  else if(hundred>=800&&hundred<900){
    arrHundred.push("DCCC");
  }
  else if(hundred>=900&&hundred<1000){
    arrHundred.push("CM");
  }

  //Thousand
  if(thousand>=1000&&thousand<2000){
    arrThousand.push("M");
  }
  else if(thousand>=2000&&thousand<3000){
    arrThousand.push("MM");
  }
  else if(thousand>=3000&&thousand<4000){
    arrThousand.push("MMM");
  }
  
  
  
  
arr=arrThousand.concat(arrHundred,arrTen,arrDigit);
result=arr.join(''); 
  
 return result;
}
