import React from 'react';
import '../stylesheets/SocialShare.scss'
import {
  FacebookIcon,
  FacebookMessengerIcon,
  FacebookMessengerShareButton,
  FacebookShareButton,
  LinkedinIcon,
  LinkedinShareButton,
  TelegramIcon,
  TelegramShareButton,
  TwitterIcon,
  TwitterShareButton,
  WhatsappIcon,
  WhatsappShareButton
} from "react-share";

export const SocialShare = () => {

  const shareUrl = 'http://google.com.ar/'
  return (
    <div className='socialsharebar'>
      <FacebookShareButton url={shareUrl}>
        <FacebookIcon size={30}/>
      </FacebookShareButton>

      <FacebookMessengerShareButton url={shareUrl}>
        <FacebookMessengerIcon size={30}/>
      </FacebookMessengerShareButton>

      <LinkedinShareButton url={shareUrl}>
        <LinkedinIcon size={30}/>
      </LinkedinShareButton>

      <TelegramShareButton url={shareUrl}>
        <TelegramIcon size={30}/>
      </TelegramShareButton>

      <TwitterShareButton url={shareUrl}>
        <TwitterIcon size={30}/>
      </TwitterShareButton>

      <WhatsappShareButton url={shareUrl}>
        <WhatsappIcon size={30}/>
      </WhatsappShareButton>
    </div>
  )
};
