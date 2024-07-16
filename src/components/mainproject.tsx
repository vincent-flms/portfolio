import React from 'react';
import { Box, Typography } from '@mui/material';


const WarnitApp: React.FC = () => {
  return (
    <Box>
      <Box sx={{ padding: 2 }}>
        <Typography variant="h4" gutterBottom>Warnit App</Typography>
        <Typography variant="h6">Présentation</Typography>
        <Typography paragraph>
          Warnit App est une application de sécurité destinée à prévenir les utilisateurs des risques environnementaux.
        </Typography>
        <Typography variant="h6">Objectifs</Typography>
        <Typography paragraph>
          L'objectif était de créer une application intuitive et fiable pour alerter les utilisateurs en temps réel des dangers tels que les incendies et les inondations.
        </Typography>
        <Typography variant="h6">Étapes</Typography>
        <Typography paragraph>
          J'ai participé à la conception de l'interface utilisateur, au développement backend et à l'intégration des systèmes de notification en temps réel.
        </Typography>
        <Typography variant="h6">Résultats</Typography>
        <Typography paragraph>
          L'application a été téléchargée plus de 10 000 fois et a reçu des retours positifs pour sa facilité d'utilisation et son efficacité.
        </Typography>
        <Typography variant="h6">Regard Critique</Typography>
        <Typography paragraph>
          Ce projet m'a permis de développer mes compétences en gestion de projet et en développement d'applications sécurisées.
        </Typography>
      </Box>
    </Box>
  );
};

export default WarnitApp;