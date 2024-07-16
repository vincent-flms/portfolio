import { Box, Divider, Typography } from "@mui/material";
import Footer from "../../components/footer";

const Sqlskill = () => {
    return (
        <Box>
            <Box sx={{ padding: 2, marginLeft: '15%', marginRight: '15%' }}>

                <Typography variant="h4" gutterBottom sx={{ textAlign: 'center' }}>SQL </Typography>

                <Divider sx={{ borderBottomWidth: 2, borderColor: 'lightGray' }} />

                <Typography variant="h6" sx={{ marginTop: '3%', marginBottom: '3%', marginLeft: '5%', position: 'relative' }}>Définition
                <span style={{ position: 'absolute', bottom: '-5px', left: 0, width: '80%', height: '2px', backgroundColor: 'red' }}/></Typography>
                <Typography paragraph>
                    SQL (Structured Query Language) est un langage de programmation utilisé pour gérer et manipuler des bases de données relationnelles. Il permet de créer, modifier et interroger des bases de données, ainsi que d'extraire et de manipuler des données selon divers critères. SQL est largement utilisé dans le développement de logiciels, les applications web, les systèmes de gestion de bases de données (SGBD) et de nombreux autres domaines où le stockage et la gestion de données sont nécessaires.
                </Typography>

                <Divider sx={{ borderBottomWidth: 1, borderColor: 'lightGray', width: '75%', margin: '5%', marginRight: 'auto', marginLeft: 'auto' }} />

                <Typography variant="h6" sx={{ marginTop: '3%', marginBottom: '3%', marginLeft: '5%', position: 'relative' }}>Mise en œuvre
                <span style={{ position: 'absolute', bottom: '-5px', left: 0, width: '80%', height: '2px', backgroundColor: 'red' }}/></Typography>
                <Typography paragraph>
                    Dans le cadre du projet de Conception W&B, SQL était crucial pour la modélisation et la gestion des données. J'ai dû concevoir des schémas UML qui impliquaient la structure des tables de la base de données, les relations entre les entités et les contraintes d'intégrité. SQL a été utilisé pour implémenter ces schémas dans une base de données relationnelle, ce qui a permis de stocker et de manipuler les données du projet de manière efficace.
                    J'ai dû élaborer des requêtes SQL complexes pour répondre aux exigences spécifiques du projet. Par exemple, j'ai dû créer des requêtes pour calculer des valeurs de poids et de balance en fonction des données saisies par l'utilisateur, en prenant en compte diverses contraintes et règles métier. Ce défi m'a permis d'approfondir mes compétences en SQL et de comprendre son importance dans le développement de systèmes de gestion de données complexes.
                    Dans le projet Project UI Agenda, SQL a été utilisé pour analyser et interroger des données existantes afin de créer une interface utilisateur interactive. En extrayant des informations pertinentes de la base de données à l'aide de requêtes SQL, j'ai pu concevoir une UI intuitive et conviviale qui répondait aux besoins des utilisateurs.
                    J'ai rencontré des défis dans l'optimisation des requêtes SQL pour améliorer les performances de l'interface utilisateur. En analysant les schémas de la base de données et en réorganisant les requêtes, j'ai réussi à réduire les temps de réponse et à améliorer l'expérience utilisateur globale.
                </Typography>

                <Divider sx={{ borderBottomWidth: 1, borderColor: 'lightGray', width: '75%', margin: '5%', marginRight: 'auto', marginLeft: 'auto' }} />

                <Typography variant="h6" sx={{ marginTop: '3%', marginBottom: '3%', marginLeft: '5%', position: 'relative' }}>La place dans mon projet professionnel
                <span style={{ position: 'absolute', bottom: '-5px', left: 0, width: '80%', height: '2px', backgroundColor: 'red' }}/></Typography>
                <Typography paragraph>
                    En tant que futur DevOps, la maîtrise du SQL sera essentielle pour travailler efficacement avec les bases de données dans le cadre de déploiements d'applications et de gestion d'infrastructures. En comprenant les principes fondamentaux du SQL et en étant capable de créer et d'optimiser des requêtes, je serai en mesure de contribuer efficacement à la mise en œuvre et à la maintenance des systèmes de bases de données dans des environnements professionnels.
                </Typography>

                <Divider sx={{ borderBottomWidth: 1, borderColor: 'lightGray', width: '75%', margin: '5%', marginRight: 'auto', marginLeft: 'auto' }} />

                <Typography variant="h6" sx={{ marginTop: '3%', marginBottom: '3%', marginLeft: '5%', position: 'relative' }}>Mon évolution
                <span style={{ position: 'absolute', bottom: '-5px', left: 0, width: '80%', height: '2px', backgroundColor: 'red' }}/></Typography>
                <Typography paragraph sx={{marginBottom:"5%"}}>
                    Cependant, je reconnais que parfois, j'ai pu être confronté à des difficultés dans l'écriture de requêtes SQL complexes et dans la compréhension des schémas de base de données plus avancés. Parfois, j'ai eu tendance à privilégier des approches plus simples plutôt que d'explorer des solutions SQL plus élaborées. Je vois cela comme une opportunité d'amélioration, et je suis déterminé à approfondir mes connaissances en SQL et à développer mes compétences dans ce domaine pour mieux répondre aux exigences des projets futurs.
                </Typography>


            </Box>
            <Footer />
        </Box>
    );
}

export default Sqlskill;