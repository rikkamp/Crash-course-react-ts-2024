// -------------------------------
// types
// -------------------------------

let stringVar: string = 'string';
let numberVar: number = 1;
let booleanVar: boolean = true;
let arrayVar: string[] = ['string1', 'string2'];
let tupleVar: [string, number] = ['string', 1];
// eslint-disable-next-line @typescript-eslint/no-explicit-any
let anyVar: any = 'string';
let unknownVar: unknown = 'string';
let voidVar: void = undefined;
let nullVar: null = null;
let undefinedVar: undefined = undefined;

stringVar = 'string 2';
numberVar = 2;
booleanVar = false;
arrayVar = ['string3', 'string4'];
tupleVar = ['string 2', 2];
anyVar = 2;
unknownVar = 2;
voidVar = undefined;
nullVar = null;
undefinedVar = undefined;

console.log(stringVar);
console.log(numberVar);
console.log(booleanVar);
console.log(arrayVar);
console.log(tupleVar);
console.log(anyVar);
console.log(unknownVar);
console.log(voidVar);
console.log(nullVar);
console.log(undefinedVar);
