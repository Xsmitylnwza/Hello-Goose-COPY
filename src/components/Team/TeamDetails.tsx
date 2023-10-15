import { TeamType } from "../../types";

type TeamDetailsProps = {
  team?: TeamType;
};

const TeamDetails = ({ team }: TeamDetailsProps) => {
  if (!team) return null;
  return (
    <div>
      <h1 className="mt-6 w-full text-center font-cherry text-[32px] font-bold text-white">
        {team.name}
      </h1>
      <div className="relative mt-4 grid h-full w-full grid-cols-12 gap-4 p-4">
        <div className="relative z-30 col-span-9 flex h-full max-h-[300px] min-h-[300px] w-full items-center overflow-auto rounded-3xl bg-white bg-opacity-75 p-4 pr-10 sm:pr-0">
          <p className="z-50 font-itim">{team.description}</p>
        </div>
        <img
          className="absolute -right-7 top-1/2 z-30 w-3/6 -translate-y-1/2 transform drop-shadow-lg filter sm:w-2/6 xl:scale-50"
          src={team.sit}
          alt={team.name}
        />
      </div>
    </div>
  );
};

export default TeamDetails;
