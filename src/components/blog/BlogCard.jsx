import { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import blue from "@mui/material/colors/blue";
import FavoriteIcon from "@mui/icons-material/Favorite";
import CommentIcon from "@mui/icons-material/Comment";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import Button from "@mui/material/Button";
import { toastErrorNotify, toastWarnNotify } from "../../helper/ToastNotify";
import useBlogCalls from "../../hooks/useBlogCalls";

export default function BlogCard({ blog }) {
    const currentUser = useSelector((state) => state.auth.currentUser);
    const { toggleLike } = useBlogCalls();
    const navigate = useNavigate();

    const handleNavigation = () => {
        if (currentUser) {
            navigate(`details/${blog?.id}`);
        } else {
            // navigate(`details/${blog?.id}`);
            toastWarnNotify("You must be logged in!");
        }
    };

    const [liked, setLiked] = useState(
        currentUser
            ? blog.likes_n.filter((like) => currentUser.id === like.user_id)
                  .length === 1
            : false
    );

    const handleLike = () => {
        if (currentUser) {
            toggleLike(blog.id).then((success) => success && setLiked(!liked));
        } else {
            toastErrorNotify("You must be logged in!");
        }
    };

    return (
        <Card sx={{ maxWidth: 345, boxShadow: 15, borderRadius: 2 }}>
            <CardHeader
                avatar={
                    <Avatar sx={{ bgcolor: blue[500] }} aria-label="avatar">
                        {blog?.author?.slice(0, 1)}
                    </Avatar>
                }
                title={blog?.author}
                subheader={new Date(blog?.publish_date).toLocaleString()}
            />
            <CardMedia
                component="img"
                height="194"
                image={blog?.image}
                alt="blog post"
                referrerPolicy="no-referrer"
                sx={{ objectFit: "contain" }}
            />
            <Typography
                variant="h4"
                color="blueviolet"
                component="p"
                align="center"
                sx={{ paddingTop: "12px" }}
            >
                {blog?.title}
            </Typography>
            <CardContent sx={{ paddingTop: 0.5 }}>
                <Typography variant="body1" color="text.secondary">
                    {blog?.content?.slice(0, 70) + "..."}
                </Typography>
            </CardContent>
            <CardActions disableSpacing>
                <IconButton aria-label="add to favorites" onClick={handleLike}>
                    <FavoriteIcon
                        sx={{
                            color: currentUser && liked && "red",
                        }}
                    />
                    <Typography variant="small" component="small">
                        {blog?.likes}
                    </Typography>
                </IconButton>
                <IconButton aria-label="comment" disabled>
                    <CommentIcon />
                    <Typography variant="small" component="small">
                        {blog?.comment_count}
                    </Typography>
                </IconButton>
                <IconButton aria-label="views" disabled>
                    <RemoveRedEyeIcon />
                    <Typography variant="small" component="small">
                        {blog?.post_views}
                    </Typography>
                </IconButton>
                <Button
                    variant="outlined"
                    sx={{ ml: 6 }}
                    onClick={() => handleNavigation()}
                >
                    Read More
                </Button>
            </CardActions>
        </Card>
    );
}
