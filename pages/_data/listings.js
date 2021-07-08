const storyblokMultiFetcher = require('../../utils/storyblokMultiFetcher')

const STORYBLOK_QUERY_STRING = {starts_with: 'listing'}

async function fetchingData(){
  return storyblokMultiFetcher({query: STORYBLOK_QUERY_STRING})
    .then(function(stories){
      return stories
    }).catch(function(error){
      console.error({ error })
      console.error(error.config.params)
    })
}

module.exports = fetchingData