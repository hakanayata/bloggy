import { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import useAuthCalls from "../hooks/useAuthCalls";

const drawerWidth = 240;
const navItems = [
    {
        title: "Home",
        url: "/",
    },
    {
        title: "New Post",
        url: "/newblog",
    },
    {
        title: "About",
        url: "/about/",
    },
    // {
    //     title: "Login",
    //     url: "/login/",
    // },
];

export default function Navbar(props) {
    const { currentUser } = useSelector((state) => state.auth);
    const { logout } = useAuthCalls();
    const navigate = useNavigate();
    const { window } = props;
    const [mobileOpen, setMobileOpen] = useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    };

    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
            <Button variant="h6" sx={{ my: 2 }} onClick={() => navigate("/")}>
                BLOGGY
            </Button>
            <Divider />
            <List>
                {navItems.map((item) => (
                    <ListItem key={item.title} disablePadding>
                        <ListItemButton
                            sx={{ textAlign: "center" }}
                            onClick={() => navigate(item.url)}
                        >
                            <ListItemText primary={item.title} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    );

    const container =
        window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: "flex" }}>
            <CssBaseline />
            <AppBar component="nav">
                <Toolbar
                    sx={{ display: "flex", justifyContent: "space-between" }}
                >
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: "none" } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Box>
                        <Button
                            variant="h6"
                            component="button"
                            sx={{
                                flexGrow: 1,
                                display: { xs: "none", sm: "inline-block" },
                                fontSize: "24px",
                            }}
                            onClick={() => navigate("/")}
                        >
                            BLOGGY
                        </Button>
                    </Box>
                    <Box sx={{ display: { xs: "none", sm: "block" } }}>
                        {navItems.map((item) => (
                            <Button
                                key={item.title}
                                sx={{ color: "#fff" }}
                                onClick={() => navigate(item.url)}
                            >
                                {item.title}
                            </Button>
                        ))}
                        {currentUser ? (
                            <Button
                                sx={{ color: "#fff" }}
                                onClick={() => logout()}
                            >
                                LOGOUT
                            </Button>
                        ) : (
                            <Button
                                sx={{ color: "#fff" }}
                                onClick={() => navigate("/login/")}
                            >
                                LOGIN
                            </Button>
                        )}
                    </Box>
                </Toolbar>
            </AppBar>
            <Box component="nav">
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: "block", sm: "none" },
                        "& .MuiDrawer-paper": {
                            boxSizing: "border-box",
                            width: drawerWidth,
                        },
                    }}
                >
                    {drawer}
                </Drawer>
            </Box>
            <Box component="main" sx={{ p: 3 }}>
                <Toolbar />
            </Box>
        </Box>
    );
}
