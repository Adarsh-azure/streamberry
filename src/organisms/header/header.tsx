import React, { useMemo } from "react";
import styles from "./header.module.scss";
import Logo from "atoms/logo";
import { HEADER_NAVS } from "./constants";
import Avatar from "atoms/avatar/Avatar";
import { useLocation } from "react-router-dom";
import { findObjectInArray } from "utils/arrayUtils";

type HeaderProps = {};

const Header = ({}: HeaderProps) => {
  const location = useLocation();

  const activeTab = useMemo(() => {
    return HEADER_NAVS?.find((item) =>
      location?.pathname?.includes(item?.path)
    );
  }, [location, HEADER_NAVS]);

  return (
    <>
      <div className={styles.header}>
        <Logo />
        <div className={styles.header__navs}>
          {HEADER_NAVS?.map((item) => (
            <a
              key={item?.id}
              href={item?.path}
              className={`${styles.header__nav} ${
                activeTab?.id === item?.id && styles["header__nav--active"]
              }`}
            >
              {item?.label}
            </a>
          ))}
          <Avatar name="Adarsh Goswamii" />
        </div>
      </div>
    </>
  );
};

export default Header;
