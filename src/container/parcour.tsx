import { Box, Card, CardContent, Typography, Link, AppBar, Toolbar, IconButton, Button, Container } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Timeline, TimelineItem, TimelineSeparator, TimelineConnector, TimelineContent, TimelineDot, TimelineOppositeContent } from '@mui/lab';
import Footer from '../components/footer';

const projects = [
    {
        title: "UI Agenda",
        description: "Développement d'une application mobile pour un agenda.",
        link: "/project/projectui",
        date: "Septembre 2024"
    },
    {
        title: "Conception W&B",
        description: "Conception du projet de weight and balance.",
        link: "/project/conceptwb",
        date: "Septembre 2022"
    },
    {
        title: "Cyberjet",
        date: "2022"
    },
    {
        title: "Warnit App",
        description: "Développement d'une interface mobile connecté à une application bureau.",
        link: "/project/warnitapp",
        date: "Février 2022"
    },
    {
        title: "Warnit",
        description: "Développement d'une application d'alerte.",
        link: "/project/warnit",
        date: "Septembre 2021"
    },
    {
        title: "Formaculture",
        description: "Formation sur la permaculture à des étudiants.",
        link: "/project/formaculture",
        date: "Février 2021"
    },
    {
        title: "Intech montauban",
        date: "2020"
    },
    {
        title: "Baccalauréat",
        date: "2019"
    }
];

const Parcour = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Container>
                <Box sx={{ my: 4 }}>
                    <Typography variant="h4" gutterBottom align="center">
                        Chronologie des Projets
                    </Typography>
                    <Timeline position="alternate">
                        {projects.map((project, index) => (
                            <TimelineItem key={index}>
                                <TimelineOppositeContent>
                                    <Typography variant="body2" color="textSecondary">
                                        {project.date}
                                    </Typography>
                                </TimelineOppositeContent>
                                <TimelineSeparator>
                                    <TimelineDot color="primary" />
                                    {index < projects.length - 1 && <TimelineConnector />}
                                </TimelineSeparator>
                                <TimelineContent>
                                    <Link href={project.link} target="_blank" rel="noopener" sx={{ display: 'block', marginTop: 1 }}>
                                        <Card sx={{ minWidth: 300, width: '100%' }}>
                                            <CardContent>
                                                <Typography variant="h6" component="div">
                                                    {project.title}
                                                </Typography>
                                                <Typography variant="body2" color="text.secondary">
                                                    {project.description}
                                                </Typography>
                                            </CardContent>
                                        </Card>
                                    </Link>
                                </TimelineContent>
                            </TimelineItem>
                        ))} {/* Inverser l'ordre des éléments */}
                    </Timeline>
                </Box>
            </Container>
            <Footer />
        </Box>
        
    );
};

export default Parcour;