import { HTMLAttributes, forwardRef, useState } from "react";
import { twMerge } from "tailwind-merge";
import { TeamType } from "../../types";
import TeamDetails from "./TeamDetails";
import TeamList from "./TeamList";

type TeamProps = HTMLAttributes<HTMLDivElement>;

const Team = forwardRef<HTMLDivElement, TeamProps>(
  ({ className, ...props }, ref) => {
    const [previewTeamType, setPreviewTeamType] = useState<
      TeamType | undefined
    >(undefined);

    const handlePreviewTeamType = (team: TeamType) => {
      setPreviewTeamType(team);
    };

    return (
      <div
        className={twMerge(
          "flex-center-col z-1 bg-background-team relative min-h-screen w-full bg-cover bg-center bg-no-repeat",
          className,
        )}
        {...props}
        ref={ref}
      >
        <TeamDetails team={previewTeamType} />
        <TeamList
          onPreview={handlePreviewTeamType}
          previewTeamType={previewTeamType}
        />
      </div>
    );
  },
);

export default Team;
