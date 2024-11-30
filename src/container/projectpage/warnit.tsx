import { Box, Card, CardActionArea, CardContent, Divider, List, ListItem, ListItemText, Typography } from "@mui/material";
import Footer from "../../components/footer";
import { useNavigate } from "react-router-dom";
import warnitMenu from './../../design/WarnitMenu.svg';
import warnit from './../../design/Warnit.svg';
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
        description: "Ce projet m'a permis de développer des compétences techniques avancées en Java, C#, et UML, ainsi qu'une expérience précieuse en méthodologies agiles et en maquettage. J'ai également amélioré ma capacité à travailler en équipe et à gérer les interactions avec le client."
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
      title: "C#",
      lien: "/skill/csharp"
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
            <Box sx={{ padding: 2, marginLeft: '25%', marginRight: '25%' }}>

                <Typography variant="h2" gutterBottom sx={{ textAlign: 'center' }}>Warnit </Typography>
                <Typography variant="h4" gutterBottom sx={{ textAlign: 'center' }}>Une sécurité pour votre entreprise </Typography>

                <Divider sx={{ borderBottomWidth: 2, borderColor: 'lightGray' }} />

                <Typography variant="h6" sx={{ marginTop: '3%', marginBottom: '3%', marginLeft: '5%', position: 'relative' }}>
                    Contexte
                    <span style={{ position: 'absolute', bottom: '-5px', left: 0, width: '80%', height: '2px', backgroundColor: 'red' }}/>
                </Typography>
                <Typography paragraph style={{ marginLeft: '10%', marginRight: '10%' }}>
                    Le projet Warnit est une initiative proposée par l’administration départementale de Montauban, plus précisément par la 
                    branche de sécurité des entreprises.<br />
                    Ce projet a constitué le défi principal de mon 4ᵉ semestre d’apprentissage. Pour sa réalisation, nous formions une équipe de quatre étudiants.
                    La mission confiée par l’entreprise était de créer une application d’alerte en cas d’incidents.<br />

                    Pour mieux comprendre le contexte de ce projet, il est essentiel de considérer les utilisateurs cibles de l’application. 
                    Les clients étaient principalement des employés travaillant dans différents services publics, tels que la poste, une librairie ou encore une piscine. 
                    Tant que l’individu travaillait dans un service public, il pouvait être considéré comme un client potentiel. Il était donc nécessaire de concevoir une application accessible à tous.<br />
                    <br />
                    Pour résumer, nous devions développer une application d’alerte universellement accessible. Cependant, différents problèmes sont apparus en cours de réalisation. 
                    Pour y répondre, une communication régulière avec notre client s’est avérée essentielle, notamment pour définir le design de l’application et garantir la protection des données personnelles des utilisateurs.<br />
                    Pour replacer le projet dans son contexte, l’application Warnit a été conçue pour fonctionner uniquement sur un ordinateur connecté en Wi-Fi au réseau interne de l’entreprise. 
                    Chaque entreprise disposait ainsi de son propre centre de gestion de crise.<br />
                    <br />
                    Pour avancer rapidement sur ce projet, nous avons adopté une méthode de gestion de projet récemment étudiée : l’agilité, et plus précisément la méthode Scrum. Dès le début, 
                    cette méthode nous a permis de valoriser nos compétences respectives et de nous concentrer sur les tâches correspondant le mieux à nos aptitudes. Cela nous a non seulement permis de progresser plus rapidement sur le projet, 
                    mais également d’améliorer nos compétences individuelles sans nous égarer sur des tâches inadaptées.<br />
                </Typography>

                <Divider sx={{ borderBottomWidth: 1, borderColor: 'lightGray', width: '75%', margin: '5%', marginRight: 'auto', marginLeft: 'auto' }} />

                <Typography variant="h6" sx={{ marginTop: '3%', marginBottom: '3%', marginLeft: '5%', position: 'relative' }}>
                    Mise en oeuvre
                    <span style={{ position: 'absolute', bottom: '-5px', left: 0, width: '80%', height: '2px', backgroundColor: 'red' }}/>
                </Typography>
                <Typography style={{ marginLeft: '10%', marginRight: '10%' }} paragraph>
                    Afin de réaliser ce projet, notre temps fut réparti en trois phases : la conception, la réalisation et les tests. Pour chaque phase, différentes tâches nous ont été attribuées. En ce qui me concerne, 
                    je me suis principalement consacré aux tâches de maquettage, de conception UML, ainsi qu’au développement de l’API. Cela incluait, bien sûr, la création de la base de données. Une fois celle-ci terminée, 
                    je me suis également chargé de la gestion de l’asynchronicité côté client.<br />
                    Avant d’approfondir cet aspect, développons la première phase : celle de la conception. Cette étape fut la plus longue, et ce pour une bonne raison : notre manque de connaissances initiales.<br />
                    <br />
                    Comme mentionné plus tôt, les données des utilisateurs devaient rester confidentielles. Au départ, nous étions partis du principe que ces données seraient accessibles, ce qui aurait permis d’établir une base de données globale pour tous les services d’une ville. 
                    Cependant, nous avons dû repenser notre modèle de données à plusieurs reprises pour répondre aux critères imposés par l’entreprise. En outre, le modèle de notre application devait rester simple et accessible.<br />
                    Pour nous aider dans cette tâche, nous avons utilisé le site Figma, qui nous a permis de partager facilement notre travail avec notre client et d’effectuer des retouches générales grâce au concept de composants intégré à la plateforme. 
                    Cependant, cette tâche s’est révélée plus complexe que prévu. Plusieurs maquettes ont vu le jour, évoluant progressivement pour aboutir au modèle présenté ci-dessous.
                </Typography>
                <br/>
                <Box sx={{ display: "flex"}}>
                    <img src={warnit} alt="Presentation" style={{ width: '49%', height: 'auto' }} />
                    <img src={warnitMenu} alt="Presentation" style={{ width: '49%', height: 'auto', marginLeft: '5%', marginRight:'25%' }} />
                </Box>
                <br/>
                <Typography paragraph style={{textAlign: 'center'}}>Maquette Warnit</Typography>
                <Typography paragraph style={{ marginLeft: '10%', marginRight: '10%' }}>
                    C’est lors de notre seconde phase que le développement a pu commencer. Pour cette partie, nous avons utilisé différents outils, tels que SQL Server et Visual Studio. Les technologies liées au C# ont été employées pour la mise en page de l’application, tandis que Java a été utilisé pour le transfert de données. 
                    En ce qui me concerne, comme mentionné plus tôt, je me suis occupé de la partie Java, sous forme d’API (une interface logicielle permettant de connecter un logiciel ou un service à un autre).<br />
                    Cette partie fut la plus simple à mettre en place. Bien entendu, des correctifs ont été nécessaires tout au long du projet pour optimiser le temps de réponse et réduire les appels entre l’API et le client. Cependant, dans l’ensemble, cette partie a été rapidement développée.<br />
                    <br />
                    C’est aussi au cours de cette seconde phase que j’ai rencontré mes plus grandes difficultés, notamment avec la synchronicité entre les clients et l’API. La connexion ne se limitait pas à un échange entre un client et l’API, mais devait également s’effectuer entre plusieurs clients. 
                    Pour illustrer, voici un exemple typique :
                    Un client envoie une alerte au serveur, qui la redistribue ensuite aux autres clients qualifiés pour y répondre. Cependant, lorsque plusieurs alertes sont envoyées simultanément, la question se pose : faut-il fusionner les réponses via l’API ou effectuer les vérifications directement sur les clients ? 
                    Ce problème, parmi tant d’autres, a mis en lumière la complexité de l’asynchronicité et du temps de latence entre les clients, ce qui nous a pris une grande partie de notre temps durant cette seconde phase.<br />
                    <br />
                    Enfin, lors de la phase de test, nous avons pu identifier les limites de notre application, notamment des réponses tardives ou inadéquates. Cette étape s’est révélée cruciale pour corriger ces erreurs, bien qu’elle ait été la plus difficile à gérer en raison du temps limité avant la date de rendu. 
                    Pour conclure, ce projet fut ma première expérience avec la gestion Scrum. Il m’a permis de travailler sur différentes tâches et de progresser rapidement dans l’apprentissage de mes compétences technologiques. Je me suis particulièrement concentré sur le fond de l’application, sans m’impliquer dans le développement de sa mise en forme.
                </Typography>
                <Divider sx={{ borderBottomWidth: 1, borderColor: 'lightGray', width: '75%', margin: '5%', marginRight: 'auto', marginLeft: 'auto' }} />

            
                <Typography variant="h6" sx={{ marginTop: '3%', marginBottom: '3%', marginLeft: '5%', position: 'relative' }}>
                    Étapes du projet
                    <span style={{ position: 'absolute', bottom: '-5px', left: 0, width: '80%', height: '2px', backgroundColor: 'red' }}/>
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
                    <span style={{ position: 'absolute', bottom: '-5px', left: 0, width: '80%', height: '2px', backgroundColor: 'red' }}/>
                </Typography>
                <Typography paragraph>
                    <Box sx={{ display: 'flex', overflowX: 'auto', padding: 2,  marginLeft: '10%', marginRight: '10%' }}>
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
                    <span style={{ position: 'absolute', bottom: '-5px', left: 0, width: '80%', height: '2px', backgroundColor: 'red' }}/>
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
                    Le projet Warnit a été une expérience enrichissante qui m'a permis de mettre en pratique et de renforcer diverses compétences techniques 
                    et méthodologiques. En travaillant sur ce projet, j'ai pu appliquer mes connaissances en Java, C#, et UML, tout en développant une 
                    compréhension approfondie des principes d'agilité et de maquettage. Cette réalisation a été cruciale non seulement pour ma progression professionnelle, 
                    mais aussi pour la sécurité et l'efficacité opérationnelle de notre client.
                </Typography>

                <Divider sx={{ borderBottomWidth: 1, borderColor: 'lightGray', width: '75%', margin: '5%', marginRight: 'auto', marginLeft: 'auto' }} />

                <Typography variant="h6" sx={{ marginTop: '3%', marginBottom: '3%', marginLeft: '5%', position: 'relative' }}>
                    Conclusion
                    <span style={{ position: 'absolute', bottom: '-5px', left: 0, width: '80%', height: '2px', backgroundColor: 'red' }}/>
                </Typography>
                <Typography paragraph sx={{marginBottom:"5%",marginLeft: '10%', marginRight: '10%' }}>
                Afin de conclure, je vais développer les résultats de ce projet. Les attendus du projet ont été respectés. 
                Une démonstration au client a permis de présenter les fonctionnalités nécessaires pour répondre à la problématique de l'entreprise, 
                et le maquettage de l'application a également été réalisé conformément aux attentes.<br />
                Cependant, une partie de la problématique restait non résolue : l'accessibilité. Par manque de moyens technologiques, 
                nous n’avons pas pu y répondre pleinement dans ce projet initial. Ce n’est que lors de mon second projet lié à cette application 
                que nous avons pu apporter une solution à cette problématique, le projet Warnit'App.
                </Typography>
            </Box>
            <Footer />
        </Box>
    )
}

export default Warnit;