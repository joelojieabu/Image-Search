import axios from 'axios';

const searchImages = async (term) => {
    const response = await axios.get('https://api.unsplash.com/search/photos', {
        headers: {
            Authorization: 'Client-ID PryidaGapofYyv_OX9_7ZvS6dpezVkWEd481XTzhQqo'
        },
        params: {
            query: term,
        }
    })
    return response.data.results;
}
export default searchImages;