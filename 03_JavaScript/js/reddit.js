
//v1.0

var requestUrl = $request.url;
var statusCode = $response.statusCode;
var obj = JSON.parse($response.body);

 if (-1 != requestUrl.indexOf("https://gql-fed.reddit.com/")) {
    if ( statusCode == 200 && obj.data){
        if(obj.data.homeV3.elements.edges.length > 0){
            obj.data.homeV3.elements.edges.forEach(function (item) {
                if (item.node.adPayload != null) {
                    item.node.adPayload = null;
                    
                }
            });
        }

        $done({body: JSON.stringify(obj)});
    }
}
else {
    $done({});
} ;
