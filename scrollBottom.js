'use strict'

function sizeScrollBottom(){
    let elem = document.getElementById("example");
    alert(elem.scrollHeight-elem.scrollTop-elem.clientHeight);

}

