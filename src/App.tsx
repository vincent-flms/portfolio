import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link, Navigate } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Menu, MenuItem, Button, Box } from '@mui/material';

import Agilitskill from './container/skillpage/agilitskill';
import Csharpskill from './container/skillpage/csharpskill';
import Externalcomskill from './container/skillpage/externalcomskill';
import Gestprojectskill from './container/skillpage/gestprojectskill';
import Javaskill from './container/skillpage/javaskill';
import Maquettageskill from './container/skillpage/maquettageskill';
import Retroingeskill from './container/skillpage/retroingeskill';
import Sqlskill from './container/skillpage/sqlskill';
import Typescriptskill from './container/skillpage/typescriptskill';
import Umlconceptskill from './container/skillpage/umlconcepskill';

import Conceptwbproject from './container/projectpage/conceptwbproject';
import Formacultureproject from './container/projectpage/formacultureproject';
import Projectuiagenda from './container/projectpage/projectuiagenda';
import Warnit from './container/projectpage/warnit';
import Warnitapp from './container/projectpage/warnitapp';

import Contact from './container/contact';
import Parcour from './container/parcour';
import Home from './container/home';

const App: React.FC = () => {
  const [anchorElSkills, setAnchorElSkills] = useState<null | HTMLElement>(null);
  const [anchorElProjects, setAnchorElProjects] = useState<null | HTMLElement>(null);

  const handleSkillsMenuClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElSkills(event.currentTarget);
  };

  const handleProjectsMenuClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElProjects(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorElSkills(null);
    setAnchorElProjects(null);
  };

  return (
    <Router>
      <AppBar position="static" style={{ padding: '1%' }}>
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            <div>
              Vincent Ducournau
            </div>
            <div style={{ marginLeft: 20, fontSize: 16 }}>
              25 ans
            </div>
          </Typography>
          <Button color="inherit" component={Link} to="/">Home</Button>
          <Button
            color="inherit"
            onClick={handleSkillsMenuClick}
          >
            Skills
          </Button>
          <Menu
            anchorEl={anchorElSkills}
            open={Boolean(anchorElSkills)}
            onClose={handleClose}
          >
            <MenuItem onClick={handleClose} component={Link} to="/skill/agilitskill">Agilité</MenuItem>
            <MenuItem onClick={handleClose} component={Link} to="/skill/csharp">C#</MenuItem>
            <MenuItem onClick={handleClose} component={Link} to="/skill/externalcom">Communication externe</MenuItem>
            <MenuItem onClick={handleClose} component={Link} to="/skill/gestionproject">Gestion de projet</MenuItem>
            <MenuItem onClick={handleClose} component={Link} to="/skill/javas">Java</MenuItem>
            <MenuItem onClick={handleClose} component={Link} to="/skill/maquettages">Maquettage</MenuItem>
            <MenuItem onClick={handleClose} component={Link} to="/skill/retroinge">Retro-ingénieurie</MenuItem>
            <MenuItem onClick={handleClose} component={Link} to="/skill/sql">SQL</MenuItem>
            <MenuItem onClick={handleClose} component={Link} to="/skill/typescript">TypeScript</MenuItem>
            <MenuItem onClick={handleClose} component={Link} to="/skill/conceptuml">Conception UML</MenuItem>
          </Menu>
          <Button
            color="inherit"
            onClick={handleProjectsMenuClick}
          >
            Projects
          </Button>
          <Menu
            anchorEl={anchorElProjects}
            open={Boolean(anchorElProjects)}
            onClose={handleClose}
          >
            <MenuItem onClick={handleClose} component={Link} to="/project/warnitapp">Warnit App</MenuItem>
            <MenuItem onClick={handleClose} component={Link} to="/project/warnit">Warnit</MenuItem>
            <MenuItem onClick={handleClose} component={Link} to="/project/projectui">UI Agenda</MenuItem>
            <MenuItem onClick={handleClose} component={Link} to="/project/formaculture">Formaculture</MenuItem>
            <MenuItem onClick={handleClose} component={Link} to="/project/conceptwb">Conception Weight and Balance</MenuItem>
          </Menu>
          <Button color="inherit" component={Link} to="/parcour">Parcour</Button>
          <Button color="inherit" component={Link} to="/contact">Contact</Button>
        </Toolbar>
      </AppBar>

      <Box mt={2}>
        <Routes>
          <Route path="/"/>
          <Route path="/portfolio" element={<Home />} />
          <Route path="/project/warnitapp" element={<Warnitapp />} />
          <Route path="/project/warnit" element={<Warnit />} />
          <Route path="/project/projectui" element={<Projectuiagenda />} />
          <Route path="/project/formaculture" element={<Formacultureproject />} />
          <Route path="/project/conceptwb" element={<Conceptwbproject />} />
          <Route path="/skill/agilitskill" element={<Agilitskill />} />
          <Route path="/skill/csharp" element={<Csharpskill />} />
          <Route path="/skill/externalcom" element={<Externalcomskill />} />
          <Route path="/skill/gestionproject" element={<Gestprojectskill />} />
          <Route path="/skill/javas" element={<Javaskill />} />
          <Route path="/skill/maquettages" element={<Maquettageskill />} />
          <Route path="/skill/retroinge" element={<Retroingeskill />} />
          <Route path="/skill/sql" element={<Sqlskill />} />
          <Route path="/skill/typescript" element={<Typescriptskill />} />
          <Route path="/skill/conceptuml" element={<Umlconceptskill />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/parcour" element={<Parcour />} />
        </Routes>
      </Box>
    </Router>
  );
};

export default App;