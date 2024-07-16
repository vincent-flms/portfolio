import { Box, Divider, Typography } from "@mui/material";
import Footer from "../../components/footer";

const Agilitskill = () => {
    return (
        <Box>
            <Box sx={{ padding: 2, marginLeft: '15%', marginRight: '15%' }}>

                <Typography variant="h4" gutterBottom sx={{ textAlign: 'center' }}>L'agilité</Typography>

                <Divider sx={{ borderBottomWidth: 2, borderColor: 'lightGray' }} />

                <Typography variant="h6" sx={{ marginTop: '3%', marginBottom: '3%', marginLeft: '5%', position: 'relative' }}>Définition
                <span style={{ position: 'absolute', bottom: '-5px', left: 0, width: '80%', height: '2px', backgroundColor: 'red' }}/>
                </Typography>
                <Typography paragraph>
                    L'agilité en équipe est une approche de gestion de projet qui favorise la flexibilité, la collaboration et l'adaptabilité face au changement. Contrairement aux méthodes traditionnelles de gestion de projet, l'agilité encourage un processus itératif et incrémental, où les équipes travaillent en cycles courts appelés "itérations" pour livrer régulièrement des portions de travail fonctionnelles et de valeur ajoutée. Les principes de l'agilité mettent l'accent sur la satisfaction du client, la communication constante, la réactivité aux changements et l'amélioration continue.
                </Typography>

                <Divider sx={{ borderBottomWidth: 1, borderColor: 'lightGray', width: '75%', margin: '5%', marginRight: 'auto', marginLeft: 'auto' }} />

                <Typography variant="h6" sx={{ marginTop: '3%', marginBottom: '3%', marginLeft: '5%', position: 'relative' }}>Mise en œuvre
                <span style={{ position: 'absolute', bottom: '-5px', left: 0, width: '80%', height: '2px', backgroundColor: 'red' }}/></Typography>
                <Typography paragraph>
                    Dans le cadre des projets Warnit'App et Warnit, réalisés pendant mes études à l'école Intech, j'ai eu l'opportunité de mettre en pratique les principes de l'agilité. Pour Warnit'App, un projet axé sur le développement d'une application mobile de sécurité, nous avons adopté une approche agile pour répondre aux exigences changeantes du client et pour nous adapter aux retours utilisateurs tout au long du processus de développement. Chaque sprint était l'occasion de livrer des fonctionnalités nouvelles ou améliorées, ce qui permettait une rétroaction rapide et une correction des trajectoires si nécessaire.
                    De même, pour le projet Warnit, qui portait sur le développement d'une application de sécurité pour bureau, nous avons appliqué les mêmes principes agiles. Les revues régulières avec le client et les démonstrations de produit après chaque itération nous ont permis de valider et de corriger rapidement notre travail, garantissant ainsi une meilleure adéquation avec les besoins réels des utilisateurs.
                </Typography>

                <Divider sx={{ borderBottomWidth: 1, borderColor: 'lightGray', width: '75%', margin: '5%', marginRight: 'auto', marginLeft: 'auto' }} />

                <Typography variant="h6" sx={{ marginTop: '3%', marginBottom: '3%', marginLeft: '5%', position: 'relative' }}>La place dans mon projet professionnel
                <span style={{ position: 'absolute', bottom: '-5px', left: 0, width: '80%', height: '2px', backgroundColor: 'red' }}/></Typography>
                <Typography paragraph>
                    En tant que futur DevOps, l'agilité jouera un rôle central dans ma pratique professionnelle. La nature rapide et évolutive du développement logiciel et des opérations informatiques nécessite une approche agile pour répondre efficacement aux demandes des utilisateurs et aux exigences du marché. En intégrant les principes de l'agilité dans mes processus de travail, je pourrai favoriser une culture de collaboration, d'innovation et d'amélioration continue au sein de mon équipe.
                </Typography>

                <Divider sx={{ borderBottomWidth: 1, borderColor: 'lightGray', width: '75%', margin: '5%', marginRight: 'auto', marginLeft: 'auto' }} />

                <Typography variant="h6" sx={{ marginTop: '3%', marginBottom: '3%', marginLeft: '5%', position: 'relative' }}>Mon évolution
                <span style={{ position: 'absolute', bottom: '-5px', left: 0, width: '80%', height: '2px', backgroundColor: 'red' }}/></Typography>
                <Typography paragraph sx={{marginBottom:"5%"}}>
                    Au fil de mes expériences, j'ai acquis une compréhension plus approfondie de l'agilité et de son application pratique dans des environnements de projet réels. J'ai appris à être plus flexible, plus réactif et plus ouvert au changement, ce qui m'a permis de mieux naviguer dans des situations complexes et dynamiques. En continuant à pratiquer et à intégrer les principes de l'agilité dans mes projets, je suis confiant dans ma capacité à devenir un professionnel DevOps agile et compétent, capable de conduire des initiatives de transformation numérique avec succès.
                    Cependant, je reconnais que dans certains cas, j'ai pu sous-estimer l'importance de certains aspects de l'agilité, comme la rétroaction continue et l'adaptation rapide aux changements. Parfois, j'ai été trop attaché à un plan initial ou à une vision préétablie, ce qui a pu limiter notre capacité à pivoter rapidement lorsque cela était nécessaire. Je vois cela comme une opportunité d'amélioration et je m'engage à être plus réceptif aux feedbacks et aux signaux du marché afin de mieux aligner nos efforts avec les besoins des utilisateurs.
                </Typography>


            </Box>
            <Footer />
        </Box>
    );
}

export default Agilitskill;