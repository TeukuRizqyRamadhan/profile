import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Slider from "react-slick";
import image1 from '../assets/logo/react.png';
import image2 from '../assets/logo/javascript.png';
import image3 from '../assets/logo/prisma.png';
import image4 from '../assets/logo/bootstrap.png';
import image5 from '../assets/logo/materialui.png';
import image6 from '../assets/logo/nodejs.png';
import image7 from '../assets/logo/nestjs.png';
import image8 from '../assets/logo/typescript.png';
import image9 from '../assets/logo/express.png';
import { motion } from 'framer-motion';

const logos = [
    { src: image1, name: 'React' },
    { src: image2, name: 'JavaScript' },
    { src: image3, name: 'Prisma' },
    { src: image4, name: 'Bootstrap' },
    { src: image5, name: 'Material-UI' },
    { src: image6, name: 'Node JS' },
    { src: image7, name: 'Nest JS' },
    { src: image8, name: 'TypeScript' },
    { src: image9, name: 'Express' },
];

const technologyVariants = {
    offscreen: { opacity: 0, y: 0 },
    onscreen: {
        opacity: 1,
        y: 0,
        transition: { type: 'spring', bounce: 0.3, duration: 0.8, delay: 0.2 }
    }
};

const Technology = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    };

    return (
        <motion.div
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.5 }}
            variants={technologyVariants}
        >
            <Box sx={{ p: 4, textAlign: 'center', backgroundColor: '#242424' }}>
                <Typography variant="h4" component="h2" gutterBottom sx={{ color: '#e0e0e0' }}>
                    Technology
                </Typography>
                <Slider {...settings}>
                    {logos.map((logo, index) => (
                        <Box key={index} sx={{}}>
                            <Box
                                sx={{
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    height: { xs: '80px', md: '100px' },
                                    marginBottom: '10px',
                                    transition: 'transform 0.3s, box-shadow 0.3s',
                                    cursor: 'pointer',
                                    '&:hover': {
                                        transform: 'scale(1.1)',
                                        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.2)',
                                    }
                                }}
                            >
                                <Box
                                    component="img"
                                    src={logo.src}
                                    alt={logo.name}
                                    sx={{ width: { xs: '25%', md: '60%' }, height: 'auto' }}
                                />
                            </Box>
                            <Typography
                                variant="body2"
                                component="p"
                                sx={{
                                    color: '#e0e0e0',
                                    display: { xs: 'none', md: 'block' }
                                }}
                            >
                                {logo.name}
                            </Typography>
                        </Box>
                    ))}
                </Slider>
            </Box>
        </motion.div>
    );
};

export default Technology;
