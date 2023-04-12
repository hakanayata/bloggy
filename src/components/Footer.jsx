import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import green from "@mui/material/colors/green";
import purple from "@mui/material/colors/purple";
import { flex } from "../styles/globalStyles";

export default function Footer() {
    return (
        <Box
            sx={{
                height: 50,
                backgroundColor: "black",
                color: "#eee",
                position: "fixed",
                width: "100vw",
                bottom: 0,
                ...flex,
            }}
        >
            <Typography variant="body1" component="small" fontSize={14}>
                Developed by{" "}
                <Link
                    underline="hover"
                    variant="plain"
                    color={green["A200"]}
                    href="https://github.com/hakanayata"
                    target="_blank"
                >
                    Hakan
                </Link>{" "}
                as a final project of{" "}
                <Link
                    underline="hover"
                    variant="plain"
                    color={purple["100"]}
                    href="https://clarusway.de/"
                    target="_blank"
                >
                    Clarusway
                </Link>
                's front-end course
                <Typography variant="body1" component="small" fontSize={14}>
                    {" "}
                    @2023
                </Typography>
            </Typography>
        </Box>
    );
}
