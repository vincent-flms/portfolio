import React, { useState } from 'react';
import { Box, Typography, Avatar } from '@mui/material';
import logoMain from "./../design/logoMain.png";
import imagePerso from './../design/imagePerso.jpg';
import { useNavigate } from 'react-router-dom';
const Home: React.FC = () => {

  const [isHovered, setIsHovered] = useState(false);
  const [isHovered2, setIsHovered2] = useState(false);
  const navigate = useNavigate();
  // Styles conditionnels
  const buttonStyles: React.CSSProperties = {
    width: '25vw', // Largeur à 30% de la largeur de l'écran
    padding: '15px 0', // Padding vertical pour donner un peu de hauteur
    fontSize: '1.2em', // Taille de police relative pour s'adapter à la taille du bouton
    cursor: 'pointer',
    backgroundColor: '#007bff', // Bleu pour le bouton principal
    color: '#fff',
    border: 'none',
    borderRadius: '8px', // Bord arrondi
    outline: 'none',
    textAlign: 'center', // Centrer le texte
    boxShadow: isHovered ? '0 6px 12px rgba(0, 0, 0, 0.3)' : 'none', // Effet d'ombre au survol
    transition: 'all 0.3s ease', // Transition fluide pour l'ombre et la couleur
    fontWeight: 'bold', // Texte en gras
    whiteSpace: 'nowrap', // Empêche le texte de se couper sur plusieurs lignes
    overflow: 'hidden', // Cache tout texte qui dépasse
    textOverflow: 'ellipsis', // Ajoute des "..." si le texte est trop long
  };

  const buttonStyles2: React.CSSProperties = {
    width: '25vw', // Largeur à 30% de la largeur de l'écran
    padding: '15px 0', // Padding vertical pour donner un peu de hauteur
    fontSize: '1.2em', // Taille de police relative pour s'adapter à la taille du bouton
    cursor: 'pointer',
    backgroundColor: '#007bff', // Bleu pour le bouton principal
    color: '#fff',
    border: 'none',
    borderRadius: '8px', // Bord arrondi
    outline: 'none',
    textAlign: 'center', // Centrer le texte
    boxShadow: isHovered2 ? '0 6px 12px rgba(0, 0, 0, 0.3)' : 'none', // Effet d'ombre au survol
    transition: 'all 0.3s ease', // Transition fluide pour l'ombre et la couleur
    fontWeight: 'bold', // Texte en gras
    whiteSpace: 'nowrap', // Empêche le texte de se couper sur plusieurs lignes
    overflow: 'hidden', // Cache tout texte qui dépasse
    textOverflow: 'ellipsis', // Ajoute des "..." si le texte est trop long
  };
  // Fonction pour gérer le survol
  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  const handleMouseEnter2 = () => {
    setIsHovered2(true);
  };

  const handleMouseLeave2 = () => {
    setIsHovered2(false);
  };
  const handleClick = () => {
    navigate('/competence');
  };
  const handleClick2 = () => {
    navigate('/projet');
  };
  return (
    <Box>
      <Box sx={{ padding: 2, textAlign: 'center', alignItems: 'center' }}>
        <div style={{ display: 'flex', flexDirection: "row", width: "50%", marginLeft: 'auto', marginRight: 'auto' }}>
          <div style={{ height: "100%", width: '100%', flex : 1,  }}>
            <img src={logoMain} alt="Presentation" style={{ width: 550, height: 'auto' }} />
          </div>
          <div style={{ display: 'flex', flex: 1, alignItems: 'center', justifyContent: 'center', width: 2, height: 'auto', borderRadius: 15 }}>
            <div style={{ height:'100%', width: '20px',  border: 'solid 5% lightGray' , backgroundColor:'lightGray' }} />
          </div>
          <div style={{
            height: "100%", width: '75%',
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
              Je m'appelle vincent Ducournau, détenteur d'un baccalauréat Scientifique options science et vie de la terre.
              Je suis étudiant en 5ème année au sein de l'école d’ingénierie informatique du <a href='https://www.esiea.fr/lecole/les-campus/' style={{ textDecoration: 'none' }}> groupe AEN</a>.
              Je prépare un diplôme Bac+5 (RNCP7) Titre d'Expert en Ingénierie Systèmes et Réseaux.
              </Typography>
            <Typography paragraph>            
              Ma dernière expérience fut une alternance au sein de l'entreprise <a href='https://www.cyberjet.fr/' style={{ textDecoration: 'none' }}>CYBERJET</a>.
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
            <strong>Mes valeurs :</strong> Innovation, Détermination, Collaboration.
          </Typography>
          <Typography paragraph>
            <strong>Mon projet Professionnel :</strong> Devenir un expert reconnu en ingénierie logicielle, spécialisé dans le développement d'applications .
          </Typography>
          <Typography paragraph>
            <strong>Qualités Humaines :</strong> Empathie, Esprit d'équipe, Adaptabilité.
          </Typography>
          <Typography paragraph>
            <strong>Centres d'Intérêt :</strong> Développement logiciel, Sécurité informatique, Randonnée.
          </Typography>
          <div style={{ display: 'flex', flex: 1, alignItems: 'center', justifyContent: 'center', width: '90%', height: 1, borderRadius: 100, marginBottom: 70, marginTop: 70 }}>
            <div style={{ height:'100%', width: '100%',  border: 'solid 10% lightGray' , backgroundColor:'lightGray' }} />
          </div>
          <Box sx={{ display:'flex', justifyContent: 'space-between', width:'100%'}}>
            <button
              style={buttonStyles}
              onClick={handleClick}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              Mes compétences
            </button>
            <button
              style={buttonStyles2}
              onClick={handleClick2}
              onMouseEnter={handleMouseEnter2}
              onMouseLeave={handleMouseLeave2}
            >
              Mes projets
            </button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Home;