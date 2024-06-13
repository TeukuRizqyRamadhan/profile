import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { motion } from 'framer-motion';

const footerVariants = {
    offscreen: { opacity: 0, y: 0 },
    onscreen: {
        opacity: 1,
        y: 0,
        transition: { type: 'spring', bounce: 0.3, duration: 0.8, delay: 0.2 }
    }
};

const Footer = () => {
    return (
        <motion.div
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.5 }}
            variants={footerVariants}
        >
            <Box sx={{ p: 2, textAlign: 'center', backgroundColor: '#242424', color: '#e0e0e0' }}>
                <Typography variant="body1" component="p">
                    © 2024 Teuku Rizqy Ramadhan
                </Typography>
            </Box>
        </motion.div>
    );
};

export default Footer;
