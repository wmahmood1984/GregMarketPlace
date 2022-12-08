import React, { useState } from "react";
import cn from "classnames";
import styles from "./Search02.module.sass";
import Image from "../../components/Image";
import Form from "../../components/Form";

const items = [
  {
    title: "Artwork",
    content: "138 items",
    image: "/images/content/activity-pic-1.jpg",
  },
  {
    title: "Photography",
    content: "138 items",
    image: "/images/content/activity-pic-5.jpg",
  },
  {
    title: "Game",
    content: "138 items",
    image: "/images/content/activity-pic-4.jpg",
  },
  {
    title: "Music",
    content: "138 items",
    image: "/images/content/activity-pic-2.jpg",
  },
];

const Search = () => {
  const [search, setSearch] = useState("");

  const handleSubmit = (e) => {
    alert();
  };

  return (
    <div className={cn("section", styles.section)}>
      <div className={cn("container", styles.container)}>
        <div className={styles.preview}>
          <Image
            srcSet="/images/content/figures@2x.png 2x"
            srcSetDark="/images/content/figures-dark@2x.png 2x"
            src="/images/content/figures.png"
            srcDark="/images/content/figures-dark.png"
            alt="Figures"
          />
        </div>
        <div className={styles.wrap}>
          <h2 className={cn("h2", styles.title)}>
            Page not found! <br /> 404 Error
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Search;
