import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';

const SocialIcons = () => {
    return (
        <Box sx={{ display: 'flex', gap: 1, mb: 1 }}>
            <IconButton
                href="mailto:teukurizqyr@gmail.com"
                target="_blank"
                sx={{
                    color: '#e0e0e0',
                    borderColor: '#e0e0e0',
                    borderWidth: '1px',
                    borderStyle: 'solid',
                    borderRadius: '8px',
                    padding: '8px',
                    '&:hover': {
                        backgroundColor: '#e0e0e0',
                        color: '#242424',
                        borderColor: '#242424',
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
                    borderColor: '#e0e0e0',
                    borderWidth: '1px',
                    borderStyle: 'solid',
                    borderRadius: '8px',
                    padding: '8px',
                    '&:hover': {
                        backgroundColor: '#e0e0e0',
                        color: '#242424',
                        borderColor: '#242424',
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
                    borderColor: '#e0e0e0',
                    borderWidth: '1px',
                    borderStyle: 'solid',
                    borderRadius: '8px',
                    padding: '8px',
                    '&:hover': {
                        backgroundColor: '#e0e0e0',
                        color: '#242424',
                        borderColor: '#242424',
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
                    borderColor: '#e0e0e0',
                    borderWidth: '1px',
                    borderStyle: 'solid',
                    borderRadius: '8px',
                    padding: '8px',
                    '&:hover': {
                        backgroundColor: '#e0e0e0',
                        color: '#242424',
                        borderColor: '#242424',
                    }
                }}
            >
                <InstagramIcon />
            </IconButton>
        </Box>
    );
};

export default SocialIcons;
