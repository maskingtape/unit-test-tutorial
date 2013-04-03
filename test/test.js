(function(globals){
  "use strict";
  var assert    = globals.chai.assert,
      expect    = globals.chai.expect,
      jQuery    = globals.jQuery;
      
  describe('#getURIParam', function(){
  
    it('should return null if there are no parameters in the URI', function(){
      var url = 'http://www.example.com/index.html',
          param = 'test';
      expect(mySite.getURIParam(url, param)).to.be.null;
    });
    
    it('should return the correct parameter if there is only one parameter', function(){
      var url = 'http://www.example.com/index.html?test=3',
          param = 'test';
      expect(mySite.getURIParam(url, param)).to.equal('3');
    });
    
    it('should return the correct parameter if there is more than one parameter', function(){
      var url = 'http://www.example.com/index.html?item=003&name=dan&test=3',
          param = 'test';
      expect(mySite.getURIParam(url, param)).to.equal('3');
    });
    
    it('should return null if the parameter is not present', function(){
      var url = 'http://www.example.com/index.html?item=003&name=dan&amount=3',
          param = 'test';
      expect(mySite.getURIParam(url, param)).to.be.null;
    });
    
    it('should return the correct parameter if there is also a hash value', function(){
      var url = 'http://www.example.com/index.html?item=003&name=dan&test=3#inPageLink',
          param = 'test';
      expect(mySite.getURIParam(url, param)).to.equal('3');
    });
    
  });
  
})(this);