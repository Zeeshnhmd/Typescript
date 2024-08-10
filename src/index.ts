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

// Enum (enumeration) is a way to define a set of named constants, which can be used to represent a collection of related values. Enums make it easier to work with a set of predefined values in a type-safe manner.

enum Direction1 {
	Up = 1,
	Down,
	Left,
	Right,
}

enum Direction2 {
	Up = 'Up',
	Down = 'Down',
	Left = 'Left',
	Right = 'Right',
}

// console.log(Direction1, Direction2);

// Objects

type User = {
	id: number;
	name: string;
};

const user: User = {
	id: 1,
	name: 'John',
};

// Type Assertion
let cid: any = 1;

// let customerId = <number>cid;
let customerId = cid as number;

// Function
function addNum(x: number, y: number): number {
	return x + y;
}

// Function void type
function log(message: number | string): void {
	console.log(message);
}

/**
 * * Interfaces
 * - We cannot use Interfaces with Premetives or Unions
 * - Generally we use Interfaces with Objects
 */

interface UserInterface {
	readonly id: number; // We can also use readonly this will restrict anyone to update the value
	name: string;
	age?: number;
}

const user1: UserInterface = {
	id: 1,
	name: 'John',
};

interface MathFunc {
	(x: number, y: number): number;
}

const add: MathFunc = (x, y) => x + y;
const sub: MathFunc = (x, y) => x - y;
