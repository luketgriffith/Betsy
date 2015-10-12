'use strict';

(function () {

let etsyURL = 'https://api.etsy.com/v2/listings/active.js?api_key=h9oq2yf3twf4ziejn10b717i&keywords=meerkat&includes=Images,Shop';

$.ajax({
  url: etsyURL,
  dataType: 'jsonp',
  method: 'get'
}).then (function (etsy) {


 



    var templateString = $('#itemTemplate').text() 
    var templateFunction = _.template(templateString);  
    _.each(etsy.results, function(item){    
    var itemHTML= templateFunction(item);  
    $('.heynow').append(itemHTML); 
      
    })

    var numberString= $('#numTemplate').text();
    var count= etsy.count;
    $('.allstar').append('('+ count+' Results'+')');
    var keywords= etsy.params.keywords;
    $('.keyword').append('"'+keywords+'"');

      
});
})();