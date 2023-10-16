import { TeamType } from "../../types";
import { motion } from "framer-motion";

type TeamDetailsProps = {
  team?: TeamType;
};

const TeamDetails = ({ team }: TeamDetailsProps) => {
  const teamDetailsVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };
  if (team === undefined) return null;
  return (
    <motion.div
      variants={teamDetailsVariants}
      initial="hidden"
      animate="visible"
      exit="hidden"
    >
      <h1 className="mt-6 w-full text-center font-cherry text-[32px] font-bold text-white">
        {team.name}
      </h1>
      <div className="relative grid w-full h-full grid-cols-12 gap-4 p-4 px-5 mt-4">
        <div className="text-[0.825rem] sm:text-[1.25rem] relative z-30 col-span-9 flex h-full max-h-[300px] min-h-[300px] w-full sm:items-center overflow-auto rounded-3xl bg-white bg-opacity-90 px-10 sm:p-4 pb-5">
          <p className="z-50 py-8 font-itim">{team.description}</p>
        </div>
        <img
          className="absolute z-30 w-3/6 transform -translate-y-1/2 -right-7 top-1/2 drop-shadow-lg filter sm:w-2/6 xl:scale-50"
          src={team.sit}
          alt={team.name}
        />
      </div>
    </motion.div>
  );
};

export default TeamDetails;
