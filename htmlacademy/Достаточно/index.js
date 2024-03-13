const getDiet = (array, limit) => {

    let calories = 0
    let dishesNumber = 0

    for (let i =0; i < array.length; i ++) {
        calories += array[i]
        if(calories > limit){
            dishesNumber = i
            break
        }

    }

    return dishesNumber
}