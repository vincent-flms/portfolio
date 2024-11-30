import { Box, Card, CardContent, Typography, Avatar, Link } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import Footer from '../components/footer';
import imagePerso from './../design/imagePerso.jpg';
import { useEffect, useState } from 'react';

const Contact = () => {
    
    return (
        <Box >
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: 2,height : '70vh' }}>
                <Card sx={{ display: 'flex', padding: 2, width: '50%', minWidth: 300 }}>
                    <Avatar
                        alt="Vincent Ducournau"
                        src={imagePerso}
                        sx={{ width: 150, height: 150, marginRight: 2 }}
                    />
                    <CardContent sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                        <Typography variant="h5" component="div">
                            Vincent Ducournau
                        </Typography>
                        <Typography variant="body1" color="text.secondary" gutterBottom>
                            Ingénieur en Informatique
                        </Typography>
                        <Box sx={{ display: 'flex', alignItems: 'center', marginTop: 1 }}>
                            <LinkedInIcon sx={{ marginRight: 1 }} />
                            <Link href="https://www.linkedin.com/in/vincent-ducournau" target="_blank" rel="noopener noreferrer">
                                vincentducournau
                            </Link>
                        </Box>
                        <Box sx={{ display: 'flex', alignItems: 'center', marginTop: 1 }}>
                            <EmailIcon sx={{ marginRight: 1 }} />
                            <Link href="mailto:vincent.ducournau@example.com">
                                vincent.ducournau971@gmail.com
                            </Link>
                        </Box>
                    </CardContent>
                </Card>

            </Box>
            <Footer />
        </Box>
    );
};
export default Contact;

