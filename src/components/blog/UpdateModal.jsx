import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { styleModal } from "../../styles/globalStyles";
import { Formik } from "formik";
import { newBlogSchema } from "./NewBlogForm";
import BlogUpdateForm from "./BlogUpdateForm";
import useBlogCalls from "../../hooks/useBlogCalls";
import { useSelector } from "react-redux";

export default function UpdateModal({ openUpdate, handleCloseUpdate, id }) {
    const { updateBlog } = useBlogCalls();
    const { details } = useSelector((state) => state.blog);
    const handleSubmit = (values, actions) => {
        handleCloseUpdate();
        updateBlog(id, values);
        // actions.setSubmitting(false);
    };
    return (
        <div>
            <Modal
                open={openUpdate}
                onClose={handleCloseUpdate}
                aria-labelledby="modal-update"
                aria-describedby="modal-update"
            >
                <Box sx={styleModal}>
                    <Typography id="modal-update" variant="h5" component="p">
                        Update Blog
                    </Typography>
                    <Formik
                        validationSchema={newBlogSchema}
                        component={(props) => <BlogUpdateForm {...props} />}
                        initialValues={{
                            title: details?.title,
                            image: details?.image,
                            category: details?.category,
                            status: details?.status,
                            content: details?.content,
                        }}
                        onSubmit={handleSubmit}
                    ></Formik>
                </Box>
            </Modal>
        </div>
    );
}
