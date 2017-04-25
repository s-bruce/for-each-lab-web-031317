function iterativeLog(array) {
	array.forEach((element, index) => {
		console.log(`${index}: ${element}`)
	})
}

function iterate(callback) {
	var nums = [1, 2, 3]
	nums.forEach(callback)
	return nums
}

function doToArray(array, callback) {
	array.forEach((callback))
}