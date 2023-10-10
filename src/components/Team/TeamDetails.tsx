import { TeamType } from "../../types";

type TeamDetailsProps = {
  team?: TeamType;
};

const TeamDetails = ({ team }: TeamDetailsProps) => {
  if (!team) return null;
  return (
    <>
      <h1 className="mb-4 text-center font-cherry text-header font-bold text-white">
        {team.name}
      </h1>
      <div className="relative my-10 flex h-80 w-3/4 flex-col items-center justify-center rounded-3xl bg-white bg-opacity-75 py-10 pl-10 pr-60">
        <p className="font-itim">{team.description}</p>
        <img
          src={team.image}
          alt={team.name}
          className="absolute bottom-0 right-0 z-10 w-1/4"
        />
        <div className="absolute bottom-0 right-0 h-24 w-1/4 rounded-full bg-blue-500 bg-opacity-75" />
      </div>
    </>
  );
};

export default TeamDetails;
