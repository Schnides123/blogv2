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
    'x-rapidapi-key': '8c21b55066mshf14d63f35139781p14dcb3jsn488104feb72f',
  },
}

// const getInstagramIds = async () => {
//   try {
//     const response = await axios.request(options)
//     const out = response.data.data.user.edge_owner_to_timeline_media.edges.map((post) => ({
//       instagramId: post.node.shortcode,
//       timestamp: post.node.taken_at_timestamp,
//     }))
//     return out
//   } catch (error) {
//     console.error(error)
//     return []
//   }
// }

const getInstagramIds = async () => {
  return [
    { instagramId: 'CY2PHKjvcsz', timestamp: 1642457398 },
    { instagramId: 'CKcopLQHBcH', timestamp: 1611533598 },
    { instagramId: 'CFVi6bzHMtc', timestamp: 1600558294 },
    { instagramId: 'CBts7Y2H7AV', timestamp: 1592778916 },
    { instagramId: 'CBrTvN0n_-G', timestamp: 1592698601 },
    { instagramId: 'B6tAyKIHTV4', timestamp: 1577723387 },
    { instagramId: 'B6Qhj3xngC9', timestamp: 1576767493 },
    { instagramId: 'B4dKD-CHbFF', timestamp: 1572896413 },
    { instagramId: 'B4YkyusHWEO', timestamp: 1572742655 },
    { instagramId: 'B14e1-SHFfd', timestamp: 1567370827 },
    { instagramId: 'B0wfbfDHrAQ', timestamp: 1564955215 },
    { instagramId: 'B0v1J3DHrpT', timestamp: 1564933051 },
    { instagramId: 'B0uP6jBHO4m', timestamp: 1564879972 },
    { instagramId: 'B0trjUln4xm', timestamp: 1564860908 },
    { instagramId: 'B0trFIVHFWU', timestamp: 1564860660 },
    { instagramId: 'B0qjNTGHF80', timestamp: 1564755870 },
    { instagramId: 'B0oNdnfn4jB', timestamp: 1564677360 },
    { instagramId: 'B0oJDjaHrXU', timestamp: 1564675049 },
    { instagramId: 'B0n2ZCmn4vR', timestamp: 1564665264 },
    { instagramId: 'B0gm1mLHcCk', timestamp: 1564422228 },
    { instagramId: 'B0gfWvdHw1J', timestamp: 1564418347 },
    { instagramId: 'B0gYtTLn-gM', timestamp: 1564414820 },
    { instagramId: 'B0gFFInna6q', timestamp: 1564404530 },
    { instagramId: 'Bzg6iJBHET4', timestamp: 1562285071 },
    { instagramId: 'BrJwcCwnyyr', timestamp: 1544328157 },
    { instagramId: 'BoqND37lxov', timestamp: 1538974454 },
    { instagramId: 'BmUsEIEFLzZ', timestamp: 1533957544 },
    { instagramId: 'BmUWIL6ljWz', timestamp: 1533946043 },
    { instagramId: 'BmMnWP0F-VF', timestamp: 1533686636 },
    { instagramId: 'Bk4s5T9FU2q', timestamp: 1530870972 },
  ]
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
