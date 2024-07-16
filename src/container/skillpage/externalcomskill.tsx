import { Box, Divider, Typography } from "@mui/material";
import Footer from "../../components/footer";

const Externalcomskill: React.FC = () => {
    return (
        <Box>
            <Box sx={{ padding: 2, marginLeft: '15%', marginRight: '15%' }}>

                <Typography variant="h4" gutterBottom sx={{ textAlign: 'center' }}>Communication externe</Typography>

                <Divider sx={{ borderBottomWidth: 2, borderColor: 'lightGray' }} />

                <Typography variant="h6" sx={{ marginTop: '3%', marginBottom: '3%', marginLeft: '5%', position: 'relative' }}>Définition
                <span style={{ position: 'absolute', bottom: '-5px', left: 0, width: '80%', height: '2px', backgroundColor: 'red' }}/></Typography>
                <Typography paragraph>
                    Les compétences en communication sont des capacités qu'on utilise lorsqu'on donne et reçoit différents types d'informations.
                    Certains exemples incluent la communication d'idées, de sentiments ou de ce qui se passe autour de nous. Les compétences en communication impliquent l'écoute, la parole, l'observation et l'empathie.
                    Il est également utile de comprendre les différences dans la façon de communiquer par le biais d'interactions face à face, de conversations téléphoniques et de communications numériques, comme les mails et les réseaux sociaux.
                </Typography>

                <Divider sx={{ borderBottomWidth: 1, borderColor: 'lightGray', width: '75%', margin: '5%', marginRight: 'auto', marginLeft: 'auto' }} />

                <Typography variant="h6" sx={{ marginTop: '3%', marginBottom: '3%', marginLeft: '5%', position: 'relative' }}>Mise en œuvre
                <span style={{ position: 'absolute', bottom: '-5px', left: 0, width: '80%', height: '2px', backgroundColor: 'red' }}/></Typography>
                <Typography paragraph>
                    Tout au long de mon parcours d'étudiant, j'ai pu mettre en oeuvre cette compétence. Dans l'ensemble des projets réalisés, la communication a eu une place essentielle que ce soit entre étudiants pour faire avancer le projet ou bien avec les clients.
                    Il est en effet primordial de communiquer afin de bien définir les attentes du client. Pour ce faire, nous avons réalisé un compte rendu d'avancé du projet tous les vendredis pour tenir informé le client afin qu'il puisse nous remonter rapidement toute remarque qu'il pourrait avoir.
                    Nous avons également appris à adapter notre discours en fonction de la personne qui nous écoute (vulgarisation).
                    Dans le projet Formaculture réalisé au cours de la seconde année, nous avons été amenés à trouver des étudiants externe. La communication était donc l'élément clé de la réussite de notre projet. La réalisation du dossier de sponsoring ainsi que les contacts oraux nous a permis de développer cette compétence.
                    Quant au projet "Warnit'APP", en tant que développeur, la communication était cruciale pour garantir la cohésion de l'équipe et la clarté des objectifs. Lorsque des problèmes surgissaient, que ce soit des retards dans le développement ou des bugs imprévus, une communication transparente était essentielle pour trouver des solutions rapidement. J'ai appris que même dans un domaine technique comme le développement d'une application, une communication efficace est la clé pour maintenir le moral de l'équipe et assurer la qualité du produit final.
                </Typography>
                
                <Divider sx={{ borderBottomWidth: 1, borderColor: 'lightGray', width: '75%', margin: '5%', marginRight: 'auto', marginLeft: 'auto' }} />

                <Typography variant="h6" sx={{ marginTop: '3%', marginBottom: '3%', marginLeft: '5%', position: 'relative' }}>La place dans mon projet professionnel
                <span style={{ position: 'absolute', bottom: '-5px', left: 0, width: '80%', height: '2px', backgroundColor: 'red' }}/></Typography>
                <Typography paragraph>
                    Pour réussir un projet ou simplement dans le cadre de son travail quotidien , la communication est la clé.
                    Je sais qu'en souhaitant devenir DevOps, les échanges entre les équipes sont primordiaux.
                    Nous ne sommes pas dans un monde où chacun reste de son coté et ne s’intéresse qu'à son travail personnel.
                    L'agilité croisée au méthode DevOps n'a plus besoin de prouver son efficacité sur la réussite de projets informatiques.
                </Typography>

                <Divider sx={{ borderBottomWidth: 1, borderColor: 'lightGray', width: '75%', margin: '5%', marginRight: 'auto', marginLeft: 'auto' }} />

                <Typography variant="h6" sx={{ marginTop: '3%', marginBottom: '3%', marginLeft: '5%', position: 'relative' }}>Mon évolution
                <span style={{ position: 'absolute', bottom: '-5px', left: 0, width: '80%', height: '2px', backgroundColor: 'red' }}/></Typography>
                <Typography paragraph sx={{marginBottom:"5%"}}>
                    Bien que j'aie réussi à développer mes compétences en communication tout au long de mes projets scolaires, je reconnais qu'il y a toujours place à amélioration.
                    Parfois, j'ai tendance à être trop focalisé sur les aspects techniques des projets, ce qui peut entraîner une communication moins fluide avec les membres de mon équipe ou avec les parties prenantes externes.
                    Je dois travailler sur ma capacité à articuler clairement mes idées et à écouter activement les contributions des autres pour favoriser une collaboration harmonieuse et efficace.
                    Au fil de mes expériences, j'ai développé une plus grande confiance dans ma capacité à communiquer efficacement, que ce soit à l'écrit ou à l'oral.
                    J'ai appris à m'adapter à différents publics et à utiliser des canaux de communication variés en fonction du contexte.

                    De plus, j'ai acquis une meilleure compréhension de l'importance de la communication dans le succès des projets, ce qui m'a motivé à continuer à perfectionner cette compétence.
                    En tant que futur DevOps, je suis conscient que la communication sera au cœur de mes responsabilités, et je suis déterminé à continuer à progresser dans ce domaine.
                </Typography>


            </Box>
            <Footer />
        </Box>
    );
};

export default Externalcomskill