// OBJ Destructing 1
// 8; 1846

// #2
// {yearNeptuneDiscover: 1846, yearMarsDiscovered: 1659}

// #3
// Your name is Alejandro and you like purple
// Your name is Melissa and you like green
// Your name is undefined and you like green

// Array #1
// Maya
// Marisa
// Chi

// Array #2
// Raindrops on roses
// whiskers on kittens
// ["bright copper kettles", 
// 	"warm woolen mittens", 
// 	"Brown paper packages tied up with strings"]

// Array #3
// [20, 10 30]

const obj = {
	numbers: {
	  a: 1,
	  b: 2
	}
  };

const { a, b } = obj.numbers

const arr = [1, 2];
[arr[1], arr[0]] = [arr[0], arr[1]];

const raceResults = ([first, second, third, ...rest]) => ({first, second, third, rest})