
//v1.0

var requestUrl = $request.url;
var statusCode = $response.statusCode;
var obj = JSON.parse($response.body);

console.log("statusCode："+ statusCode);


if ( statusCode == 200 && obj.data.all){

    console.log("length:" + obj.data.all.posts.edges.length);
    if(obj.data.all.posts.edges.length > 0){
        obj.data.all.posts.edges.forEach(function (item) {
            if(item.node.adEvents || item.node.__typename == "AdPost"){
                item.node.isBlank = true;
            }
        });
        
    }
  
}


if ( statusCode == 200 && obj.data.home){

    console.log("length:" + obj.data.home.elements.edges.length);
    if(obj.data.home.elements.edges.length > 0){
        obj.data.home.elements.edges.forEach(function (item) {
            if(item.node.adEvents || item.node.__typename == "AdPost"){
                item.node.isBlank = true;
            }
        });
        
    }
  
}



if ( statusCode == 200 && obj.data.subredditV3){

    console.log("length:" + obj.data.subredditV3.elements.edges.length);
    if(obj.data.subredditV3.elements.edges.length > 0){
        obj.data.subredditV3.elements.edges.forEach(function (item) {
            if(item.node.adPayload != null){
                item.node.adPayload.isBlankAd = true;
            }
        });
        
    }
  
}


if ( statusCode == 200 && obj.data.homeV3){

    console.log("length:" + obj.data.homeV3.elements.edges.length);
    if(obj.data.homeV3.elements.edges.length > 0){
        obj.data.homeV3.elements.edges.forEach(function (item) {
            if(item.node.adPayload != null){
                item.node.adPayload.isBlankAd = true;
            }
        });
        
    }
  
}
if ( statusCode == 200 && obj.data.popularV3){

    console.log("length:" + obj.data.popularV3.elements.edges.length);
    if(obj.data.popularV3.elements.edges.length > 0){
        obj.data.popularV3.elements.edges.forEach(function (item) {
            if(item.node.adPayload != null){
                item.node.adPayload.isBlankAd = true;
            }
        });
        
    }
  
}

if ( statusCode == 200 && obj.data.newsV3){

    console.log("length:" + obj.data.newsV3.elements.edges.length);
    if(obj.data.newsV3.elements.edges.length > 0){
        obj.data.newsV3.elements.edges.forEach(function (item) {
            if(item.node.adPayload != null){
                item.node.adPayload.isBlankAd = true;
            }
        });
        
    }
  
}
$done({body: JSON.stringify(obj)});