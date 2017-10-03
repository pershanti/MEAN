function magic_multiply(x, y) {
    if (typeof (x) == "number" && typeof (y) == "number") {
        return x * y
    } else if (typeof (x) == "string" && typeof (y) == "number") {
        if (typeof (y) == "number") {
            var mystring = "";
            for (var i = 0; i < y; i++) {
                mystring += x;
            }
            x = mystring;
        }
    } else if (typeof (x) == "string" || typeof (y) == "string") {
        return "invalid string input";
    } else if (x.length) {
        for (var i = 0; i < x.length; i++) {
            x[i] = x[i] * y;
        }
    }

    return x
}

let test1 = magic_multiply(5, 2);
let test2 = magic_multiply(0, 0);
let test3 = magic_multiply([1, 2, 3], 2)
let test4 = magic_multiply(7, "three");
let test5 = magic_multiply("Brendo", 4);


console.log(test1);
console.log(test2);
console.log(test3);
console.log(test4);
console.log(test5);