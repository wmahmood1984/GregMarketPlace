import React, { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import cn from "classnames";
import OutsideClickHandler from "react-outside-click-handler";
import styles from "./User.module.sass";
import Icon from "../../Icon";
import Theme from "../../Theme";
import { TravelCoinContext } from "../../../context/TravelCoinContext";

const items = [
  {
    title: "My profile",
    icon: "user",
    url: "/profile",
  },
  {
    title: "My items",
    icon: "image",
    url: "/item",
  },
  {
    title: "Dark theme",
    icon: "bulb",
  },
];

const User = ({ className }) => {
  const [visible, setVisible] = useState(false);
  const { currentDisplayName, formattedAccount, logout } = useContext(TravelCoinContext)

  return (
    <OutsideClickHandler onOutsideClick={() => setVisible(false)}>
      <div className={cn(styles.user, className)}>
        <div className={styles.head} onClick={() => setVisible(!visible)}>
          <div className={styles.avatar}>
            <img src={`https://avatars.dicebear.com/api/pixel-art/asdwa.svg`} alt="Avatar" />
          </div>
          <div className={styles.wallet}>
            7.00698 <span className={styles.currency}>TVL</span>
          </div>
        </div>
        {visible && (
          <div className={styles.body}>
            <div className={styles.name}>{currentDisplayName}</div>
            <div className={styles.code}>
              <div className={styles.number}>{formattedAccount}</div>
            </div>
            <div className={styles.menu}>
              {items.map((x, index) =>
                x.url ? (
                  <Link
                    className={styles.item}
                    to={x.url}
                    onClick={() => setVisible(!visible)}
                    key={index}
                  >
                    <div className={styles.icon}>
                      <Icon name={x.icon} size="20" />
                    </div>
                    <div className={styles.text}>{x.title}</div>
                  </Link>
                ) : (
                  <div className={styles.item} key={index}>
                    <div className={styles.icon}>
                      <Icon name={x.icon} size="20" />
                    </div>
                    <div className={styles.text}>{x.title}</div>
                    {
                      x.title == "Dark theme" ? <Theme className={styles.theme} /> : null
                    }
                  </div>
                )
              )}
              <div onClick={logout} className={`${styles.item} cursor-pointer`}>
                <div className={styles.icon}>
                  <Icon name="exit" size="20" />
                </div>
                <div className={styles.text}>Disconnect</div>
              </div>
            </div>
          </div>
        )}
      </div>
    </OutsideClickHandler>
  );
};

export default User;
