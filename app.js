// Q:1 write a function which returns array. call the function and destructure array values and print the value
function students() {
    return["Amna","Sunbal","Urooj", "Iqra","Ghanwa"]
}
let [Organization , section] = students()
alert(Organization)
alert(section)

//****** Done ******//

//  Q:2 Make a car object with model, year, color. display all the values by destructuring
let car ={
    model:"Toyota Corolla Atlas",
    year:1998,
    color:"white Indicators"
}
let {model:FristModel,year:year,color:carcolor} = car
var body = document.getElementById("result");

body.innerHTML = `<h1> First Model of corolla:${FirstMdel} </h1>
<h1>color of First Model of corolla:${carcolor} </h1>
<h1> The year in which corolla has interoduced:${year} </h1>`


//****** Done ******//

// Q:3 use three variable name, greeting and display value using template literals
var greet = ["Welcome !", "Hello World", "Nice meet you !"]
const [gree_one,greet_two,greet_three] = greet

var body = document.getElementById("result")
body.innerHTML =
`<h1>${greet_one}</h1>
<h1>${greet_two}</h1>
<h1>${greet_three}</h1>`
//****** Done ******//

// Q:4 use array [1,2,3,4,5,6,7,8,9,10] assign first three values in seperate variables and all remaining in one element as an array
const myNum = [1,2,3,4,5,6,7,8,9,10]

const [FirstNum,SecondNum,ThirdNum] = myNum

const RemainingValue = myNum.slice(5,10)
//****** Done ******//


// Q:5 if car speed is less than 80 display "car speed is slow", if greater than 80 but less than 120 than display 
 let car = +prompt("guess the car speed now")
 if (carSpeed == "" || carSpeed == " " || carSpeed == "  ") {
     alert("can't fiend car speed")
 } 
 
 else if(carSpeed < 70 && carSpeed > 1){
        alert("car speed is slow")
    }
    else if(carSpeed > 70 && carSpeed < 120){
        alert("car speed is moderate")
    }
    else if(carSpeed > 110){
        alert("car speed is fast")
    }  

