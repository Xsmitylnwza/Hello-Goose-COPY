type SocialLinkProps = {
  icon: React.ReactNode;
  link?: string
};

const SocialLink = ({ icon, link="" }: SocialLinkProps) => {
  return (
    <a href={link} className="w-12 h-12 bg-white rounded-full flex-center">
      {icon}
    </a>
  );
};

export default SocialLink;
