import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://vuejs-axios-5970d.firebaseio.com/'
})

instance.defaults.headers.common['SOMETHING'] = 'something'

export default instance