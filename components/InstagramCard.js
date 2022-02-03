import InstagramEmbed from 'react-instagram-embed'

const InstagramCard = ({ url }) => {
  return (
    <div className="md p-4 md:w-1/2" style={{ maxWidth: '544px' }}>
      <div
        className={`h-full overflow-hidden rounded-md border-2 border-gray-200 border-opacity-60 dark:border-gray-700`}
      >
        <InstagramEmbed
          url={'https://instagr.am/p/' + url}
          clientAccessToken={process.env.INSTAGRAM_TOKEN}
          maxWidth="544px"
          hideCaption={true}
          containerTagName="div"
          protocol=""
          injectScript
          onLoading={() => {}}
          onSuccess={() => {}}
          onAfterRender={() => {}}
          onFailure={() => {}}
        ></InstagramEmbed>
      </div>
    </div>
  )
}

export default InstagramCard
