const calorieRate = Math.round((88.362 + (13.397 * weight) + (4.799 * length) - (5.677 * age))*activityRate)

const proteins = Math.round(0.4 * calorieRate)
const fats = Math.round(0.25 * calorieRate)
const carbohydrates = Math.round(0.35 * calorieRate)