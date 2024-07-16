import { Box, Card, CardActionArea, CardContent, Divider, Grid, List, ListItem, ListItemText, Typography } from "@mui/material";
import Footer from "../../components/footer";
import { useNavigate } from 'react-router-dom';

const etapes = [
  {
    title: "Étude de l'existant",
    description: "Cette phase impliquait une analyse approfondie des documents, des programmes existants (dont une rétro-ingénierie en Python), de la base SQL, des termes techniques, de la documentation de l'entreprise et des designs d'autres applications associées. Cette étude a permis de comprendre les exigences et les contraintes du projet."
  },
  {
    title: "Génération des acteurs et des fonctionnalités",
    description: "Après l'étude initiale, nous avons identifié les différents acteurs (utilisateurs, super administrateurs, administrateurs) et les fonctionnalités nécessaires pour le logiciel."
  },
  {
    title: "Conception de la base SQL",
    description: " J'ai conçu les schémas UML représentant la structure des tables de la base de données, les relations entre les entités et les contraintes d'intégrité. Cela a permis de créer une base de données relationnelle efficace pour le stockage et la manipulation des données du projet."
  },
  {
    title: "Rédaction du document de spécification technique",
    description: " J'ai documenté toutes les spécifications techniques, incluant les appels API en C#, les structures de données et les fonctionnalités. Ce document a servi de guide tout au long du développement."
  },
  {
    title: "Création de la maquette",
    description: "À partir des données collectées et des fonctionnalités définies, j'ai développé une maquette en utilisant Typescript (React Native), intégrant les algorithmes nécessaires pour les calculs de weight and balance."
  },
];

const Acteurs = [
  {
    title: "Crew",
    description: "Utilisateurs finaux du logiciel, principalement les pilotes et les équipes de maintenance qui utilisent le logiciel pour effectuer des calculs précis de weight and balance."
  },
  {
    title: "SA User",
    description: "Super administrateurs responsables de la gestion globale du système et de la configuration des paramètres de sécurité."
  },
  {
    title: "Admin User",
    description: "Administrateurs chargés de la gestion quotidienne du système et de l'assistance aux utilisateurs finaux."
  }
];

const Resultats = [
  {
    title: "Pour l'entreprise",
    description: "Une documentation technique détaillée et validée par la DGAC, garantissant la conformité du logiciel aux régulations aériennes. Une maquette fonctionnelle validée par l'entreprise, servant de base pour le développement ultérieur du produit final."
  },
  {
    title: "Pour moi",
    description: "Ce projet m'a permis d'approfondir mes compétences techniques en SQL, Typescript, C#, rétro-ingénierie et UML, ainsi que de renforcer mes capacités en gestion de projet et en maquettage. J'ai également acquis une meilleure compréhension des exigences de l'industrie aéronautique et des processus de validation réglementaire."
  }
];

const Lendemains = [
  {
    title: "Futur immédiat",
    description: "La maquette validée a servi de base pour le développement de la version finale du logiciel, impliquant des tests approfondis et des itérations de développement pour s'assurer de la conformité aux spécifications techniques."
  },
  {
    title: "À distance",
    description: "Le logiciel finalisé a été déployé chez les clients de CYBERJET, offrant une solution fiable pour la gestion du weight and balance. Cette réussite a renforcé la réputation de CYBERJET dans l'industrie aéronautique."
  },
  {
    title: "Aujourd'hui",
    description: "Le projet a permis d'établir des standards pour les futurs projets de CYBERJET, incluant des méthodologies de gestion de projet et des pratiques de conception éprouvées. Pour moi, cette expérience a été un tremplin vers des rôles plus complexes et des responsabilités accrues dans le domaine de la gestion de projets technologiques."
  }
];

const skill = [
  {
    title: "SQL",
    lien: "/skill/sql"
  },
  {
    title: "Typescript",
    lien: "/skill/typescript"
  },
  {
    title: "C#",
    lien: "/skill/csharp"
  },
  {
    title: "Rétro-ingénieurie",
    lien: "/skill/retroinge"
  },
  {
    title: "UML conception",
    lien: "/skill/conceptuml"
  },
  {
    title: "Gestion de projet",
    lien: "/skill/gestionproject"
  },
  {
    title: "Maquettage",
    lien: "/skill/maquettages"
  }
]
const Conceptwbproject = () => {
  const navigate = useNavigate();

  const handleClick = (link: string) => {
    navigate(link);
  };

  return (
    <Box>
      <Box sx={{ padding: 2, marginLeft: '15%', marginRight: '15%' }}>

        <Typography variant="h3" gutterBottom sx={{ textAlign: 'center' }}>
          Conception Weight and Balance (W&B)
        </Typography>

        <Divider sx={{ borderBottomWidth: 2, borderColor: 'lightGray' }} />

        <Typography variant="h6" sx={{ marginTop: '3%', marginBottom: '3%', position: 'relative' }}>
          Objectifs
          <span style={{ position: 'absolute', bottom: '-5px', left: 0, width: '80%', height: '2px', backgroundColor: 'red' }} />
        </Typography>
        <Typography paragraph>
          L'objectif principal du projet de conception W&B était de permettre un développement efficace et de produire un logiciel final répondant aux attentes spécifiques de CYBERJET et de ses clients. Ce logiciel devait assurer une gestion précise et sécurisée du weight and balance, un ensemble de calculs critiques pour déterminer les paramètres de poids et de centre de gravité des aéronefs.
        </Typography>

        <Divider sx={{ borderBottomWidth: 1, borderColor: 'lightGray', width: '75%', margin: '5%', marginRight: 'auto', marginLeft: 'auto' }} />

        <Typography variant="h6" sx={{ marginTop: '3%', marginBottom: '3%', position: 'relative' }}>
          Contexte
          <span style={{ position: 'absolute', bottom: '-5px', left: 0, width: '80%', height: '2px', backgroundColor: 'red' }} />
        </Typography>
        <Typography paragraph>
          L'entreprise CYBERJET a sollicité la conception d'un nouveau projet informatique visant à développer un logiciel de gestion du weight and balance pour ses clients. Cette demande est née d'un besoin spécifique de l'un de leurs clients, qui nécessitait une solution logicielle pour automatiser et sécuriser les calculs liés au weight and balance. Ces calculs prennent en compte plusieurs paramètres de poids et des limites spécifiques à chaque appareil et à chaque vol.
        </Typography>

        <Divider sx={{ borderBottomWidth: 1, borderColor: 'lightGray', width: '75%', margin: '5%', marginRight: 'auto', marginLeft: 'auto' }} />

        <Typography variant="h6" sx={{ marginTop: '3%', marginBottom: '3%', position: 'relative' }}>
          Enjeu
          <span style={{ position: 'absolute', bottom: '-5px', left: 0, width: '80%', height: '2px', backgroundColor: 'red' }} />
        </Typography>
        <Typography paragraph>
          L'enjeu principal était de créer un logiciel qui sécurise les poids lors des vols, garantissant ainsi la conformité aux régulations et aux standards de sécurité aérienne. Le projet devait aboutir à un produit final validé par la DGAC (Direction Générale de l'Aviation Civile), sans quoi il risquait d'être rejeté, compromettant ainsi la satisfaction du client et la réputation de CYBERJET.
        </Typography>

        <Divider sx={{ borderBottomWidth: 1, borderColor: 'lightGray', width: '75%', margin: '5%', marginRight: 'auto', marginLeft: 'auto' }} />

        <Typography variant="h6" sx={{ marginTop: '3%', marginBottom: '3%', position: 'relative' }}>
          Risques
          <span style={{ position: 'absolute', bottom: '-5px', left: 0, width: '80%', height: '2px', backgroundColor: 'red' }} />
        </Typography>
        <Typography paragraph>
          <List >
            <ListItem>
              <ListItemText primary=" > Les risques associés au projet incluaient la possibilité de refus par la DGAC en raison de documentation insuffisante ou de calculs erronés." />
            </ListItem>
            <ListItem>
              <ListItemText primary=" > D'autres risques comprenaient les défis techniques liés à l'intégration de nouvelles fonctionnalités, la compatibilité des technologies choisies et les délais de livraison stricts." />
            </ListItem>
          </List>
        </Typography>

        <Divider sx={{ borderBottomWidth: 1, borderColor: 'lightGray', width: '75%', margin: '5%', marginRight: 'auto', marginLeft: 'auto' }} />

        <Typography variant="h6" sx={{ marginTop: '3%', marginBottom: '3%', position: 'relative' }}>
          Étapes du projet
          <span style={{ position: 'absolute', bottom: '-5px', left: 0, width: '80%', height: '2px', backgroundColor: 'red' }} />
        </Typography>
        <Typography paragraph>
          <Box sx={{ display: 'flex', overflowX: 'auto', padding: 2 }}>
            {etapes.map((item, index) => (
              <Box
                key={index}
                sx={{
                  position: 'relative',
                  flex: '0 0 auto',
                  marginRight: 2,
                  '&::after': {
                    content: '""',
                    position: 'absolute',
                    top: '50%',
                    right: -10,
                    borderTop: '10px solid transparent',
                    borderBottom: '10px solid transparent',
                    borderLeft: '10px solid red',
                  },
                  // Ne pas appliquer ::after sur le dernier élément
                  ...(index === etapes.length - 1 && { '&::after': { display: 'none' } }),
                }}
              >
                <Card sx={{ minWidth: 300, height: '100%', width: 150 }}>
                  <CardContent>
                    <Typography gutterBottom variant="h6" component="div">
                      {item.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {item.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Box>
            ))}
          </Box>
        </Typography>

        <Divider sx={{ borderBottomWidth: 1, borderColor: 'lightGray', width: '75%', margin: '5%', marginRight: 'auto', marginLeft: 'auto' }} />

        <Typography variant="h6" sx={{ marginTop: '3%', marginBottom: '3%', position: 'relative' }}>
          Acteurs
          <span style={{ position: 'absolute', bottom: '-5px', left: 0, width: '80%', height: '2px', backgroundColor: 'red' }} />
        </Typography>
        <Box sx={{ display: 'flex', overflowX: 'auto', padding: 2 }}>
          {Acteurs.map((item, index) => (
            <Box key={index} sx={{ flex: '0 0 auto', marginRight: 2 }}>
              <Card sx={{ minWidth: 300, width: 300 }}>
                <CardContent>
                  <Typography gutterBottom variant="h6" component="div">
                    {item.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {item.description}
                  </Typography>
                </CardContent>
              </Card>
            </Box>
          ))}
        </Box>

        <Divider sx={{ borderBottomWidth: 1, borderColor: 'lightGray', width: '75%', margin: '5%', marginRight: 'auto', marginLeft: 'auto' }} />

        <Typography variant="h6" sx={{ marginTop: '3%', marginBottom: '3%', position: 'relative' }}>
          Résultats
          <span style={{ position: 'absolute', bottom: '-5px', left: 0, width: '80%', height: '2px', backgroundColor: 'red' }} />
        </Typography>
        <Box sx={{ display: 'flex', overflowX: 'auto', padding: 2 }}>
          {Resultats.map((item, index) => (
            <Box key={index} sx={{ flex: '0 0 auto', marginRight: 2 }}>
              <Card sx={{ minWidth: 300, width: 300 }}>
                <CardContent>
                  <Typography gutterBottom variant="h6" component="div">
                    {item.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {item.description}
                  </Typography>
                </CardContent>
              </Card>
            </Box>
          ))}
        </Box>

        <Divider sx={{ borderBottomWidth: 1, borderColor: 'lightGray', width: '75%', margin: '5%', marginRight: 'auto', marginLeft: 'auto' }} />

        <Typography variant="h6" sx={{ marginTop: '3%', marginBottom: '3%', position: 'relative' }}>
          Lendemains du projet
          <span style={{ position: 'absolute', bottom: '-5px', left: 0, width: '80%', height: '2px', backgroundColor: 'red' }} />
        </Typography>
        <Box sx={{ display: 'flex', overflowX: 'auto', padding: 2 }}>
          {Lendemains.map((item, index) => (
            <Box key={index} sx={{ flex: '0 0 auto', marginRight: 2 }}>
              <Card sx={{ minWidth: 300, width: 300 }}>
                <CardContent>
                  <Typography gutterBottom variant="h6" component="div">
                    {item.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {item.description}
                  </Typography>
                </CardContent>
              </Card>
            </Box>
          ))}
        </Box>

        <Divider sx={{ borderBottomWidth: 1, borderColor: 'lightGray', width: '75%', margin: '5%', marginRight: 'auto', marginLeft: 'auto' }} />

        <Typography variant="h6" sx={{ marginTop: '3%', marginBottom: '3%', position: 'relative' }}>
          Skills associés
          <span style={{ position: 'absolute', bottom: '-5px', left: 0, width: '80%', height: '2px', backgroundColor: 'red' }} />
        </Typography>
        <Typography paragraph>
          <Box sx={{ display: 'flex', overflowX: 'auto', padding: 2 }}>
            {skill.map((item, index) => (
              <Box
                key={index}
                sx={{
                  position: 'relative',
                  flex: '0 0 auto',
                  marginRight: 2,
                }}
              >
                <Card sx={{ height: 'auto', width: 'auto', minHeight: '100px', paddingTop:'25px', minWidth: '100px' }}>
                  <CardActionArea onClick={() => handleClick(item.lien)}>
                    <CardContent sx={{ height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <Typography
                        variant="h6"
                        component="div"
                        sx={{
                          transform: 'rotate(-45deg)',
                          whiteSpace: 'nowrap',
                          overflow: 'hidden',
                          textOverflow: 'ellipsis',
                        }}
                      >
                        {item.title}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Box>
            ))}
          </Box>
        </Typography>

        <Divider sx={{ borderBottomWidth: 1, borderColor: 'lightGray', width: '75%', margin: '5%', marginRight: 'auto', marginLeft: 'auto' }} />

        <Typography variant="h6" sx={{ marginTop: '3%', marginBottom: '3%', position: 'relative' }}>
          Mon regard critique
          <span style={{ position: 'absolute', bottom: '-5px', left: 0, width: '80%', height: '2px', backgroundColor: 'red' }} />
        </Typography>
        <Typography paragraph sx={{ marginBottom: "5%" }}>
          Ce projet m'a permis d'apporter une valeur ajoutée significative grâce à l'application de compétences techniques variées et à une gestion de projet rigoureuse. J'ai appris l'importance de l'analyse détaillée et de la planification minutieuse, ainsi que la nécessité d'une documentation complète pour assurer la conformité réglementaire. Les défis rencontrés m'ont aidé à renforcer mes capacités de résolution de problèmes et à adapter rapidement des solutions aux nouvelles exigences. Cette expérience m'a préparé à gérer des projets encore plus complexes à l'avenir, en mettant l'accent sur la qualité, la précision et la satisfaction des clients.
        </Typography>

      </Box>

      <Footer />
    </Box>
  );
}

export default Conceptwbproject;