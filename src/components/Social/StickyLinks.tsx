import { BsFacebook, BsInstagram } from 'react-icons/bs';
import SocialLink from './SocialLink.tsx';

const StickyLinks = () => {
  return (
    <div className='fixed z-10 flex left-11 bottom-11'>
      <div className='relative'>
        <div className='flex gap-3'>
          <SocialLink icon={<BsInstagram style={{fontSize: '1.45rem'}} />} />
          <SocialLink icon={<BsFacebook style={{fontSize: '1.45rem'}}/>} />
        </div>
      </div>
    </div>
  );
};

export default StickyLinks;
