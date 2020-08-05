function add(a, b) {
	return a + b
}

function display() {
	return this.message
}

function partialApply(fn, ...args) {
	return function(...remainingArgs) {
		return fn.apply(this, args.concat(...remainingArgs))
	}
}

test('Closure test', () => {
	expect(add(1,2)).toBe(3)
	
	// Apply
	const add10 = partialApply(add, 10)
	expect(add10(1)).toBe(11)

	// Call
	const a = 1
	const b = 44
	const message = "Hello"

	expect(add.call(this, a, b)).toBe(a+b)

	// Bind
	const obj = {
		message: "Sev"
	}

	const displaySev = display.bind(obj)
	expect(displaySev()).toBe("Sev")
})