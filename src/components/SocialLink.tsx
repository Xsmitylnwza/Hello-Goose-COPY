type SocialLinkProps = {
  icon: React.ReactNode;
};

const SocialLink = ({ icon }: SocialLinkProps) => {
  return (
    <a href="" className="w-12 h-12 bg-white rounded-full flex-center">
      {icon}
    </a>
  );
};

export default SocialLink;
