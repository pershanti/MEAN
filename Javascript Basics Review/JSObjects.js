let students = [
    {name: 'Remy', cohort: 'Jan'},
    {name: 'Genevieve', cohort: 'March'},
    {name: 'Chuck', cohort: 'Jan'},
    {name: 'Osmund', cohort: 'June'},
    {name: 'Nikki', cohort: 'June'},
    {name: 'Boris', cohort: 'June'}
];

let users = {
    employees: [
        {'first_name':  'Miguel', 'last_name' : 'Jones'},
        {'first_name' : 'Ernie', 'last_name' : 'Bertson'},
        {'first_name' : 'Nora', 'last_name' : 'Lu'},
        {'first_name' : 'Sally', 'last_name' : 'Barkyoumb'}
    ],
    managers: [
       {'first_name' : 'Lillian', 'last_name' : 'Chambers'},
       {'first_name' : 'Gordon', 'last_name' : 'Poe'}
    ]
 };


//challenge 1
// for (var i = 0; i < students.length; i++){
//     let name = students[i]
//     name_string = ""
//     for (let entry in name) {
//         name_string += (entry + ": "+ name[entry] + " ")
//     }
//     console.log(name_string)
// }

//challenge2

for (let user in users) {
    console.log(user)
    for (var i = 0; i < users[user].length; i++){
        let entry = users[user][i]
            var length = 0
            var first = entry["first_name"]
            var last = entry["last_name"]
            let count = first.length + last.length
            console.log((i+1) +" -  "+last +", " + first +" - "+ count)
        }
    }


    

