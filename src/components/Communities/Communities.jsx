import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Form } from '../Form/Form';
import './Communities.css';

export const Communities = () => {
    const [width, setWidth] = useState(1920);
    const handleWidth = () => setWidth(window.innerWidth);

    useEffect(() => {
        handleWidth();
        const unsubscribe = window.addEventListener('resize', handleWidth);
        return unsubscribe;
    }, []);

    return (
        <motion.div
            initial={{ backgroundSize: width > 1370 ? "150% auto" : "auto 150%" }}
            whileInView={{ backgroundSize: width > 1370 ? "100% auto" : "auto 100%" }}
            transition={{ duration: 5 }}
            className="communities"
        >
            <div className="communities_content wrapper">
                <h2 className="block_title">
                    Join The Largest<br />
                    gaming <span className="underline blue">community</span>
                </h2>

                <p className="block_description">
                    Nulla porttitor accumsan tincidunt. Curabitur non nulla sit amet nisl tempus<br />
                    lectus. Cras ultricies ligula sed magna dictum porta. Nulla quis lorem ut libero malesu<br />
                    ada feugiat. Nulla quis lorem ut libero malesuada feugiat. Vivamus magna justo
                </p>

                <Form />
            </div>
        </motion.div>
    );
};
