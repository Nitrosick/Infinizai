import { motion } from 'framer-motion';
import './Main.css';
import poster from '../../images/poster.png';
import webflow from '../../images/webflow.svg';
import { Button } from '../Button/Button';
import { Esports } from '../Esports/Esports';

const textAnimation = {
    hidden: {
        x: 100,
        opacity: 0
    },
    visible: custom => ({
        x: 0,
        opacity: 1,
        transition: {
            delay: custom * 0.3,
            duration: 1
        }
    })
};

export const Main = () => {
    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="main"
        >
            <div className="main_wrapper wrapper">
                <div className="main_content">
                    <ul className="main_links">
                        <li><a className='main_links_item' href="#">Facebook</a></li>
                        <li><a className='main_links_item' href="#">Instagram</a></li>
                        <li><a className='main_links_item' href="#">Twitch</a></li>
                    </ul>

                    <div>
                        <Esports />

                        <motion.h1
                            variants={textAnimation}
                            custom={1}
                            className="block_title"
                        >
                            Unleash The<br />
                            Next <span className="underline yellow">Generation</span><br />
                            Of Gaming
                        </motion.h1>

                        <motion.p
                            variants={textAnimation}
                            custom={2}
                            className="block_description"
                        >
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Felis,<br />
                            nec donec in morbi pulvinar. Enim non pulvinar neque.
                        </motion.p>

                        <div className="main_content_buttons">
                            <Button text={'Explore More'} type={'standard'} />
                            <Button text={'View our team'} type={'transparent'} />
                        </div>
                    </div>
                </div>

                <div className="main_poster">
                    <img className='main_poster_img' src={poster} alt="poster" />
                    <a href="#" className="main_poster_webflow">
                        <img src={webflow} alt="webflow_icon" width="16" height="16" />
                        <span>Made in Webflow</span>
                    </a>
                </div>
            </div>
        </motion.div>
    );
};
