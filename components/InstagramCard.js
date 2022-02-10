import InstagramEmbed from 'react-instagram-embed'

const InstagramCard = (url) => (
  <div className="md p-4 md:w-1/2" style={{ maxWidth: '544px' }}>
    <div
      className={`h-full overflow-hidden rounded-md border-2 border-gray-200 border-opacity-60 dark:border-gray-700`}
    >
      <InstagramEmbed
        url={url}
        clientAccessToken="1536751440039366|IGQVJXRm42SWhDVGpHZAXFyR0c0R2VjMDdoQUpubUZAiaXRYX3MtN3oteFF3SzMtTEk0Wkx1aWlqT2pHQVdpSU1mQlFuQXQ2djBxSWFPNnBtYnN2TWs1N1Q4aE9lMnZAPd0piajNLcHl0NEVPMkt2cHFvaQZDZD"
        maxWidth="544px"
        hideCaption={false}
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

export default InstagramCard
