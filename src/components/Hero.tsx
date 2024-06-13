import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import photo from "../assets/potrait.png";

const Hero = () => {
    return (
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
    );
};

export default Hero;
