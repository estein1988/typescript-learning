interface ApiResponse {
    data: {
        hasSucceeded: boolean;
        message: string;
    }
}

function readableMessage(response: ApiResponse){
    if (response.data.hasSucceeded){
        return "Yay! Your action succeeded because: " + response.data.message
    }
        return "Oops something went wrong.";
    }

const ApiResponse = {
    data: {
        hasSucceeded: true,
        message: 'Successful Login',
    }
}
console.log(readableMessage(ApiResponse))
