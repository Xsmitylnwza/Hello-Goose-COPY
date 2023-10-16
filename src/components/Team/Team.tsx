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
          "flex-center-col z-1 pb-8 relative min-h-screen w-full bg-background-team bg-cover bg-center bg-no-repeat",
          className,
        )}
        {...props}
        ref={ref}
      >
        <div className="p-4 sm:p-8">
          <TeamDetails team={previewTeamType} />
        </div>
        <div className="my-4 sm:my-8" />
        <TeamList
          onPreview={handlePreviewTeamType}
          previewTeamType={previewTeamType}
        />
      </div>
    );
  },
);

export default Team;
