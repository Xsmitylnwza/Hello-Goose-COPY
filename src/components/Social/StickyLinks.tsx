import { BsFacebook, BsInstagram } from 'react-icons/bs';
import SocialLink from './SocialLink.tsx';

const StickyLinks = () => {
  return (
    <div className='fixed z-10 flex left-11 bottom-11'>
      <div className='relative'>
        <div className='flex gap-3'>
          <SocialLink icon={<BsInstagram />} />
          <SocialLink icon={<BsFacebook />} />
        </div>
      </div>
    </div>
  );
};

export default StickyLinks;
