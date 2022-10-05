import { motion } from 'framer-motion';
import './Features.css';
import poster_1 from '../../images/poster_2.jpg';
import poster_2 from '../../images/poster_3.jpg';
import poster_3 from '../../images/poster_4.jpg';
import icon_1 from '../../images/aim.svg';
import icon_2 from '../../images/controller.svg';
import icon_3 from '../../images/map.svg';

const iconsAnimation = {
    hidden: {
        scale: 0.8,
        opacity: 0
    },
    visible: custom => ({
        scale: 1,
        opacity: 1,
        transition: {
            delay: custom * 0.5,
            duration: 1
        }
    })
};

export const Features = () => {
    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.5, once: true }}
            className="features"
        >
            <div className="features_item" style={{backgroundImage: `url(${poster_1})`}}>
                <motion.img variants={iconsAnimation} custom={1} src={icon_1} alt="icon" className="features_icon" width="128" height="128" />
                <motion.h3 variants={iconsAnimation} custom={1} className="features_title">Smooth FPS</motion.h3>
            </div>

            <div className="features_item" style={{backgroundImage: `url(${poster_2})`}}>
                <motion.img variants={iconsAnimation} custom={2} src={icon_2} alt="icon" className="features_icon" width="128" height="128" />
                <motion.h3 variants={iconsAnimation} custom={2} className="features_title">Multiplayer</motion.h3>
            </div>

            <div className="features_item" style={{backgroundImage: `url(${poster_3})`}}>
                <motion.img variants={iconsAnimation} custom={3} src={icon_3} alt="icon" className="features_icon" width="128" height="128" />
                <motion.h3 variants={iconsAnimation} custom={3} className="features_title">Open World</motion.h3>
            </div>
        </motion.div>
    );
};
