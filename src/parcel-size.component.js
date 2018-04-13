
angular.
  module('parcelConfig').
  component('parcelSize', {
	  transclude: true,
	  template:
		  
		  
		 
		  
    	'<div class="w3-panel w3-card-2">'+
    	
    		'<div class="w3-container w3-teal">'+
    			'<h2>Paketgröße</h2>'+
    		'</div>' +
    		    		
    		'<div class="w3-row">'+
     		  '<label>Länge</label>'+
     		  '<input class="w3-input" id="cfg-recp-length" type="number" ng-model="$ctrl.parcel.paket.length" >'+
     		'</div>'+
     		  
     		'<div class="w3-row">'+
    		  '<label>Breite</label>'+
    		  '<input class="w3-input" id="cfg-recp-width" type="number" ng-model="$ctrl.parcel.paket.width">'+
    		'</div>'+
     		  
    		'<div class="w3-row">'+
     		  '<label>Tiefe</label>'+
     		  '<input class="w3-input" id="cfg-recp-depth" type="number" ng-model="$ctrl.parcel.paket.depth">'+
     		'</div>'+
    		  
     		  
	    '</div>'+	
	    
	    '<form class="w3-container">'
		+

		'<div class="w3-panel w3-teal" ng-click="$ctrl.calcSize($ctrl.parcelsize)" style="cursor: pointer;">'
		+ '<h3 class="w3-opacity" >Größe berechnen: {{$ctrl.parcelsize.size.small}} cm</h3>'
		+ '</div>' + '</form>' + '<br />'+'</div>'
		+
		'<div class="w3-container w3-teal">'+
		'<h2></h2>'+
	'</div>',
    	
	    controller: function ParcelSizeController($rootScope) {
	        this.parcel = {
	        	paket: {length: 0, width: 0, depth: 0},
	        	size: {small: "S", medium: "M",Large: "L"}    	
	        };
	          //$rootScope.sender = this.parcel.sent;
	          //$rootScope.recipient = this.parcel.recipient;
	          $rootScope.parcelsize = this.parcel;
	        }
  });
  
 
  
