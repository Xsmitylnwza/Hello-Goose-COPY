import { BsFacebook, BsInstagram } from 'react-icons/bs';
import SocialLink from './SocialLink.tsx';

const StickyLinks = () => {
  return (
    <div className='fixed flex left-10 bottom-10 z-10'>
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
