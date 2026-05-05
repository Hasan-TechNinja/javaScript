var name = "Abdus Salam"

console.log("Line no 3: "+ name)


function sayName(){
    var name = "Hasan"
    console.log("Line no 10: "+ name)

    secondName()
    function secondName(){
        var name = "Second Name"
        console.log("Line no 13: "+ name)
    }

}

sayName()
