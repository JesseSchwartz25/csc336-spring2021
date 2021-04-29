//include this code, based on: https://developers.google.com/web/updates/2015/03/introduction-to-fetch
function checkStatus(response) {
    if (response.status >= 200 && response.status < 300) {
        return response.text();
    } else {
        return Promise.reject(new Error(response.status+": "+response.statusText));
    }
}

function callAjax(){
    let url = URL + ''; // put url string here
    fetch(url, {credentials: 'include'}) // include credentials for cloud9
       .then(checkStatus)
       .then(function(responseText) {
            //success: do something with the responseText
        })
       .catch(function(error) {
           //error: do something with error
       });
}
