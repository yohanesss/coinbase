import React from "react";
import Image from "next/image";

import Comment from "../assets/svg/comment";
import Heart from "../assets/svg/heart";
import MoreHorizontal from "../assets/svg/moreHorizontal";
import Share from "../assets/svg/share";
import { BearishFilled } from "./buttons/BearishFilled";
import { BullishFilled } from "./buttons/BullishFilled";

const styles = {
  postAction: `flex items-center`,
  chatCard: `border-b border-gray-700 pb-6 mb-6`,
  chatCardWrapper: `flex items-center justify-between`,
  flexCenter: `flex items-center`,
  flexBetween: `flex justify-between`,
  grayText: `text-gray-400 ml-2`,
  gray400: `text-gray-400`,
  messageContent: `my-4 mt-2`,
  labelsContainer: `flex w-full ml-3`,
};

export const ChatCard = ({
  content = "",
  timeStamp,
  sender,
  bullish,
  senderAvatar = "https://images.pexels.com/photos/12108913/pexels-photo-12108913.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
  likes,
  comments,
}) => {
  return (
    <div className={styles.chatCard}>
      <div className={styles.chatCardWrapper}>
        <div className={styles.flexCenter}>
          <div>
            <Image
              src={senderAvatar}
              width={40}
              height={40}
              alt={sender + "-avatar"}
              className="rounded-full"
            />
          </div>
          <div className={styles.labelsContainer}>
            {sender}
            &nbsp; {"\u2B24"} &nbsp;
            <span className={styles.gray400}>{timeStamp}</span>
            &nbsp; {"\u2B24"} &nbsp;
            {bullish ? <BullishFilled /> : <BearishFilled />}
          </div>
        </div>
        <MoreHorizontal />
      </div>
      <p className={styles.messageContent}>{content}</p>
      <div className={styles.flexBetween}>
        <div className={styles.postAction}>
          <Comment />
          <p className={styles.grayText}>{comments}</p>
        </div>
        <div className={styles.postAction}>
          <Heart />
          <p className={styles.grayText}>{likes}</p>
        </div>
        <div className={styles.postAction}>
          <Share />
          <p className={styles.grayText}>Share</p>
        </div>
      </div>
    </div>
  );
};
