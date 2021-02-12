// document.body.style.backgroundColor = "black";
// document.body.style.color = "white";
// document.body.innerHTML = "white";
// let string = 'sak';

function solution(number=10){
    let result=0;
    for (let i = 0; i < number; i++) {
        if (i % 3 == 0 || i % 5 == 0) {
            result +=i;
        }
    }
    return result
}

console.log(solution());