/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

var storage = {
    get: function(key) {
        if (window.localStorage) {
            return window.localStorage[key];
        }
        else
            return undefined;
    },
    set: function(key, value) {
        if (window.localStorage) {
            window.localStorage[key] = value;
            return true;
        }
        else
            return false;
    },
    clear: function() {
        localStorage.clear();
    },
    reset: function(key) {
        window.localStorage[key] = null;
    }

};
//console.log(res);
//var res = {};
//res.get=function(){
//    
//}


var gps = {
    init: function(callback) {
        this.update();
        gps.functFinTrt = callback;
    },
    update: function() {
        if (navigator.geolocation)
        {
            navigator.geolocation.getCurrentPosition(gps._set);
        }
        else {
            gps._onError();
        }

    },
    get: function(key) {
        return storage.get(key);
    },
    _set: function(position) {
        storage.set("latitude", position.coords.latitude);
        storage.set("longitude", position.coords.longitude);
        if (gps.functFinTrt !== undefined)
            gps.functFinTrt();
    },
    _onError: function() {
        console.log("Refus User");
    }
}



