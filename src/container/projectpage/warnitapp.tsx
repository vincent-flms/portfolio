import { Box, Card, CardActionArea, CardContent, CardMedia, Divider, Grid, List, ListItem, ListItemText, Typography } from "@mui/material"
import Footer from "../../components/footer";
import { useNavigate } from "react-router-dom";
const etapes = [
    {
        title: "Analyse des fonctionnalités nécessaires",
        description: "Identification des exigences et des fonctionnalités spécifiques pour l'application mobile."
    },
    {
        title: "Analyse de la base existante et adaptation de celle-ci",
        description: "Étude et adaptation de la base de données et des API pour assurer une compatibilité avec l'application mobile."
    },
    {
        title: "Développement du logiciel Android",
        description: "Codage de l'application mobile en Java, en intégrant les fonctionnalités nécessaires et en assurant une interface utilisateur intuitive."
    },
    {
        title: "Mise en place de tests pour la synchronisation des applications",
        description: "Développement et exécution de tests pour garantir que la synchronisation entre les applications mobile/mobile et mobile/bureau est fluide et fiable."
    }
];

const Acteurs = [
    {
        title: "Client",
        description: "Fournisseur des exigences et des retours tout au long du projet."
    },
    {
        title: "Équipe de développement de l'API",
        description: "Responsable de l'intégration et de la mise à jour des API pour assurer la compatibilité avec l'application mobile."
    },
    {
        title: "Équipe de développement Android",
        description: "En charge de la création et du développement de l'application mobile."
    }
];

const Resultats = [
    {
        title: "Résultats pour l’entreprise :",
        description: "L'application mobile a considérablement amélioré la communication entre les employés du bureau et ceux en extérieur. Cela a permis une réponse plus rapide et plus efficace aux alertes, augmentant ainsi la sécurité et l'efficacité opérationnelle de l'entreprise."
    },
    {
        title: "Résultats pour moi :",
        description: "Ce projet m'a permis de développer des compétences avancées en Java pour le développement mobile, en rétro-ingénierie pour adapter des systèmes existants, et en communication externe pour gérer les interactions avec le client et les différentes équipes de développement. J'ai également renforcé ma capacité à travailler dans un environnement agile, en adaptant rapidement les solutions aux besoins changeants du projet."
    }
];

const Lendemains = [
    {
        title: "Futur immédiat",
        description: "L'application mobile sera déployée et intégrée avec la version bureau existante, assurant une communication fluide et rapide des alertes entre tous les utilisateurs."
    },
    {
        title: "À distance",
        description: "À long terme, l'application pourrait être étendue pour inclure des fonctionnalités supplémentaires, comme la gestion avancée des incidents et des outils d'analyse pour améliorer la réponse et la prévention des incidents."
    },
    {
        title: "Aujourd'hui",
        description: "Aujourd'hui, l'application est en phase de finalisation des tests et de déploiement initial, avec des retours positifs des utilisateurs pilotes. Cela indique une amélioration notable de la communication et de la réactivité en cas d'incident."
    }
];

const skill = [
    {
      title: "Java API",
      lien: "/skill/javas"
    },
    {
      title: "Java Androïd",
      lien: "/skill/javas"
    },
    {
      title: "Rétro-ingénieurie",
      lien: "/skill/retroinge"
    },
    {
      title: "Communication externe",
      lien: "/skill/externalcom"
    },
    {
      title: "Maquettage",
      lien: "/skill/maquettages"
    },
    {
      title: "Agilité",
      lien: "/skill/agilitskill"
    }
]

const Warnitapp = () => {
    const navigate = useNavigate();

    const handleClick = (link: string) => {
        navigate(link);
    };
    return (
        <Box>
            <Box sx={{ padding: 2, marginLeft: '15%', marginRight: '15%' }}>

                <Typography variant="h3" gutterBottom sx={{ textAlign: 'center' }}>Warnit application </Typography>

                <Divider sx={{ borderBottomWidth: 2, borderColor: 'lightGray' }} />

                <Typography variant="h6" sx={{ marginTop: '3%', marginBottom: '3%', marginLeft: '5%', position: 'relative' }}>
                    Objectifs
                    <span style={{ position: 'absolute', bottom: '-5px', left: 0, width: '80%', height: '2px', backgroundColor: 'red' }}/>
                </Typography>
                <Typography paragraph>
                    Créer une application mobile pour le projet Warnit afin d'améliorer la visibilité de celle-ci et le temps de réponse des utilisateurs. L'application doit permettre l'envoi et la réception d'alertes, similaire à la version bureau, et assurer une parfaite synchronisation entre les applications mobile/mobile et mobile/bureau.
                </Typography>

                <Divider sx={{ borderBottomWidth: 1, borderColor: 'lightGray', width: '75%', margin: '5%', marginRight: 'auto', marginLeft: 'auto' }} />

                <Typography variant="h6" sx={{ marginTop: '3%', marginBottom: '3%', marginLeft: '5%', position: 'relative' }}>
                    Contexte
                    <span style={{ position: 'absolute', bottom: '-5px', left: 0, width: '80%', height: '2px', backgroundColor: 'red' }}/>
                </Typography>
                <Typography paragraph>
                    Ce projet a été développé en réponse à la demande du client pour améliorer la communication et la sécurité des employés en situation de mobilité. L'application mobile devait compléter la version bureau existante de Warnit, permettant une interaction fluide et une réponse rapide aux alertes, que ce soit pour les employés au bureau ou en déplacement.
                </Typography>

                <Divider sx={{ borderBottomWidth: 1, borderColor: 'lightGray', width: '75%', margin: '5%', marginRight: 'auto', marginLeft: 'auto' }} />


                <Typography variant="h6" sx={{ marginTop: '3%', marginBottom: '3%', marginLeft: '5%', position: 'relative' }}>
                    Enjeu
                    <span style={{ position: 'absolute', bottom: '-5px', left: 0, width: '80%', height: '2px', backgroundColor: 'red' }}/>
                </Typography>
                <Typography paragraph>
                    Améliorer la communication et la sécurité des employés, en leur permettant de recevoir et de réagir aux alertes rapidement, peu importe leur localisation. Cela vise à augmenter l'efficacité opérationnelle et à garantir une réponse rapide en cas d'incident.
                </Typography>

                <Divider sx={{ borderBottomWidth: 1, borderColor: 'lightGray', width: '75%', margin: '5%', marginRight: 'auto', marginLeft: 'auto' }} />

                <Typography variant="h6" sx={{ marginTop: '3%', marginBottom: '3%', marginLeft: '5%', position: 'relative' }}>
                    Risques
                    <span style={{ position: 'absolute', bottom: '-5px', left: 0, width: '80%', height: '2px', backgroundColor: 'red' }}/>
                    </Typography>
                <Typography paragraph>
                    <List >
                        <ListItem>
                            <ListItemText primary=" > Problèmes de synchronisation entre les applications mobile et bureau, pouvant entraîner des retards dans la réception des alertes." />
                        </ListItem>
                        <ListItem>
                            <ListItemText primary=" > Difficultés d'adaptation de la base de données existante pour une utilisation mobile." />
                        </ListItem>
                        <ListItem>
                            <ListItemText primary=" > Défis techniques liés à la rétro-ingénierie pour intégrer de nouvelles fonctionnalités sans perturber les systèmes existants." />
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
                    La réalisation du projet WarnitApp a été une opportunité unique pour moi de mettre en pratique mes compétences en développement mobile avec Java, en rétro-ingénierie, en communication externe, et en agilité. Ce projet m'a permis de comprendre les défis de la synchronisation entre différentes plateformes et d'améliorer la visibilité et la réactivité des alertes pour les utilisateurs. Travailler sur ce projet m'a offert une expérience précieuse et a renforcé ma capacité à gérer des projets complexes en collaboration avec différentes équipes.
                </Typography>

            </Box>
            <Footer />
        </Box>
    )
}
export default Warnitapp