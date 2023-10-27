import { useSelector, useDispatch } from "react-redux";
import { deleteLandingPage } from "../../features/landingPageSlice";
import Link from "next/link";
import { useRouter } from "next/router";
import { useLayoutEffect } from "react";
import Image from "next/image";
import styles from "./dashboard.module.css";
import { Icon } from "@iconify/react";
import { useState } from "react";
import ExpandMenu from "../../components/ExpandMenu/ExpandMenu";
// import { withAuth } from "../../components/withAuth/withAuth";

const Dashboard = () => {
  const [selectedSlot, setSelectedSlot] = useState();
  const [expandMenu, setExpandMenu] = useState();

  const landingPages = useSelector((state) => state.landingPage);
  const dispatch = useDispatch();
  const router = useRouter();

  useLayoutEffect(() => {
    const isLoggedIn = localStorage.getItem("isLoggedIn");

    if (!isLoggedIn) {
      router.push("/login");
    }
  }, []);

  console.log("landingPages :", landingPages);
  const handleDelete = (id) => {
    dispatch(deleteLandingPage(id));
  };

  const handleMenuClick = (option) => {
    if (option === "View") {
      router.push(`/landing-page/${selectedSlot}`);
    } else if (option === "Delete") {
      handleDelete(selectedSlot);
    } else {
      router.push(`/edit/${selectedSlot}`);
    }
  };

  return (
    <div>
      <div className={styles.headerTitle}>
        <h1>Home Page</h1>
        <div className={styles.addButtonWrapper}>
          <Link href="/create">
            <div className={styles.addButton}>+ Add</div>
          </Link>
        </div>
      </div>
      <div className={styles.cardsWrapper}>
        {landingPages.map((landingPage) => (
          <div key={landingPage.id} className={styles.cardContainer}>
            <div
              className={styles.moreMenu}
              onClick={() => {
                setSelectedSlot(landingPage?.id);
                setExpandMenu(!expandMenu);
                // handleMenu(id);
              }}
            >
              <Icon icon="majesticons:more-menu-vertical-line" />
              {selectedSlot === landingPage?.id && expandMenu ? (
                <>
                  <ExpandMenu
                    data={expandMenuItems}
                    clickFn={(opt, id) => handleMenuClick(opt, id)}
                  />
                </>
              ) : null}
            </div>
            <Link href={`/landing-page/${landingPage?.id}`}>
              <div className={styles.wrapper}>
                <div className={styles.imageWrapper}>
                  <Image
                    src={landingPage.imageUrl}
                    alt={landingPage?.alt}
                    width={250}
                    height={220}
                    style={{ objectFit: "scale-down" }}
                  />
                </div>
                <div className={styles.textContent}>
                  <div className={styles.title}>{landingPage?.title} </div>
                  <div className={styles.description}>
                    {landingPage?.description}{" "}
                  </div>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

const expandMenuItems = [
  {
    name: "View",
  },
  {
    name: "Edit",
  },
  {
    name: "Delete",
  },
];

export default Dashboard;
// export default withAuth(Dashboard);
