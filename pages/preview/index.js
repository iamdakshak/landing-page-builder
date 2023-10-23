import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer";
// import Header from "../../components/Header/Header";
import styles from "./landing-page.module.css";
import Image from "next/image";
import { useRouter } from "next/router";
// import { useSelector } from "react-redux";
import _ from "lodash";

const PreviewPage = ({ currentPage, goBack }) => {
  const dummyImg =
    "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/7d3ef723-eb25-4365-9952-a75f9460f1d2/d5t5qh9-37b00bd1-9e50-4415-ab27-13242cded92a.png/v1/fit/w_600,h_1169/kurosaki_ichigo__bleach___render_by_obedragon_d5t5qh9-375w-2x.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTE2OSIsInBhdGgiOiJcL2ZcLzdkM2VmNzIzLWViMjUtNDM2NS05OTUyLWE3NWY5NDYwZjFkMlwvZDV0NXFoOS0zN2IwMGJkMS05ZTUwLTQ0MTUtYWIyNy0xMzI0MmNkZWQ5MmEucG5nIiwid2lkdGgiOiI8PTYwMCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.EM-nFYUZdBgrT4dPnWIxX-qiiSWaqVDs479YvLLz3Gw";

  const { title = "", description = "", imageUrl = "" } = currentPage;
  const router = useRouter();

  const imageStyle = {
    objectFit: "cover",
    width: "100%",
    height: "100%",
    minWidth: "300px",
  };

  if (!currentPage) {
    return <div>Landing Page not found.</div>;
  }

  return (
    <>
      <Navbar />
      {/* <Header data={NavbarItems} /> */}
      <main className={styles.mainContainer}>
        <h1>Preview Changes</h1>
        <div className={styles.contentWrapper}>
          <div className={styles.container}>
            <aside>
              <Image
                src={!_.isEmpty(imageUrl) ? imageUrl : dummyImg}
                width={300}
                height={600}
                style={imageStyle}
                //   objectFit="cover"
                //   layout="fill"
                alt={"Image"}
              />
            </aside>
            <div className={styles.textContainer}>
              <div className={styles.title}>{title}</div>
              <div className={styles.description}>{description}</div>
              <div className={styles.goBackWrapper}>
                <div className={styles.goBack} onClick={() => goBack()}>
                  GO BACK
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

const NavbarItems = [
  {
    label: "Home",
    link: "/",
  },
  {
    label: "Portfolio",
    link: "/portfolio",
  },
  {
    label: "Pages",
    link: "/pages",
  },
  {
    label: "Blog",
    link: "/blog",
  },
  {
    label: "Shop",
    link: "/shop",
  },
  {
    label: "Support",
    link: "/support",
  },
];

export default PreviewPage;
