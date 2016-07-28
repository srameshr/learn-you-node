var args = process.argv.slice(2);
args = args.reduce((prev, current) => {
	return parseInt(prev, 10) + parseInt(current, 10);
});
console.log(args);
