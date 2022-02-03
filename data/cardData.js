import projectsData from '@/data/projectsData'
import instagramData from '@/data/instagramData'

const getCardData = () => {
  const cardData = []
  projectsData.forEach((project) => {
    cardData.push(project)
  })
  instagramData.forEach((instagram) => {
    cardData.push(instagram)
  })
  return cardData.sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp))
}

export default getCardData
