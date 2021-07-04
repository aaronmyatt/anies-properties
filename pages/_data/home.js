const storyblokDataFetcher = require('../../utils/storyblokDataFetcher')

const STORYBLOK_SLUG = 'home'

async function fetchHomeData(){
  return storyblokDataFetcher({slug: STORYBLOK_SLUG})
    .then(function(story){
      return story
    }).catch(function(error){
      console.error({ error })
    })
}

module.exports = fetchHomeData