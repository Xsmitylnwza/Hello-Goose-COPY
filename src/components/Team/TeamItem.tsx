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
        "flex h-full w-full flex-col items-center justify-center",
        isPreview ? "bg-white" : "bg-transparent",
      )}
    >
      <img src={team.image} alt={team.name} />

      <h3 className="text-2xl text-center font-bold">{team.name}</h3>
    </div>
  );
};

export default TeamItem;
