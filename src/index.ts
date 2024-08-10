// Basic Types
let number: number = 5;
let company: string = 'Home Decor';
let isPublished: boolean = true;
let x: any = 'Hello';

let ids: number[] = [1, 2, 3, 4, 5];
ids.push(6);

let arr: any[] = [1, true, 'Hello'];

// Tuple
/**
 * Here in the example you can see that we have defined types in an manner if don't the manner than it will throw an error
 */

let person: [number, string, boolean] = [1, 'hello', false];

// Tuple Array

let employee: [number, string][] = [
	[1, 'Zeeshan'],
	[2, 'Faizan'],
];

// Union
let pid: string | number = 34;
