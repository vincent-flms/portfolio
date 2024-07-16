import React from 'react';
import { Box, Divider, Typography } from '@mui/material';
import Footer from '../../components/footer';

const JavaSkill: React.FC = () => {
    return (
        <Box>
            <Box sx={{ padding: 2, marginLeft: '15%', marginRight: '15%' }}>

                <Typography variant="h4" gutterBottom sx={{ textAlign: 'center' }}>Java </Typography>

                <Divider sx={{ borderBottomWidth: 2, borderColor: 'lightGray' }} />

                <Typography variant="h6" sx={{ marginTop: '3%', marginBottom: '3%', marginLeft: '5%' , position: 'relative'}}>Définition
                <span style={{ position: 'absolute', bottom: '-5px', left: 0, width: '80%', height: '2px', backgroundColor: 'red' }}/></Typography>
                <Typography paragraph>
                    Java est un langage de programmation orienté objet largement utilisé pour le développement d'applications d'entreprise, mobiles, web et bien plus encore. Créé par Sun Microsystems (maintenant propriété d'Oracle), Java est connu pour sa portabilité grâce à la machine virtuelle Java (JVM), qui permet aux applications Java de s'exécuter sur n'importe quelle plateforme qui supporte la JVM. Java offre une grande robustesse, sécurité et un ensemble riche de bibliothèques et frameworks, facilitant ainsi le développement de solutions complexes.
                </Typography>

                <Divider sx={{ borderBottomWidth: 1, borderColor: 'lightGray', width: '75%', margin: '5%', marginRight: 'auto', marginLeft: 'auto' }} />

                <Typography variant="h6" sx={{ marginTop: '3%', marginBottom: '3%', marginLeft: '5%' , position: 'relative'}}>Mise en œuvre
                <span style={{ position: 'absolute', bottom: '-5px', left: 0, width: '80%', height: '2px', backgroundColor: 'red' }}/></Typography>
                <Typography paragraph>
                    Pour le projet Warnit, Java a été utilisé pour créer ma première API. Ce projet scolaire a été une introduction au développement d'API, une compétence essentielle pour permettre la communication entre différentes applications. En utilisant Java, j'ai pu découvrir un nouveau moyen de créer des ponts entre les systèmes et de faciliter l'échange de données, ouvrant ainsi la voie à de nouvelles possibilités pour les projets futurs.
                    Dans le projet Warnit'App, Java a été utilisé pour développer une application Android ainsi qu'une API de communication. Ce projet représente l'évolution naturelle de Warnit, avec la réalisation complète d'une interface Android capable de communiquer avec une API. L'utilisation de Java pour Android a permis de développer une application mobile robuste et efficace, intégrant les fonctionnalités nécessaires pour une communication fluide entre l'interface utilisateur et le backend.
                </Typography>
                <Typography paragraph>
                    Lors du projet Warnit, un moment marquant fut la réalisation de ma première API en Java. La courbe d'apprentissage a été significative, mais cela m'a permis de comprendre les bases de la création d'API et leur importance dans le développement moderne. Un défi particulier a été de s'assurer que l'API pouvait gérer efficacement les demandes multiples et simultanées, ce qui m'a appris l'importance de la gestion des ressources et des performances.
                    Pour le projet Warnit'App, un défi intéressant était l'intégration de l'application Android avec l'API. Lors de l'implémentation, j'ai rencontré des difficultés avec la gestion des appels réseau en temps réel. En utilisant les bibliothèques Java pour Android, j'ai pu implémenter des fonctionnalités de mise à jour en temps réel et de synchronisation des données, assurant ainsi une expérience utilisateur fluide et réactive. Ce projet a été une excellente opportunité pour approfondir mes compétences en Java et en développement mobile.
                </Typography>

                <Divider sx={{ borderBottomWidth: 1, borderColor: 'lightGray', width: '75%', margin: '5%', marginRight: 'auto', marginLeft: 'auto' }} />

                <Typography variant="h6" sx={{ marginTop: '3%', marginBottom: '3%', marginLeft: '5%' , position: 'relative'}}>La place dans mon projet professionnel
                <span style={{ position: 'absolute', bottom: '-5px', left: 0, width: '80%', height: '2px', backgroundColor: 'red' }}/></Typography>
                <Typography paragraph>
                    En tant que futur DevOps, la maîtrise de Java sera extrêmement bénéfique. Java est largement utilisé dans l'industrie pour des applications critiques et offre une robustesse et une sécurité qui sont essentielles dans un environnement de production. La capacité à créer des API robustes et à développer des applications mobiles avec Java est cruciale dans le rôle de DevOps, où l'automatisation et l'interconnexion des systèmes sont essentielles. En comprenant et en maîtrisant Java, je serai mieux préparé à gérer les défis techniques et à contribuer efficacement à la réussite des projets.
                </Typography>
                <Typography paragraph>
                    Cependant, je reconnais que dans certains cas, j'ai pu sous-estimer la complexité des projets impliquant Java. Parfois, j'ai eu tendance à prendre des raccourcis dans l'implémentation des fonctionnalités, ce qui a conduit à des problèmes de maintenance à long terme. De plus, l'optimisation des performances des applications n'a pas toujours été une priorité, ce qui a parfois entraîné des lenteurs. Je vois ces points comme des opportunités d'amélioration et je suis déterminé à approfondir mes compétences en Java et à optimiser mes pratiques de développement pour garantir des applications plus performantes et maintenables.
                </Typography>

                <Divider sx={{ borderBottomWidth: 1, borderColor: 'lightGray', width: '75%', margin: '5%', marginRight: 'auto', marginLeft: 'auto' }} />

                <Typography variant="h6" sx={{ marginTop: '3%', marginBottom: '3%', marginLeft: '5%' , position: 'relative'}}>Mon évolution
                <span style={{ position: 'absolute', bottom: '-5px', left: 0, width: '80%', height: '2px', backgroundColor: 'red' }}/></Typography>
                <Typography paragraph sx={{marginBottom:"5%"}}>
                    Au fil de mes expériences, j'ai pris conscience de l'importance des bonnes pratiques en Java et en développement d'API. J'ai appris à mieux structurer mon code, à optimiser les performances et à utiliser les fonctionnalités avancées de Java pour améliorer la robustesse et la maintenabilité des applications. En continuant à pratiquer et à intégrer ces compétences dans mes projets, je suis mieux équipé pour collaborer avec les différentes parties prenantes et pour assurer le succès des projets, tant du point de vue de l'expérience utilisateur que de la satisfaction des clients.
                </Typography>


            </Box>
            <Footer />
        </Box>
    );
};

export default JavaSkill;