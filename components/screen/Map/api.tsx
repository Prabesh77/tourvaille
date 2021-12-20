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

const  trailOptions:any = {
  method: 'GET',
  url: 'https://trailapi-trailapi.p.rapidapi.com/activity/',
  params: {
    lat: '34.1',
    limit: '25',
    lon: '-105.2',
    'q-city_cont': 'Denver',
    'q-country_cont': 'Australia',
    // 'q-state_cont': 'California',
    radius: '25',
    'q-activities_activity_type_name_eq': 'hiking'
  },
  headers: {
    'x-rapidapi-host': 'trailapi-trailapi.p.rapidapi.com',
    'x-rapidapi-key': 'e39b4a9dafmshf3836953534f8e1p1d2d71jsn749eed11afd4'
  }
};

export const getTrailData = async() => {
  try {
    const trailData = axios(trailOptions)
    return trailData
  }
  catch(err) {
    console.log(err)
  }
}