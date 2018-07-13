export const number = {
	getDifference,
	toDecimal
}

function getDifference(a, b) {
	return toDecimal(Math.abs(a - b))
}

function toDecimal(a){
	return a.toFixed(2);
}