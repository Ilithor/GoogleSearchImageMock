import axios from 'axios'

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID ca7ed45eaa38ca9239ed16c87c0c1890a7fb5c17ea8bf0ae845d4069fa73ee67'
    }
})