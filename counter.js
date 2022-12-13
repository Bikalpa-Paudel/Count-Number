let count = 0;

const btn1 = document.querySelector('.btn1');
console.log(btn1);
const btn2 = document.querySelector('.btn2');
const btn3 = document.querySelector('.btn3');
const value = document.querySelector('.value');

btn1.addEventListener('click',function(){

    count--;
    console.log(count);
    value.innerText= count;

})
btn2.addEventListener('click',function(){

    count = 0;
    console.log(count);
    value.innerText= count;

})
btn3.addEventListener('click',function(){

    count++;
    console.log(count);
    value.innerText= count;

})

