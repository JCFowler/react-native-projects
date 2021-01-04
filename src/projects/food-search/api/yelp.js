import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer _pC-HRu9_rgTjEOMgQfe-SOTNoXzWi0jVF5XTpMY9VWbCDMp7rkpKupKhL85L7nirEDVXWLs70Keyy0EuQJa3vngCqAfz8L7rAVtcEWautY3MvAbZBPqfxqrkiHyX3Yx'
    }
});
