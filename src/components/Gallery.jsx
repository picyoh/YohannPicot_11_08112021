import React from 'react'

import ThumbsArray from './randomizeThumbs'
import Thumbs from './Thumbs'

class Gallery extends React.Component {
    render(){
         return (
              <div className="gallery">
                   {ThumbsArray.map((thumb) => (
                        <Thumbs />
                   ))}
              </div>
         )
    }
}

export default Gallery
