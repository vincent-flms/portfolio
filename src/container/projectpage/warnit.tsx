import { Box, Card, CardActionArea, CardContent, Divider, List, ListItem, ListItemText, Typography } from "@mui/material";
import Footer from "../../components/footer";
import { useNavigate } from "react-router-dom";

const etapes = [
    {
        title: "Étude des fonctionnalités nécessaires",
        description: "Identification des exigences du client et des cas d'utilisation de l'application."
    },
    {
        title: "Étude des données nécessaires et réalisation d'un schéma UML",
        description: "Conception des modèles de données et des interactions entre les composants de l'application."
    },
    {
        title: "Réalisation de maquettes et présentation au client",
        description: "Création de prototypes visuels pour valider le design et les fonctionnalités auprès du client."
    },
    {
        title: "Développement de l'application",
        description: "Codage de l'interface utilisateur en Typescript (Angular) et de l'API backend en Java."
    },
    {
        title: "Tests et correctifs",
        description: "Exécution de tests unitaires et fonctionnels pour assurer la fiabilité de l'application et correction des problèmes identifiés."
    }
];

const Acteurs = [
    {
        title: "Équipe de développement UI",
        description: "Responsable de la conception et du développement de l'interface utilisateur."
    },
    {
        title: "Équipe de développement Back",
        description: "En charge de la création de l'API et de l'infrastructure backend."
    },
    {
        title: "Client",
        description: "Fournisseur des exigences et des retours tout au long du projet."
    }
];

const Resultats = [
    {
        title: "Résultats pour l’entreprise :",
        description: "Ce projet m'a permis de développer des compétences techniques avancées en Java, Typescript, et UML, ainsi qu'une expérience précieuse en méthodologies agiles et en maquettage. J'ai également amélioré ma capacité à travailler en équipe et à gérer les interactions avec le client."
    },
    {
        title: "Résultats pour moi :",
        description: "La mise en place de l'application Warnit'APP a permis de sécuriser les employés de l'entreprise durant leur période de travail, augmentant ainsi la confiance et la satisfaction des employés et des gestionnaires."
    }
];

const Lendemains = [
    {
        title: "Futur immédiat",
        description: "L'application sera déployée au sein de l'entreprise cliente, permettant une communication rapide et efficace des alertes et améliorant ainsi la sûreté des employés."
    },
    {
        title: "À distance",
        description: "À long terme, l'application pourrait être étendue pour inclure de nouvelles fonctionnalités, comme la gestion des incidents post-alerte et l'intégration avec d'autres systèmes de sécurité."
    },
    {
        title: "Aujourd'hui",
        description: "Aujourd'hui, l'application est en phase de déploiement, et les retours initiaux des utilisateurs sont positifs, indiquant une amélioration significative de la sûreté et de la réactivité en cas d'incident."
    }
];
const skill = [
    {
      title: "Java API",
      lien: "/skill/javas"
    },
    {
      title: "Typescript",
      lien: "/skill/typescript"
    },
    {
      title: "UML conception",
      lien: "/skill/conceptuml"
    },
    {
      title: "Agilité",
      lien: "/skill/agilitskill"
    },
    {
      title: "Maquettage",
      lien: "/skill/maquettages"
    }
  ]

const Warnit = () => {
    const navigate = useNavigate();

    const handleClick = (link: string) => {
        navigate(link);
    };
    return (
        <Box>
            <Box sx={{ padding: 2, marginLeft: '15%', marginRight: '15%' }}>

                <Typography variant="h3" gutterBottom sx={{ textAlign: 'center' }}>Warnit </Typography>

                <Divider sx={{ borderBottomWidth: 2, borderColor: 'lightGray' }} />

                <Typography variant="h6" sx={{ marginTop: '3%', marginBottom: '3%', marginLeft: '5%', position: 'relative' }}>
                    Objectifs
                    <span style={{ position: 'absolute', bottom: '-5px', left: 0, width: '80%', height: '2px', backgroundColor: 'red' }}/>
                </Typography>
                <Typography paragraph>
                    Créer une application de bureau permettant de générer des alertes et de les communiquer aux autres utilisateurs en temps réel, afin de sécuriser le travail des employés en cas d'incident.
                </Typography>

                <Divider sx={{ borderBottomWidth: 1, borderColor: 'lightGray', width: '75%', margin: '5%', marginRight: 'auto', marginLeft: 'auto' }} />

                <Typography variant="h6" sx={{ marginTop: '3%', marginBottom: '3%', marginLeft: '5%', position: 'relative' }}>
                    Contexte
                    <span style={{ position: 'absolute', bottom: '-5px', left: 0, width: '80%', height: '2px', backgroundColor: 'red' }}/>
                </Typography>
                <Typography paragraph>
                    Ce projet a été initié suite à la demande d'un client qui souhaitait sécuriser le travail de ses employés de bureau. En cas d'incident, l'objectif était de pouvoir émettre rapidement une alerte pour prévenir les agents à proximité. Cette application, développée dans un cadre scolaire, devait répondre à des exigences strictes de fiabilité et d'efficacité pour assurer la sécurité des utilisateurs.
                </Typography>

                <Divider sx={{ borderBottomWidth: 1, borderColor: 'lightGray', width: '75%', margin: '5%', marginRight: 'auto', marginLeft: 'auto' }} />

                <Typography variant="h6" sx={{ marginTop: '3%', marginBottom: '3%', marginLeft: '5%', position: 'relative' }}>
                    Enjeu
                    <span style={{ position: 'absolute', bottom: '-5px', left: 0, width: '80%', height: '2px', backgroundColor: 'red' }}/>
                </Typography>
                <Typography paragraph>
                    Améliorer la sûreté des agents de l'entreprise en permettant une communication rapide et efficace des alertes en cas d'incident.
                </Typography>

                <Divider sx={{ borderBottomWidth: 1, borderColor: 'lightGray', width: '75%', margin: '5%', marginRight: 'auto', marginLeft: 'auto' }} />

                <Typography variant="h6" sx={{ marginTop: '3%', marginBottom: '3%', marginLeft: '5%', position: 'relative' }}>
                    Risques
                    <span style={{ position: 'absolute', bottom: '-5px', left: 0, width: '80%', height: '2px', backgroundColor: 'red' }}/>
                </Typography>
                <Typography paragraph>
                    <List >
                        <ListItem>
                            <ListItemText primary=" > Erreur lors de la procédure d'alerte, pouvant entraîner une réponse tardive ou inadéquate." />
                        </ListItem>
                        <ListItem>
                            <ListItemText primary=" > Risque de manque de facilité à l'activation de l'alerte, rendant l'application difficile à utiliser en situation d'urgence." />
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
                    Le projet Warnit'APP a été une expérience enrichissante qui m'a permis de mettre en pratique et de renforcer diverses compétences techniques et méthodologiques. En travaillant sur ce projet, j'ai pu appliquer mes connaissances en Java, Typescript, et UML, tout en développant une compréhension approfondie des principes d'agilité et de maquettage. Cette réalisation a été cruciale non seulement pour ma progression professionnelle, mais aussi pour la sécurité et l'efficacité opérationnelle de notre client.
                </Typography>

            </Box>
            <Footer />
        </Box>
    )
}

export default Warnit;