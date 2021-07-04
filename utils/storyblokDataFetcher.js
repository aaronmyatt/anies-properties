const axios = require('axios').default


function requestConfig(config) {
    return {
        method: 'GET',
        url: `${process.env.STORYBLOK_REST_URL}/${config.slug || ''}`,
        params: {
            token: process.env.STORYBLOK_SPACE_TOKEN,
            version: process.env.STORYBLOK_SPACE_VERSION
        },
        query: config.query
    }
}

function storyblokDataFetcher(config) {
    return axios(requestConfig(config))
        .then(function (response) {
            return response.data.story
        }).catch(function (error) {
            console.error({ error })
        })
}


module.exports = storyblokDataFetcher