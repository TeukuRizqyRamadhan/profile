import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import SocialIcons from '../components/atom/SocialIcons'; // Pastikan jalur import sesuai
import { motion } from 'framer-motion';

const aboutVariants = {
    offscreen: { opacity: 0, y: 100 },
    onscreen: {
        opacity: 1,
        y: 0,
        transition: { type: 'spring', bounce: 0.3, duration: 0.8 }
    }
};

const About = () => {
    return (
        <motion.div
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.5 }}
            variants={aboutVariants}
        >
            <Box sx={{ p: 2, backgroundColor: '#242424', color: '#e0e0e0' }}>
                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', mb: 4 }}>
                    <Box sx={{ maxWidth: '100%' }}>
                        <Typography variant="body1" component="p" sx={{ mt: 2 }}>
                            Hello, I am a Full Stack Web Developer & UI/UX Designer based in Jakarta, able to work individually or in a team. Hard worker and confident. I'm currently work at Tzu Chi School
                        </Typography>
                        <Link href="https://docs.google.com/document/d/1aOGDsJTiz92dhitDkr3KWltOyAvge88B/edit?usp=sharing&ouid=111057544088647809250&rtpof=true&sd=true" target="_blank" rel="noopener noreferrer">
                            <Button variant="contained" sx={{
                                mt: 1, backgroundColor: '#ffffff', color: '#000', textTransform: 'none', '&:hover': {
                                    color: '#e0e0e0'
                                }
                            }}>
                                Download CV
                            </Button>
                        </Link>
                    </Box>
                </Box>
            </Box>
        </motion.div>
    );
};

export default About;
