      /*
       Amount(digit) to amount(words) converter 
       v1.0.3
       Author: Proloy Bhaduri
       Copyright (c) 2020 Proloy Bhaduri
       Licensed Under MIT :https://github.com/Proloy-Bhaduri/wordamount/blob/master/LICENSE
      */

       var var1;var var2;var var3;
       function days_of(var1,var2)
            {
             switch(var1)
                {
                   case 2: if(is_leapyear(var2)){return 29 ;}else {return 28;}break;
                   case 4: return 30;break;
                   case 6: return 30;break;
                   case 9: return 30;break;
                   case 11: return 30;break;
                   default: return 31;break;
                }     
            }
       function  is_leapyear(var3)
            {
                if( var3%4 == 0 && var3%100 != 0 || var3%400==0)
                    return true;
       return false;
            }
       var dt = new Date();
       //var DD,MM,YY,CR_D,CR_M,CR_Y,age_d,age_m,age_y,hrs,mins,secs;

        var CR_D = dt.getDate();
        var CR_M = dt.getMonth() + 1;
        var CR_Y = dt.getFullYear();
        console.log("Today:" + CR_D+"/"+CR_M +"/"+CR_Y);
        var DD;var MM;var YY; 
        console.log(is_leapyear(2020));
    function getAge(DD,MM,YY)  
    {
        var age_d;var age_m;var age_y;
        if(DD>31 || MM >12) {return ("Oops!<br> Day should be between 1-31 <br> Month should be between 1-12 <br> Year should be less than "+CR_Y);}
        if(CR_D>=DD && CR_M >=MM && CR_Y>YY)
        {
            age_d = CR_D-DD;
            age_m = CR_M - MM;
            age_y = CR_Y - YY;
        }
        else if(CR_D>DD && CR_M <MM && CR_Y>YY)
        {
            age_d = CR_D - DD;
            age_m = 12+(CR_M - MM);
            age_y = (CR_Y - YY) - 1;
        }
        else if(CR_D<=DD && CR_M > MM && CR_Y>YY)
        {
            age_d = days_of(MM,YY) - (DD - CR_D);
            age_m = (CR_M - MM)-1;//- abs(DD - CR_D) ;
            age_y = (CR_Y - YY);
        }
        else if(CR_D <= DD && CR_M < MM)
        {
            var dif = DD - CR_D;
            age_d = days_of(MM,YY) - dif;
            age_m = 12-(MM - CR_M) - 1 ;
            age_y = (CR_Y - YY) - 1;
        }
        else if(DD>CR_D && MM == CR_M)
        {
            var dif1 = 
            age_d = days_of(MM,YY) - (DD - CR_D);
            age_m = 11;
            age_y = CR_Y - YY-1;
        }
        else
        {
           return ("Invalid Input\n");
        }
           return ( "Your age is: "+age_y +" Years "+age_m+" Months "+age_d+" Days\n");
   }
   var agee = getAge(26,7,1974);
   console.log("days_of(2,2020)"+days_of(2,2020));//end of getAge()
function printAge() 
                 {
                    var x = parseInt(document.getElementById("dd").value);
                    var y = parseInt(document.getElementById("mm").value);
                    var z = parseInt(document.getElementById("yyyy").value);
                    document.getElementById("age").innerHTML= getAge(x,y,z);
                    document.getElementById("age").className += "alert alert-success";
                 }
             
             function today()
                {
                    document.getElementById("tod").innerHTML = "Calculate Your Age on: "+CR_D+"/"+CR_M+"/"+CR_Y;     
                }
   /******###### Amount in Word section starts from here ***********************************************************##############*/   

var c,a =" ",n,ch,m;
function is_in_array(c,a,n) // Searching algo
        {
            var m;
             for( m=0;m<n; m++)
                   {
                    var pm =  a[m];
                   if(pm == c) return true; // if element is found
                   }
          return false;
        }
        var chk,m,o;
function is_all_zero(chk,m)
               {
                 for(o=0;o<m-1;o++)
                    { 
                      if(chk[o]!= "0") return false;
                    }
          return true;
               }
console.log(is_all_zero("00000.51",5));               
function  int_of_char(ch)
            {
                let chi =  parseInt(ch);
                return chi;
            }
            var str;
    function to_words(str)  
        {  
            var h = " ",wrd = " ",money = " " ,ch_set =["0","1","2","3","4","5","6","7","8","9","."],word_set1 = [" ","Hundred","Thousand","Lakh","Crore"],
            digits_set =["One","Two","Three","Four","Five","Six","Seven","Eight","Nine"],
            teens_set2 =["Eleven","Twelve","Thirteen","Fourteen","Fifteen","Sixteen","Seventeen","Eighteen","Nineteen"],
            t10s_set2 =["Ten","Twenty","Thirty","Forty","Fifty","Sixty","Seventy","Eighty","Ninety"];
            var  i=0,j,k,p,q,f=0,a,b,unit_place,d_place,d1_place,len,err_msg;
            console.log("Enter the amount in digits without spaces:\n");
            p = ch_set.length;
            len = str.length;
            err_msg ="\nPlease enter the amount correctly<br>N.B:<br>1).Number of digits should be in range 0-12<br> 2). Enter strictly two digits after '.'(decimal point)<br>3). Don't insert characters other than 0-9<br>";
            q = len - 3;
            if(len>12) {return(err_msg);exit();}
            if(is_in_array('.',str,len))// checking whether the amount conatin a decimal point
                 {
                     if(str[q] != "." ) {return ("Wrong Format " + err_msg);}
                     a = int_of_char(str[len-2]);
                     b = int_of_char(str[len-1]);
                     j  = len - 4;
                     if(is_all_zero(str,q)) {money="Zero";}
                 }
             else {a=0;b=0;j=len-1;if(is_all_zero(str,len)) {money="Zero";}}
            while(i<len)
            {
                if(!is_in_array(str[i],ch_set,p)){f=1;break;}
                i++;
            }
            if(f!=1) console.log("\n\n"+ str +" is valid\nsizeof("+str+")=" + len);
              else  return(err_msg);
              //valid statement
            k=0;
             unit_place = parseInt(str[j]);
             console.log("j= "+j+"\nunit_place = "+ unit_place + "<br>");
            while(j>=0)
            {
                 d_place = parseInt(str[j]);
                 d1_place = parseInt(str[j-1]);
                 console.log(" " + digits_set[d_place-1]);
                 console.log("d_place = "+d_place+" d1_place= "+d1_place);
                  if(k==0 && d_place>0 && d1_place>1)
                 {
                  d1_place = parseInt(str[j-1]);
                  money = t10s_set2[d1_place-1] + " " +digits_set[d_place-1];
                 }
                else if(k==0  && d_place==0  && d1_place>0)
                 {
                  d1_place = parseInt(str[j-1]);
                  money = t10s_set2[d1_place-1];
                  }
                 else if(k==0 && d_place>0 && d1_place<=0)
                 {
                  
                  money = digits_set[d_place-1];
                 }
                 else if(k==0 && d_place>0 && str[j-1]==undefined)
                 {
                  
                  money = digits_set[d_place-1];
                 }


                 else if(k==0 && d_place>0 && d1_place==1)
                 {
                  money = teens_set2[d_place-1];

                 }
                  else if(k == 2 && d_place>0)
                 {
                     h = digits_set[d_place-1];
                     wrd = word_set1[k-1];
                     h += " " +wrd+" " + money ;
                     money = h;
                 }

                  else if(k == 3 && d_place>0 && d1_place>1)
                 {
                     h = " ";
                     h = t10s_set2[d1_place-1] +" "+digits_set[d_place-1]+" "+word_set1[k-1]+" "+ money;
                     money = h;
                 }
                 else if(k == 3 && d_place!=0 && d1_place==0)
                 {
                     h = " ";
                     h = digits_set[d_place-1]+" "+word_set1[k-1]+" "+money;
                     money = h;
                 }
                 else if(k == 3 && d_place>0 && d1_place==1)
                 {
                     h = " ";
                     h = teens_set2[d_place-1]+" "+word_set1[k-1]+" "+money;
                     money = h;
                 }
                 else if(k == 3 && d_place!=0 && str[j-1]==undefined)
                 {
                     h = " ";
                     h = digits_set[d_place-1]+" "+word_set1[k-1]+" "+money;
                     money = h;
                 }
                 else if(k == 3 && d_place==0 && d1_place>0)
                 {
                     h = " ";
                     h = t10s_set2[d1_place-1] +" "+word_set1[k-1]+" "+money;
                     money = h;
                 }

                 else if(k == 5 && d_place!=0 && d1_place>1)
                 {
                     h = " ";
                     h = t10s_set2[d1_place-1]+" "+digits_set[d_place-1]+" "+word_set1[k-2]+" "+money;
                     money = h;
                 }
                 else if(k == 5 && d_place!=0 && d1_place==0 )
                 {
                     h = " ";
                     h = digits_set[d_place-1]+" "+word_set1[k-2]+" "+money;
                     money = h;
                 }
                 else if(k == 5 && d_place>0 && d1_place==1 )
                 {
                     h = " ";
                     h = teens_set2[d_place-1]+" "+word_set1[k-2]+" "+money;
                     money = h;
                 }
                 else if(k == 5 && d_place!=0 && str[j-1]==undefined )
                 {
                     h = " ";
                     h = digits_set[d_place-1]+" "+word_set1[k-2]+" "+money;
                     money = h;
                 }
                 else if(k == 5 && d_place==0 && d1_place>1)
                 {
                     h = "";
                     h = t10s_set2[d1_place-1] +" " +word_set1[k-2]+" " +money;
                     money = h ;
                 }
                  else if(k == 7 && d_place!=0 && d1_place>0)
                 {
                     h = " " ;
                     h = t10s_set2[d1_place-1]+" " +digits_set[d_place-1]+" "+word_set1[4]+" "+money;
                     money = h;
                 }
                 else if(k == 7 && d_place>0 && d1_place==1 )
                 {
                     h = " ";
                     h = teens_set2[d_place-1]+" "+word_set1[k-2]+" "+money;
                     money = h;
                 }
                 else if(k == 7 && d_place!=0 && d1_place<=0)
                 {
                     h = " ";
                    h = digits_set[d_place-1]+" "+word_set1[4]+" "+money;
                    money = h;
                 }
                 else if(k == 7 && d_place!=0 && str[j-1]==undefined)
                 {
                     h = " ";
                    h = digits_set[d_place-1]+" "+word_set1[4]+" "+money;
                    money = h;
                 }
                  else if(k == 7 && d_place==0 && d1_place>0)
                 {
                     h = " ";
                     h = t10s_set2[d1_place-1]+" "+word_set1[4]+" "+money;
                     money = h;
                 }
                j--;
                k++;
            }
             console.log("money = "+money);
             var  Paisa = "";
              if(a==1 && b!=0)
                   Paisa = teens_set2[b-1];
              else if(a==0 && b!=0)
                   Paisa = digits_set[b-1];
              else if(a>0 && b==0)
                   Paisa = t10s_set2[a-1];
              else if(a==0 && b==0)
                   Paisa = "zero";
              else
               {
                 Paisa = t10s_set2[a-1] + " " + digits_set[b-1];
               }
              return (" INR "+ str +" =  Rupees "+ money +" and "+ Paisa + " Paisa");
        }     
function printword()
  {
    var inp = document.getElementById("amount").value;
    document.getElementById("amt").innerHTML= to_words(inp);
    document.getElementById("amt").className += "alert alert-success";
  }  
