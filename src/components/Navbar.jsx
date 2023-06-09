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
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import useAuthCalls from "../hooks/useAuthCalls";
import { flex } from "../styles/globalStyles";

const drawerWidth = 240;
const navItems = [
    {
        title: "Home",
        url: "/",
    },
    {
        title: "About",
        url: "/about",
    },
];

export default function Navbar(props) {
    const currentUser = useSelector((state) => state.auth.currentUser);
    const { logout } = useAuthCalls();
    const navigate = useNavigate();
    const { window } = props;
    const [mobileOpen, setMobileOpen] = useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    };

    const drawer = (
        <Box
            onClick={handleDrawerToggle}
            sx={{
                textAlign: "center",
                backgroundColor: "black",
                height: "100vh",
                color: "white",
            }}
        >
            <Button
                variant="text"
                sx={{ my: 2, fontSize: "24px", color: "white" }}
                onClick={() => navigate("/")}
            >
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
                {currentUser ? (
                    <>
                        <ListItem disablePadding>
                            <ListItemButton
                                sx={{ textAlign: "center" }}
                                onClick={() => navigate("/newblog")}
                            >
                                <ListItemText primary="New Blog" />
                            </ListItemButton>
                        </ListItem>
                        <ListItem disablePadding>
                            <ListItemButton
                                sx={{ textAlign: "center" }}
                                onClick={() => navigate("/myblogs")}
                            >
                                <ListItemText primary="My Blogs" />
                            </ListItemButton>
                        </ListItem>
                        <ListItem disablePadding>
                            <ListItemButton
                                sx={{ textAlign: "center" }}
                                onClick={() => navigate("/profile")}
                            >
                                <ListItemText primary="Profile" />
                            </ListItemButton>
                        </ListItem>
                        <Button
                            sx={{ color: "#fff", mt: 1 }}
                            onClick={() => logout()}
                            variant="contained"
                            color="secondary"
                        >
                            Logout
                        </Button>
                    </>
                ) : (
                    <Button
                        sx={{ color: "#fff", mt: 1 }}
                        onClick={() => navigate("/login")}
                        variant="contained"
                        color="success"
                    >
                        Login
                    </Button>
                )}
            </List>
        </Box>
    );

    const container =
        window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: "flex", mb: 1 }}>
            <CssBaseline />
            <AppBar component="nav" sx={{ backgroundColor: "black" }}>
                <Toolbar
                    sx={{
                        display: "flex",
                        justifyContent: "space-between",
                    }}
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
                            variant="text"
                            component="button"
                            sx={{
                                flexGrow: 1,
                                display: { xs: "none", sm: "inline-block" },
                                fontSize: "24px",
                                color: "white",
                                mr: 2,
                            }}
                            onClick={() => navigate("/")}
                        >
                            BLOGGY
                        </Button>
                        {navItems.map((item) => (
                            <Button
                                key={item.title}
                                sx={{ color: "#fff", fontSize: "15px" }}
                                onClick={() => navigate(item.url)}
                            >
                                {item.title}
                            </Button>
                        ))}
                    </Box>
                    <Box
                        sx={{
                            display: { xs: "none", sm: "none", md: "block" },
                        }}
                    >
                        {/* {navItems.map((item) => (
                            <Button
                                key={item.title}
                                sx={{ color: "#fff" }}
                                onClick={() => navigate(item.url)}
                            >
                                {item.title}
                            </Button>
                        ))} */}
                        {currentUser ? (
                            <Box sx={flex}>
                                <Button
                                    sx={{ color: "#fff" }}
                                    onClick={() => navigate("/newblog")}
                                >
                                    NEW BLOG
                                </Button>
                                <Button
                                    sx={{ color: "#fff" }}
                                    onClick={() => navigate("/myblogs")}
                                >
                                    MY BLOGS
                                </Button>
                                <Button
                                    sx={{ color: "#fff" }}
                                    onClick={() => navigate("/profile")}
                                >
                                    PROFILE
                                </Button>
                                <Button
                                    sx={{ color: "#fff" }}
                                    onClick={() => logout()}
                                    variant="contained"
                                    color="secondary"
                                >
                                    Logout
                                </Button>
                            </Box>
                        ) : (
                            <Button
                                sx={{ color: "#fff" }}
                                onClick={() => navigate("/login")}
                                variant="contained"
                                color="success"
                            >
                                Login
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
            <Box component="main">
                <Toolbar />
            </Box>
        </Box>
    );
}

// {/* <List>
// <ListItem>
//     <ListItemButton sx={{ textAlign: "center"}}>
//         <ListItemText primary="New Blog" />
//     </ListItemButton>
// </ListItem>
// <ListItem>
//     <ListItemButton sx={{ textAlign: "center"}}>
//         <ListItemText primary="Profile"/>
//     </ListItemButton>
// </ListItem>
// <ListItem>
//     <ListItemButton sx={{ textAlign: "center"}}>
//         <ListItemText primary="My Blogs" />
//     </ListItemButton>
// </ListItem>
// </List> */}
