import { motion } from 'framer-motion';
import './Cloud.css';
import video from '../../images/video_control.svg';
import { Esports } from '../Esports/Esports';
import { Button } from '../Button/Button';

const textAnimation = {
    hidden: {
        x: -100,
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
        scale: 0.8
    },
    visible: {
        scale: 1,
        transition: {
            delay: 0.5,
            duration: 1.2
        }
    }
};

export const Cloud = () => {
    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.5, once: true }}
            className="cloud"
        >
            <div className="cloud_content wrapper">
                <div>
                    <Esports />

                    <motion.h2
                        variants={textAnimation}
                        custom={1}
                        className="block_title"
                    >
                        The New Era Of<br />
                        Cloud Gaming Here
                    </motion.h2>

                    <motion.p
                        variants={textAnimation}
                        custom={2}
                        className="block_description"
                    >
                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                        accusantium doloremque laudantium, totam rem aperiam, eaque
                        ipsa quae ab illo inventore veritatis et quasi architecto beatae
                        vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia
                    </motion.p>

                    <Button text={'Explore More'} type={'standard'} />
                </div>

                <motion.div
                    variants={imageAnimation}
                    className="cloud_video"
                >
                    <img src={video} alt="control" width="128" height="128" />
                </motion.div>
            </div>
        </motion.div>
    );
};
