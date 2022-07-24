var question_list = ["How many girls are live one room of ng?", "What is the capital of India?", "NG mei kaun se course padhaya jaata hai"]
var options_list = [
    ["1.Four", "2.Nine", "3.Seven", "4.Ten"],
    ["1.Chandigarh", "2.Bhopal", "3.Chennai", "4.Delhi"],
    ["1.Software Engineering", "2.Counseling", "3.Tourism", "4.Agriculture"]
]
var answer_list = [4, 4, 1]
var fifty_fifty = [
    ['1.Four', '4.Ten'],
    ['2.Bhopal', '4.Delhi'],
    ['1.Software Engineering', '2.Counseling']
]
var i = 0
var c = 0
console.log("you have 5050 lifeline , if you want you  can  use it by entering '5050' ")
while (i < question_list.length) {
    console.log(question_list[i])
    var j = 0
    while (j < options_list[i].length) {
        console.log(options_list[i][j])
        j++
    }
    var user = require("readline-sync")
    var ans = user.question("enter your option")
    if (ans == answer_list[i]) {
        console.log('congress')
    } else if (ans == 5050) {
        if (c == 0) {
            console.log(fifty_fifty[i])
            c++

            var user1 = require("readline-sync")
            var ans1 = user1.question("enter")
            if (ans1 == answer_list[i]) {
                console.log("congrates! , you choice correct option")
            } else {
                console.log("sadly!, your choice wrong option")
            }break
        } else {
            console.log("you used fifty fifty ,so please enter your own answer")
        }
    } else {
        console.log("oops! your answer is wrong ")
        console.log('quite')
        break
    }
    i++
}