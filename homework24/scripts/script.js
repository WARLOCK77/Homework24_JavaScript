// const temp = "TEMP"

// // let[x,y] = [1,2]
// // [x,y] = [x+1, y+1]
// // [x,y] = [y,x]

// // const arr = [1,2,3, [1,2,[1,2,3]]]
// let point = {x:1, y:1}

// function examples() {
// 	console.log("x" in point)
// 	console.log("z" in point)
// }

function displayTime() {
		const clock = document.querySelector("#clock")

		const now = new Date()
		clock.textContent = now.toLocaleTimeString()
	}


