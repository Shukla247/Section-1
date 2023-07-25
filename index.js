console.log('Hello JavaScript!!');

console.log('another line');

age = 27;
console.log(age);
console.log(typeof age);
massage='nice';

console.log(massage);

empty = null;
console.log(empty);

if(age >= 18){
    console.log('You ae aligible for DL');
    x = 'this should be global';
    /*let y = 'this should be local';*/
    var z ='this should be local';
    /*const pi = 3.14;
    pi = 24.158476;*/

}else{
    console.log('you are not aligible for DL');
}

console.log(x);
/*console.log(y)*/
console.log(z)
/*console.log(pi)*/

//Arithmetic Operators
// + : Additition



console.log(2 ** 5); 

for(let i=0; i<=10; i++){
    console.log(i);
};

console.log('............');

for(let i=20; i>=0; i-=3){
    console.log(i);
}

for(let i=50; i<=1000; i++){
    if(i%7==0 && i%11==0){
        console.log(i);}
}

console.log('............');

let n= 25;
const sqrt = n**0.5;

if(sqrt ===parseInt(sqrt)){
    console.log('perfect squre');
}else{
    console.log('Not a Perfect Square');
}
console.log(34.5 == '34.5');

// while loop

// let mynum =5;

// while(munum < 20){
//     console.log(munum);
//     mynum += 2;
    
// }



// reverse digit of numbers

let m = 3762578
let rev = 0;

while(m>0){
    console.log(rev);
    let d = m%10;
    rev = rev*10+d;
    m= parseInt(m/10);
}






