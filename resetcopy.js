module.exports=function(a,b){
    let c=a.length;
    let d='!';
    if(b==undefined)
    {
//         if error value is undefined then string should repeat upto length d
        return a+d.repeat(c);
    }
    else{
/**
* repeat the string upto given value .
**/
        return a+d.repeat(b);
    }
    

}
    
