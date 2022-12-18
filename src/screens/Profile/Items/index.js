import React from "react";
import cn from "classnames";
import styles from "./Items.module.sass";

import Loader from "../../../components/Loader";
import Card4 from "../../../components/Card4";

const Items = ({ className, items }) => {

//  console.log("selected",items)
  return (
    <div className={cn(styles.items, className)}>
      <div className={styles.list}>
        {items && items.map((x, index) => (
          <Card4 className={styles.card} item={x} key={index} />
        ))}
      </div>
      <Loader className={styles.loader} />
    </div>
  );
};

export default Items;
