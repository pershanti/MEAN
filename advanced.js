//prints a string of stars of length num
function starString(num) {
    var stars = ""
    for (var i = 0; i < num; i++){
        stars += "*"
    }
    console.log(stars)
}


//prints out the number of stars determined by each entry in the array
function drawStars(arr) {
    for (var i = 0; i < arr.length; i++){
        console.log(starString(arr[i]))
    }
}

//helper function similar to starString that prints out the letter the number of times given by num
function letterString(num, letter) {
    var letter_string = ""
    for (var i = 0; i < num; i++){
        letter_string += letter
    }
    console.log(letter_string)
}

function drawStars2(arr) {
    for (var i = 0; i < arr.length; i++){
        if (typeof (arr[i]) == "number") {
            starString(arr[i])
        }
        else {
            letterString(arr[i].length, arr[i].charAt(0))
        }
    }
}

drawStars2([4, "Tom", 1, "Michael", 5, 7, "Jimmy Smith"])
