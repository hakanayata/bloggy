import { Formik } from "formik";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import { useSelector } from "react-redux";
import { commentSchema } from "../../pages/Details";
import NewCommentForm from "./NewCommentForm";

export default function CommentCard() {
    const { details } = useSelector((state) => state.blog);
    // console.log(details);
    return (
        <div>
            <Box component="div" sx={{ mt: 3 }}>
                <Formik
                    initialValues={{
                        comment: "",
                    }}
                    validationSchema={commentSchema}
                    component={(props) => <NewCommentForm {...props} />}
                    onSubmit={(values, actions) => {
                        // ...
                        console.log("submit", values);
                        actions.resetForm();
                        actions.setSubmitting(false);
                    }}
                ></Formik>
            </Box>
            {details?.comments.length > 0 && (
                <Box component="div">
                    {details?.comments?.map((comment, idx) => {
                        return (
                            <Box key={idx}>
                                <Typography>{comment}</Typography>
                                <Divider />
                            </Box>
                        );
                    })}
                </Box>
            )}
        </div>
    );
}
