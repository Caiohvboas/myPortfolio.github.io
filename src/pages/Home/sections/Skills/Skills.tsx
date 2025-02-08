import { Box, Button, Typography } from '@mui/material';

const Skills = () => {
    const skills = [
        'JavaScript',
        'React',
        'TypeScript',
        'Node.js',
        'CSS',
        'HTML',
        // Adicione mais habilidades conforme necessário
    ];

    const handleCertificateClick = () => {
        window.open('https://www.freecodecamp.org/certification/seu-usuario/nome-do-certificado', '_blank');
    };

    return (
        <Box sx={{ padding: 4, backgroundColor: theme => theme.palette.primary.main }}>
            <Typography variant="h4" gutterBottom>
                Minhas Habilidades
            </Typography>
            <Box sx={{ marginBottom: 2 }}>
                {skills.map((skill, index) => (
                    <Typography key={index} variant="h6">
                        {skill}
                    </Typography>
                ))}
            </Box>
            <Button variant="contained" onClick={handleCertificateClick}>
                Ver Certificado do FreeCodeCamp
            </Button>
            <Box sx={{ marginTop: 4 }}>
                <Typography variant="h5" gutterBottom>
                    Projetos Finalizados
                </Typography>
                {/* Aqui você pode adicionar a lista de projetos finalizados */}
            </Box>
        </Box>
    );
};

export default Skills;
