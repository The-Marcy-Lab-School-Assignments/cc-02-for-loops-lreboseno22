//1
function countToTen(){
  for (let i = 1; i <= 10; i++) {
   console.log(i);   
  }
}
countToTen();

//2
function countFromOne(number){
  for (let i =1; i <= number; i++){
      console.log(i);
  }
}
countFromOne(5);

//3
function countEveryEven(num){
  for (let i = 2; i <= num; i +=2) {
      console.log(i);
  }
}
countEveryEven(10);

//4
function countEveryOdd(num){
  for (let i = 1; i <= num; i +=2) {
      console.log(i);
  }
}
countEveryOdd(15);

//5 
function countEvens(numbers){
  let evenCount = 0;
  for (let i = 0; i < numbers.length; i++){
      if (numbers[i] % 2 === 0){
         evenCount += 1;
      }
      return evenCount;
    }
}
console.log(countEvens([1,2,3,4,5,6,7,8,9,12]))

