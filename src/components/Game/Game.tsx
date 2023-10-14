import { forwardRef } from "react";

const Game = forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <div ref={ref} {...props} className="min-h-screen flex-center">
      Game
    </div>
  );
});

export default Game;
