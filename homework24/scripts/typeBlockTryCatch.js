function typeBlockTryCatch(argument) {
	try {

		let n = Number(prompt("Input non negative value", "2"))
		
		console.log(n)

		if(n < 0) {
			throw new Error("Negative value")
		}
	} catch(e) {

		alert(e)
	} finally {
		
	}
}
