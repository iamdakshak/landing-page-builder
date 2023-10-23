import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { editLandingPage } from "../../features/landingPageSlice";
import { useRouter } from "next/router";
import styles from "./edit.module.css";
import PreviewPage from "../preview";

const EditWebsitePage = () => {
  const router = useRouter();
  const { id } = router.query;

  const currentPage = useSelector((state) =>
    state?.landingPage?.find((page) => page?.id === Number(id))
  );

  const [formData, setFormData] = useState(currentPage);
  const dispatch = useDispatch();

  const [previewData, setPreviewData] = useState(null);
  const [showPreview, setShowPreview] = useState();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    dispatch(editLandingPage(formData));
    router.push("/");
  };

  const handlePreview = () => {
    setShowPreview(true);
    setPreviewData(formData);
  };

  return (
    <div className={styles.mainContainer}>
      {!showPreview && <h1>{"Edit Website Page"}</h1>}
      {!showPreview ? (
        <div className={styles.formWrapper}>
          <div className={styles.inputFieldWrapper}>
            <label>{"Title"}</label>
            <input
              type="text"
              name="title"
              placeholder="Title"
              value={formData?.title}
              onChange={handleChange}
            />
          </div>
          <div className={styles.inputFieldWrapper}>
            <label>{"Description"}</label>
            <textarea
              type="text"
              name="description"
              placeholder="Description"
              value={formData?.description}
              onChange={handleChange}
            />
          </div>
          <div className={styles.inputFieldWrapper}>
            <label>{"Enter image URL"}</label>
            <input
              type="text"
              name="imageUrl"
              placeholder="Enter Image URL"
              value={formData?.imageUrl}
              onChange={handleChange}
            />
          </div>
          <div className={styles.buttonWrapper}>
            <div className={styles.button} onClick={handlePreview}>
              Preview Changes
            </div>
            <div className={styles.button} onClick={handleSubmit}>
              Save Changes
            </div>
          </div>
        </div>
      ) : (
        <PreviewPage
          currentPage={previewData}
          goBack={() => setShowPreview(false)}
        />
      )}
    </div>
  );
};

export default EditWebsitePage;
