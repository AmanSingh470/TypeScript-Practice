let response: any = "42";

let numbericlength:number = (response as string).length;

type Book = {
    name: String;
}

let bookString = '{"name": "Aman"}';
let bookObject = JSON.parse(bookString) as Book;

console.log(bookObject.name);

const inputElement = document.getElementById("username") as HTMLInputElement;

let value:any
value = "chai"
value = [1,2,3]
value = 2.5
value.toUpperCase();

let newValue: unknown
newValue = "chai"
newValue = [1,2,3];
newValue = 2.5
// newValue.toUpperCase();
if(typeof newValue === "string"){
    newValue.toUpperCase();
}

try {
    
} catch (error) {
    if(error instanceof Error){
        console.log(error.message);
    }
    console.log("Error", error);
}

const data: unknown = "chai aur code";
const strData: string = data as string;

type Role = "admin" | "user" | "superadmin";

function redirectBasedOnRole(role: Role): void{
    if(role === "admin"){
        console.log("Redirecting to admin dashboard");
        return;
    }
    if(role === "user"){
        console.log("Redirectng to user dashboard");
        return;
    }
    role;
}

function neverReturn(): never{
    while(true){
        
    }
}