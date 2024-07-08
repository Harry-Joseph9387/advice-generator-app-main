const btn=document.querySelector('#btn');
const adviceid=document.querySelector('#adviceId');
const advice=document.querySelector('.advice');
function update(){
    fetch('https://api.adviceslip.com/advice').then(output=>{
        return output.json();
    }).then(x=>{
        console.log(x);
        const advicetext=x.slip.advice;
        const id=x.slip.id;
        adviceid.innerHTML=id;
        advice.innerHTML=advicetext;
        
    }).catch(error=>{
        console.log(error);
    })
}
btn.addEventListener('click',update);
window.onload=()=>{
    update();
}