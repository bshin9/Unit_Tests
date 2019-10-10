// we set users equal to a database we made
// the first userID and third are correctly input, but the second one is incorrect

const users = [
    {userID: "Johncena5@"},
    {userID: "smallman3"},
    {userID: "Reddude4$"}
];
 
// we create a function of validUserID using a parameter of userID
function validUserID (userID) {

    // we want to return a promise here because we want our function to promise that its going to return our inputs
    return new Promise(function(resolve, reject) {

        // setting a const check equal to our created db and then setting an alias of u to equal to userID
        const check = users.find(u => u.userID === userID);

        // if statement here to see when its not equal to what we actually want
        if(!check) {

            // a look ahead using Regex which is looking for 1 lowercase, uppercase, special characters, and length of 8
            if(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*['@', '$', '#']).{8,}$/.test(userID)) {

                // we want to resolve or reject to complete our promise
                resolve('UserID was not found. Do you want to register?')
            } else {

                reject('Access Denied')
            }
        }
    });
}

module.exports = validUserID;