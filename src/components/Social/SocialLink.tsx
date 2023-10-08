import { HTMLAttributes, ReactNode } from "react";
import { twMerge } from "tailwind-merge";

type SocialLinkProps = {
  href?: string;
  icon: ReactNode;
} & HTMLAttributes<HTMLButtonElement>;

const SocialLink = ({ href, icon, className, ...props }: SocialLinkProps) => {
  return (
    <button
      className={twMerge(
        "flex h-12 w-12 cursor-pointer items-center justify-center rounded-full bg-white text-black hover:bg-opacity-80",
        className,
      )}
      {...props}
    >
      {href && (
        <a href={href} target="_blank" rel="noreferrer">
          {icon}
        </a>
      )}

      {!href && icon}
    </button>
  );
};

export default SocialLink;
