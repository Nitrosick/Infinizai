import { motion } from 'framer-motion';
import './News.css';
import { Esports } from '../Esports/Esports';
import { Button } from '../Button/Button';
import { data } from '../../data';

const titleAnimation = {
    hidden: {
        x: -50,
        opacity: 0
    },
    visible: {
        x: 0,
        opacity: 1,
        transition: { duration: 1 }
    }
};

export const News = () => {
    return (
        <div className="news">
            <div className="news_content wrapper">
                <Esports />

                <div className="news_header">
                    <motion.h2
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ amount: 0.5, once: true }}
                        variants={titleAnimation}
                        className="block_title"
                    >
                        Latest News &<br />
                        Articles
                    </motion.h2>
                    <Button text={'Read More'} type={'standard'} />
                </div>

                <div className="news_tiles">
                    {data.news.map((news) => (
                        <a href="#" className="news_tiles_item" key={news.id}>
                            <img src={news.image} alt="poster" className="news_tiles_poster" />
                            <span className="news_tiles_date">{news.date}</span>
                            <p className="news_tiles_description">{news.description}</p>
                        </a>
                    ))}
                </div>
            </div>
        </div>
    );
};
