const hof = require("./hof.js")

const grades = [
	{
		sex: "female",
		grade: 12
	}, {
		sex: "female",
		grade: 19
	}, {
		sex: "male",
		grade: 13
	}, {
		sex: "female",
		grade: 20
	}, {
		sex: "male",
		grade: 15
	}
]

test("HOF simple tests", () => {
	let greetings = hof.greet()
	expect(greetings).toBe("Hi devs!")

	greeting = hof.greetManagers()
	expect(greetings).toBe("Hi devs!")

	const femaleGrades = hof.getGirlsGrades(grades)
	femaleGrades.map(grade => expect(grade.sex).toBe("female"))

	const femaleGradesAverage = hof.getGirlsAverageGrades(grades)
	expect(femaleGradesAverage).toBe(17)
})