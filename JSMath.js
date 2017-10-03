function zero_negativity(arr){
    var runner = 0
    while (runner<arr.length){
        if (arr[runner]%2 != 0){
            return false;
        }
        else{
            runner ++
        }
    }
    return true    
}

function is_even(num){
    if (num%2 == 0) return true
    return false
}

function how_many_even(arr){
    var count = 0
    for (var i=0; i<arr.length; i++){
        if (is_even(arr[i])){
            console.log("even")
            count++
        }
    }
    return count
}

function create_dummy_array(n){
    var arr = []
    for (var i=0;i<n;i++){
        arr.push(Math.floor(10*Math.random()))
    }
    return arr
}

console.log(create_dummy_array(22))

function random_choice(array){
    var x = array.length
    var y = Math.floor(x*Math.random())
    return array[y]
}

console.log(random_choice([1,2,5,7,1]))