import React, { useContext } from "react";
import cn from "classnames";
import styles from "./ProfileEdit.module.sass";
import Control from "../../components/Control";
import TextInput from "../../components/TextInput";
import TextArea from "../../components/TextArea";
import { TravelCoinContext } from '../../context/TravelCoinContext'

const breadcrumbs = [
  {
    title: "Home",
    url: "/",
  },
  {
    title: "Edit Profile",
  },
];

const ProfileEdit = () => {
  const {
    handleSetUserDetails,
    displayName,
    setDisplayName,
    bio,
    setBio,
    website,
    setWebsite,
    twitter,
    setTwitter,
  } = useContext(TravelCoinContext)

  return (
    <div className={styles.page}>
      <Control className={styles.control} item={breadcrumbs} />
      <div className={cn("section-pt80", styles.section)}>
        <div className={cn("container", styles.container)}>
          <div className={styles.top}>
            <h1 className={cn("h2", styles.title)}>Edit profile</h1>
            <div className={styles.info}>
              You can set preferred display name, create{" "}
              <strong>your profile URL</strong> and manage other personal
              settings.
            </div>
          </div>
          <div className={styles.row}>
            <div className={styles.col}>
              <div className={styles.user}>
                <div className={styles.avatar}>
                  <img src="/images/content/avatar-1.jpg" alt="Avatar" />
                </div>
                <div className={styles.details}>
                  <div className={styles.stage}>Profile photo</div>
                  <div className={styles.text}>
                    We recommend an image of at least 400x400. Gifs work too{" "}
                    <span role="img" aria-label="hooray">
                      🙌
                    </span>
                  </div>
                  <div className={styles.file}>
                    <button
                      className={cn(
                        "button-stroke button-small",
                        styles.button
                      )}
                    >
                      Upload
                    </button>
                    <input className={styles.load} type="file" />
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.col}>
              <div className={styles.list}>
                <div className={styles.item}>
                  <div className={styles.category}>Account info</div>
                  <div className={styles.fieldset}>
                    <TextInput
                      className={styles.field}
                      label="display name"
                      name="Name"
                      type="text"
                      placeholder="Enter your display name"
                      value={displayName}
                      onChange={e => setDisplayName(e.target.value)}
                      required
                    />
                    <TextArea
                      className={styles.field}
                      label="Bio"
                      name="Bio"
                      placeholder="About yourselt in a few words"
                      value={bio}
                      onChange={e => setBio(e.target.value)}
                      required="required"
                    />
                  </div>
                </div>
                <div className={styles.item}>
                  <div className={styles.category}>Social</div>
                  <div className={styles.fieldset}>
                    <TextInput
                      className={styles.field}
                      label="portfolio or website"
                      name="Portfolio"
                      type="text"
                      placeholder="Enter URL"
                      value={website}
                      onChange={e => setWebsite(e.target.value)}
                      required
                    />
                    <div className={styles.box}>
                      <TextInput
                        className={styles.field}
                        label="twitter"
                        name="Twitter"
                        type="text"
                        placeholder="@twitter username"
                        value={twitter}
                        onChange={e => setTwitter(e.target.value)}
                        required
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.note}>
                To update your settings you should sign message through your
                wallet. Click 'Update profile' then sign the message
              </div>
              <div className={styles.btns}>
                <button className={cn("button", styles.button)} onClick={handleSetUserDetails}>
                  Update Profile
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileEdit;
