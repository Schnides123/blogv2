require('amd-loader')
import ReactSoundcloud from 'react-soundcloud-embedded'

const SoundcloudCard = ({ url }) => {
  return (
    <div className="md p-4 md:w-1/2" style={{ maxWidth: '544px' }}>
      <div
        className={`h-full overflow-hidden rounded-md border-2 border-gray-200 border-opacity-60 dark:border-gray-700`}
      >
        <ReactSoundcloud height={'100%'} url={url} />
      </div>
    </div>
  )
}

export default SoundcloudCard
