let subs: number | string = 'abc';

let apiRequestStatus: 'pending'| 'success' | 'error' = 'pending';

apiRequestStatus = "success";

const orders = ['12','20','28','42'];

let currentorder: string | undefined;

for(let order of orders){
    if(order === "28"){
        currentorder = order;
        break;
    }
}

console.log(currentorder);

// Any Example
// let c: any;
// let d;