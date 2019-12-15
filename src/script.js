window.onload = function(){
    
function ajaxReq(name){
var requestURL = 'http://aws.random.cat/meow';
   // var request = [],i;
    const request = new XMLHttpRequest();
    request.open('GET', requestURL, false);
    //request.responseType = 'text';
    request.send();
    if(request.status == 200) {
            //console.log(request.responseText);
           var img = JSON.parse(request.responseText)['file'];
           //console.log(img);
            document.getElementById(name).src = img;
        }
    }

    for(var i=1; i<=3; i++){
    ajaxReq('rndmpic'+i);}

    setInterval(()=>{
        for(var i=1; i<=3; i++){
            ajaxReq('rndmpic'+i);}
    },3000)
    
}
