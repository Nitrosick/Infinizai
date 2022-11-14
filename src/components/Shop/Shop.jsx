import { motion } from 'framer-motion';
import './Shop.css';
import { Esports } from '../Esports/Esports';

const titleAnimation = {
    hidden: {
        x: 200,
        opacity: 0
    },
    visible: {
        x: 0,
        opacity: 1,
        transition: { duration: 1 }
    }
};

const descAnimation = {
    hidden: {
        x: -200,
        opacity: 0
    },
    visible: {
        x: 0,
        opacity: 1,
        transition: { duration: 1 }
    }
};

const tilesAnimation = {
    hidden: {
        opacity: 0
    },
    visible: {
        opacity: 1,
        transition: { duration: 1 }
    }
};

export const Shop = () => {
    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.3, once: true }}
            className="shop"
        >
            <div className="shop_content wrapper">
                <Esports />

                <motion.h2
                    variants={titleAnimation}
                    className="block_title"
                >
                    Your one stop shop<br />
                    gaming needs!
                </motion.h2>

                <motion.p
                    variants={descAnimation}
                    className="block_description"
                >
                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem<br />
                    accusantium doloremque laudantium, totam rem aperiam
                </motion.p>

                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ amount: 0.4, once: true }}
                    className="shop_tiles"
                >
                    <div className="shop_tiles_item">
                        <motion.h3 variants={tilesAnimation} className="shop_tiles_title">All New Gameplay</motion.h3>
                        <motion.p variants={tilesAnimation} className="block_description">
                            Vivamus magna justo, lacinia eget coecetur
                            sed, convallis at tellus. Curabitur non nulla sit
                            Vestibum ante ipsum primis in faucibus orci
                        </motion.p>
                    </div>

                    <div className="shop_tiles_item">
                        <motion.h3 variants={tilesAnimation} className="shop_tiles_title">Generation Graphics</motion.h3>
                        <motion.p variants={tilesAnimation} className="block_description">
                            Vivamus magna justo, lacinia eget coecetur
                            sed, convallis at tellus. Curabitur non nulla sit
                            Vestibum ante ipsum primis in faucibus orci
                        </motion.p>
                    </div>

                    <div className="shop_tiles_item">
                        <motion.h3 variants={tilesAnimation} className="shop_tiles_title">Lastest Game Engine</motion.h3>
                        <motion.p variants={tilesAnimation} className="block_description">
                            Vivamus magna justo, lacinia eget coecetur
                            sed, convallis at tellus. Curabitur non nulla sit
                            Vestibum ante ipsum primis in faucibus orci
                        </motion.p>
                    </div>

                    <div className="shop_tiles_item">
                        <motion.h3 variants={tilesAnimation} className="shop_tiles_title">Multiplayer On The Go</motion.h3>
                        <motion.p variants={tilesAnimation} className="block_description">
                            Vivamus magna justo, lacinia eget coecetur
                            sed, convallis at tellus. Curabitur non nulla sit
                            Vestibum ante ipsum primis in faucibus orci
                        </motion.p>
                    </div>
                </motion.div>
            </div>
        </motion.div>
    );
};
