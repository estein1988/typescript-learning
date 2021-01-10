interface apiResponse {
    data: {
        hasSucceeded: boolean;
        message: string;
    }
}

function getMessage(response: apiResponse){
    if (response.data.hasSucceeded){
        return "Yay! Your action succeeded because: " + response.data.message
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


// function getLowercasedString(string){
//     return string.toLowerCase()
// }

// getLowercasedString('hello')
