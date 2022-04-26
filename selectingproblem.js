// Run by Node.js

const readline = require("readline");
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});
let mode = 0;
let length, levels = [], temp = [];
rl.on("line", function (line) {
	if (mode == 0) length = +line;
	else if (mode == 1) {
		levels = line.split(' ');
		// console.log(length, levels);
		console.log(goLevels(levels));
	}
	if (mode++ == 1) rl.close();
}).on("close", function () {
	process.exit();
});

const goLevels = (levels) => {
	for (let i = 0; i < length; i++) {
		// levels.every((level, index) => {
		const level = levels[i];
		if (temp.indexOf(level) === -1) temp.push(level);
		if (temp.length === 3) return 'YES';
		// });
	}
	return 'NO';
}