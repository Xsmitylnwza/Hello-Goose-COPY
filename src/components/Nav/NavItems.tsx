import { NavLinks } from '../../types';
import { isActive } from '../../utils/active';

const navLinks: NavLinks[] = [
  {
    name: 'About',
    path: '/about',
  },
  {
    name: 'Teams',
    path: '/teams',
  },
  {
    name: 'Events',
    path: '/events',
  },
  {
    name: 'FAQs',
    path: '/faqs',
  },
  {
    name: 'Game',
    path: '/game',
  },
];

const NavItems = () => {
  const currentPath = window.location.pathname;

  return (
    <ul className='flex h-full items-center justify-end space-x-[70px]'>
      {navLinks.map((navLink) => (
        <li
          key={navLink.name}
          className='text-paragraph-header font-cherry relative uppercase text-white'
        >
          <a href={navLink.path}>{navLink.name}</a>
          {isActive(navLink.path, currentPath) && (
            <img
              src='/images/nav/underline.png'
              alt='Underline'
              className='absolute -bottom-2 left-0 w-full translate-y-1/2 transform'
            />
          )}
        </li>
      ))}
    </ul>
  );
};

export default NavItems;
