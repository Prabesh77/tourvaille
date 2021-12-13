import axios from 'axios'

const URL = 'https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary'

const options = {
    url: URL,
    params: {
      bl_latitude: '11.847676',
      tr_latitude: '12.838442',
      bl_longitude: '109.095887',
      tr_longitude: '109.149359',
    //   restaurant_tagcategory_standalone: '10591',
    //   restaurant_tagcategory: '10591',
    //   limit: '30',
    //   currency: 'USD',
    //   open_now: 'false',
    //   lunit: 'km',
    //   lang: 'en_US'
    },
    headers: {
      'x-rapidapi-host': 'travel-advisor.p.rapidapi.com',
      'x-rapidapi-key': 'e39b4a9dafmshf3836953534f8e1p1d2d71jsn749eed11afd4'
    }
  };
  
export const getPlacesData = async(type, sw, ne) => {
    try {
        const {data: {data}} = await axios.get(`https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`, {
            params: {
                bl_latitude: sw.lat,
                tr_latitude: ne.lat,
                bl_longitude: sw.lng,
                tr_longitude: ne.lng,
              },
              headers: {
                'x-rapidapi-host': 'travel-advisor.p.rapidapi.com',
                'x-rapidapi-key': 'e39b4a9dafmshf3836953534f8e1p1d2d71jsn749eed11afd4'
              }
        })
        return data
    }
    catch(err) {
        console.log('ERROR', err)
    }
}


var list_options:any = {
  method: 'POST',
  url: 'https://travel-advisor.p.rapidapi.com/hotels/v2/list',
  params: {currency: 'USD', units: 'km', lang: 'en_US'},
  headers: {
    'content-type': 'application/json',
    'x-rapidapi-host': 'travel-advisor.p.rapidapi.com',
    'x-rapidapi-key': 'e39b4a9dafmshf3836953534f8e1p1d2d71jsn749eed11afd4'
  },
  data: {
    geoId: 293928,
    checkIn: '2021-06-28',
    checkOut: '2021-06-30',
    sort: 'PRICE_LOW_TO_HIGH',
    sortOrder: 'asc',
    filters: [
      {id: 'deals', value: ['1', '2', '3']},
      {id: 'price', value: ['31', '122']},
      {id: 'type', value: ['9189', '9201']},
      {id: 'amenity', value: ['9156', '9658', '21778', '9176']},
      {id: 'distFrom', value: ['2227712', '25.0']},
      {id: 'rating', value: ['40']},
      {id: 'class', value: ['9572']}
    ],
    rooms: [{adults: 2, childrenAges: [2]}, {adults: 2, childrenAges: [3]}],
    boundingBox: {
      northEastCorner: {latitude: 12.248278039408776, longitude: 109.1981618106365},
      southWestCorner: {latitude: 12.243407232845051, longitude: 109.1921640560031}
    },
    updateToken: ''
  }
};


  axios.request(list_options).then(function (response) {
    console.log(response.data, 'data');
  }).catch(function (error) {
    console.error(error);
  });
