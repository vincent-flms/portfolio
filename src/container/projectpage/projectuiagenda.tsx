import { Box, Card, CardActionArea, CardContent, Divider, List, ListItem, ListItemText, Typography } from "@mui/material";
import Footer from "../../components/footer";
import { useNavigate } from "react-router-dom";

const etapes = [
    {
        title: "Analyse de l’API ROSTER BUSTER",
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
        description: "Développeurs de ROSTER BUSTER"
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
        description: "J’ai acquis une expérience précieuse en développement frontend avec TypeScript et React, ainsi qu’en intégration backend avec C#. J'ai également renforcé mes compétences en gestion de projet, en travaillant seul sur le développement et l'intégration de bout en bout."
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
            <Box sx={{ padding: 2, marginLeft: '15%', marginRight: '15%' }}>

                <Typography variant="h4" gutterBottom sx={{ textAlign: 'center' }}>Développement d'une Interface utilisateur d'agenda pour ROSTER BUSTER </Typography>

                <Divider sx={{ borderBottomWidth: 2, borderColor: 'lightGray' }} />

                <Typography variant="h6" sx={{ marginTop: '3%', marginBottom: '3%', marginLeft: '5%', position: 'relative' }}>
                    Objectifs
                    <span style={{ position: 'absolute', bottom: '-5px', left: 0, width: '80%', height: '2px', backgroundColor: 'red' }}/>
                </Typography>
                <Typography paragraph>
                    Créer une interface utilisateur (UI) sous la forme d’un agenda en utilisant les informations fournies par l’API ROSTER BUSTER. L'objectif était d'améliorer la visibilité des données de l'équipage pour le client de l'entreprise Cyberjet.
                </Typography>

                <Divider sx={{ borderBottomWidth: 1, borderColor: 'lightGray', width: '75%', margin: '5%', marginRight: 'auto', marginLeft: 'auto' }} />

                <Typography variant="h6" sx={{ marginTop: '3%', marginBottom: '3%', marginLeft: '5%' , position: 'relative'}}>
                    Contexte
                    <span style={{ position: 'absolute', bottom: '-5px', left: 0, width: '80%', height: '2px', backgroundColor: 'red' }}/>
                </Typography>
                <Typography paragraph>
                    Ce projet a été initié à la demande d'un client de l'entreprise Cyberjet, qui utilise l’API ROSTER BUSTER dans leur licence. L’API n’avait pas d’interface mobile, ce qui limitait son utilité. J'ai été chargé de développer une application mobile qui permettrait une meilleure visualisation des données fournies par l’API, rendant les informations plus accessibles et utiles pour le client.
                </Typography>

                <Divider sx={{ borderBottomWidth: 1, borderColor: 'lightGray', width: '75%', margin: '5%', marginRight: 'auto', marginLeft: 'auto' }} />

                <Typography variant="h6" sx={{ marginTop: '3%', marginBottom: '3%', marginLeft: '5%' , position: 'relative'}}>
                    Enjeu
                    <span style={{ position: 'absolute', bottom: '-5px', left: 0, width: '80%', height: '2px', backgroundColor: 'red' }}/>
                </Typography>
                <Typography paragraph>
                    Le principal enjeu était de développer une interface mobile intuitive et efficace pour le client, permettant une meilleure exploitation des données de l'API ROSTER BUSTER. Cela impliquait de s’assurer que l’application non seulement fonctionne bien, mais qu’elle offre également une expérience utilisateur (UX) fluide et agréable.
                </Typography>

                <Divider sx={{ borderBottomWidth: 1, borderColor: 'lightGray', width: '75%', margin: '5%', marginRight: 'auto', marginLeft: 'auto' }} />

                <Typography variant="h6" sx={{ marginTop: '3%', marginBottom: '3%', marginLeft: '5%', position: 'relative' }}>
                    Risques
                    <span style={{ position: 'absolute', bottom: '-5px', left: 0, width: '80%', height: '2px', backgroundColor: 'red' }}/>
                </Typography>
                <Typography paragraph>
                    <List >
                        <ListItem>
                            <ListItemText primary=" > Manque de visibilité et d’utilité de l’application, entraînant une insatisfaction du client." />
                        </ListItem>
                        <ListItem>
                            <ListItemText primary=" > Risque que le client achète une autre licence ou change de fournisseur si l’application ne répond pas à ses besoins." />
                        </ListItem>
                    </List>
                </Typography>

                <Divider sx={{ borderBottomWidth: 1, borderColor: 'lightGray', width: '75%', margin: '5%', marginRight: 'auto', marginLeft: 'auto' }} />

                <Typography variant="h6" sx={{ marginTop: '3%', marginBottom: '3%', marginLeft: '5%', position: 'relative' }}>
                    Étapes du projet
                    <span style={{ position: 'absolute', bottom: '-5px', left: 0, width: '80%', height: '2px', backgroundColor: 'red' }}/>
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

                <Typography variant="h6" sx={{ marginTop: '3%', marginBottom: '3%', marginLeft: '5%', position: 'relative' }}>
                    Acteurs
                    <span style={{ position: 'absolute', bottom: '-5px', left: 0, width: '80%', height: '2px', backgroundColor: 'red' }}/>
                </Typography>
                <Typography paragraph>
                    <Box sx={{ display: 'flex', overflowX: 'auto', padding: 2 }}>
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
                    <Box sx={{ display: 'flex', overflowX: 'auto', padding: 2 }}>
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
                    <Box sx={{ display: 'flex', overflowX: 'auto', padding: 2 }}>
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
                                <Card sx={{ height: 'auto', width: 'auto', minHeight: '100px', paddingTop: '25px', minWidth: '100px' }}>
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

                <Typography variant="h6" sx={{ marginTop: '3%', marginBottom: '3%', marginLeft: '5%', position: 'relative' }}>
                    Mon regard critique
                    <span style={{ position: 'absolute', bottom: '-5px', left: 0, width: '80%', height: '2px', backgroundColor: 'red' }}/>
                    </Typography>
                <Typography paragraph sx={{marginBottom:"5%"}}>
                    Ce projet m’a permis d’approfondir mes compétences en développement frontend et backend, en utilisant TypeScript avec React, SQL et C#. En créant une interface utilisateur pour l’API ROSTER BUSTER, j’ai non seulement amélioré la visibilité des données pour le client, mais j’ai aussi renforcé ma capacité à concevoir et implémenter des solutions complètes de bout en bout. Cette expérience a souligné l’importance de l’adaptabilité et de l’intégration efficace des technologies pour répondre aux besoins spécifiques des clients.
                </Typography>

            </Box>
            <Footer />
        </Box>
    )
}

export default Projectuiagenda;