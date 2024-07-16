import { Box, Card, CardActionArea, CardContent, Divider, List, ListItem, ListItemText, Typography } from "@mui/material"
import Footer from "../../components/footer";
import { useNavigate } from "react-router-dom";

const etapes = [
    {
        title: "Préparation et étude",
        description: "Recherche et compilation des documents de cours sur la formaculture."
    },
    {
        title: "Conception du cours",
        description: "Structuration des contenus pédagogiques et création des supports de cours."
    },
    {
        title: "Planification du projet",
        description: "Élaboration d'un planning prévisionnel incluant des sessions de cours et des périodes de révision."
    },
    {
        title: "Enseignement",
        description: "Dispense des cours de formaculture aux étudiants."
    },
    {
        title: "Conception du test",
        description: "Développement d’un test d’évaluation pour mesurer les connaissances acquises."
    },
    {
        title: "Exécution du test",
        description: "Administration du test et recueil des résultats."
    },
    {
        title: "Analyse des résultats",
        description: "Évaluation des performances des étudiants et ajustement des méthodes pédagogiques si nécessaire."
    },
];

  const Acteurs = [
    {
      title: "Les invités (étudiants)",
      description: "Groupe d'étudiants avec une moyenne d'âge de 30 ans."
    },
    {
      title: "L'équipe",
      description:"Professeurs et formateurs de l'école ESIA."
    }
  ];

  const Resultats = [
    {
      title: "Résultats pour l’entreprise :",
      description: "L’entreprise a obtenu un retour d’information précieux sur l’efficacité de la formation en formaculture, mesurée par les résultats du test. Plus de 80 % des étudiants ont réussi l’évaluation, démontrant une bonne compréhension des concepts enseignés."
    },
    {
      title: "Résultats pour moi :",
      description:"J’ai développé des compétences clés en gestion de projet, en communication externe et en pédagogie. J’ai appris à structurer un programme éducatif, à enseigner de manière efficace et à concevoir des outils d’évaluation adaptés."
    }
  ];

  const Lendemains = [
    {
      title: "Futur immédiat",
      description: "Les étudiants peuvent appliquer les compétences acquises dans leurs projets professionnels immédiats, améliorant ainsi leur performance et leur capacité à travailler en équipe."
    },
    {
      title: "À distance",
      description:"À plus long terme, les compétences en formaculture contribueront à une meilleure gestion de projets collectifs et à une communication plus efficace dans divers contextes professionnels."
    },
    {
      title: "Aujourd'hui",
      description: "Aujourd'hui, l'expérience acquise grâce à ce projet enrichit mon profil de futur DevOps, en me permettant de mieux comprendre l’importance de la transmission des connaissances et de la communication dans la réussite des projets."
    }
  ];

  const skill = [
    {
      title: "Gestion de projet",
      lien: "/skill/gestionproject"
    },
    {
      title: "Communication externe",
      lien: "/skill/externalcom"
    },
    {
      title: "Maquettage",
      lien: "/skill/maquettages"
    }
  ]
const Formacultureproject = () => {
    const navigate = useNavigate();

    const handleClick = (link: string) => {
        navigate(link);
    };
    return (
        <Box>
            <Box sx={{ padding: 2, marginLeft: '15%', marginRight: '15%' }}>

                <Typography variant="h3" gutterBottom sx={{ textAlign: 'center' }}>Formation formaculture </Typography>

                <Divider sx={{ borderBottomWidth: 2, borderColor: 'lightGray' }} />

                <Typography variant="h6" sx={{ marginTop: '3%', marginBottom: '3%', marginLeft: '5%', position: 'relative' }}>
                    Objectifs
                    <span style={{ position: 'absolute', bottom: '-5px', left: 0, width: '80%', height: '2px', backgroundColor: 'red' }}/>    
                </Typography>
                <Typography paragraph>
                L’objectif principal était de concevoir et de dispenser un cours de formaculture à un groupe d’étudiants et de les évaluer par un test structuré. Le but était de s’assurer que les participants comprenaient bien les concepts enseignés et pouvaient les appliquer correctement.
                </Typography>

                <Divider sx={{ borderBottomWidth: 1, borderColor: 'lightGray', width: '75%', margin: '5%', marginRight: 'auto', marginLeft: 'auto' }} />

                <Typography variant="h6" sx={{ marginTop: '3%', marginBottom: '3%', marginLeft: '5%', position: 'relative' }}>
                    Contexte
                    <span style={{ position: 'absolute', bottom: '-5px', left: 0, width: '80%', height: '2px', backgroundColor: 'red' }}/>
                </Typography>
                <Typography paragraph>
                Ce projet s'inscrit dans le cadre d'une mission éducative fournie par l'école ESIA, centrée sur le développement humain. La formaculture, en tant que sujet, vise à enrichir les compétences variées des étudiants, mettant particulièrement l'accent sur la communication externe et la capacité d'enseigner et de transmettre des connaissances à autrui. L'objectif est de développer des compétences en communication et en pédagogie chez les étudiants, en leur permettant d'acquérir des compétences diversifiées et d'améliorer leur capacité à transmettre des connaissances.
                </Typography>

                <Divider sx={{ borderBottomWidth: 1, borderColor: 'lightGray', width: '75%', margin: '5%', marginRight: 'auto', marginLeft: 'auto' }} />

                <Typography variant="h6" sx={{ marginTop: '3%', marginBottom: '3%', marginLeft: '5%', position: 'relative' }}>
                    Enjeu
                    <span style={{ position: 'absolute', bottom: '-5px', left: 0, width: '80%', height: '2px', backgroundColor: 'red' }}/>
                </Typography>
                <Typography paragraph>
                L'enjeu de ce projet réside dans la capacité à enseigner efficacement la formaculture et à concevoir un test d’évaluation pertinent. Il s’agissait d’assurer que les étudiants non seulement comprennent les concepts mais puissent aussi les appliquer, démontrant ainsi une réelle acquisition des compétences enseignées.
                </Typography>

                <Divider sx={{ borderBottomWidth: 1, borderColor: 'lightGray', width: '75%', margin: '5%', marginRight: 'auto', marginLeft: 'auto' }} />

                <Typography variant="h6" sx={{ marginTop: '3%', marginBottom: '3%', marginLeft: '5%', position: 'relative' }}>
                    Risques
                    <span style={{ position: 'absolute', bottom: '-5px', left: 0, width: '80%', height: '2px', backgroundColor: 'red' }}/>
                </Typography>
                <Typography paragraph>
                    <List >
                        <ListItem>
                            <ListItemText primary=" > Échec de l'apprentissage des étudiants, reflété par des résultats médiocres au test." />
                        </ListItem>
                        <ListItem>
                            <ListItemText primary=" > Mauvaise conception du test, ne permettant pas de correctement évaluer les connaissances et compétences des étudiants." />
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
                En tant que futur DevOps, ce projet a été une expérience cruciale qui a renforcé mes compétences en gestion de projet, communication externe, et maquettage. En enseignant la formaculture et en développant un test d’évaluation, j’ai non seulement contribué à la formation des autres, mais j’ai aussi affiné ma capacité à structurer et délivrer des informations complexes de manière accessible. Cette expérience m’a permis d’apprécier l'importance de la communication claire et efficace, essentielle dans le domaine DevOps où la collaboration est clé.
                </Typography>

            </Box>
            <Footer />
        </Box>
    
    )
}

export default Formacultureproject