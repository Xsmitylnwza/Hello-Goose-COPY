import { TeamType } from "../types";

const teams: TeamType[] = [
  {
    id: "frontend",
    name: "Frontend",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl vitae aliquam ultricies, nunc nisl ultricies nunc, vitae aliquam nisl nisl vitae nisl. Donec euismod, nisl vitae aliquam ultricies, nunc nisl ultricies nunc, vitae aliquam nisl nisl vitae nisl.",
    image: "/images/team/frontend.png",
  },
  {
    id: "web-design",
    name: "Web Design",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl vitae aliquam ultricies, nunc nisl ultricies nunc, vitae aliquam nisl nisl vitae nisl. Donec euismod, nisl vitae aliquam ultricies, nunc nisl ultricies nunc, vitae aliquam nisl nisl vitae nisl.",
    image: "/images/team/web-design.png",
  },
  {
    id: "game-dev",
    name: "Game Dev",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl vitae aliquam ultricies, nunc nisl ultricies nunc, vitae aliquam nisl nisl vitae nisl. Donec euismod, nisl vitae aliquam ultricies, nunc nisl ultricies nunc, vitae aliquam nisl nisl vitae nisl.",
    image: "/images/team/game-dev.png",
  },
  {
    id: "infrastructure",
    name: "Infrastructure",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl vitae aliquam ultricies, nunc nisl ultricies nunc, vitae aliquam nisl nisl vitae nisl. Donec euismod, nisl vitae aliquam ultricies, nunc nisl ultricies nunc, vitae aliquam nisl nisl vitae nisl.",
    image: "/images/team/infrastructure.png",
  },
];

export const getTeamTypes = () => {
  return teams;
};

export const getTeamType = (id: string) => {
  return teams.find((team) => team.id === id);
};
