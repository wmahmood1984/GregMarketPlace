import React, { useEffect, useState } from "react";
import cn from "classnames";
import { Link } from "react-router-dom";
import styles from "./Card.module.sass";
import Icon from "../Icon";
import { Contract, utils } from "ethers";
import axios from "axios";
import { formatUnits } from "ethers/lib/utils";
import { Button } from "@mui/material";
import Modal from "../Modal";
import PutSale from "../../screens/Item/Control/PutSale";
import FolowSteps from "../../screens/UploadDetails/FolowSteps";
import PutSale2 from "../../screens/Item/Control/PutSale copy";
import FolowSteps2 from "../../screens/UploadDetails/FolowSteps";
import { MarketAbi, MarketAdd } from "../../config";
import { useWeb3React } from "@web3-react/core";

export const getContract = (library, account,add,abi) => {
	const signer = library?.getSigner(account).connectUnchecked();
	var contract = new Contract(add,abi, signer);
	return contract;
};



const Card3 = ({Approval, className, item,Sale,commission,approvalDone,SaleDone,Auction,description,setDescription }) => {
  const [visibleModalSale, setVisibleModalSale] = useState(false);
  const [visibleModal, setVisibleModal] = useState(false);
  const {library,account} = useWeb3React()
  const [Check,setCheck] = useState()
  const marketContract = getContract(library,account,MarketAdd,MarketAbi)


  useEffect(()=>{
    const abc = async()=>{
       const _check = await marketContract.checkAuctionSale(item.token_address,utils.formatUnits(item.token_id,0))
      setCheck(_check)

    }

    abc()
  },[])

// console.log("obj in card",{ className, item,Sale,commission,Check })
//console.log("check",Check,item.token_id,item.token_address)
  return (
    <div className={cn(styles.card, className)}>
        <div className={styles.preview}>
          <img srcSet={`${item && item.normalized_metadata.image} 2x`} src={item && item.normalized_metadata.image} alt="Card" />
          
        </div>

          <div className={styles.body}>
            <div className={styles.line}>
              <div className={styles.title}>{item && item.normalized_metadata.name}</div>

            </div>
            <div className={styles.line}>
            <div className={styles.title}>Token Id:</div>
              <div className={styles.counter}>{item && utils.formatUnits(item.token_id,0)}</div>
            </div>
          </div>
          

            <div style={{flex:"auto"}}>
            <Button
            variant="contained"

            disabled={false}
            onClick={() => setVisibleModalSale(true)}
           >
            Put on sale
            </Button>{" "}
            <Button
            variant="outlined"
            disabled={false}
            onClick={() => setVisibleModal(true)}
           >Put on Auction

            </Button>
            </div>
      <Modal
        visible={visibleModalSale}
        onClose={() => setVisibleModalSale(false)}
      >
        <PutSale2
        Sale={Sale}
        Approval={Approval} 
        setVisibleModalSale={setVisibleModalSale}
        SaleDone={SaleDone}
        approvalDone={approvalDone}        
        commission={commission}
        id={item && utils.formatUnits(item.token_id,0)}
        add={item && item.token_address}
        saleAuction={"Sale"}
        description={description}
        setDescription={setDescription}
        // cancelandSaleDone={cancelandSaleDone}
        // setcancelAndSaleDone={setcancelAndSaleDone}
        // cancleAndSale={cancleAndSale}
        />
      </Modal>


      <Modal visible={visibleModal} onClose={() => setVisibleModal(false)}>
      <PutSale2
        Sale={Auction}
        Approval={Approval} 
        setVisibleModalSale={setVisibleModalSale}
        SaleDone={SaleDone}
        approvalDone={approvalDone}        
        commission={commission}
        id={item && utils.formatUnits(item.token_id,0)}
        add={item && item.token_address}
        saleAuction={"Auction"}
        description={description}
        setDescription={setDescription}

        // cancelandSaleDone={cancelandSaleDone}
        // setcancelAndSaleDone={setcancelAndSaleDone}
        // cancleAndSale={cancleAndSale}
        />
      </Modal>


 
    </div>
  );
};

export default Card3;
