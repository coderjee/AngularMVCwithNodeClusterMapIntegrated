
// licence is for restfull apis
var ApiRoutesListing = {
    baseUrl: "https://apis.mapmyindia.com/advancedmaps/v1/" + licenceKey + "/",
    AutosuggestApi: {
        endpoint: "autosuggest/"  //?q=new delhi
    },
    GeocodingApi: {
        endpoint: "geo_code/"
    },
    ReverseGeocoding: {
        endpoint: 'rev_geocode/'
    },
    RouteApi: {
        endpoint: 'route/'
    },
    DrivingDistanceAPI: {
        endpoint: 'distance/'
    },
    PlaceDetail: {
        endpoint: 'place_detail/'
    },
    NearbyApi: {
        endpoint: 'nearby_search'
    },
    StillImageApi: {
        endpoint: 'still_image'
    }
};