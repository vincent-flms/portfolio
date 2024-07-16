import { Box, Divider, Typography } from "@mui/material";
import Footer from "../../components/footer";

const Umlconceptskill = () => {
    return (
        <Box>
            <Box sx={{ padding: 2, marginLeft: '15%', marginRight: '15%' }}>

                <Typography variant="h4" gutterBottom sx={{ textAlign: 'center' }}>UML Conception </Typography>

                <Divider sx={{ borderBottomWidth: 2, borderColor: 'lightGray' }} />

                <Typography variant="h6" sx={{ marginTop: '3%', marginBottom: '3%', marginLeft: '5%', position: 'relative' }}>Définition
                <span style={{ position: 'absolute', bottom: '-5px', left: 0, width: '80%', height: '2px', backgroundColor: 'red' }}/></Typography>
                <Typography paragraph>
                    UML (Unified Modeling Language) est un langage de modélisation utilisé pour spécifier, visualiser, construire et documenter les artefacts d'un système logiciel. UML offre une série de diagrammes standards, tels que les diagrammes de cas d'utilisation, de classes, d'objets, de séquences, d'activités et de composants, qui permettent de représenter les différents aspects d'un système. L'utilisation d'UML aide les développeurs et les parties prenantes à comprendre la structure et le comportement d'un système, à identifier les besoins fonctionnels et à faciliter la communication entre les membres de l'équipe.
                </Typography>

                <Divider sx={{ borderBottomWidth: 1, borderColor: 'lightGray', width: '75%', margin: '5%', marginRight: 'auto', marginLeft: 'auto' }} />

                <Typography variant="h6" sx={{ marginTop: '3%', marginBottom: '3%', marginLeft: '5%', position: 'relative' }}>Mise en œuvre
                <span style={{ position: 'absolute', bottom: '-5px', left: 0, width: '80%', height: '2px', backgroundColor: 'red' }}/></Typography>
                <Typography paragraph>
                    Pour le projet Warnit'App, UML a été essentiel pour revoir et adapter la structure de la base de données existante du projet Warnit. Nous avons dû réfléchir à une nouvelle approche, intégrant les fonctionnalités de Warnit tout en les adaptant aux besoins spécifiques de l'application mobile. L'utilisation de diagrammes UML, notamment les diagrammes de classes et de séquences, a permis de visualiser les interactions entre les différentes entités et de concevoir une base de données optimisée pour les nouvelles exigences.
                    Dans le projet de conception Weight and Balance (W&B), nous avons commencé de zéro et intégré de nombreux concepts dans la conception du projet. Suite à l'étude des fonctionnalités, le schéma UML a été développé pour représenter les données et leurs interactions. Il a également été nécessaire d'intégrer les données existantes des bases de données de l'entreprise CYBERJET. Les diagrammes de classes et de séquences ont été particulièrement utiles pour documenter et comprendre les relations complexes entre les différentes entités et les flux de données.
                </Typography>
                <Typography paragraph>
                    Pour le projet Warnit'App, un moment marquant a été la révision complète de la structure de la base de données. En utilisant des diagrammes de classes UML, nous avons pu identifier les redondances et les inefficacités dans l'ancien schéma et proposer une nouvelle structure plus adaptée. Cette révision a permis de simplifier les requêtes et d'améliorer les performances de l'application mobile.
                    Dans le projet de conception W&B, l'intégration des données existantes de CYBERJET a présenté un défi. En utilisant UML, nous avons pu créer des diagrammes de classes détaillés qui intégraient à la fois les nouvelles fonctionnalités et les données existantes. Un moment clé a été la création d'un diagramme de séquence représentant un processus complexe de calcul de poids et de balance, ce qui a aidé à clarifier les étapes nécessaires et à identifier les points de synchronisation entre les différentes parties du système.
                </Typography>

                <Divider sx={{ borderBottomWidth: 1, borderColor: 'lightGray', width: '75%', margin: '5%', marginRight: 'auto', marginLeft: 'auto' }} />

                <Typography variant="h6" sx={{ marginTop: '3%', marginBottom: '3%', marginLeft: '5%', position: 'relative' }}>La place dans mon projet professionnel
                <span style={{ position: 'absolute', bottom: '-5px', left: 0, width: '80%', height: '2px', backgroundColor: 'red' }}/></Typography>
                <Typography paragraph>
                    En tant que futur DevOps, la maîtrise de UML et des techniques de conception est cruciale. Ces compétences permettent de comprendre et de documenter les systèmes complexes, de faciliter la communication entre les équipes de développement et d'opérations, et de planifier efficacement les déploiements et les intégrations. En utilisant UML, je pourrai mieux collaborer avec les développeurs pour identifier les besoins, concevoir des solutions robustes et assurer une mise en œuvre harmonieuse des nouvelles fonctionnalités.
                </Typography>
                <Typography paragraph>
                    Cependant, je reconnais que l'utilisation d'UML peut parfois être perçue comme une surcharge documentaire. Il y a eu des moments où la création de diagrammes détaillés a retardé le développement initial. Parfois, j'ai également sous-estimé l'importance de mettre à jour les diagrammes UML au fur et à mesure des changements apportés au projet, ce qui a conduit à des divergences entre la documentation et le code réel.
                </Typography>

                <Divider sx={{ borderBottomWidth: 1, borderColor: 'lightGray', width: '75%', margin: '5%', marginRight: 'auto', marginLeft: 'auto' }} />

                <Typography variant="h6" sx={{ marginTop: '3%', marginBottom: '3%', marginLeft: '5%' , position: 'relative'}}>Mon évolution
                <span style={{ position: 'absolute', bottom: '-5px', left: 0, width: '80%', height: '2px', backgroundColor: 'red' }}/></Typography>
                <Typography paragraph sx={{marginBottom:"5%"}}>
                    Au fil de mes expériences, j'ai appris à utiliser UML de manière plus stratégique, en créant des diagrammes qui apportent une réelle valeur ajoutée sans tomber dans le piège de la sur-documentation. J'ai également amélioré mes compétences en mise à jour continue des diagrammes pour qu'ils reflètent fidèlement l'état actuel du projet. En intégrant ces pratiques dans mes futurs projets, je suis mieux préparé à garantir une documentation précise et utile, tout en assurant une communication claire et efficace entre les différentes équipes.
                </Typography>


            </Box>
            <Footer />
        </Box>
    );
}

export default Umlconceptskill;