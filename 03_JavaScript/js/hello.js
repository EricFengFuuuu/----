// var age = 30;
// console.log(age);

//v1.0

var obj = JSON.parse($response.body);
if (-1 != $request.url.indexOf("bicycle/v1/vehicle/dynamicInfo")) {
    if ( obj.errcode == 0 && obj.data){
        obj.data.vehicleBlockStatus = 1;
        $done({body: JSON.stringify(obj)});
    }
}
else if (-1 != $request.url.indexOf("bicycle/api/function/getFuncList")) {
    if ( obj.errcode == 0 && obj.data){
        obj.data.showBackupBatterySoc.support = 0;
        obj.data.resetVehicle.support = 0;
        $done({body: JSON.stringify(obj)});
    }
}
else {
    $done({});
} ;
