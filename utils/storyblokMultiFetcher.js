const axios = require('axios').default

function requestConfig(config) {
    return {
        method: 'GET',
        url: `${process.env.STORYBLOK_REST_URL}`,
        params: {
            token: process.env.STORYBLOK_SPACE_TOKEN,
            version: process.env.STORYBLOK_SPACE_VERSION,
            ...config.query
        },
    }
}

function storyblokMultiFetcher(config) {
    return axios(requestConfig(config))
        .then(function (response) {
            return response.data.stories
        })
}


module.exports = storyblokMultiFetcher

