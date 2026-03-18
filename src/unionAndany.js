var subs = 'abc';
var apiRequestStatus = 'pending';
apiRequestStatus = "success";
var orders = ['12', '20', '28', '42'];
var currentorder;
for (var _i = 0, orders_1 = orders; _i < orders_1.length; _i++) {
    var order = orders_1[_i];
    if (order === "28") {
        currentorder = order;
        break;
    }
}
console.log(currentorder);
