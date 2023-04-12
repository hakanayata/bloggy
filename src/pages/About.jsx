import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import blue from "@mui/material/colors/blue";
import Divider from "@mui/material/Divider";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import croc from "../assets/img/croc-sticker.PNG";

export default function About() {
    return (
        <Container
            component="div"
            sx={{
                // border: "1px navy solid",
                boxShadow: 6,
                borderRadius: "35px",
                maxWidth: { xs: 350, sm: 580, md: 860 },
                p: 2,
                mb: 4,
            }}
        >
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                    <Typography variant="h4" component="header">
                        Hello there!
                    </Typography>
                </Box>
                <Box
                    component="img"
                    src={croc}
                    height="80px"
                    borderRadius={50}
                    boxShadow={2}
                ></Box>
            </Box>
            <Divider sx={{ my: 1 }} />
            <Typography variant="body1" component="p" sx={{ mb: 10 }}>
                I'm Hakan, an aspiring software developer.
            </Typography>
            <Typography variant="h5" component="header">
                Connect with me
            </Typography>
            <Divider sx={{ my: 1 }} />
            <Stack direction="row">
                <IconButton
                    aria-label="github"
                    component="a"
                    href="https://github.com/hakanayata"
                    target="_blank"
                >
                    <GitHubIcon />
                </IconButton>
                <IconButton
                    aria-label="linkedin"
                    component="a"
                    href="https://www.linkedin.com/in/hakan-ayata"
                    target="_blank"
                >
                    <LinkedInIcon sx={{ color: blue[300] }} />
                </IconButton>
                <IconButton
                    aria-label="email"
                    href="mailto:info@hakanayata.com"
                    color="secondary"
                >
                    <EmailIcon />
                </IconButton>
            </Stack>
        </Container>
    );
}
