import { Box, Button, Typography } from "@mui/material";
import Footer from "../components/footer";
import Mainpage from "../components/mainpage";
import Warnit from "./projectpage/warnit";
import { Link } from "react-router-dom";

const Projets = () => {
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
                Liste des projets
            </Typography>

            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <Button
                    style={buttonStyles}
                    component={Link}
                    to="/project/warnit"
                >
                    Warnit
                </Button>

                <Button
                    style={buttonStyles}
                    component={Link}
                    to="/project/warnitapp"
                >
                    Warnit App
                </Button>

                <Button
                    style={buttonStyles}
                    component={Link}
                    to="/project/projectui"
                >
                    UI Agenda
                </Button>

                <Button
                    style={buttonStyles}
                    component={Link}
                    to="/project/formaculture"
                >
                    Formaculture
                </Button>

                <Button
                    style={buttonStyles}
                    component={Link}
                    to="/project/conceptwb"
                >
                    Conception weight and balance
                </Button>
                <br/>
            </Box>
            <Footer />
        </Box>
        
    );
};

export default Projets;