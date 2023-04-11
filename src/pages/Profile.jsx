import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useSelector } from "react-redux";
import Box from "@mui/material/Box";

export default function Profile() {
    const currentUser = useSelector((state) => state.auth.currentUser);
    return (
        <Box
            sx={{
                display: "flex",
                justifyContent: "center",
                alignContent: "center",
            }}
        >
            <TableContainer
                component={Paper}
                elevation={8}
                sx={{ maxWidth: { xs: 350, md: 500 } }}
            >
                <Table aria-label="table">
                    <TableBody>
                        <TableRow hover>
                            <TableCell align="left" variant="head">
                                ID
                            </TableCell>
                            <TableCell component="th" scope="row" align="left">
                                {currentUser.id}
                            </TableCell>
                        </TableRow>
                        <TableRow hover>
                            <TableCell align="left" variant="head">
                                Username
                            </TableCell>
                            <TableCell component="th" scope="row" align="left">
                                {currentUser.username}
                            </TableCell>
                        </TableRow>
                        <TableRow hover>
                            <TableCell align="left" variant="head">
                                Email
                            </TableCell>
                            <TableCell component="th" scope="row" align="left">
                                {currentUser.email}
                            </TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>
        </Box>
    );
}
