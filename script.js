/*global jQuery*/

var mySite = (function(window, $){
  "use strict";
  
  var self = {
    getURIParam : function getURIParam(uri, param){
      var search = uri.split('?')[1],
          params = [];

      if(typeof search === 'undefined'){
        return null;
      }
      
      params = search.split('&');
      
      if(params.length === 0){
        return null;
      }
      
      for(var i=0;i<params.length;i++){
        var arr = params[i].split('='),
            key    = arr[0],
            value  = arr[1];
        if(key === param){
          return value.split('#')[0];
        }
      }
      
      return null;
    
    }
  };
  
  return self;
  
})(window, jQuery);