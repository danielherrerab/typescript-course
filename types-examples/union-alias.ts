const add = (number1: number, number2: number, printResult: boolean, resultPharse: string) => {
  const result = number1 + number2;
  if(printResult) console.info(resultPharse + result);
  return number1 + number2;
}

const number1 = '10';
const number2 = '25';
const printResult = true;
const resultPharse = 'Result is: ';

add(+number1, +number2, printResult, resultPharse)


type combinable = string | number; // Custom union type
type conversionType = 'as-number' | 'as-text'; // Custom literal type
/** 
 * Union types -----> type | type
 * Literal types ----> 'literalType1' | 'literalType2' 
 * When you uses Union types aditional logic must be needed
 * in order to have a case for each type
 **/  
const combine = (param1: combinable, param2: string|number, resultConversion: conversionType) => {
  if (typeof param1 === 'number' && typeof param2 === 'number' || resultConversion === 'as-number') {
    return +param1 + +param2;
  } else {
    return param1.toString() + param2.toString();
  }
}

console.info(combine('anna', 'naan', 'as-text'));
console.info(combine('100', '25', 'as-number'));
