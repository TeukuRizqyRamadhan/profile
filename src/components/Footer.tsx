import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const Footer = () => {
    return (
        <Box sx={{ p: 2, textAlign: 'center', backgroundColor: '#242424', color: '#e0e0e0' }}>
            <Typography variant="body1" component="p">
                © 2024 Teuku Rizqy Ramadhan
            </Typography>
        </Box>
    );
};

export default Footer;
