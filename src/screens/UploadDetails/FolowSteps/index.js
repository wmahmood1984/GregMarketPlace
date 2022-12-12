import React from "react";
import cn from "classnames";
import styles from "./FolowSteps.module.sass";
import Icon from "../../../components/Icon";
import Loader from "../../../components/Loader";
import LoaderCircle from "../../../components/LoaderCircle";
import { minHeight } from "@mui/system";

const FolowSteps2 = ({ className ,upLoadNFT,approval,approvalLoader,mintingDone,approvalDone,lockDone,mintingLoader,lockLoader,Lock }) => {
 console.log("data",{ className ,upLoadNFT,approval,approvalLoader,mintingDone,approvalDone,lockDone,mintingLoader,lockLoader,Lock })
 
  return (
    <div className={cn(className, styles.steps)}>
      <div className={cn("h4", styles.title)}>Folow steps</div>
      <div className={styles.list}>
        <div className={cn(styles.item, styles.done)}>
          <div className={styles.head}>
            <div className={styles.icon}>
              <Icon name="upload-file" size="24" />
            </div>
            <div className={styles.details}>
              <div className={styles.info}>Upload files & Mint token</div>
              <div className={styles.text}>Call contract method</div>
            </div>
          </div>
          {/* <button onClick={upLoadNFT} className={cn("button done", styles.button)}>Done</button> */}
          {mintingLoader? 
          <button className={cn("button loading", styles.button)}>
          <Loader className={styles.loader} color="white" />
        </button>
        :
        <button 
          disabled={mintingDone}
          onClick={upLoadNFT} className={cn(`${mintingDone? "button done" : "button"}`, styles.button)}>{!mintingDone? "Start Now" : "Done"}</button>}
          
          
        </div>
    {!approvalLoader? 
          <div className={styles.item}>
          <div className={styles.head}>
            <div className={styles.icon}>
              <Icon name="pencil" size="24" />
            </div>
            <div className={styles.details}>
              <div className={styles.info}>Sign sell order</div>
              <div className={styles.text}>
                Sign sell order using your wallet
              </div>
            </div>
          </div>
          <button 
          disabled={approvalDone || !mintingDone}
          onClick={approval}
          //className={cn("button disabled", styles.button)}
          className={cn(`${approvalDone || !mintingDone? "button done" : "button"}`, styles.button)}
          >
            {!approvalDone? "Start Now" : "Done"}
          </button>
        </div>: null
    }
        
       {approvalLoader?  <div className={styles.item}>
          <div className={styles.head}>
            <div className={styles.icon}>
              <LoaderCircle className={styles.loader} />
            </div>
            <div className={styles.details}>
              <div className={styles.info}>Sign sell order</div>
              <div className={styles.text}>
                Sign sell order using your wallet
              </div>
            </div>
          </div>
          <button className={cn("button loading", styles.button)}>
            <Loader className={styles.loader} color="white" />
          </button>
        </div>: null}
       

        {/* <div className={cn(styles.item, styles.error)}>
          <div className={styles.head}>
            <div className={styles.icon}>
              <Icon name="pencil" size="24" />
            </div>
            <div className={styles.details}>
              <div className={styles.info}>Sign sell order</div>
              <div className={styles.text}>
                Sign sell order using your wallet
              </div>
            </div>
          </div>
          <button className={cn("button error", styles.button)}>Failed</button>
        </div> */}
        <div className={styles.item}>
          <div className={styles.head}>
            <div className={styles.icon}>
              <Icon name="bag" size="24" />
            </div>
            <div className={styles.details}>
              <div className={styles.info}>Sign lock order</div>
              <div className={styles.text}>
                Sign lock order using your wallet
              </div>
            </div>
          </div>
          {lockLoader? 
             <button className={cn("button loading", styles.button)}>
             <Loader className={styles.loader} color="white" />
           </button>:
            <button
            disabled={lockDone || !mintingDone || !approvalDone}
            onClick={Lock}
            className={cn(`${lockDone || !mintingDone || !approvalDone? "button done" : "button"}`, styles.button)}>{!lockDone? "Start Now" : "Done"}</button>    
           }
          
        </div>
      </div>
      <div className={styles.note}>
        Something went wrong, please{" "}
        <a href="/#" target="_blank" rel="noopener noreferrer">
          try again
        </a>
      </div>
    </div>
  );
};

export default FolowSteps2;
