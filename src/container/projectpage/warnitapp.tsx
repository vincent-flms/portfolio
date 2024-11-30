import { Box, Card, CardActionArea, CardContent, CardMedia, Divider, Grid, List, ListItem, ListItemText, Typography } from "@mui/material"
import Footer from "../../components/footer";
import { useNavigate } from "react-router-dom";
import warnitAppImage from "./../../design/warnitApp.svg";
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
            <Box sx={{ padding: 2, marginLeft: '25%', marginRight: '25%' }}>

                <Typography variant="h2" gutterBottom sx={{ textAlign: 'center' }}>Warnit application </Typography>
                <Typography variant="h4" gutterBottom sx={{ textAlign: 'center' }}>Une sécurité pour votre entreprise </Typography>

                <Divider sx={{ borderBottomWidth: 2, borderColor: 'lightGray' }} />

                <Typography variant="h6" sx={{ marginTop: '3%', marginBottom: '3%', marginLeft: '5%', position: 'relative' }}>
                    Contexte
                    <span style={{ position: 'absolute', bottom: '-5px', left: 0, width: '80%', height: '2px', backgroundColor: 'red' }} />
                </Typography>
                <Box sx={{ marginLeft: '10%', marginRight: '10%' }}>
                    <Typography paragraph>
                        Warnit App est le nom d’un projet né à la suite de Warnit, précisément lors du semestre suivant dans le cadre de ma formation.<br/>
                        Commandité par la même entreprise, l’administration départementale de Montauban, ce projet a été réalisé durant mon 5ᵉ semestre d’apprentissage. 
                        Nous formions une équipe de quatre étudiants, avec pour objectif principal de développer une extension de notre application existante.
                        Pour vous rappeler brièvement, l’application Warnit était exclusivement destinée à un usage sur ordinateur, ce qui pouvait poser des problèmes 
                        d’accessibilité. Afin de répondre à cette problématique, le projet Warnit App a vu le jour.
                    </Typography>
                    <Typography paragraph>
                        Pour développer ce que j’ai mentionné plus tôt, le risque d’accessibilité provenait principalement des agents externes à l’entreprise ou de ceux qui ne se trouvaient pas à leur poste.
                        Pour rappel, le projet Warnit avait pour objectif principal de réduire les risques de violence envers les employés de l’entreprise, par exemple en prévenant les personnes face à des dangers 
                        tels qu’un incendie, un problème médical, ou même une confrontation physique.
                        Ainsi, pour répondre aux attentes de l’entreprise, une extension mobile s’est avérée être la solution la plus adaptée.
                    </Typography>
                    <Typography paragraph>
                        Le principal problème de visibilité étant géré, il nous manquait une partie essentielle : l’administration des applications, et ce fut le second objectif de ce projet.<br />
                        Cette partie fut la plus élaborée, car il nous fallait pour cela revoir l’application bureau de Warnit afin d’y intégrer une section administration avec des droits spécifiques,
                        ce qui n’était pas nécessaire lors du premier projet.<br />
                        Afin de répondre à l’ensemble des exigences de l’entreprise, notre groupe a dû rester en contact tout au long du projet, afin de respecter certaines conditions, telles que la protection
                        des informations personnelles des utilisateurs.
                    </Typography>
                </Box>
                <Divider sx={{ borderBottomWidth: 1, borderColor: 'lightGray', width: '75%', margin: '5%', marginRight: 'auto', marginLeft: 'auto' }} />


                <Typography variant="h6" sx={{ marginTop: '3%', marginBottom: '3%', marginLeft: '5%', position: 'relative' }}>
                    Mise en oeuvre
                    <span style={{ position: 'absolute', bottom: '-5px', left: 0, width: '80%', height: '2px', backgroundColor: 'red' }} />
                </Typography>
                <Box sx={{ marginLeft: '10%', marginRight: '10%' }}>
                    <Typography paragraph>
                        Afin de réaliser intégralement notre projet, il a tout d’abord fallu effectuer un ensemble de modifications sur la base de données existante. Pour cela, de nombreuses réunions entre 
                        les membres de l’équipe et l’entreprise ont été organisées. De plus, certains problèmes ont été mis en avant, tels que la localisation des membres de l’entreprise et leur disponibilité.<br />
                        Dès qu’un MCD (Modèle Conceptuel de Données) a été complété, nous nous sommes scindés en deux équipes. La première avait pour mission de modifier l’API déjà existante, tandis que l’autre 
                        devait s’occuper du maquettage de l’application, des modifications nécessaires à l’application bureau, puis de commencer le développement de celle-ci.<br />
                        Dans mon cas, je me suis retrouvé dans la seconde équipe. Ayant déjà travaillé sur le premier projet, je pouvais concevoir un design correspondant à celui de l’application mobile.
                    </Typography>
                    <br/>
                    <img src={warnitAppImage} alt="Presentation" style={{ width: '50%', height: 'auto', marginLeft: '25%', marginRight:'25%' }} />
                    <br/>
                    <br/>
                    <Typography style={{textAlign: 'center'}}><a href="https://www.figma.com/proto/F1u1h3fe0jEVNqGWMtpqi3/Maquette?node-id=4-2&starting-point-node-id=4%3A2&t=hAlxZclxPIwDcCdW-1">Maquette WarnitApp Figma</a></Typography>
                    <br/>
                    <Typography paragraph>
                    Nos principaux outils pour cette application furent Figma, Visual Studio, Java Android et SQL Studio. Tous ces outils nous ont permis de progresser rapidement dans le développement des maquettes et de l’application.<br />
                    Cependant, ce qui nous a surtout permis d’avancer efficacement fut notre méthode de gestion de projet. L’agilité est une compétence que tous les membres du groupe avaient assimilée grâce à nos projets précédents. Ainsi, 
                    nos tâches furent exécutées plus rapidement et de manière mieux organisée.
                    </Typography>
                    <Typography paragraph>
                        Pour la réalisation de l'application mobile, nous avons pris en compte les différents formats possibles en rendant celle-ci responsive.<br />
                        De plus, une autre difficulté était à prévoir. Comme je l'ai mentionné plus tôt, nous ne pouvions pas utiliser de données personnelles dans l'application. Ce critère nous a posé plusieurs problèmes, 
                        notamment en ce qui concerne la géolocalisation. Pour expliquer en détail, les utilisateurs sont séparés en deux parties distinctes : ceux qui se trouvent dans la zone d'alerte et ceux qui en sont en dehors. 
                        Si vous êtes dans la zone d'alerte, vous recevez la notification correspondante, dans le cas contraire, non.<br />
                        De plus, en fonction de votre attribution, différentes alertes peuvent être envoyées. Par exemple, un client ayant des compétences en premiers secours sera sollicité en cas d'accident médical, 
                        tandis qu’une personne appartenant à la sécurité sera appelée pour une intervention spécifique. Toutes ces données sont classées comme privées et nous n’y avons pas accès directement depuis une autre base.<br />
                        Pour répondre à cette contrainte, il était nécessaire de catégoriser le client, ce qui nécessitait une administration dédiée. Ainsi, l'application bureau a été enrichie avec une fonctionnalité d’ajout de compétences. 
                        Par ailleurs, l'application mobile offrait également la possibilité de modifier son lieu de travail.
                    </Typography>
                    <Typography paragraph>
                    Pour conclure cette partie, la mise en œuvre de cette application fut à la fois un défi, tant sur le plan de la communication que sur celui de nos compétences. Ce projet s’est également révélé être une mine d’informations précieuses pour mes futurs projets.
                    </Typography>
                </Box>
            
                <Divider sx={{ borderBottomWidth: 1, borderColor: 'lightGray', width: '75%', margin: '5%', marginRight: 'auto', marginLeft: 'auto' }} />

                <Typography variant="h6" sx={{ marginTop: '3%', marginBottom: '3%', marginLeft: '5%', position: 'relative' }}>
                    Étapes du projet
                    <span style={{ position: 'absolute', bottom: '-5px', left: 0, width: '80%', height: '2px', backgroundColor: 'red' }} />
                </Typography>
                <Typography paragraph>
                    <Box sx={{ display: 'flex', overflowX: 'auto', padding: 2 ,marginLeft: '10%', marginRight: '10%'}}>
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
                    <Box sx={{ display: 'flex', overflowX: 'auto', padding: 2,marginLeft: '10%', marginRight: '10%' }}>
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

                <Typography variant="h6" sx={{ marginTop: '3%', marginBottom: '3%', marginLeft:'5%', position: 'relative' }}>
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
                <Typography paragraph sx={{ marginBottom: "5%",marginLeft: '10%', marginRight: '10%' }}>
                    La réalisation du projet WarnitApp a été une opportunité unique pour moi de mettre en pratique mes compétences en développement mobile avec Java, 
                    en rétro-ingénierie, en communication externe, et en agilité. Ce projet m'a permis de comprendre les défis de la synchronisation entre différentes
                    plateformes et d'améliorer la visibilité et la réactivité des alertes pour les utilisateurs. Travailler sur ce projet m'a offert une expérience
                    précieuse et a renforcé ma capacité à gérer des projets complexes en collaboration avec différentes équipes.
                </Typography>

                <Divider sx={{ borderBottomWidth: 1, borderColor: 'lightGray', width: '75%', margin: '5%', marginRight: 'auto', marginLeft: 'auto' }} />

                <Typography variant="h6" sx={{ marginTop: '3%', marginBottom: '3%', marginLeft: '5%', position: 'relative' }}>
                    Conclusion
                    <span style={{ position: 'absolute', bottom: '-5px', left: 0, width: '80%', height: '2px', backgroundColor: 'red' }} />
                </Typography>
                <Typography paragraph sx={{ marginBottom: "5%",marginLeft: '10%', marginRight: '10%' }}>
                    Afin de conclure, je vais développer les résultats obtenus. À la fin du projet, mon équipe et moi avons pu présenter une démonstration de notre application à notre client.<br />
                    Pour cette démonstration, nous avons mis en place plusieurs scénarios : une personne interne avec une application mobile et une compétence en premiers secours, une autre personne 
                    interne sans compétence particulière, et enfin une personne utilisant l’application bureau. Une simulation a ensuite permis de signaler un risque de santé pour un individu. 
                    Différentes alertes ont été envoyées et reçues en fonction des rôles définis.<br />
                    Cette démonstration a fortement plu à notre client, ce qui a ouvert des discussions sur les nombreuses possibilités d’évolution qu’offrirait cette application dans le futur. 
                    Une fonctionnalité qui n’était pas demandée à l’origine a notamment été mise en avant : la géolocalisation des membres situés à proximité d’un centre ou d’une personne sur le terrain. 
                    Malheureusement, cette fonctionnalité n’a pas pu être implémentée en raison des contraintes liées aux données confidentielles. Cependant, dans le cas où l’application serait reprise 
                    par une équipe au sein de l’entreprise, cette amélioration pourrait nettement augmenter son efficacité.
                </Typography>

            </Box>
            <Footer />
        </Box>
    )
}
export default Warnitapp