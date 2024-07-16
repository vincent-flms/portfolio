import React from 'react';
import { Box, Typography, Avatar } from '@mui/material';
import logoMain from "./../design/logoMain.png";
import imagePerso from './../design/imagePerso.jpg';
const Home: React.FC = () => {
  return (
    <Box>
      <Box sx={{ padding: 2, textAlign: 'center', alignItems: 'center' }}>
        <div style={{ display: 'flex', flexDirection: "row", width: "75%", marginLeft: 'auto', marginRight: 'auto' }}>
          <div style={{ height: "100%", width: '100%' }}>
            <img src={logoMain} alt="Presentation" style={{ width: 550, height: 'auto' }} />
          </div>
          <div style={{ display: 'flex', flex: 1, alignItems: 'center', justifyContent: 'center', width: 2, height: 'auto', borderRadius: 15 }}>
            <div style={{ height:'100%', width: '20px',  border: 'solid 5% lightGray' , backgroundColor:'lightGray' }} />
          </div>
          <div style={{
            height: "100%", width: '100%',
            marginTop: 'auto', marginBottom: 'auto', display: 'flex', 
            flexDirection:'column', alignItems: 'center', justifyContent: 'center'
          }}>
            <Avatar alt="Vincent Ducournau" src={imagePerso} sx={{ width: 200, height: 'auto', marginBottom: '5%' }} />
            <Typography variant="h4">Vincent Ducournau</Typography>
            <Typography variant="h6" gutterBottom>Ingénieur en Informatique</Typography>
          </div>
        </div>

        <Box sx={{ textAlign: 'left', margin: 'auto', maxWidth: '800px', marginTop: '5%', marginBottom: '5%' }}>
        <div style={{ display: 'flex', flex: 1, alignItems: 'center', justifyContent: 'center', width: '90%', height: 1, borderRadius: 100, marginBottom: 70 }}>
            <div style={{ height:'100%', width: '100%',  border: 'solid 10% lightGray' , backgroundColor:'lightGray' }} />
          </div>
          <Typography paragraph>
            <div style={{marginBottom: '5%'}}><strong>Bonjour et bienvenue sur mon site, </strong></div>
          </Typography>
          <div style={{ width: '75%', marginRight: 'auto', marginLeft: 'auto'}}>
            <Typography paragraph>
              Je m'appelle vincent Ducournau.
              Je suis étudiant en alternance au sein de l'école d’ingénierie informatique gu groupe AEN.
              Je prépare un diplôme Bac+5 (RNCP7) Titre d'Expert en Ingénierie Systèmes et Réseaux.
              </Typography>
            <Typography paragraph>            
              Actuellement en alternance au sein d'une filiale de l'entreprise CYBERJET.
              Cette alternance m'a permis de comprendre le fonctionnement du stockage dans une grande structure informatique,
              les actions, les questions à se poser tout en développant mon autonomie et ma polyvalence.
            </Typography>
            <Typography paragraph>
              L'aspect humain a une place très importante au cours de notre formation.
              J'ai participé à de nombreux projets qui m'ont permis de développer mes compétences dans le domaine de la communication,
              de la confiance en soi, de l'ouverture d'esprit ainsi que du travail d'équipe.
            </Typography>

            <Typography paragraph>
              Dans la vie de tous les jours je suis quelqu'un de déterminer et d'innovant, passionnée de littérature, et de recherche.
              Mes valeurs humaines sont le respect, la bienvaillance envers autrui, et l'daptabilité
            </Typography>

            <Typography paragraph>
              J'espère que mon portfolio vous donnera une vue détaillée des compétences acquises.
              Vous voulez en savoir davantage ? Visitez mon site !
            </Typography>
          </div>
          <div style={{ display: 'flex', flex: 1, alignItems: 'center', justifyContent: 'center', width: '90%', height: 1, borderRadius: 100, marginBottom: 70, marginTop: 70 }}>
            <div style={{ height:'100%', width: '100%',  border: 'solid 10% lightGray' , backgroundColor:'lightGray' }} />
          </div>
          <Typography paragraph>
            <strong>Valeurs :</strong> Innovation, Détermination, Collaboration.
          </Typography>
          <Typography paragraph>
            <strong>Projet Professionnel :</strong> Devenir un expert reconnu en ingénierie logicielle, spécialisé dans le développement d'applications sécurisées.
          </Typography>
          <Typography paragraph>
            <strong>Qualités Humaines :</strong> Empathie, Esprit d'équipe, Adaptabilité.
          </Typography>
          <Typography paragraph>
            <strong>Centres d'Intérêt :</strong> Développement logiciel, Sécurité informatique, Randonnée.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Home;