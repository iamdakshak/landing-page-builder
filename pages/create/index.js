import { useState } from "react";
import { useDispatch } from "react-redux";
import { addLandingPage } from "../../features/landingPageSlice";
import { useRouter } from "next/router";
import styles from "./createWebsite.module.css";

const CreateWebsite = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    imageUrl: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    dispatch(addLandingPage({ ...formData, id: Date.now() }));
    router.push("/");
  };

  return (
    <div className={styles.mainContainer}>
      <h1>Create Website Page</h1>
      <div className={styles.formWrapper}>
        <div className={styles.inputFieldWrapper}>
          <label>{"Title"}</label>
          <input
            type="text"
            name="title"
            placeholder="Title"
            onChange={handleChange}
          />
        </div>
        <div className={styles.inputFieldWrapper}>
          <label>{"Description"}</label>
          <textarea
            type="text"
            name="description"
            placeholder="Description"
            onChange={handleChange}
          />
        </div>
        <div className={styles.inputFieldWrapper}>
          <label>{"Enter image URL"}</label>
          <input
            type="text"
            name="imageUrl"
            placeholder="Enter Image URL"
            onChange={handleChange}
          />
        </div>
        <div className={styles.buttonWrapper}>
          <div className={styles.button} onClick={handleSubmit}>
            Create Landing Page
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateWebsite;
