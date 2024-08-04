import React from 'react'
import './DescriptionBox.css'

const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
        <div className="descriptionbox-navigator">
            <div className="descriptionbox-nav-box">Description</div>
            <div className="descriptionbox-nav-box fade">Reviews (122)</div>
        </div>
        <div className="descriptionbox-description">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis non debitis ipsum officiis exercitationem. Recusandae quos error veritatis voluptates dignissimos reprehenderit ratione ipsam, a nisi. Ullam saepe esse nobis vero necessitatibus voluptas eligendi, accusantium officia repellendus corporis culpa accusamus beatae aut quidem vitae praesentium.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, doloremque sint. Expedita labore laudantium odit odio nisi qui corrupti laboriosam eius quae. Quis aliquid quos, ab doloribus fugit quidem!</p>
        </div>
    </div>
  )
}

export default DescriptionBox