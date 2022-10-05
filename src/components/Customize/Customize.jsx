import { motion } from 'framer-motion';
import './Customize.css';
import poster from '../../images/poster_1.png';
import tile_1 from '../../images/tile.jpg';
import tile_2 from '../../images/tile_1.jpg';
import tile_3 from '../../images/tile_2.jpg';
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

const imageAnimation = {
    hidden: {
        x: -50,
    },
    visible: {
        x: 0,
        transition: {
            delay: 0.5,
            duration: 1
        }
    }
};

export const Customize = () => {
    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.5, once: true }}
            className="customize"
        >
            <div className="customize_content wrapper">
                <motion.img variants={imageAnimation} src={poster} alt="poster" className="customize_poster" />

                <div className="customize_block">
                    <Esports />

                    <motion.h2
                        variants={textAnimation}
                        custom={1}
                        className="block_title"
                    >
                        Customize Your<br />
                        Own Character
                    </motion.h2>

                    <motion.p
                        variants={textAnimation}
                        custom={2}
                        className="block_description"
                    >
                        Sed ut perspiciatis unde omnis iste natus error sit
                        voluptatem accusantium doloremque laudantium,
                        totam rem aperiam, eaque ipsa quae ab illo
                        inventore veritatis et quasi architecto beatae.
                    </motion.p>

                    <div className="customize_slider">
                        <img src={tile_1} alt="tile_img" className="customize_slider_item selected" width="175" height="100" />
                        <img src={tile_2} alt="tile_img" className="customize_slider_item" width="175" height="100" />
                        <img src={tile_3} alt="tile_img" className="customize_slider_item" width="175" height="100" />
                        <button className="customize_slider_button customize_slider_left"></button>
                        <button className="customize_slider_button customize_slider_right"></button>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};
