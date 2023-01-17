import { motion } from 'framer-motion';
import './Sponsors.css';
import logo_1 from '../../images/logos/ideaa.svg';
import logo_2 from '../../images/logos/amara.svg';
import logo_3 from '../../images/logos/lightai.svg';
import logo_4 from '../../images/logos/circle.svg';
import logo_5 from '../../images/logos/muzica.svg';

const iconsAnimation = {
    hidden: {
        x: -5000
    },
    visible: custom => ({
        x: 0,
        transition: {
            delay: custom * 0.1,
            duration: 1.5
        }
    })
};

export const Sponsors = () => {
    return (
        <div className="sponsors">
            <div className="sponsors_content wrapper">
                <h2 className="block_title">
                    Our <span className="underline blue">Sponsors</span>
                </h2>

                <p className="block_description">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Felis, nec<br />
                    donec in morbi pulvinar. Enim non pulvinar neque.
                </p>

                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ amount: 0.2, once: true }}
                    className="sponsors_logotypes"
                >
                    <motion.img variants={iconsAnimation} custom={6} className="sponsors_logotypes_item" src={logo_1} alt="logo" />
                    <motion.img variants={iconsAnimation} custom={5} className="sponsors_logotypes_item" src={logo_2} alt="logo" />
                    <motion.img variants={iconsAnimation} custom={4} className="sponsors_logotypes_item" src={logo_3} alt="logo" />
                    <motion.img variants={iconsAnimation} custom={3} className="sponsors_logotypes_item" src={logo_4} alt="logo" />
                    <motion.img variants={iconsAnimation} custom={2} className="sponsors_logotypes_item" src={logo_5} alt="logo" />
                    <motion.img variants={iconsAnimation} custom={1} className="sponsors_logotypes_item" src={logo_3} alt="logo" />
                </motion.div>
            </div>
        </div>
    );
};
