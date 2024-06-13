import React from 'react';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import { Box } from '@mui/material';

interface PortfolioItem {
    name: string;
    description: string;
    link: string;
    image: string;
}

interface PortfolioListProps {
    items: PortfolioItem[];
}

const PortfolioList: React.FC<PortfolioListProps> = ({ items }) => {
    return (
        <>
            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                <Typography variant="h4" component="h2" gutterBottom sx={{ color: '#e0e0e0' }}>
                    Projects
                </Typography >
            </Box>
            <Grid container spacing={4} sx={{ pt: 4 }}>
                {items.map((item, index) => (
                    <Grid item xs={12} sm={6} key={index}>
                        <Card
                            sx={{
                                borderRadius: 2,
                                boxShadow: 3,
                                transition: 'transform 0.3s, box-shadow 0.3s',
                                '&:hover': {
                                    transform: 'scale(1.05)',
                                    boxShadow: 6,
                                }
                            }}
                        >
                            <CardActionArea href={item.link} target="_blank">
                                <CardMedia
                                    component="img"
                                    height="140"
                                    image={item.image}
                                    alt={item.name}
                                    sx={{ borderTopLeftRadius: 8, borderTopRightRadius: 8 }}
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        {item.name}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        {item.description}
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </>
    );
};

export default PortfolioList;
