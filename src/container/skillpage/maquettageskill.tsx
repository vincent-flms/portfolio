import { Box, Divider, Typography } from "@mui/material";
import Footer from "../../components/footer";

const Maquettageskill = () => {
    return (
        <Box>
            <Box sx={{ padding: 2, marginLeft: '15%', marginRight: '15%' }}>

                <Typography variant="h4" gutterBottom sx={{ textAlign: 'center' }}>Maquettage </Typography>

                <Divider sx={{ borderBottomWidth: 2, borderColor: 'lightGray' }} />

                <Typography variant="h6" sx={{ marginTop: '3%', marginBottom: '3%', marginLeft: '5%', position: 'relative'  }}>Définition
                <span style={{ position: 'absolute', bottom: '-5px', left: 0, width: '80%', height: '2px', backgroundColor: 'red' }}/></Typography>
                <Typography paragraph>
                    Le maquettage de projet est une étape essentielle dans le processus de développement, permettant de visualiser et de valider la conception d'une application ou d'un système avant sa mise en œuvre.
                    Les maquettes, qu'elles soient sous forme de wireframes, de prototypes interactifs ou de maquettes graphiques, servent de représentations visuelles des interfaces utilisateur, des fonctionnalités et des flux de navigation. Cette pratique permet de recueillir les feedbacks des utilisateurs précocement, d'itérer rapidement sur les concepts et de réduire les risques liés au développement.
                </Typography>

                <Divider sx={{ borderBottomWidth: 1, borderColor: 'lightGray', width: '75%', margin: '5%', marginRight: 'auto', marginLeft: 'auto' }} />

                <Typography variant="h6" sx={{ marginTop: '3%', marginBottom: '3%', marginLeft: '5%', position: 'relative'  }}>Mise en œuvre
                <span style={{ position: 'absolute', bottom: '-5px', left: 0, width: '80%', height: '2px', backgroundColor: 'red' }}/></Typography>
                <Typography paragraph>
                    Lors des projets Warnit'App et Warnit, ainsi que du projet de Conception Weight and Balance, réalisés pendant mes études à l'école Intech, le maquettage de projet a été une étape cruciale pour la réussite des projets. Pour Warnit'App, nous avons commencé par créer des wireframes détaillés pour chaque écran de l'application mobile, en mettant l'accent sur la navigation intuitive et les fonctionnalités de sécurité. Les maquettes ont servi de base solide pour discuter avec le client et les utilisateurs finaux, et pour itérer sur le design avant de passer à la phase de développement.
                    De même, pour le projet Warnit, destiné à une application de bureau, nous avons utilisé des prototypes interactifs pour simuler les interactions utilisateur et tester différentes solutions de conception. Le maquettage nous a permis d'identifier rapidement les points faibles et d'affiner notre vision du produit final.
                    Dans le cadre du projet Conception Weight and Balance, qui préparait le terrain pour un projet mobile de weight and balance, j'ai réalisé des maquettes graphiques détaillées pour représenter l'interface utilisateur et les flux de navigation. Ces maquettes ont été précieuses pour valider les concepts avec l'équipe et les parties prenantes, et pour assurer une compréhension commune des exigences du projet.
                </Typography>

                <Divider sx={{ borderBottomWidth: 1, borderColor: 'lightGray', width: '75%', margin: '5%', marginRight: 'auto', marginLeft: 'auto' }} />

                <Typography variant="h6" sx={{ marginTop: '3%', marginBottom: '3%', marginLeft: '5%', position: 'relative'  }}>La place dans mon projet professionnel
                <span style={{ position: 'absolute', bottom: '-5px', left: 0, width: '80%', height: '2px', backgroundColor: 'red' }}/></Typography>
                <Typography paragraph>
                    En tant que futur DevOps, le maquettage de projet continuera d'être une compétence importante dans mon arsenal. Les maquettes permettent de communiquer efficacement avec les parties prenantes, de réduire les malentendus et de s'assurer que tous les acteurs sont sur la même longueur d'onde avant le début du développement. En intégrant le maquettage dans mes processus de travail, je pourrai faciliter la collaboration entre les équipes de développement, de design et de gestion de produit, et contribuer à la livraison de produits finaux de haute qualité.
                </Typography>

                <Divider sx={{ borderBottomWidth: 1, borderColor: 'lightGray', width: '75%', margin: '5%', marginRight: 'auto', marginLeft: 'auto' }} />

                <Typography variant="h6" sx={{ marginTop: '3%', marginBottom: '3%', marginLeft: '5%', position: 'relative'  }}>Mon évolution
                <span style={{ position: 'absolute', bottom: '-5px', left: 0, width: '80%', height: '2px', backgroundColor: 'red' }}/></Typography>
                <Typography paragraph sx={{marginBottom:"5%"}}>
                    Au fil de mes expériences, j'ai pris conscience de l'importance cruciale du maquettage de projet dans la réussite des initiatives de développement. J'ai appris à accorder une attention particulière à cette étape du processus, en investissant du temps et des ressources pour créer des maquettes précises et informatives. En développant mes compétences en maquettage, je suis mieux équipé pour collaborer avec les différentes parties prenantes et pour assurer le succès des projets, tant du point de vue de l'expérience utilisateur que de la satisfaction des clients.
                    Cependant, je reconnais que dans le passé, j'ai parfois sous-estimé l'importance du maquettage de projet, en le considérant comme une étape facultative ou secondaire. J'ai parfois été tenté de passer directement au développement sans prendre le temps nécessaire pour créer des maquettes détaillées. Cette approche m'a parfois coûté en termes de révisions et de retours en arrière, ce qui aurait pu être évité avec une planification et une conception plus approfondies en amont.
                </Typography>


            </Box>
            <Footer />
        </Box>
    );
}

export default Maquettageskill;