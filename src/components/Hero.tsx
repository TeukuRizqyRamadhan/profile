import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { motion } from 'framer-motion';
import photo from "../assets/potrait.png";
import { Link } from '@mui/material';
import SocialIcons from './atom/SocialIcons';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const heroVariants = {
    offscreen: { opacity: 0, y: -50 },
    onscreen: {
        opacity: 1,
        y: 0,
        transition: { type: 'spring', bounce: 0.3, duration: 0.8, }
    }
};

const Hero = () => {
    return (
        <motion.div
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.5 }}
            variants={heroVariants}
        >
            <Box
                sx={{
                    p: 2,
                    backgroundColor: '#242424',
                    height: { xs: 'auto', md: '250px' },
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexDirection: { xs: 'column', md: 'row' }
                }}
            >
                <Box sx={{ flex: 1, textAlign: { xs: 'center', md: 'left' } }}>
                    <Typography variant="h3" component="h1" sx={{ color: '#e0e0e0', fontSize: { xs: '2rem', md: '3rem' } }}>
                        Hello, I'm Teuku Rizqy Ramadhan
                    </Typography>
                    <Typography variant="h5" component="h2" sx={{ color: '#e0e0e0', mb: { xs: 2 } }}>
                        Full Stack Web Developer
                    </Typography>
                    <Box sx={{ display: 'flex', alignItems: 'center', mt: 1, justifyContent: { xs: 'center', md: 'left' } }}>
                        <LocationOnIcon sx={{ fontSize: '18px', color: '#e0e0e0' }} />
                        <Link href="https://maps.app.goo.gl/opQUN3LjLLe2bJgD6" target="_blank" rel="noopener noreferrer" sx={{
                            color: '#e0e0e0', textDecoration: 'none', '&:hover': {
                                textDecoration: 'underline',
                            }
                        }}>
                            <Typography variant="body1" component="p" sx={{ fontStyle: 'italic' }}>
                                Jakarta, Indonesia
                            </Typography>
                        </Link>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', mt: 1, justifyContent: { xs: 'center', md: 'left' }, mb: { xs: 2, md: 0 } }}>
                        <SocialIcons />
                    </Box>
                </Box>
                <Box sx={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <Box
                        component="img"
                        src={photo}
                        alt="Foto Teuku Rizqy Ramadhan"
                        sx={{
                            width: { xs: '150px', md: '200px' },
                            height: { xs: '150px', md: '200px' },
                            borderRadius: '50%',
                            boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)',
                            transition: 'transform 0.3s ease-in-out',
                            '&:hover': {
                                transform: 'scale(1.1)',
                                boxShadow: '0px 8px 16px rgba(0, 0, 0, 0.3)',
                            }
                        }}
                    />
                </Box>
            </Box>
        </motion.div>
    );
};

export default Hero;
