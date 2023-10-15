import { twMerge } from "tailwind-merge";
import { TeamType } from "../../types";

type TeamItemProps = {
  team: TeamType;
  isPreview?: boolean;
};

const TeamItem = ({ team, isPreview = false }: TeamItemProps) => {
  return (
    <div
      className={twMerge(
        "relative flex aspect-square cursor-pointer flex-col items-center justify-end rounded-2xl py-4 shadow-lg transition-all duration-300",
        isPreview ? "bg-[#0F0A4CCC]" : "bg-[#6479BCE5]",
      )}
    >
      <img
        src={team.image}
        alt={team.name}
        className="absolute bottom-[35%] h-full w-full max-w-none scale-125 transform drop-shadow-lg filter"
      />
      <h3 className="z-10 text-[12px] font-bold text-white sm:text-[24px] lg:text-[32px] xl:text-[64px]">
        {team.name}
      </h3>
    </div>
  );
};

export default TeamItem;
