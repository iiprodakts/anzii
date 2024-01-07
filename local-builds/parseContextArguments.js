export default function () {
	//console.log("THE PROCESS", process.argv);
	let args = process.argv.slice(0, 2);
	return args;
}
