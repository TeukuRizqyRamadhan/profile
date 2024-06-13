import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import photo from "../assets/potrait.png"

const Hero = () => {
    return (
        <Box sx={{ p: 2, backgroundColor: '#242424', height: '250px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Box sx={{ flex: 1, textAlign: 'left' }}>
                <Typography variant="h3" component="h1" sx={{ color: '#e0e0e0' }}>
                    Hello, I'm Teuku Rizqy Ramadhan
                </Typography>
                <Typography variant="h5" component="h2" sx={{ color: '#e0e0e0' }}>
                    Full Stack Web Developer
                </Typography>
            </Box>
            <Box sx={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <Box
                    component="img"
                    src={photo}
                    alt="Foto Teuku Rizqy Ramadhan"
                    sx={{ width: '200px', height: '200px', borderRadius: '50%' }}
                />
            </Box>
        </Box>
    );
};

export default Hero;
