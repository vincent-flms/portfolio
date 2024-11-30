import { Box, Card, CardActionArea, CardContent, Divider, List, ListItem, ListItemText, Typography } from "@mui/material";
import Footer from "../../components/footer";
import { useNavigate } from "react-router-dom";
import scheduleBlack from './../../design/scheduleBlack.jpg'
import calendarBlack from './../../design/calendarBlack.jpg'
const etapes = [
    {
        title: "Analyse de l’API Roster buster",
        description: "Compréhension des données fournies et des fonctionnalités disponibles."
    },
    {
        title: "Choix des bibliothèques",
        description: "Sélection des bibliothèques de design et des outils de développement adaptés pour l’application."
    },
    {
        title: "Développement de l’application",
        description: "Codage de l’interface utilisateur en utilisant TypeScript et React, intégration avec l’API via C#."
    },
    {
        title: "Tests de fiabilité",
        description: "Exécution de tests pour s’assurer de la fiabilité et de la performance de l’application."
    },
    {
        title: "Correction du design et des fonctionnalités",
        description: "Ajustements basés sur les tests et les retours des utilisateurs pour améliorer l’UX."
    }
];

const Acteurs = [
    {
        title: "Développeur",
        description: "Moi."
    },
    {
        title: "Équipe de gestion de l’API",
        description: "Développeurs de Roster buster"
    },
    {
        title: "Équipage",
        description: "Client de Cyberjet"
    }
];

const Resultats = [
    {
        title: "Résultats pour l’entreprise :",
        description: "L'application a permis une meilleure visibilité des données pour l'équipage, augmentant ainsi la satisfaction du client. Cyberjet a pu démontrer sa capacité à répondre aux besoins spécifiques de ses clients avec des solutions sur mesure."
    },
    {
        title: "Résultats pour moi :",
        description: "J’ai acquis une expérience précieuse en développement frontend avec TypeScript et React native, ainsi qu’en intégration backend avec C#. J'ai également renforcé mes compétences en gestion de projet, en travaillant seul sur le développement et l'intégration de bout en bout."
    }
];

const Lendemains = [
    {
        title: "Futur immédiat",
        description: "L'application sera utilisée par le client pour améliorer leur gestion des données d’équipage, ce qui pourrait conduire à des demandes de fonctionnalités supplémentaires ou à des améliorations continues."
    },
    {
        title: "À distance",
        description: "À long terme, cette application pourrait servir de modèle pour d'autres projets similaires, renforçant ainsi la position de Cyberjet en tant que fournisseur de solutions technologiques personnalisées."
    },
    {
        title: "Aujourd'hui",
        description: "Aujourd'hui, l'application est en usage actif, contribuant à la satisfaction du client et à la réputation de Cyberjet en tant qu’entreprise capable de fournir des solutions complètes et intégrées."
    }
];

const skill = [
    {
        title: "Typescript",
        lien: "/skill/typescript"
    },
    {
        title: "SQL",
        lien: "/skill/sql"
    },
    {
        title: "C#",
        lien: "/skill/csharp"
    }
]

const Projectuiagenda = () => {
    const navigate = useNavigate();

    const handleClick = (link: string) => {
        navigate(link);
    };
    return (
        <Box>
            <Box sx={{ padding: 2, marginLeft: '25%', marginRight: '25%' }}>

                <Typography variant="h2" gutterBottom sx={{ textAlign: 'center' }}>UI Agenda </Typography>
                <Typography variant="h4" gutterBottom sx={{ textAlign: 'center' }}>Un agenda facile et pour tous </Typography>

                <Divider sx={{ borderBottomWidth: 2, borderColor: 'lightGray' }} />

                <Typography variant="h6" sx={{ marginTop: '3%', marginBottom: '3%', marginLeft: '5%', position: 'relative' }}>
                    Contexte
                    <span style={{ position: 'absolute', bottom: '-5px', left: 0, width: '80%', height: '2px', backgroundColor: 'red' }} />
                </Typography>
                <Typography paragraph style={{ marginLeft: '10%', marginRight: '10%' }}>
                    Ce projet a été initié à la demande d’un client de l’entreprise Cyberjet,
                    utilisateur de l’API Roster Buster dans le cadre de leur licence.
                    L’API ne disposait pas d’une interface mobile, ce qui limitait son utilité.
                    J’ai été chargé de développer une application mobile permettant une meilleure
                    visualisation des données fournies par l’API, rendant ces informations plus accessibles
                    et pratiques pour le client.
                    <br /><br />
                    Ce projet a vu le jour durant ma deuxième année chez Cyberjet,
                    au cours de ma dernière année d’études. Il partageait une particularité
                    avec un autre projet, Weight and Balance : l’autonomie dont j’ai bénéficié
                    tout au long de son cycle de vie, depuis la conception jusqu’à la livraison.
                    <br /><br />
                    Pour préciser le contexte, une application web nommée Crew Access existait
                    déjà et permettait de lire les informations issues de Roster Buster.
                    Cependant, avec le temps, cette application était devenue obsolète.
                    Une mise à jour des données et de l’affichage était nécessaire.
                    Par conséquent, CAE, le commanditaire principal, a demandé la création
                    d’une API pour permettre une meilleure communication entre les applications.
                    De leur côté, les partenaires de CAE avaient mis en place une application mobile,
                    mais celle-ci s’avérait coûteuse à l’achat. Ces partenaires ont donc contacté Cyberjet
                    pour concevoir une solution mobile économique permettant de lire les informations de l’API.
                    <br /><br />
                    Cyberjet a ainsi lancé deux projets simultanés : la mise à jour du site Crew Access et
                    la création d’une application mobile, appelée UI Agenda, sur laquelle je me suis concentré.
                    <br /><br />
                    Le choix de développer une application mobile avec React Native a été motivé par plusieurs
                    facteurs. Tout d’abord, React Native offre un mode hors ligne, essentiel pour certains
                    utilisateurs. Ensuite, les visuels natifs sur iOS et Android offrent un meilleur rendu
                    lorsqu’il s’agit d’une application mobile dédiée. En outre, React Native permet de
                    développer une application hybride, un atout majeur. Ce choix s’est également imposé car
                    d’autres projets en cours, comme la refonte de Crew Access, utilisaient déjà React, ce
                    qui facilitait la maintenance et la cohérence entre les différents outils développés.
                    <br /><br />
                    L’enjeu principal du projet résidait dans le développement d’une interface mobile intuitive
                    et efficace pour le client, maximisant l’exploitation des données de l’API Roster Buster.
                    Cela nécessitait une attention particulière à la fluidité et à la convivialité de
                    l’expérience utilisateur. L’un des principaux risques associés au projet était un manque
                    de visibilité ou d’utilité de l’application, ce qui aurait pu entraîner une insatisfaction
                    du client.
                </Typography>

                <Divider sx={{ borderBottomWidth: 1, borderColor: 'lightGray', width: '75%', margin: '5%', marginRight: 'auto', marginLeft: 'auto' }} />

                <Typography variant="h6" sx={{ marginTop: '3%', marginBottom: '3%', marginLeft: '5%', position: 'relative' }}>
                    Mise en oeuvre
                    <span style={{ position: 'absolute', bottom: '-5px', left: 0, width: '80%', height: '2px', backgroundColor: 'red' }} />
                </Typography>
                <Typography paragraph style={{ marginLeft: '10%', marginRight: '10%' }}>
                    Voici une version corrigée et révisée de votre texte :
                    Afin de réaliser ce projet, j’ai collaboré fréquemment avec le développeur en charge de
                    l’API Roster Buster. Ces échanges étaient essentiels, tant pour m’informer des données mises
                    à ma disposition que pour lui faire des retours réguliers sur l’avancée du projet.
                    Ce développeur supervisait ma mission et validait mes modèles ainsi que mes fonctionnalités.
                    <br /><br />
                    En dehors de cette collaboration, j’ai travaillé en autonomie sur toutes les étapes du
                    projet, de la conception jusqu’aux tests finaux de l’application.
                    <br /><br />
                    Un exemple concret de fonctionnalité développée : lorsqu’un utilisateur participe à une
                    tâche, il reçoit une notification contenant les dates concernées. L’API, en fonction de
                    la période spécifiée, filtre les données pour ne traiter que celles de la période donnée,
                    ce qui permet d’éviter une écoute continue d’un grand volume de données. L’application met
                    ensuite en œuvre une méthode de lecture optimisée pour afficher ces informations de manière
                    claire et intuitive.
                    <br /><br />
                    Pour réaliser cette fonctionnalité, j’ai d’abord étudié les données reçues de l’API,
                    ce qui m’a permis de concevoir une première interface garantissant une bonne visibilité
                    des informations :
                    <br />
                </Typography>
                <img src={scheduleBlack} alt="Presentation" style={{ width: '50%', height: 'auto', marginLeft: '25%', marginRight: '25%' }} />
                <Typography paragraph style={{ marginLeft: '10%', marginRight: '10%' }}>
                    <br />
                    Pour concevoir cette interface, j’ai étudié différentes applications d’agenda mobile,
                    parmi lesquelles celles fournies par Android se sont révélées particulièrement marquantes.
                    Cependant, cette analyse m’a également permis de constater une erreur dans mon processus
                    de développement initial : l’interface utilisateur (UI) devait impérativement être fluide
                    et offrir une vision globale des informations sans nécessiter de chargement supplémentaire.
                    <br /><br />
                    Dans les applications que j’ai étudiées, un élément commun et essentiel ressortait :
                    la présence d’un calendrier intégré directement dans l’interface principale. Inspiré
                    par cette approche, j’ai conçu une seconde page pour mon application qui intègre un
                    calendrier clair et interactif :
                    <br />
                </Typography>
                <img src={calendarBlack} alt="Presentation" style={{ width: '50%', height: 'auto', marginLeft: '25%', marginRight: '25%' }} />
                <Typography paragraph style={{ marginLeft: '10%', marginRight: '10%' }}>
                    <br />
                    Comme illustré dans ces deux exemples, les données sont synchronisées mais affichées de
                    manière différente. L’une des pages met l’accent sur un zoom détaillé des informations,
                    tandis que l’autre favorise une vue d’ensemble avec un plus grand volume d’informations
                    accessibles en un seul coup d’œil. Cependant, ces fonctionnalités ne sont pas sans
                    contraintes.
                    <br /><br />
                    Par exemple, pour permettre une navigation rapide entre la page calendrier et la page
                    agenda, il a fallu intégrer une fonctionnalité de zoom sur le calendrier.
                    Ce zoom redirige l’utilisateur vers la page agenda correspondante pour une exploration
                    plus précise. Inversement, sur la page agenda, les informations zoomées ne fournissaient
                    parfois pas assez de détails pour identifier une tâche. J’ai donc ajouté une modal
                    qui affiche les informations les plus précises possibles lorsqu’une tâche est sélectionnée.
                    <br /><br />
                    Ensuite, une étape cruciale fut la conception du système de notification. Comme mentionné
                    précédemment, le client reçoit une notification lorsqu’un événement pertinent est détecté.
                    Ce mécanisme nécessite un composant avancé appelé *event listener*. Sur Android, la mise en
                    œuvre ne posait aucun problème d’autorisation. En revanche, sur iOS, les restrictions m’ont
                    contraint à rechercher des alternatives.
                    <br /><br />
                    Finalement, j’ai dû abandonner l’idée d’un *event listener* classique et concevoir un
                    système personnalisé de vérification périodique via une queue. Ce système s’enclenche
                    à des intervalles définis, simulant ainsi un *listener*. Ce défi a représenté la partie la
                    plus longue du développement, car je manquais d’expérience dans ce domaine et je n’avais
                    pas de support technique spécifique à iOS dans mon entourage. J’ai donc dû mener des
                    recherches approfondies et développer une solution sur-mesure pour résoudre ces problèmes
                    de compatibilité.
                    <br /><br />
                    Pour conclure, la phase de tests a été réalisée peu avant la présentation finale.
                    Les fonctionnalités ont globalement bien fonctionné, nécessitant seulement quelques
                    ajustements mineurs sur l’interface utilisateur. Le projet a été livré à temps avec
                    un ensemble complet de documents techniques couvrant l’administration, l’utilisation
                    et la maintenance du code.
                    <br />
                </Typography>
                <Divider sx={{ borderBottomWidth: 1, borderColor: 'lightGray', width: '75%', margin: '5%', marginRight: 'auto', marginLeft: 'auto' }} />

                <Typography variant="h6" sx={{ marginTop: '3%', marginBottom: '3%', marginLeft: '5%', position: 'relative' }}>
                    Étapes du projet
                    <span style={{ position: 'absolute', bottom: '-5px', left: 0, width: '80%', height: '2px', backgroundColor: 'red' }}/>
                </Typography>
                <Typography paragraph>
                    <Box sx={{ display: 'flex', overflowX: 'auto', padding: 2,marginLeft: '10%', marginRight: '10%'  }}>
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

                <Typography variant="h6" sx={{ marginTop: '3%', marginBottom: '3%', marginLeft: '5%', position: 'relative' }}>
                    Acteurs
                    <span style={{ position: 'absolute', bottom: '-5px', left: 0, width: '80%', height: '2px', backgroundColor: 'red' }}/>
                </Typography>
                <Typography paragraph>
                    <Box sx={{ display: 'flex', overflowX: 'auto', padding: 2,marginLeft: '10%', marginRight: '10%'  }}>
                        {Acteurs.map((item, index) => (
                            <Box key={index} sx={{ flex: '0 0 auto', marginRight: 2 }}>
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

                <Typography variant="h6" sx={{ marginTop: '3%', marginBottom: '3%', marginLeft: '5%', position: 'relative' }}>
                    Résultats
                    <span style={{ position: 'absolute', bottom: '-5px', left: 0, width: '80%', height: '2px', backgroundColor: 'red' }}/>
                </Typography>
                <Typography paragraph>
                    <Box sx={{ display: 'flex', overflowX: 'auto', padding: 2,marginLeft: '10%', marginRight: '10%'  }}>
                        {Resultats.map((item, index) => (
                            <Box key={index} sx={{ flex: '0 0 auto', marginRight: 2 }}>
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

                <Typography variant="h6" sx={{ marginTop: '3%', marginBottom: '3%', marginLeft: '5%', position: 'relative' }}>
                    Lendemains du projet
                    <span style={{ position: 'absolute', bottom: '-5px', left: 0, width: '80%', height: '2px', backgroundColor: 'red' }}/>
                </Typography>
                <Typography paragraph>
                    <Box sx={{ display: 'flex', overflowX: 'auto', padding: 2,marginLeft: '10%', marginRight: '10%'  }}>
                        {Lendemains.map((item, index) => (
                            <Box key={index} sx={{ flex: '0 0 auto', marginRight: 2 }}>
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
                    Skills associés
                    <span style={{ position: 'absolute', bottom: '-5px', left: 0, width: '80%', height: '2px', backgroundColor: 'red' }} />
                </Typography>
                <Typography paragraph>
                    <Box sx={{ display: 'flex', overflowX: 'auto', padding: 2,marginLeft: '10%', marginRight: '10%'  }}>
                        {skill.map((item, index) => (
                            <Box
                                key={index}
                                sx={{
                                    position: 'relative',
                                    flex: '0 0 auto',
                                    marginRight: 2,
                                }}
                            >
                                <Card sx={{ height: 'auto', width: 'auto', minHeight: '100px', paddingTop: '25px', minWidth: '100px' }}>
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

                <Typography variant="h6" sx={{ marginTop: '3%', marginBottom: '3%', marginLeft: '5%', position: 'relative' }}>
                    Mon regard critique
                    <span style={{ position: 'absolute', bottom: '-5px', left: 0, width: '80%', height: '2px', backgroundColor: 'red' }}/>
                    </Typography>
                <Typography paragraph sx={{marginBottom:"5%",marginLeft: '10%', marginRight: '10%' }}>
                    Ce projet m’a permis d’approfondir mes compétences en développement frontend et backend, en utilisant TypeScript sur React native, SQL et C#. En créant une interface utilisateur pour l’API Roster buster, j’ai non seulement amélioré la visibilité des données pour le client, mais j’ai aussi renforcé ma capacité à concevoir et implémenter des solutions complètes de bout en bout. Cette expérience a souligné l’importance de l’adaptabilité et de l’intégration efficace des technologies pour répondre aux besoins spécifiques des clients.
                </Typography>

                <Divider sx={{ borderBottomWidth: 1, borderColor: 'lightGray', width: '75%', margin: '5%', marginRight: 'auto', marginLeft: 'auto' }} />

                <Typography variant="h6" sx={{ marginTop: '3%', marginBottom: '3%', marginLeft: '5%', position: 'relative' }}>
                    Conclusion
                    <span style={{ position: 'absolute', bottom: '-5px', left: 0, width: '80%', height: '2px', backgroundColor: 'red' }}/>
                    </Typography>
                <Typography paragraph sx={{ marginBottom:"5%",marginLeft: '10%', marginRight: '10%' }}>

                    Pour conclure, je souhaite revenir sur l'expérience acquise au cours de ce projet et les 
                    résultats obtenus. Ce fut mon deuxième projet réalisé en totale autonomie, une 
                    responsabilité enrichissante et exigeante. Je ne regrette rien, tant en termes de 
                    compétences développées que des résultats atteints. Cependant, il y a un aspect que 
                    je considère comme un échec personnel : ma présentation finale.

                    <br /> 
                    La présentation s’est tenue devant l’équipe commerciale de Cyberjet. 
                    J’y ai détaillé le contexte du projet, les étapes de son développement, 
                    les rendus, ainsi qu’une démonstration de l’application. Cependant, les attentes 
                    pour cette présentation étaient très différentes, ce que je n’ai compris qu’après 
                    avoir reçu les remarques du directeur de Cyberjet et d’un membre de l’équipe marketing. 
                    <br /> 
                    Ils m’ont expliqué que la présentation manquait de dynamisme et d’attrait. Par exemple, 
                    il aurait été pertinent de créer un scénario pratique pour illustrer l’utilité et les 
                    fonctionnalités de l’application de manière captivante. Une autre suggestion fut de 
                    proposer un test en direct de l’application sur différents modèles de téléphones mobiles 
                    pour mieux démontrer sa compatibilité et son efficacité. 
                    <br /> 
                    Cette expérience m’a permis de comprendre l’importance d’adapter une présentation en 
                    fonction de son public, surtout lorsqu’il s’agit de personnes issues du domaine commercial 
                    ou marketing. Cela m’a donné une précieuse leçon sur la manière de rendre mes futurs projets 
                    plus attractifs et impactants lors de leur présentation.
                </Typography>
            </Box>
            <Footer />
        </Box>
    )
}

export default Projectuiagenda;