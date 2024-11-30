import React from 'react';
import Footer from '../components/footer';
import { Box, Button, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

const Competences = () => {
    const buttonStyles: React.CSSProperties = {
        width: '60%', // Taille des boutons
        padding: '15px 0',
        fontSize: '1.2em',
        cursor: 'pointer',
        backgroundColor: '#007bff',
        color: '#fff',
        border: 'none',
        borderRadius: '8px',
        outline: 'none',
        textAlign: 'center',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        transition: 'all 0.3s ease',
        fontWeight: 'bold',
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        margin: '10px auto', // Espacement des boutons
    };

    
    return (
        <Box sx={{ textAlign: 'center' }}>
            <Typography variant="h4" gutterBottom>
                Liste des compétences
            </Typography>

            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <Button
                    style={buttonStyles}
                    component={Link}
                    to="/skill/agilitskill"
                >
                    Agilité
                </Button>

                <Button
                    style={buttonStyles}
                    component={Link}
                    to="/skill/csharp"
                >
                    C#
                </Button>

                <Button
                    style={buttonStyles}
                    component={Link}
                    to="/skill/externalcom"
                >
                    Communication externe
                </Button>

                <Button
                    style={buttonStyles}
                    component={Link}
                    to="/skill/gestionproject"
                >
                    Gestion de projet
                </Button>

                <Button
                    style={buttonStyles}
                    component={Link}
                    to="/skill/javas"
                >
                    Java
                </Button>

                <Button
                    style={buttonStyles}
                    component={Link}
                    to="/skill/maquettages"
                >
                    Maquettage
                </Button>

                <Button
                    style={buttonStyles}
                    component={Link}
                    to="/skill/retroinge"
                >
                    Retro-ingénieurie
                </Button>

                <Button
                    style={buttonStyles}
                    component={Link}
                    to="/skill/sql"
                >
                    SQL
                </Button>

                <Button
                    style={buttonStyles}
                    component={Link}
                    to="/skill/typescript"
                >
                    Typescript
                </Button>

                <Button
                    style={buttonStyles}
                    component={Link}
                    to="/skill/conceptuml"
                >
                    Conception UML
                </Button>
                <br/>
            </Box>
            <Footer />
        </Box>
        
    );
};

export default Competences;