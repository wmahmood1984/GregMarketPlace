import React, { useState } from "react";
import { Link } from "react-router-dom";
import cn from "classnames";
import styles from "./Footer.module.sass";
import Group from "./Group";
import Image from "../Image";
import Form from "../Form";
import Theme from "../Theme";

const items = [
  {
    title: "",
    menu: [
      {
        title: "General",
        url: "/search01",
      },
      {
        title: "Discover",
        url: "/search01",
      },
      {
        title: "About Us",
        url: "/about-us",
      },
    ],
  },
  {
    title: "Info",
    menu: [
      {
        title: "FAQ",
        url: "/faq",
      },
      {
        title: "Contact Us",
        url: "/contact-us",
      },
    ],
  },
];

const Footers = () => {

  return (
    <footer className={styles.footer}>
      <div className={cn("container", styles.container)}>
        <div className={styles.row}>
          <div className={styles.col}>
            <Link className={styles.logo} to="/">
              <Image
                className={styles.pic}
                src="/images/VT-Logo-Light.png"
                srcDark="/images/VT-Logo-Dark.png"
                alt="Img Not Found!"
              />
            </Link>
            <div className={styles.info}>The New Creative Economy.</div>
            <div className={styles.version}>
              <div className={styles.details}>Dark theme</div>
              <Theme className="theme-big" />
            </div>
          </div>
          <div className={styles.col}>
            {items.map((x, index) => (
              <Group className={styles.group} item={x} key={index} />
            ))}
          </div>
          <div className={styles.col}>
            <div className={styles.category}>Powered By</div>
            <div className={styles.text}>
              <img src="/images/asset/BSClogo2.png" alt="Img not found" className="w-2/4" />
              <br />
              <div style={{ padding: "15px" }}>
                <Image
                  className="w-2/4"
                  src="/images/logo-light.png"
                  srcDark="/images/logo-dark.png"
                  alt="Img Not Found!"
                />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.foot}>
          <div className={styles.copyright}>
            Copyright © 2022 Virtual Travel, Travel Coin. All rights reserved. Invest Responsibly. <br />
            Terms & Conditions. Privacy Policy.
          </div>
          <div className={styles.note}>
            We use cookies for better service. <a href="/#">Accept</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footers;
