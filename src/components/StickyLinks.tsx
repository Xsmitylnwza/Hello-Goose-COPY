import SocialLink from "./SocialLink";
import { BsInstagram } from "react-icons/bs";

const StickyLinks = () => {
  return (
    <div className="fixed flex space-x-2 left-10 bottom-10">
      <div className="relative">
        <div className="flex gap-3">
          <SocialLink icon={<BsInstagram />} />
          <SocialLink icon={<BsInstagram />} />
        </div>
      </div>
    </div>
  );
};

export default StickyLinks;
