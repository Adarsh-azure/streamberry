import React, { useMemo } from "react";
import styles from "./avatar.module.scss";
import { getInitials, stringHashFn } from "utils/common";
import { AVATAR_COLOR_SCHEME } from "./constants";

type AvatarProps = {
  img?: string | null;
  name: string;
};

const Avatar = ({ img, name }: AvatarProps) => {
  const initials = getInitials(name);
  const hashNo = useMemo(() => {
    return stringHashFn(name);
  }, [name]);

  return (
    <div className={styles.avatar} style={{ ...AVATAR_COLOR_SCHEME[hashNo] }}>
      {img ? <img src={img} alt="" /> : initials}
    </div>
  );
};

export default Avatar;
