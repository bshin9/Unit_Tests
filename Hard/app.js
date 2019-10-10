const express = require('express');
const app = express();

// our test app.get to make sure its working
app.get('/', function (req, res) {
  res.send('Hello World')
})
 
// our created arrays to test in our api
var array1 = [4, 6, 23, 1];
var array2 = [2, 4, 6, 8];


// we create a third array and concat the first two
// then create the sortedArray equal to the third array using sort method
// now we res.send array3
app.get('/merge', (req, res) => {
    var array3 = array1.concat(array2);
    var sortedArray = array3.sort((a, b) => {
        return a - b;
    });
    res.send(sortedArray);
});

// created a function reverseStr passing a param data
// we set var result equal to an empty string so the user can input their own words
// using a for loop, but its going to loop backwards to reverse the string
function reverseStr(data) {
    var result = '';
    for (var i = data.length - 1; i >= 0; i--) {
        result += data[i]
    }
    return result;
}

// we can now use this on postman using by typing any word after /reverse/ and it will reverse the string
app.put('/reverse/:word', (req, res) => {
    let result = reverseStr(req.params.word);
    res.send(result);
});

// we set var today equal to new Date
// using JS timestamps, we can set it equal to the variables date and time
// using these variables, we can reference them again in var dateTime equal to our timestamp
app.post('/time', (req, res) => {
    var today = new Date();
    var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    var dateTime = date+' '+time;
    res.send(dateTime);
})

app.listen(4000, ()=>{
    console.log('Server listening on port 4000')
})