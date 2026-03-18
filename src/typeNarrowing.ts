function getCake(kind: string | number){
    if(typeof kind === 'string'){
        return `Making ${kind} cake`;
    }
    return `${kind}`;
}

function orderChai(size: "small" | "medium" | "large" | number){
    if(size === "small"){
        return `small chai`
    }
    if(size === "medium" || size === "large"){
        return `make extra chai`;
    }
    return `chai order #${size}`;
}

class KulhadChai{
    serve(){
        return `Serving Kulhad Chai`;
    }
}

class Cutting{
    serve(){
        return `Serving Cutitng Chai`;
    }
}

function serve(chai: KulhadChai | Cutting){
    if(chai instanceof KulhadChai){
        return chai.serve();
    }
}
let obj = new KulhadChai;
console.log(serve(obj));

// Create Our Own Type
type ChaiOrder = {
    type: string,
    sugar: number
}

function isCharOrder(obj:any):obj is ChaiOrder{
    return(
        typeof obj === "object" &&
        obj !== null &&
        typeof obj.type === "string" &&
        typeof obj.sugar === "number" 
    );
}

function serveOrder(item:ChaiOrder | string){
    if(isCharOrder(item)){
        return `Serving ${item.type} chai with ${item.sugar} sugar`;
    }
    return `Serving custom chai: ${item}`;
}

type MasalaChai = {type: "masala"; spicelevel: number};
type GingerChai = {type: "ginger"; amount: number};
type ElaichiChai = {type: "elaichi";aroma: number};

type Chai = MasalaChai | GingerChai | ElaichiChai;

function MakeChai(order: Chai){
    switch (order.type){
        case "masala":
            return "Masala Chai";

        case "elaichi":
            return "Elaichi Chai";

        case "ginger":
            return "Ginger Chai";
    }
}

function brew(order: MasalaChai | GingerChai){
    if("spicelevel" in order){
        // Masala Chai
    }
}

function isStringArray(arr: unknown){
    
}