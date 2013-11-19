/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

var res = {
    get: function(key) {
        if(window.localStorage){
            return window.localStorage[key]; 
        }
        else
            return undefined;
    },
            
    set: function(key,value) {
        if(window.localStorage){
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

console.log(res);

//var res = {};
//res.get=function(){
//    
//}