import React from 'react'
import "../components/gallery-components/Gallery.css"
import { motion } from 'framer-motion'
import 'photoswipe/dist/photoswipe.css'


function MyGallery() {

  return (
    <motion.div className='gallery-container'
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false }}
      transition={{ duration: 0.3 }}
      variants={{
        visible: { opacity: 1, scale: 1 },
        hidden: { opacity: 0, scale: 0 }
      }}>
      <h1>Galéria</h1>
      <div className='image-container'>
       <h3>Jelenleg nem tartalmaz képet a galéria.</h3>
      </div>
    </motion.div>
  )
}

export default MyGallery