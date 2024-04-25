// var age = 30;
// console.log(age);


var obj = JSON.parse($response.body);
if (-1 != $request.url.indexOf("bicycle/v1/vehicle/dynamicInfo")) {
    if ( obj.errcode == 0 && obj.data){
        obj.data.vehicleBlockStatus = 1;
        $done({body: JSON.stringify(obj)});
    }
} else $done({});
