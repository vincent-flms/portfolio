import React from 'react';
import { Box, Typography, Grid, Paper } from '@mui/material';
import { Link } from 'react-router-dom';

const Skills: React.FC = () => {
  return (
    <Box>
      <Box sx={{ padding: 2 }}>
        <Typography variant="h4" gutterBottom>Compétences</Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <Paper sx={{ padding: 2 }}>
              <Typography variant="h6">Compétences Techniques</Typography>
              <ul>
                <li><Link to="/skill/javas">Java</Link></li>
                <li><Link to="/skill/typescript">TypeScript</Link></li>
                <li><Link to="/skill/sql">SQL</Link></li>
                <li><Link to="/skill/csharp">C#</Link></li>
                <li><Link to="/skill/conceptuml">Conception UML</Link></li>
              </ul>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Paper sx={{ padding: 2 }}>
              <Typography variant="h6">Compétences Non Techniques</Typography>
              <ul>
                <li><Link to="/skill/agilitskill">Agilité</Link></li>
                <li><Link to="/skill/externalcom">Communication externe</Link></li>
                <li><Link to="/skill/gestionproject">Gestion de projet</Link></li>
                <li><Link to="/skill/maquettages">Maquettage</Link></li>
                <li><Link to="/skill/retroinge">Retro-ingénieurie</Link></li>
              </ul>
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Skills;