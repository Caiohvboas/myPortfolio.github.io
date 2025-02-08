import { Box, Container, Grid, styled, Typography } from "@mui/material";
import { FaReact } from "react-icons/fa";
import { TbBrandTypescript } from "react-icons/tb";
import { RiJavascriptLine } from "react-icons/ri";
import { FaNode } from "react-icons/fa";
import { ImHtmlFive } from "react-icons/im";
import { FaSass } from "react-icons/fa";

const StyledBox = styled(Box)(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    transition: "color 0.3s, transform 0.3s",
    boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)', // Added shadow effect
    '&:hover': {
        color: theme.palette.common.white, // Cor de contraste ao passar o mouse
        transform: "scale(1.1)", // Efeito de aumento
    },
}));

const About = () => {
    const StyledAbout = styled("div")(() => ({
        backgroundColor: 'white', // Alterado para fundo branco
        height: "auto",
        minHeight: "50vh",
        padding: "50px 0",
        marginTop: "-50px", // Espaço negativo para criar efeito de sombra
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        
    }));

    return (
        <StyledAbout id="about">
            <Container maxWidth="lg">
                <Typography variant="h1" color="primary.main" textAlign="center" pb={2}>Sobre Mim</Typography>
                <Typography color="primary.main" variant="h4" textAlign="center" pb={4}>
                    Olá! Sou um desenvolvedor apaixonado com experiência em diversas tecnologias que moldam o desenvolvimento web moderno. Com um forte domínio de JavaScript e TypeScript, crio aplicações dinâmicas e escaláveis, aproveitando o poder do React para construir interfaces de usuário interativas e responsivas. Minha experiência com Node.js me permite desenvolver soluções robustas no lado do servidor, garantindo que as aplicações funcionem de maneira eficiente e segura. Além disso, utilizo HTML e SASS para criar layouts elegantes e estilizados, proporcionando uma experiência de usuário agradável e intuitiva. Estou sempre em busca de aprender novas tecnologias e aprimorar minhas habilidades para oferecer as melhores soluções aos meus clientes.
                </Typography>
                <Box>

                </Box>
                <Typography color="primary.main" variant="h5" textAlign="center" pb={2}>Tecnologias que Conheço:</Typography>
                <Grid container spacing={2} justifyContent="center">
                    <Grid item xs={12} md={4}>
                        <StyledBox>
                            <RiJavascriptLine size={80} color="#F7DF1E" />
                            <Typography color="primary.main" variant="h6" textAlign="center">JavaScript</Typography>
                        </StyledBox>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <StyledBox>
                            <TbBrandTypescript size={80} color="#007ACC" />
                            <Typography color="primary.main" variant="h6" textAlign="center">TypeScript</Typography>
                        </StyledBox>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <StyledBox>
                            <FaReact size={80} color="#61DAFB" />
                            <Typography color="primary.main" variant="h6" textAlign="center">React</Typography>
                        </StyledBox>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <StyledBox>
                            <FaNode size={80} color="#8CC84B" />
                            <Typography color="primary.main" variant="h6" textAlign="center">Node.js</Typography>
                        </StyledBox>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <StyledBox>
                            <ImHtmlFive size={80} color="#E44D26" />
                            <Typography color="primary.main" variant="h6" textAlign="center">HTML</Typography>
                        </StyledBox>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <StyledBox>
                            <FaSass size={80} color="#CC6699" />
                            <Typography color="primary.main" variant="h6" textAlign="center">SASS</Typography>
                        </StyledBox>
                    </Grid>
                </Grid>
            </Container>
        </StyledAbout>
    );
};

export default About;
