import { motion } from 'framer-motion';
import './News.css';
import poster_1 from '../../images/poster_5.jpg';
import poster_2 from '../../images/poster_6.jpg';
import poster_3 from '../../images/poster_7.jpg';
import poster_4 from '../../images/poster_8.jpg';
import poster_5 from '../../images/poster_9.jpg';
import { Esports } from '../Esports/Esports';
import { Button } from '../Button/Button';

const titleAnimation = {
    hidden: {
        x: -100,
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
                    <a href="#" className="news_tiles_item big">
                        <img src={poster_1} alt="poster" className="news_tiles_poster" />
                        <span className="news_tiles_date">October 5, 2022</span>
                        <p className="news_tiles_description">
                            Esports Group teams up with
                            the Indianapolis Colts
                        </p>
                    </a>

                    <a href="#" className="news_tiles_item">
                        <img src={poster_2} alt="poster" className="news_tiles_poster" />
                        <span className="news_tiles_date">October 15, 2022</span>
                        <p className="news_tiles_description">
                            NAVI reveals s1mple
                            fifth anniversary
                        </p>
                    </a>

                    <a href="#" className="news_tiles_item">
                        <img src={poster_3} alt="poster" className="news_tiles_poster" />
                        <span className="news_tiles_date">October 26, 2022</span>
                        <p className="news_tiles_description">
                            A1esports Shares
                            new picture
                        </p>
                    </a>

                    <a href="#" className="news_tiles_item">
                        <img src={poster_4} alt="poster" className="news_tiles_poster" />
                        <span className="news_tiles_date">November 1, 2022</span>
                        <p className="news_tiles_description">
                            T1 unveil partnership
                            with Razer
                        </p>
                    </a>

                    <a href="#" className="news_tiles_item">
                        <img src={poster_5} alt="poster" className="news_tiles_poster" />
                        <span className="news_tiles_date">November 3, 2022</span>
                        <p className="news_tiles_description">
                            RX secures content
                            partnership with
                        </p>
                    </a>
                </div>
            </div>
        </div>
    );
};
