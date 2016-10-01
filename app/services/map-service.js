'use strict()';

/* Services */
// login service is use to connect with api to authenticate user/admin
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
