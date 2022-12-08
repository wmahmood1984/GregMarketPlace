import React, { useContext, useState } from "react";
import cn from "classnames";
import styles from "./User.module.sass";
import Icon from "../../../components/Icon";
import Report from "../../../components/Report";
import Modal from "../../../components/Modal";
import { TravelCoinContext } from "../../../context/TravelCoinContext";


const User = ({ className,item }) => {
  const [visibleModalReport, setVisibleModalReport] = useState(false);


const currentDisplayName =  item[0]
const formattedAccount = `${item[2].slice(0,5)}...${item[2].slice(-4)}`
const currentBio = item[1]
const currentWebsite = "abc"
const currenttwitter = "abc"

  return (
    <>
      <div className={cn(styles.user, className)}>
        <div className={styles.avatar}>
          <img src={`${item[3]}`} alt="Avatar" />
        </div>
        <div className={styles.name}>{currentDisplayName}</div>
        <div className={styles.code}>
          <div className={styles.number}>{formattedAccount}</div>
          <button className={styles.copy}>
            <Icon name="copy" size="16" />
          </button>
        </div>
        <div className={styles.info}>
          {currentBio}
        </div>
        <a
          className={styles.site}
          href={currentWebsite}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icon name="globe" size="16" />
          <span>{currentWebsite}</span>
        </a>
        <div className={styles.socials}>
          <a
            className={styles.social}
            href={`https://twitter.com/` + currenttwitter}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon name={"twitter"} size="20" />
          </a>
        </div>
      </div>
      <Modal
        visible={visibleModalReport}
        onClose={() => setVisibleModalReport(false)}
      >
        <Report />
      </Modal>
    </>
  );
};

export default User;
