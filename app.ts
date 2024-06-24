const num1Element = document.getElementById("num1") as HTMLInputElement;
const num2Element = document.getElementById("num2") as HTMLInputElement;
const buttonElement = document.querySelector("button")!;

const numresults: Array<number> = [];
const textresults: string[] = [];

type numorstr = number | string;
//union types
function add(num1: numorstr, num2: numorstr) {
  //type guard
  if(typeof num1 ==='number' && typeof num2 ==='number'){
    return num1 + num2;
  }else if(typeof num1 ==='string' && typeof num2 ==='string'){
    return num1 + num2;
  }
  return +num1 + +num2;
}

function printresult(resultobj: {val:number; timestamp: Date}){
  console.log(resultobj.val);
}

buttonElement.addEventListener('click',()=>{
  const num1 = num1Element.value;
  const num2 = num2Element.value;
  const result = add(+num1,+num2);
  numresults.push(result as number);
  const stringResult = add(num1,num2);
  textresults.push(stringResult as string)
  console.log(result);
  console.log(stringResult);
  printresult({val:result as number, timestamp: new Date()});
  console.log(numresults,textresults)
})

const mypromise = new Promise<string>((res,rej)=>{
  setTimeout(()=>{
    res('it worked')
  },1000)
});

mypromise.then((result)=>{
  console.log(result.split(' '))
})