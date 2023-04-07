import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { styleModal } from "../../styles/globalStyles";
import { Stack } from "@mui/material";
import useBlogCalls from "../../hooks/useBlogCalls";
import { useNavigate } from "react-router-dom";

export default function DeleteModal({ open, handleClose, id }) {
    const navigate = useNavigate();
    const { deleteBlog } = useBlogCalls();

    return (
        <div>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-delete"
                aria-describedby="modal-delete"
            >
                <Box sx={styleModal}>
                    <Typography id="modal-delete" variant="h6" component="p">
                        Are your sure?
                    </Typography>
                    <Stack
                        direction="row"
                        sx={{
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "space-around",
                            width: "100%",
                        }}
                    >
                        <Button
                            variant="contained"
                            onClick={() => {
                                deleteBlog("blogs", id);
                                navigate("/");
                            }}
                        >
                            Yes
                        </Button>
                        <Button variant="contained" onClick={handleClose}>
                            No
                        </Button>
                    </Stack>
                </Box>
            </Modal>
        </div>
    );
}
