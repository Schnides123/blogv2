// import projectsData from '@/data/projectsData'
// var projectsData = require('../../data/projectsData').default
var axios = require('axios').default
const fs = require('fs')

const instagramDataPrefix = 'const projectsData = '
const instagramDataSuffix = '\nexport default projectsData'

var options = {
  method: 'GET',
  url: 'https://instagram28.p.rapidapi.com/medias',
  params: { user_id: '1419334991', batch_size: '30' },
  headers: {
    'x-rapidapi-host': 'instagram28.p.rapidapi.com',
    'x-rapidapi-key': process.env.RAPIDAPI_KEY,
  },
}

const getInstagramIds = async () => {
  try {
    const response = await axios.request(options)
    const out = response.data.data.user.edge_owner_to_timeline_media.edges.map((post) => ({
      instagramId: post.node.shortcode,
      timestamp: post.node.taken_at_timestamp * 1000,
    }))
    return out
  } catch (error) {
    console.error(error)
    return []
  }
}

// write post data to file
const updatePostData = (posts) => {
  const postData = JSON.stringify(posts, null, 2)
  fs.writeFile('data/instagramData.json', postData, (err) => {
    if (err) throw err
    console.log('The file has been saved!')
  })
}

getInstagramIds().then((posts) => updatePostData(posts))
