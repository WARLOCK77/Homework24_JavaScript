function operators() {
	

let arr = [1,3,4,6,7]
console.log("5" in arr)
console.log(arr instanceof Array)
console.log(5+ 3)
let x = 10
console.log(x > 0 ? x : -x)
let options = {timeout: 0, port:8080, tempObj:{}}
let timeout = options.timeout ?? 1000
let hostName = options.host ?? "localhost"
console.log(`timeout = ${timeout}`)
console.log(`hostName = ${hostName}`)
console.log(eval("10+20"))

console.log(typeof options.host === "undefined")

let counter = 0;
const incr = () => void counter++
let i = incr() // undefined
console.log(`invoke increment = ${incr()}`)
counter // 1
	// (typeof options.port === "string") ? options.port : options.port.toString()
let c = true
console.log(typeof c)
console.log( "Before delete " +("tempObj" in options))

delete options.tempObj
console.log( "After delete " +("tempObj" in options))

delete arr[2]
for(let el of arr) {
	console.log(el)
	}
let condition =null

	//IF condition equals null, undefined, false, "", 0, NaN --> FALSE
if(!condition) {

	console.log("condition == null")
	condition = condition ?? true
	console.log(`now condition is ${condition}`)
}
}