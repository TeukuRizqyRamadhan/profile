import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';

const SocialIcons = () => {
    return (
        <Box sx={{ display: 'flex', gap: 2, mb: 1 }}>
            <IconButton
                href="mailto:teukurizqyr@gmail.com"
                target="_blank"
                sx={{
                    color: '#e0e0e0',
                    p: 0,
                    '&:hover': {
                        color: 'blue',
                    }
                }}
            >
                <EmailIcon />
            </IconButton>
            <IconButton
                href="tel:+6283890963900"
                target="_blank"
                sx={{
                    color: '#e0e0e0',
                    p: 0,
                    '&:hover': {
                        color: 'blue',
                    }
                }}
            >
                <PhoneIcon />
            </IconButton>
            <IconButton
                href="https://linkedin.com/in/teukurizqyr"
                target="_blank"
                sx={{
                    color: '#e0e0e0',
                    p: 0,
                    '&:hover': {
                        color: 'blue',
                    }
                }}
            >
                <LinkedInIcon />
            </IconButton>
            <IconButton
                href="https://instagram.com/teukurizqyr"
                target="_blank"
                sx={{
                    color: '#e0e0e0',
                    p: 0,
                    '&:hover': {
                        color: 'blue',
                    }
                }}
            >
                <InstagramIcon />
            </IconButton>
        </Box>
    );
};

export default SocialIcons;
