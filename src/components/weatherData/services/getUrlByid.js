import { base_url, appid} from '../../../constants/api_url';

function getUribyID(idCity) {
//    console.log("id_city :D : " + idCity)
    const uri = `${base_url}?id=${idCity}&appid=${appid}`
    
    return  uri;  
};

export default getUribyID;
