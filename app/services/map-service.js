'use strict()';

// Auto suggest service
almostEverythingServices.service('autoSuggestServices',
	['$resource',
		function ($resource) {
			return $resource(ApiRoutesListing.baseUrl + ApiRoutesListing.AutosuggestApi.endpoint,
				{},
				{
					
				}
			);
		}]
);
//Place detail service
almostEverythingServices.service('placeDetail',
	['$resource',
		function ($resource) {
			return $resource(ApiRoutesListing.baseUrl + ApiRoutesListing.PlaceDetail.endpoint,
				{},
				{
					
				}
			);
		}]
);
// for all services 
almostEverythingServices.service('mapService',
	['$resource',
		function ($resource) {
			return $resource(ApiRoutesListing.baseUrl + ':apiOption',
				{apiOption: '@apiOption'},
				{
					
				}
			);
		}]
);
