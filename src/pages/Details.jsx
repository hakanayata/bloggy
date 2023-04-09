import { useParams } from "react-router-dom";
import useBlogCalls from "../hooks/useBlogCalls";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import CommentIcon from "@mui/icons-material/Comment";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import IconButton from "@mui/material/IconButton";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { blue } from "@mui/material/colors";
import { flexCol } from "../styles/globalStyles";
import Divider from "@mui/material/Divider";
import DeleteModal from "../components/blog/DeleteModal";
import UpdateModal from "../components/blog/UpdateModal";
import { string, object } from "yup";
import CommentCard from "../components/blog/CommentCard";

export const commentSchema = object({
    // id: string().required(),
    content: string().min(1).required(),
});

export default function Details() {
    const { currentUser } = useSelector((state) => state.auth);
    const { id } = useParams();
    const { details } = useSelector((state) => state.blog);
    const { getBlogsDetails, getBlogsData } = useBlogCalls();

    useEffect(() => {
        getBlogsData("categories");
    }, []); //eslint-disable-line

    const [showComments, setShowComments] = useState(false);

    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const [openUpdate, setOpenUpdate] = useState(false);
    const handleOpenUpdate = () => setOpenUpdate(true);
    const handleCloseUpdate = () => setOpenUpdate(false);

    useEffect(() => {
        getBlogsDetails("blogs", id);
    }, []); // eslint-disable-line

    // console.log(currentUser);
    const isUserTheAuthor = currentUser === details?.author;

    return (
        <Container
            component="div"
            sx={{
                border: "1px navy solid",
                borderRadius: "35px",
                maxWidth: { xs: 375, sm: 600, md: 1000 },
                p: 2,
                mb: 4,
            }}
        >
            <Box
                component="header"
                maxWidth={{ xs: 375, sm: 600, md: 1000 }}
                sx={{ display: "flex", gap: 3 }}
            >
                <Avatar sx={{ bgcolor: blue[500] }} aria-label="avatar">
                    {details?.author?.slice(0, 1)}
                </Avatar>
                <Stack direction="column">
                    <Typography variant="small">{details?.author}</Typography>
                    <Typography variant="small">
                        {new Date(details?.publish_date).toLocaleString()}
                    </Typography>
                </Stack>
            </Box>
            <Divider sx={{ my: 3 }} />
            <Stack direction="column" sx={flexCol}>
                <Typography variant="h2" color="secondary">
                    {details?.title}
                </Typography>
                <Box
                    component="img"
                    src={details?.image}
                    alt={details?.title}
                    sx={{ objectFit: "contain", maxWidth: "100%" }}
                    referrerPolicy="no-referrer"
                ></Box>
                <Typography variant="body1">{details?.content}</Typography>
            </Stack>
            <Divider sx={{ my: 3 }} />
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                }}
            >
                <Stack direction="row">
                    <IconButton aria-label="add to favorites">
                        <FavoriteIcon />
                        <Typography variant="small" component="small">
                            {details?.likes}
                        </Typography>
                    </IconButton>
                    <IconButton
                        aria-label="comment"
                        onClick={() => setShowComments(!showComments)}
                    >
                        <CommentIcon />
                        <Typography variant="small" component="small">
                            {details?.comment_count}
                        </Typography>
                    </IconButton>
                    <IconButton aria-label="views">
                        <RemoveRedEyeIcon />
                        <Typography variant="small" component="small">
                            {details?.post_views}
                        </Typography>
                    </IconButton>
                </Stack>
                {isUserTheAuthor && (
                    <Stack direction="row">
                        <IconButton
                            onClick={() => {
                                handleOpenUpdate();
                            }}
                        >
                            <EditIcon />
                        </IconButton>
                        <IconButton onClick={handleOpen}>
                            <DeleteIcon color="error" />
                        </IconButton>
                        <DeleteModal
                            open={open}
                            handleClose={handleClose}
                            id={details.id}
                        />
                        <UpdateModal
                            openUpdate={openUpdate}
                            handleCloseUpdate={handleCloseUpdate}
                            id={details.id}
                        />
                    </Stack>
                )}
            </Box>
            {showComments && <CommentCard />}
            {/* <pre style={{ overflow: "hidden" }}>
                {JSON.stringify(details, null, 2)}
            </pre> */}
        </Container>
    );
}
