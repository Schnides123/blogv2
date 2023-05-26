import { InstagramEmbed } from 'react-social-media-embed'
import { useLayoutEffect, useRef, useState } from 'react'

const InstagramCard = ({ url }) => {
  const ref = useRef(null)

  const [width, setWidth] = useState(0)
  const [height, setHeight] = useState(0)

  useLayoutEffect(() => {
    setWidth(ref.current.offsetWidth)
    setHeight(ref.current.offsetHeight)
  }, [])

  return (
    <div className="md p-4 md:w-1/2" style={{ maxWidth: '544px' }}>
      <div
        ref={ref}
        className={`h-full overflow-hidden rounded-md border-2 border-gray-200 border-opacity-60 dark:border-gray-700`}
      >
        <InstagramEmbed
          url={'https://instagram.com/p/' + url}
          width={width}
          caption={false}
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
