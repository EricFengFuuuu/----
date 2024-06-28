//v1.0
//不背单词App

var obj = JSON.parse($response.body);
if (-1 != $request.url.indexOf("bicycle/v1/vehicle/dynamicInfo")) {
    if ( obj.errcode == 0 && obj.data){
        // obj.data.vehicleBlockStatus = 1;
        $done({body: JSON.stringify(obj)});
    }
}
else if (-1 != $request.url.indexOf("bicycle/api/function/getFuncList")) {
    if ( obj.errcode == 0 && obj.data){
        // obj.data.showBackupBatterySoc.support = 1;
        // obj.data.resetVehicle.support = 1;
        // obj.data.vehicleShared.support = 1;
        $done({body: JSON.stringify(obj)});
    }
}
else if (-1 != $request.url.indexOf("bicycle/api/trafficPackage/getTrafficOverviewExpiredDate")) {
    if ( obj.errcode == 0 && obj.data){
        obj.data.expirationDate = 1743091199000;
        obj.data.status = 1;
        $done({body: JSON.stringify(obj)});
    }
}
else {
    $done({});
} ;
