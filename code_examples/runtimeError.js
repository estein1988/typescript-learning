// function getLowercasedString(string){
//     return myString.toLowerCase()
// }

// getLowercasedString()

function getMessage(response){
    if (response.data.hasSucceeded){
        return "Yay! Your action succeeded because: " + response.message
    }
        return "Oops something went wrong.";
    }

const apiResponse = {
    data: {
        hasSucceeded: true,
        message: 'Successful Login'
    }
}
console.log(getMessage(apiResponse));