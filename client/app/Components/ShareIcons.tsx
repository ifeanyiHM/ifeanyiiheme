import {
  FaFacebookF,
  FaFacebookMessenger,
  FaLinkedinIn,
  FaRegHeart,
  FaWhatsapp,
} from "react-icons/fa";
import {
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  WhatsappShareButton,
} from "react-share";
import { BsTwitterX } from "react-icons/bs";
import useBlog from "../_context/useBlog";

interface ShareIconsProps {
  url: string;
}

function ShareIcons({ url }: ShareIconsProps) {
  const { setDisplayShareIcon } = useBlog();

  const shareUrl = `https://ifeanyiiheme.vercel.app/blog/${url}`;

  return (
    <div className="absolute right-0 top-[-1rem]">
      <p className="text-xs">Share</p>
      <div className="flex gap-4">
        {/* WhatsApp Share Button */}
        <span onClick={() => setDisplayShareIcon(false)}>
          <WhatsappShareButton url={shareUrl}>
            <FaWhatsapp color="#25D366" />
          </WhatsappShareButton>
        </span>

        {/* Facebook Share Button */}
        <span onClick={() => setDisplayShareIcon(false)}>
          <FacebookShareButton url={shareUrl}>
            <FaFacebookF color="#1877F2" />
          </FacebookShareButton>
        </span>

        {/* Twitter Share Button */}
        <span onClick={() => setDisplayShareIcon(false)}>
          <TwitterShareButton url={shareUrl}>
            <BsTwitterX />
          </TwitterShareButton>
        </span>

        {/* LinkedIn Share Button */}
        <span onClick={() => setDisplayShareIcon(false)}>
          <LinkedinShareButton url={shareUrl}>
            <FaLinkedinIn color="#0A66C2" />
          </LinkedinShareButton>
        </span>
      </div>
    </div>
  );
}

export default ShareIcons;
