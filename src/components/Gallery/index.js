import React from 'react'
import Masonry from 'react-masonry-css'
import BoxItem from './BoxItem'
import './index.css'
const Gallery = ({ cards }) => {
    return (

        <div className='Gallery'>
            <h3>Products</h3>

            <Masonry
                breakpointCols={4}
                className="my-masonry-grid"
                columnClassName="my-masonry-grid_column">

                {cards.map((item,index) => {
                    return <BoxItem  key={`card-${index}`} item={item}/>
                })}
            </Masonry>
        </div>

    )
}

export default Gallery