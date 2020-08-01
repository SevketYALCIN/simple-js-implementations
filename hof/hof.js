const greet = function () {
	return "Hi devs!"
}

const greetManagers = function () {
	return greet().replace("devs", "managers")
}

const getGirlsGrades = function (grades) {
	let girlGrades = []
	grades.map(grade => {
		if (grade.sex === "female")
			girlGrades.push(grade)
	})
	return girlGrades
}

const getAverage = function (grades) {
	return Math.floor(grades.reduce((count, current) => count + current.grade, 0) / grades.length)
}

const getGirlsAverageGrades = function (grades) {
	return getAverage(getGirlsGrades(grades))
}

module.exports = { greet, greetManagers, getGirlsGrades, getAverage, getGirlsAverageGrades }