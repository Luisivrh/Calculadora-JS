let values = [];
let dis= document.getElementById('display');
let tot = document.getElementById('total');
let final = [];
let res;
function sum(str) {
    let result = document.getElementById(str).textContent;
    if(dis.innerHTML==='0'){
        dis.textContent = document.getElementById(str).textContent;
    } else{
        dis.textContent += document.getElementById(str).textContent;
    }
    
    if(result==="/" || result==="X" || result==="-" || result==="+") {
        values.push(result)
    }   else if(result===".") {
        values.push(result)
    }   else if(result==="=") {
        final = values.join('')
        dis.textContent = dis.textContent.slice(0, -1);
        res=eval(final).toFixed(2);
        tot.textContent = res;
        console.log(res)
        return
    }  else if(result==="AC"){
        values = [];
        final = [];
        dis.innerHTML='0'
        tot.textContent='0'
    }
     else {
        values.push(result);
    } 
     
}