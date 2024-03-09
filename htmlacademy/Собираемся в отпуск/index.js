counter = 0
for (let i =0 ; i < luggage.length; i++) {
    if(i < startIndex) {
        continue;
    }
    if( counter < quantity) {
        chosenLuggage.push(luggage[i])
        counter++
    }


}
