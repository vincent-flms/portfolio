import { Box, Divider, Typography } from "@mui/material";
import Footer from "../../components/footer";

const Typescriptskill = () => {
    return (
        <Box>
            <Box sx={{ padding: 2, marginLeft: '15%', marginRight: '15%' }}>

                <Typography variant="h4" gutterBottom sx={{ textAlign: 'center' }}>TypeScript </Typography>

                <Divider sx={{ borderBottomWidth: 2, borderColor: 'lightGray' }} />

                <Typography variant="h6" sx={{ marginTop: '3%', marginBottom: '3%', marginLeft: '5%', position: 'relative' }}>Définition
                    <span style={{ position: 'absolute', bottom: '-5px', left: 0, width: '80%', height: '2px', backgroundColor: 'red' }} /></Typography>
                <Typography paragraph>
                    TypeScript est un langage de programmation open-source développé par Microsoft. Il s'agit d'une surcouche de JavaScript qui ajoute des fonctionnalités de typage statique au langage. TypeScript permet aux développeurs d'écrire du code JavaScript de manière plus structurée et sécurisée en fournissant des fonctionnalités telles que les types, les interfaces, les classes et les modules. Grâce à son système de typage statique, TypeScript détecte les erreurs de syntaxe et de logique lors de la compilation, ce qui facilite le développement d'applications plus fiables et maintenables.
                </Typography>

                <Divider sx={{ borderBottomWidth: 1, borderColor: 'lightGray', width: '75%', margin: '5%', marginRight: 'auto', marginLeft: 'auto' }} />

                <Typography variant="h6" sx={{ marginTop: '3%', marginBottom: '3%', marginLeft: '5%', position: 'relative' }}>Mise en œuvre
                    <span style={{ position: 'absolute', bottom: '-5px', left: 0, width: '80%', height: '2px', backgroundColor: 'red' }} /></Typography>
                <Typography paragraph>
                    Dans le cadre de la conception du projet Weight and Balance, l'objectif était de réaliser une maquette en utilisant React et React Native. TypeScript a été naturellement retenu pour assurer une robustesse et une maintenabilité accrues du code. Cependant, le projet a finalement été abandonné en raison d'une incompatibilité entre React Native et la bibliothèque Syncfusion. Malgré cela, les recherches effectuées et les tests de design réalisés ont renforcé mes compétences en TypeScript et en React.
                    Pour le projet UI Agenda, TypeScript et React Native ont été utilisés avec succès pour créer une interface utilisateur pour un agenda mobile. Ce projet fut le plus abouti en termes d'utilisation de TypeScript et de React Native, avec des fonctionnalités avancées telles que les notifications, le système d'alarme, et la mise à jour en temps réel de l'agenda et du calendrier. TypeScript a permis de structurer le code de manière efficace et de réduire les erreurs potentielles grâce à son typage statique.
                </Typography>

                <Divider sx={{ borderBottomWidth: 1, borderColor: 'lightGray', width: '75%', margin: '5%', marginRight: 'auto', marginLeft: 'auto' }} />

                <Typography variant="h6" sx={{ marginTop: '3%', marginBottom: '3%', marginLeft: '5%', position: 'relative' }}>La place dans mon projet professionnel
                    <span style={{ position: 'absolute', bottom: '-5px', left: 0, width: '80%', height: '2px', backgroundColor: 'red' }} /></Typography>
                <Typography paragraph>
                    Lors de la conception du projet Weight and Balance, j'ai dû faire des recherches approfondies sur React et React Native pour comprendre les meilleures pratiques et les limitations de ces technologies. Un moment marquant fut la découverte de l'incompatibilité entre React Native et la bibliothèque Syncfusion, ce qui a conduit à l'abandon du projet. Cette expérience m'a appris l'importance de vérifier la compatibilité des bibliothèques et des outils dès le début d'un projet pour éviter des problèmes majeurs plus tard.
                    Dans le projet UI Agenda, j'ai rencontré des défis intéressants lors de l'implémentation du système de notifications et de mises à jour en temps réel. L'utilisation de TypeScript a été cruciale pour gérer les complexités de ces fonctionnalités. Par exemple, lors de l'ajout d'une fonctionnalité de rappel d'événements, le typage statique de TypeScript m'a aidé à détecter et corriger des erreurs de logique qui auraient été difficiles à repérer autrement. Ce projet a été une excellente opportunité pour approfondir mes compétences en TypeScript et en développement mobile.
                </Typography>

                <Divider sx={{ borderBottomWidth: 1, borderColor: 'lightGray', width: '75%', margin: '5%', marginRight: 'auto', marginLeft: 'auto' }} />

                <Typography variant="h6" sx={{ marginTop: '3%', marginBottom: '3%', marginLeft: '5%', position: 'relative' }}>Mon évolution
                    <span style={{ position: 'absolute', bottom: '-5px', left: 0, width: '80%', height: '2px', backgroundColor: 'red' }} /></Typography>
                <Typography paragraph>
                    En tant que futur DevOps, la maîtrise de TypeScript sera un atout précieux. TypeScript offre un moyen efficace de développer des applications robustes et évolutives, ce qui est essentiel dans un environnement professionnel où la fiabilité et la sécurité sont des priorités. En utilisant TypeScript, je serai en mesure de contribuer à la création et à la maintenance de systèmes logiciels sophistiqués avec confiance et assurance. La capacité de TypeScript à intégrer des outils de développement modernes et à fournir un typage statique robuste facilitera la collaboration entre les équipes de développement et les opérations.
                </Typography>
                <Typography paragraph>
                    Cependant, je reconnais que dans certains cas, j'ai pu sous-estimer la complexité de TypeScript et ne pas exploiter pleinement ses fonctionnalités avancées. Parfois, j'ai été tenté de retourner à JavaScript pur pour des tâches plus simples, au lieu de tirer parti de la puissance de TypeScript pour garantir la qualité et la maintenabilité du code. Je vois cela comme une opportunité d'amélioration, et je suis déterminé à approfondir mes connaissances en TypeScript et à explorer ses fonctionnalités plus avancées pour devenir un développeur plus efficace et compétent.
                </Typography>
                <Typography paragraph sx={{marginBottom:"5%"}}>
                    Au fil de mes expériences, j'ai pris conscience de l'importance cruciale de TypeScript dans le développement de projets modernes. J'ai appris à apprécier ses avantages en termes de typage statique, de détection précoce des erreurs et de structuration du code. En continuant à pratiquer et à intégrer TypeScript dans mes projets, je suis mieux équipé pour collaborer avec les différentes parties prenantes et pour assurer le succès des projets, tant du point de vue de l'expérience utilisateur que de la satisfaction des clients.
                </Typography>
            </Box>
            <Footer />
        </Box>
    );
}

export default Typescriptskill;