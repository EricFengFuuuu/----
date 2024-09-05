
//v1.0

var requestUrl = $request.url;
var statusCode = $response.statusCode;
var obj = JSON.parse($response.body);

console.log("statusCode："+ statusCode);


 if (-1 != requestUrl.indexOf("https://gql-fed.reddit.com/")) {
    if ( statusCode == 200 && obj.data.homeV3){

        console.log("length:" + obj.data.homeV3.elements.edges.length);
        if(obj.data.homeV3.elements.edges.length > 0){
            obj.data.homeV3.elements.edges.forEach(function (item) {
                if(item.node.adPayload != null){
                    item.node.adPayload.isBlankAd = true;
                    console.log("adPayload1:" + JSON.stringify(item.node.adPayload));
                }
            });
            
        }

        $done({body: JSON.stringify(obj)});
    }
}
else {
    $done({});
} ;
