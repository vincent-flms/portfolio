import { Box, Card, CardActionArea, CardContent, Divider, List, ListItem, ListItemText, Typography } from "@mui/material"
import Footer from "../../components/footer";
import { useNavigate } from "react-router-dom";

const etapes = [
    {
        title: "Préparation et étude",
        description: "Recherche et compilation des documents de cours sur la permaculture."
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
        description: "Dispense des cours de permaculture aux étudiants."
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
        description: "Professeurs et formateurs de l'école ESIA."
    }
];

const Resultats = [
    {
        title: "Résultats pour l’entreprise :",
        description: "L’entreprise a obtenu un retour d’information précieux sur l’efficacité de la formation en permaculture, mesurée par les résultats du test. Plus de 80 % des étudiants ont réussi l’évaluation, démontrant une bonne compréhension des concepts enseignés."
    },
    {
        title: "Résultats pour moi :",
        description: "J’ai développé des compétences clés en gestion de projet, en communication externe et en pédagogie. J’ai appris à structurer un programme éducatif, à enseigner de manière efficace et à concevoir des outils d’évaluation adaptés."
    }
];

const Lendemains = [
    {
        title: "Futur immédiat",
        description: "Les étudiants peuvent appliquer les compétences acquises dans leurs projets professionnels immédiats, améliorant ainsi leur performance et leur capacité à travailler en équipe."
    },
    {
        title: "À distance",
        description: "À plus long terme, les compétences en permaculture contribueront à une meilleure gestion de projets collectifs et à une communication plus efficace dans divers contextes professionnels."
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
            <Box sx={{ padding: 2, marginLeft: '25%', marginRight: '25%' }}>

                <Typography variant="h2" gutterBottom sx={{ textAlign: 'center' }}>Formation formaculture </Typography>
                <Typography variant="h4" gutterBottom sx={{ textAlign: 'center' }}>Une formation pour tous </Typography>

                <Divider sx={{ borderBottomWidth: 2, borderColor: 'lightGray' }} />

                <Typography variant="h6" sx={{ marginTop: '3%', marginBottom: '3%', marginLeft: '5%', position: 'relative' }}>
                    Contexte
                    <span style={{ position: 'absolute', bottom: '-5px', left: 0, width: '80%', height: '2px', backgroundColor: 'red' }} />
                </Typography>
                <Typography paragraph style={{ marginLeft: '10%', marginRight: '10%' }}>
                    Pour comprendre le contexte d’un projet de formation dans mon cursus, il est essentiel de savoir que notre parcours met
                    l’accent sur l’évaluation de nos compétences humaines, telles que la communication, la pédagogie, ainsi que la création de documents visuels,
                    audio ou audiovisuels. Dans ce cadre, des projets appelés projets de formation humaine sont mis en avant.
                    Dans mon cas, il s’agissait d’un projet de formation destiné à de jeunes adultes, portant sur le thème de la permaculture.<br />
                    Ce projet a vu le jour durant mon second semestre d’apprentissage. Étant donné qu’il s’agissait d’un projet scolaire,
                    il n’y avait pas de commanditaire externe. Une équipe de trois personnes, moi inclus, a été formée pour mener à bien ce projet.<br />

                    Pour développer le contexte de ce projet, il convient de rappeler qu’à l’époque, la permaculture était une tendance émergente dans le
                    domaine de l’agriculture. Cependant, peu de personnes vivant en milieu urbain connaissaient ses applications concrètes, ce qui nous a motivés à en faire le sujet d’une formation.<br />
                    <br />
                    L’enjeu principal de ce projet résidait dans notre capacité à enseigner efficacement les principes de la permaculture et à concevoir un test d’évaluation pertinent.
                    Il s’agissait de s’assurer que les participants non seulement comprennent les concepts mais soient également capables de les appliquer, démontrant ainsi une réelle acquisition des compétences enseignées.<br />
                    <br />
                    Pour obtenir des résultats concrets, nous avons conçu un cours dynamique et un ensemble de tests pour vérifier si nos connaissances étaient bien assimilées.
                    Cependant, cela a également soulevé un risque : un échec dans l’apprentissage des participants, reflété par des résultats médiocres lors des tests. Un autre risque résidait dans une mauvaise conception des tests eux-mêmes,
                    qui aurait pu empêcher une évaluation correcte des connaissances et des compétences des participants.
                </Typography>

                <Divider sx={{ borderBottomWidth: 1, borderColor: 'lightGray', width: '75%', margin: '5%', marginRight: 'auto', marginLeft: 'auto' }} />

                <Typography variant="h6" sx={{ marginTop: '3%', marginBottom: '3%', marginLeft: '5%', position: 'relative' }}>
                    Mise en oeuvre
                    <span style={{ position: 'absolute', bottom: '-5px', left: 0, width: '80%', height: '2px', backgroundColor: 'red' }} />
                </Typography>
                <Typography paragraph style={{ marginLeft: '10%', marginRight: '10%' }}>
                    Pour la réalisation de ce projet, différentes phases ont eu lieu : l’étude du concept, la conception des cours et des tests,
                    et la communication incluant l’enseignement, le test et l’annonce des résultats.<br />
                    Durant l’étude, nous avons recherché diverses sources d’informations. La principale fut bien sûr Internet,
                    mais des sources externes nous ont également permis d’obtenir des avis sur le concept de la permaculture et son application dans l’agriculture moderne.
                    De plus, des témoignages nous ont offert une approche plus concrète sur la place de la permaculture aujourd’hui.<br />

                    Grâce aux informations récoltées, nous avons pu débuter la conception du cours. Concernant cette partie, la conception des tests s’est déroulée en parallèle du cours et des questions posées pendant celui-ci,
                    afin d’éviter que le test inclue des informations qui n’auraient pas été abordées. Cette méthode a permis de limiter les risques de hors-sujet lors de l’évaluation. Pour maintenir l’attention des participants,
                    nous avons intégré des questions ciblées tout au long du cours, permettant aux élèves de rester concentrés. Par ailleurs, la structure logique du cours a été un point clé :
                    un cours mal structuré risquait de nuire à la compréhension des élèves.<br />
                    <br />
                    Enfin, la dernière étape – la réalisation du cours, la passation du test et l’annonce des résultats – s’est déroulée en présentiel. L’ensemble de ces étapes a mobilisé toute l’équipe.
                    Lors de la réalisation du cours, chacun d’entre nous maîtrisait son contenu, ce qui a permis d’éviter des erreurs ou des imprécisions. De plus, les participants pouvaient poser des questions pendant le cours,
                    et grâce à notre collaboration, nous étions en mesure de répondre immédiatement ou de corriger une éventuelle erreur. Cette cohésion d’équipe a été essentielle pour éviter les digressions ou les réponses incomplètes.<br />
                    Pour le test, nous avons opté pour un questionnaire à choix multiples (QCM), un format qui facilitait la correction. Cela nous a également permis de corriger les tests immédiatement après leur passation.
                    En cas de question sur une erreur, nous pouvions y répondre directement en référençant la partie associée du cours. Ce processus a renforcé l’apprentissage en offrant un retour immédiat aux participants.
                </Typography>

                <Divider sx={{ borderBottomWidth: 1, borderColor: 'lightGray', width: '75%', margin: '5%', marginRight: 'auto', marginLeft: 'auto' }} />

                <Typography variant="h6" sx={{ marginTop: '3%', marginBottom: '3%', marginLeft: '5%', position: 'relative' }}>
                    Étapes du projet
                    <span style={{ position: 'absolute', bottom: '-5px', left: 0, width: '80%', height: '2px', backgroundColor: 'red' }} />
                </Typography>
                <Typography paragraph>
                    <Box sx={{ display: 'flex', overflowX: 'auto', padding: 2, marginLeft: '10%', marginRight: '10%' }}>
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
                    <span style={{ position: 'absolute', bottom: '-5px', left: 0, width: '80%', height: '2px', backgroundColor: 'red' }} />
                </Typography>
                <Typography paragraph>
                    <Box sx={{ display: 'flex', overflowX: 'auto', padding: 2, marginLeft: '10%', marginRight: '10%' }}>
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
                    <span style={{ position: 'absolute', bottom: '-5px', left: 0, width: '80%', height: '2px', backgroundColor: 'red' }} />
                </Typography>
                <Typography paragraph>
                    <Box sx={{ display: 'flex', overflowX: 'auto', padding: 2, marginLeft: '10%', marginRight: '10%' }}>
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
                    <span style={{ position: 'absolute', bottom: '-5px', left: 0, width: '80%', height: '2px', backgroundColor: 'red' }} />
                </Typography>
                <Typography paragraph>
                    <Box sx={{ display: 'flex', overflowX: 'auto', padding: 2, marginLeft: '10%', marginRight: '10%' }}>
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
                    <Box sx={{ display: 'flex', overflowX: 'auto', padding: 2, marginLeft: '10%', marginRight: '10%' }}>
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
                    <span style={{ position: 'absolute', bottom: '-5px', left: 0, width: '80%', height: '2px', backgroundColor: 'red' }} />
                </Typography>
                <Typography paragraph style={{ marginLeft: '10%', marginRight: '10%' }}>
                    En tant que futur DevOps, ce projet a été une expérience cruciale qui a renforcé mes compétences en gestion de projet, communication externe,
                    et maquettage. En enseignant la permaculture et en développant un test d’évaluation, j’ai non seulement contribué à la formation des autres,
                    mais j’ai aussi affiné ma capacité à structurer et délivrer des informations complexes de manière accessible.
                    Cette expérience m’a permis d’apprécier l'importance de la communication claire et efficace, essentielle dans le domaine DevOps où la collaboration est clé.
                </Typography>

                <Typography variant="h6" sx={{ marginTop: '3%', marginBottom: '3%', marginLeft: '5%', position: 'relative' }}>
                    Conclusion
                    <span style={{ position: 'absolute', bottom: '-5px', left: 0, width: '80%', height: '2px', backgroundColor: 'red' }} />
                </Typography>
                <Typography paragraph style={{ marginLeft: '10%', marginRight: '10%' }}>
                    Afin de conclure, je souhaite développer les résultats des tests finaux ainsi que les remarques formulées à leur issue.
                    Le cours, dans son ensemble, était structuré et dynamique. La compréhension du principe de la permaculture, ainsi que les
                    avis que nous avions récoltés, ont été partagés avec nos élèves. Cependant, un commentaire reçu à la fin de la session nous
                    a permis de comprendre pourquoi le choix du sujet pouvait être perfectible : la permaculture est avant tout une méthode pratique,
                    et pour en saisir pleinement les enjeux, il est essentiel de proposer des exemples concrets de mise en pratique.
                    Il était évident qu’il était impossible de fournir ces démonstrations dans le cadre d’un seul cours.<br />
                    Malgré cette limitation, cette expérience n’a pas été un échec. Elle nous a offert une occasion précieuse d’apprendre, tant pour nous que pour nos élèves.
                    Nous avons acquis une expérience enrichissante, à la fois dans la conception de contenu pédagogique et dans l’enseignement en présentiel.
                </Typography>
            </Box>
            <Footer />
        </Box>

    )
}

export default Formacultureproject