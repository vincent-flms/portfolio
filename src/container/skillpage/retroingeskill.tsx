import { Box, Divider, Typography } from "@mui/material";
import Footer from "../../components/footer";

const Retroingeskill = () => {
    return (
        <Box>
            <Box sx={{ padding: 2, marginLeft: '15%', marginRight: '15%' }}>

                <Typography variant="h4" gutterBottom sx={{ textAlign: 'center' }}>Rétro-ingénierie </Typography>

                <Divider sx={{ borderBottomWidth: 2, borderColor: 'lightGray' }} />

                <Typography variant="h6" sx={{ marginTop: '3%', marginBottom: '3%', marginLeft: '5%', position: 'relative' }}>Définition
                    <span style={{ position: 'absolute', bottom: '-5px', left: 0, width: '80%', height: '2px', backgroundColor: 'red' }} /></Typography>
                <Typography paragraph>
                    La rétro-ingénierie consiste à analyser un système existant pour comprendre son fonctionnement interne, souvent dans le but de le reproduire ou de l'améliorer. Cela implique de déconstruire le code source, les algorithmes et les architectures pour révéler les principes de conception sous-jacents. Cette compétence est particulièrement utile pour la maintenance des logiciels, la migration vers de nouvelles plateformes, la découverte de vulnérabilités et l'implémentation de nouvelles fonctionnalités sur des bases existantes.
                </Typography>

                <Divider sx={{ borderBottomWidth: 1, borderColor: 'lightGray', width: '75%', margin: '5%', marginRight: 'auto', marginLeft: 'auto' }} />

                <Typography variant="h6" sx={{ marginTop: '3%', marginBottom: '3%', marginLeft: '5%', position: 'relative' }}>Mise en œuvre
                    <span style={{ position: 'absolute', bottom: '-5px', left: 0, width: '80%', height: '2px', backgroundColor: 'red' }} /></Typography>
                <Typography paragraph>
                    Pour le projet Warnit'App, la rétro-ingénierie a joué un rôle crucial. Nous nous sommes inspirés du projet Warnit, initialement conçu par une autre équipe sur une plateforme différente utilisant C# et WPF. L'analyse de ce projet a permis de comprendre chaque phase de développement et chaque fonctionnalité, afin de les transposer efficacement dans l'application mobile que nous devions réaliser. Cette analyse détaillée a permis de s'assurer que toutes les fonctionnalités nécessaires étaient correctement implémentées dans la nouvelle application, tout en optimisant pour la plateforme Android.
                    Dans le projet de conception Weight and Balance (W&B), la rétro-ingénierie a été utilisée pour analyser un ancien projet en Python fourni par la société CYBERJET. Cette analyse a permis de comprendre les calculs et les fonctionnalités nécessaires pour développer les maquettes de notre propre projet. En décortiquant le code Python, nous avons pu extraire les algorithmes essentiels et les adapter à notre propre solution, garantissant ainsi la précision et la fiabilité des fonctionnalités développées.
                </Typography>
                <Typography paragraph>
                    Pour le projet Warnit'App, un moment marquant fut la découverte de certaines optimisations dans le projet original Warnit en C# WPF. En analysant ces optimisations, nous avons pu les adapter pour améliorer les performances de notre application mobile. Par exemple, la gestion efficace des données en mémoire a été transposée pour réduire l'usage des ressources sur les appareils Android, améliorant ainsi la fluidité de l'application.
                    Dans le projet de conception W&B, l'analyse de l'ancien projet en Python a révélé des calculs complexes pour les paramètres de poids et de balance. Initialement, ces calculs semblaient difficiles à transposer, mais en approfondissant l'analyse, j'ai découvert des simplifications mathématiques possibles. Cela a non seulement facilité la compréhension mais a également permis de simplifier le code pour notre propre projet, rendant les maquettes plus faciles à développer et à tester.
                </Typography>

                <Divider sx={{ borderBottomWidth: 1, borderColor: 'lightGray', width: '75%', margin: '5%', marginRight: 'auto', marginLeft: 'auto' }} />

                <Typography variant="h6" sx={{ marginTop: '3%', marginBottom: '3%', marginLeft: '5%', position: 'relative' }}>La place dans mon projet professionnel
                    <span style={{ position: 'absolute', bottom: '-5px', left: 0, width: '80%', height: '2px', backgroundColor: 'red' }} /></Typography>
                <Typography paragraph>
                    En tant que futur DevOps, la rétro-ingénierie est une compétence précieuse. La capacité à analyser et à comprendre des systèmes existants permet de maintenir et d'améliorer des applications complexes, d'identifier des vulnérabilités potentielles et de faciliter les migrations vers de nouvelles technologies ou plateformes. Dans un rôle de DevOps, cette compétence permet d'assurer la continuité et l'optimisation des systèmes, tout en intégrant de nouvelles fonctionnalités et en répondant aux besoins changeants des utilisateurs.
                </Typography>
                <Typography paragraph>
                    Cependant, je reconnais que la rétro-ingénierie peut parfois être chronophage et complexe, nécessitant une attention aux détails et une compréhension approfondie des technologies sous-jacentes. Il y a eu des moments où j'ai sous-estimé le temps nécessaire pour analyser complètement un système, ce qui a retardé certaines phases de développement. De plus, il peut être tentant de reproduire les solutions existantes sans suffisamment les adapter aux nouvelles plateformes ou technologies, ce qui peut entraîner des inefficacités ou des problèmes de compatibilité.
                </Typography>

                <Divider sx={{ borderBottomWidth: 1, borderColor: 'lightGray', width: '75%', margin: '5%', marginRight: 'auto', marginLeft: 'auto' }} />

                <Typography variant="h6" sx={{ marginTop: '3%', marginBottom: '3%', marginLeft: '5%', position: 'relative' }}>Mon évolution
                    <span style={{ position: 'absolute', bottom: '-5px', left: 0, width: '80%', height: '2px', backgroundColor: 'red' }} /></Typography>
                <Typography paragraph sx={{marginBottom:"5%"}}>
                    Au fil de mes expériences, j'ai appris à mieux structurer et planifier les phases de rétro-ingénierie, en allouant suffisamment de temps pour une analyse approfondie et en adaptant les solutions découvertes aux nouvelles exigences du projet. J'ai également amélioré mes compétences en documentation et en communication, ce qui permet de mieux partager les découvertes et les solutions avec les équipes de développement. En continuant à pratiquer et à intégrer ces compétences dans mes projets, je suis mieux équipé pour collaborer efficacement avec les différentes parties prenantes et pour assurer le succès des projets, tant du point de vue technique que de la satisfaction des clients.
                </Typography>


            </Box>
            <Footer />
        </Box>
    );
}

export default Retroingeskill;