import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { blueGrey, blue } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";

export default function PostCard({ blog }) {
    return (
        <Card sx={{ maxWidth: 345, boxShadow: 15, borderRadius: 3 }}>
            <CardHeader
                avatar={
                    <Avatar sx={{ bgcolor: blue[500] }} aria-label="recipe">
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
                <Typography variant="body2" color="text.secondary">
                    {blog?.content?.slice(0, 70) + "..."}
                </Typography>
            </CardContent>
            <CardActions disableSpacing>
                <IconButton aria-label="add to favorites">
                    <FavoriteIcon />
                </IconButton>
                <IconButton aria-label="share">
                    <ShareIcon />
                </IconButton>
            </CardActions>
        </Card>
    );
}
