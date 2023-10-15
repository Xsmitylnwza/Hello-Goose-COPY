import { forwardRef } from "react";
import GameButton from "./GameButton";

const Game = forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <div ref={ref} {...props} className="min-h-screen ">
      <div className="relative min-h-screen bg-bottom bg-no-repeat bg-cover flex-center-col bg-background-game">
        <GameButton />
      </div>
    </div>
  );
});

export default Game;
