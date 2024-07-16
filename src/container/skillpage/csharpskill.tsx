import { Box, Divider, Typography } from "@mui/material";
import Footer from "../../components/footer";

const Csharpskill = () => {
    return (
        <Box>
            <Box sx={{ padding: 2, marginLeft: '15%', marginRight: '15%' }}>

                <Typography variant="h4" gutterBottom sx={{ textAlign: 'center' }}>C# </Typography>

                <Divider sx={{ borderBottomWidth: 2, borderColor: 'lightGray' }} />

                <Typography variant="h6" sx={{ marginTop: '3%', marginBottom: '3%', marginLeft: '5%', position: 'relative'  }}>Définition
                <span style={{ position: 'absolute', bottom: '-5px', left: 0, width: '80%', height: '2px', backgroundColor: 'red' }}/></Typography>
                <Typography paragraph>
                    C# est un langage de programmation polyvalent développé par Microsoft. Utilisé principalement dans le développement d'applications Windows, de jeux vidéo avec Unity, et d'applications web avec le framework .NET, C# est apprécié pour sa syntaxe claire et son intégration étroite avec les produits Microsoft. Le framework .NET permet de créer des applications robustes et performantes, offrant des fonctionnalités avancées telles que la gestion de la mémoire, la sécurité et l'accès aux données via Entity Framework.
                </Typography>

                <Divider sx={{ borderBottomWidth: 1, borderColor: 'lightGray', width: '75%', margin: '5%', marginRight: 'auto', marginLeft: 'auto' }} />

                <Typography variant="h6" sx={{ marginTop: '3%', marginBottom: '3%', marginLeft: '5%', position: 'relative'  }}>Mise en œuvre
                <span style={{ position: 'absolute', bottom: '-5px', left: 0, width: '80%', height: '2px', backgroundColor: 'red' }}/></Typography>
                <Typography paragraph>
                    Dans le cadre de la conception du projet Weight and Balance, C# a été utilisé avec le framework .NET pour développer des API nécessaires au fonctionnement de l'application. J'ai analysé les différents appels à réaliser à travers un fichier de spécifications techniques, ce qui m'a permis de prévoir les fonctionnalités et les interactions nécessaires pour l'application. Durant les phases de réalisation, la création de ma propre API en utilisant Entity Framework a été cruciale. Entity Framework a facilité la manipulation des données et l'interaction avec la base de données, simplifiant grandement le développement de l'application.
                    Pour le projet UI Agenda, j'ai approfondi mes connaissances en C# et en .NET en réalisant des appels API vers une autre plateforme, en l'occurrence un serveur SQS. Ces appels permettaient de récupérer des données en temps réel et d'intégrer ces informations dans l'interface utilisateur de l'agenda. L'utilisation de C# pour gérer ces appels a permis une intégration fluide et efficace des données externes.
                </Typography>
                <Typography paragraph>
                    Dans la conception du projet Weight and Balance, une anecdote marquante fut la création de l'API. En utilisant Entity Framework, j'ai pu rapidement mettre en place une base de données relationnelle et définir les modèles de données. Un moment clé fut la réalisation d'une requête complexe qui impliquait plusieurs tables et relations. Grâce à Entity Framework, j'ai pu simplifier cette requête en utilisant LINQ, ce qui a non seulement amélioré les performances mais aussi réduit la complexité du code.
                    Pour le projet UI Agenda, un défi intéressant était l'intégration des appels API avec le serveur SQS. Lors de l'implémentation, j'ai rencontré des problèmes de synchronisation des données en temps réel. En utilisant les fonctionnalités avancées de C#, telles que les tâches asynchrones et les callbacks, j'ai pu résoudre ces problèmes et garantir que l'application recevait et affichait les données en temps réel de manière efficace.
                </Typography>

                <Divider sx={{ borderBottomWidth: 1, borderColor: 'lightGray', width: '75%', margin: '5%', marginRight: 'auto', marginLeft: 'auto' }} />

                <Typography variant="h6" sx={{ marginTop: '3%', marginBottom: '3%', marginLeft: '5%', position: 'relative'  }}>La place dans mon projet professionnel
                <span style={{ position: 'absolute', bottom: '-5px', left: 0, width: '80%', height: '2px', backgroundColor: 'red' }}/></Typography>
                <Typography paragraph>
                    En tant que futur DevOps, la maîtrise de C# et du framework .NET sera extrêmement bénéfique. Ces technologies sont largement utilisées dans l'industrie et offrent des outils puissants pour le développement et la gestion des applications. La capacité à créer des API robustes et à intégrer des services externes est cruciale dans le rôle de DevOps, où l'automatisation et l'interconnexion des systèmes sont essentielles. En comprenant et en maîtrisant C#, je serai mieux préparé à gérer les défis techniques et à contribuer efficacement à la réussite des projets.
                </Typography>
                <Typography paragraph>
                    Cependant, je reconnais que dans certains cas, j'ai pu sous-estimer la complexité des projets impliquant C# et .NET. Parfois, j'ai eu tendance à prendre des raccourcis dans l'implémentation des API, ce qui a conduit à des problèmes de maintenance à long terme. De plus, l'optimisation des performances des requêtes SQL générées par Entity Framework n'a pas toujours été une priorité, ce qui a parfois entraîné des lenteurs. Je vois ces points comme des opportunités d'amélioration et je suis déterminé à approfondir mes compétences en C# et à optimiser mes pratiques de développement pour garantir des applications plus performantes et maintenables.
                </Typography>

                <Divider sx={{ borderBottomWidth: 1, borderColor: 'lightGray', width: '75%', margin: '5%', marginRight: 'auto', marginLeft: 'auto' }} />

                <Typography variant="h6" sx={{ marginTop: '3%', marginBottom: '3%', marginLeft: '5%', position: 'relative'  }}>Mon évolution
                <span style={{ position: 'absolute', bottom: '-5px', left: 0, width: '80%', height: '2px', backgroundColor: 'red' }}/></Typography>
                <Typography paragraph sx={{marginBottom:"5%"}}>
                    Au fil de mes expériences, j'ai pris conscience de l'importance des bonnes pratiques en C# et en développement d'API. J'ai appris à mieux structurer mon code, à optimiser les requêtes de données et à utiliser les fonctionnalités avancées de .NET pour améliorer les performances et la maintenabilité des applications. En continuant à pratiquer et à intégrer ces compétences dans mes projets, je suis mieux équipé pour collaborer avec les différentes parties prenantes et pour assurer le succès des projets, tant du point de vue de l'expérience utilisateur que de la satisfaction des clients.
                </Typography>


            </Box>
            <Footer />
        </Box>
    );
}

export default Csharpskill;