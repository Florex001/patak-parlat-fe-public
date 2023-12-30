import React, {useState, useEffect, useRef} from 'react'
import "../components/gallery-components/Gallery.css"
import { storage } from '../components/gallery-components/Firebase'
import { ref, listAll, getDownloadURL} from 'firebase/storage'
import {motion} from 'framer-motion'
import { Gallery, Item } from 'react-photoswipe-gallery'
import 'photoswipe/dist/photoswipe.css'

function MyGallery() {
    const [imageList, setImageList] = useState([]);
    const imageListRef = useRef([]);

      useEffect(() => {
        listAll(ref(storage, 'images/'))
            .then((response) => {
                const promises = response.items.map((item) => getDownloadURL(item));
                return Promise.all(promises);
            })
            .then((urls) => {
                imageListRef.current = urls; 
                setImageList(urls); 
            })
            .catch((error) => {
                console.error('Hiba történt a képlista lekérdezése során:', error);
            });
    }, [])

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
              
            {imageList.map((url, index) => {
          return <div className='image' key={index}>
            <Gallery>
              <Item
                original={url}
                thumbnail={url}
                width="1024"
                height="768">
                {({ ref, open }) => (
                    <div className='gallery-show-content'>
                        <img ref={ref} onClick={open} src={url} alt="kép"/>
                    </div>
                )}
              </Item>
            </Gallery>
          </div>;
        })}
            </div>
        </motion.div>
  )
}

export default MyGallery