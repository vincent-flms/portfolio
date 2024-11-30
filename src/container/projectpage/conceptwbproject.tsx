import { Box, Card, CardActionArea, CardContent, Divider, Grid, List, ListItem, ListItemText, Typography } from "@mui/material";
import Footer from "../../components/footer";
import { useNavigate } from 'react-router-dom';
import lettreVol from'./../../design/LettreDeVol.svg';
import front from './../../design/FrontW&b.svg'
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
      <Box sx={{ padding: 2, marginLeft: '25%', marginRight: '25%' }}>

        <Typography variant="h2" gutterBottom sx={{ textAlign: 'center' }}>
          Conception Weight and balance (W&B)
        </Typography>
        <Typography variant="h4" gutterBottom sx={{ textAlign: 'center' }}>
          L'équilibrage d'un point
        </Typography>

        <Divider sx={{ borderBottomWidth: 2, borderColor: 'lightGray' }} />

        <Typography variant="h6" sx={{ marginTop: '3%', marginBottom: '3%', position: 'relative' }}>
          Contexte
          <span style={{ position: 'absolute', bottom: '-5px', left: 0, width: '80%', height: '2px', backgroundColor: 'red' }} />
        </Typography>
        <Typography paragraph style={{ marginLeft: '10%', marginRight: '10%' }}>
          Le W&B est le nom d'un projet qui a vu le jour lors de mon arrivée chez Cyberjet,
          une entreprise spécialisée dans l’édition de logiciels dédiés aux solutions de 
          transport aérien.
          <br />
          <br />
          L'entreprise CYBERJET a demandé la conception d'un projet informatique visant à développer un logiciel de gestion du
          Weight and Balance pour ses clients. Cette demande répondait à un besoin spécifique de l'un de leurs clients, qui nécessitait une
          solution logicielle capable d'automatiser et de sécuriser les calculs relatifs au Weight and Balance. Ces calculs prennent en compte divers
          paramètres de poids ainsi que des limites propres à chaque appareil et vol.
          <br />
          <br />
          Pour ce projet, j’ai été chargé de la conception, englobant plusieurs aspects tels que le choix des technologies, la modélisation de
          l'application et la définition de ses fonctionnalités. L’objectif principal était de concevoir un logiciel capable de garantir la sécurité des poids
          lors des vols tout en assurant la conformité aux régulations et aux normes de sécurité aérienne. Le projet devait aboutir à un produit final validé
          par la DGAC (Direction Générale de l'Aviation Civile). Sans cette validation, le logiciel risquait d’être rejeté, 
          ce qui aurait compromis la satisfaction du client ainsi que la réputation de CYBERJET.
          <br />
          <br />
          Afin de m’assurer que le produit répondait aux exigences spécifiques, une équipe spécialisée me fournissait les informations nécessaires et 
          validait les rendus de l'application à chaque étape. Le concept de Weight and Balance repose sur la notion de bras de levier : tout objet dans un avion, 
          y compris l’avion lui-même, possède un centre de gravité. Ce point d’équilibre est modifié en fonction du poids des objets transportés. Pour éviter qu'un 
          avion ne penche ou perde son équilibre, il est essentiel de calculer ces poids et de s’assurer qu’ils respectent les limites établies par les constructeurs.
          <br />
          <br />
          <Typography gutterBottom sx={{ textAlign: 'center', border:'solid', paddingTop:'5px', paddingBottom: '5px', marginRight:'50px', marginLeft:'50px' }}>
            I = W* (sta - Refsta)/C +K
          </Typography>
          <Typography variant="h6" gutterBottom sx={{ textAlign: 'center' }}>
            Calcule d'un index
          </Typography>
          Afin d’expliquer le sujet sans entrer dans des détails trop techniques, je vais vous détailler
          ce calcul évoqué précédemment. Le *W* représente le poids (*weight*) de chaque objet ou personne à bord de l’avion.
          Le *sta* correspond à la station, c'est-à-dire l’emplacement de l’objet dans l’espace de l’avion. Le *Refsta*
          signifie station de référence, qui indique le point d’équilibre de l’avion. Le *K* n’a pas de signification particulière,
          c’est une valeur fixe. Enfin, le *C* sert à la conversion des unités.<br />
          <br />
          Toutes ces valeurs sont fournies par les fabricants et figurent sur les fiches techniques des avions. 
          Une fois l’index de chaque élément calculé, nous effectuons un total qui est ensuite intégré dans une lettre de vol. 
          Cette lettre de vol se présente sous la forme suivante :<br />
        </Typography>
        <img src={lettreVol} alt="Presentation" style={{ width: '70%', height: 'auto', marginLeft: '15%', marginRight: '15%' }} />
        <Typography variant="h6" gutterBottom sx={{ textAlign: 'center' }}>
          Lettre de vol
        </Typography>
        <Typography paragraph style={{ marginLeft: '10%', marginRight: '10%' }}>
          Pour expliquer le fonctionnement de la lettre de vol, il est essentiel que tous les points 
          calculés pour chaque section respectent les limites définies pour ces sections. Par exemple, 
          dans notre cas, le *zero fuel weight* ne correspond pas aux limites du *maximum zero fuel weight*. 
          Cependant, le *landing weight* et le *take-off weight* respectent leurs limites. Cela signifie que 
          l’avion ne pourra pas voler avec cette configuration, car il serait déséquilibré.<br />
          <br />
          Chaque section mentionnée correspond à un poids total selon une étape spécifique. Par exemple, 
          le *zero fuel weight* représente le poids total de l’avion sans carburant ni cargo. Le *landing weight* 
          inclut le poids de l’avion avec le carburant nécessaire pour atterrir. Enfin, le *take-off weight* correspond 
          au poids total de l’avion, incluant le carburant et le cargo.<br />
          <br />
          Pour revenir à ce projet, il doit permettre le calcul de cette enveloppe, son affichage, et fournir la possibilité 
          d’enregistrer et de signer cette enveloppe. Une signature du commandant de bord est également requise pour valider 
          les données.

        </Typography>
        <Divider sx={{ borderBottomWidth: 1, borderColor: 'lightGray', width: '75%', margin: '5%', marginRight: 'auto', marginLeft: 'auto' }} />

        <Typography variant="h6" sx={{ marginTop: '3%', marginBottom: '3%', position: 'relative' }}>
          Mise en oeuvre
          <span style={{ position: 'absolute', bottom: '-5px', left: 0, width: '80%', height: '2px', backgroundColor: 'red' }} />
        </Typography>
        <Typography paragraph style={{ marginLeft: '10%', marginRight: '10%' }}>
          Comme je l'ai précisé plus tôt, ce projet a été réalisé en totale autonomie et a suivi 
          trois grandes phases. La première phase, une phase d'étude, a été menée en collaboration 
          avec une autre équipe qui me fournissait des informations. Étant débutant dans le domaine de 
          l'aéronautique, je n'avais pas les connaissances nécessaires pour réaliser ce projet. 
          Durant cette phase, j'ai étudié de la documentation et analysé d'autres éléments tels que 
          les applications d'autres entreprises pour mieux comprendre le design et les attentes de 
          ce type d'application.<br />
          <br />
          Suite à cette étude, j'ai commencé à développer le design de mon application. À cette étape, 
          j'ai utilisé Figma, un outil permettant de créer des maquettes avancées. Voici un exemple :
          <br />
        </Typography>
        <img src={front} alt="Presentation" style={{ width: '70%', height: 'auto', marginLeft: '15%', marginRight: '15%' }} />
        <Typography variant="h6" gutterBottom sx={{ textAlign: 'center' }}>
          <a href="https://www.figma.com/proto/RvEbEknGpOhPqnAR0KoXkT/Cyberjet?node-id=374-9905&node-type=frame&t=k9Q7UCHftPZqShlr-1&scaling=contain&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=374%3A9905">Maquette weight and balance</a>
        </Typography>
        <Typography paragraph style={{ marginLeft: '10%', marginRight: '10%' }}>
        <br/>
          Pour cette étape, j'ai élaboré de nombreux designs que j'ai soumis à mon entreprise. 
          Celui que je vous ai présenté ci-dessus est celui qui a été retenu. Cependant, 
          il m'a fallu effectuer de nombreux tests avant de le proposer, car des éléments 
          comme le choix de la technologie m'ont ralenti. Étant donné que l'entreprise ne 
          fournissait pas de réponses rapides, j'ai passé beaucoup de temps à étudier différentes
          options. Durant cette même étape, j'ai développé la base SQL nécessaire pour héberger 
          mes données. Grâce aux études réalisées au préalable, cette partie n'a pas été 
          particulièrement complexe, ce qui m'a permis de progresser efficacement sur le 
          design tout en tenant compte des paramètres nécessaires aux calculs et à leur 
          organisation.<br/>
        </Typography>
        <Typography paragraph style={{ marginLeft: '10%', marginRight: '10%' }}>
          Enfin, pour cette dernière partie, j'ai principalement travaillé sur la documentation. 
          Un document en particulier était essentiel : le document de spécifications techniques. 
          Ce document regroupait toutes les fonctions nécessaires au développement de 
          l'application, telles que le mode hors ligne, le rechargement, le changement de thème 
          et les filtres.<br/> 
        </Typography>

        <Divider sx={{ borderBottomWidth: 1, borderColor: 'lightGray', width: '75%', margin: '5%', marginRight: 'auto', marginLeft: 'auto' }} />

        <Typography variant="h6" sx={{ marginTop: '3%', marginBottom: '3%', position: 'relative' }}>
          Étapes du projet
          <span style={{ position: 'absolute', bottom: '-5px', left: 0, width: '80%', height: '2px', backgroundColor: 'red' }} />
        </Typography>
        <Typography paragraph>
          <Box sx={{ display: 'flex', overflowX: 'auto', padding: 2,marginLeft: '10%', marginRight: '10%' }}>
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
        <Box sx={{ display: 'flex', overflowX: 'auto', padding: 2,marginLeft: '10%', marginRight: '10%' }}>
          {Acteurs.map((item, index) => (
            <Box key={index} sx={{ flex: '0 0 auto', marginRight: 2 ,}}>
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
        <Box sx={{ display: 'flex', overflowX: 'auto', padding: 2,marginLeft: '10%', marginRight: '10%' }}>
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
        <Box sx={{ display: 'flex', overflowX: 'auto', padding: 2 ,marginLeft: '10%', marginRight: '10%'}}>
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
          <Box sx={{ display: 'flex', overflowX: 'auto', padding: 2,marginLeft: '10%', marginRight: '10%' }}>
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
        <Typography paragraph sx={{ marginBottom: "5%" ,marginLeft: '10%', marginRight: '10%'}}>
          Ce projet m'a permis d'apporter une valeur ajoutée significative grâce à l'application de compétences techniques variées 
          et à une gestion de projet rigoureuse. J'ai appris l'importance de l'analyse détaillée et de la planification minutieuse, 
          ainsi que la nécessité d'une documentation complète pour assurer la conformité réglementaire. Les défis rencontrés m'ont 
          aidé à renforcer mes capacités de résolution de problèmes et à adapter rapidement des solutions aux nouvelles exigences. 
          Cette expérience m'a préparé à gérer des projets encore plus complexes à l'avenir, en mettant l'accent sur la qualité, 
          la précision et la satisfaction des clients.
        </Typography>

        <Divider sx={{ borderBottomWidth: 1, borderColor: 'lightGray', width: '75%', margin: '5%', marginRight: 'auto', marginLeft: 'auto' }} />

        <Typography variant="h6" sx={{ marginTop: '3%', marginBottom: '3%', position: 'relative' }}>
          Conclusion
          <span style={{ position: 'absolute', bottom: '-5px', left: 0, width: '80%', height: '2px', backgroundColor: 'red' }} />
        </Typography>
        <Typography paragraph sx={{ marginBottom: "5%" ,marginLeft: '10%', marginRight: '10%'}}>
        <br/>
          Pour conclure, je vais développer les résultats obtenus après la conception de ce 
          projet. Le projet en lui-même a été réalisé et le développement a été fait, mais 
          le design de l'application n'a pas été retenu. Et pour cause, la technologie utilisée 
          pour son développement était Swift. L'entreprise a donc préféré utiliser des layouts 
          liés à cette technologie, sans avoir à en développer de nouveaux. Je suis assez déçu 
          de ce principe, mais je comprends, puisque si nous étions partis sur mon design, il 
          aurait fallu copier ce design sur chaque application liée à cette technologie. Mais 
          malgré cela, je trouve que cette expérience fut très importante pour moi, tant sur 
          le plan des connaissances techniques que sur celles de l'aéronautique, ce qui m'a 
          permis d'avancer rapidement sur les autres projets que l'entreprise Cyberjet m'a 
          confiés.<br/>
        </Typography>
      </Box>

      <Footer />
    </Box>
  );
}

export default Conceptwbproject;