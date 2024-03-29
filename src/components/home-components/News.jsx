import React, { useState, useEffect } from 'react'
import "./Home.css";
import imageNews from '../../assets/palinka.jpg'
import moment from 'moment'
import {motion} from 'framer-motion'
import axiosInstance from '../../contexts/axiosInstance';

function News() {
    const [news, setNews] = useState([]);

    useEffect(() => {
        axiosInstance.get("news/getAllNews").then((response) => {
            setNews(response.data);
        })
    }, [])
    
    return (
        <motion.div className='news-container'>
            {news.length > 0 ? <> <h1>Aktuális híreink</h1>
            {news.map((newTopic, index) => {
                return <motion.div className='news-container'
                key={index}
                initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false }}
                    transition={{ duration: 0.3 }}
                    variants={{
                        visible: { opacity: 1, scale: 1 },
                        hidden: { opacity: 0, scale: 0 }
                    }}>
                    <div className='news-main-container'>
                        <div className='news-main-content'>
                            <div className='news-main-header'>
                                <div className="news-title">
                                    <span>{moment(newTopic.temadatum).format('YYYY.MM.DD.')}</span>
                                    <h2>{newTopic.temacim}</h2>
                                </div>
                            </div>
                            <p>{newTopic.temaleiras}</p>
                        </div>
                        <div className='news-main-image'>
                            <img src={imageNews} alt="hírek"/>
                        </div>

                    </div>
                </motion.div>
            })} </> : <div></div> }
            
        </motion.div>
    )
}

export default News