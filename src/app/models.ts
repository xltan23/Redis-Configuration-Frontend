// Define Member model to take in PostForm Values
export interface Member {
    name:string
    telegram:string
    grade:string
}

// Define SearchName model to take in GetForm Values
export interface SearchName {
    name:string
}

// Takes JsonObject from the Server and pass it to its attributes. MUST BE THE SAME attribute names
export interface ServerResponse {
    telegram:string
    grade:string
    date:string
}

