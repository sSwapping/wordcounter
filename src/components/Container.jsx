import { useState } from "react";
import Stats from "./Stats";
import Textarea from "./Textarea";
import {
  DISCORD_MAX_CHARACTERS,
  DISCORD_NITRO_CHARACTERS,
  INSTAGRAm_MAX_CHARACTERS,
} from "../store/constants";

const Container = () => {
  const [text, setText] = useState("");
  const [isNitro, setIsNitro] = useState(false);

  const stats = {
    numberOfWords: text.split(/\s/).filter((word) => word !== "").length,
    numberOfCharacters: text.length,
    instagramCharacters: INSTAGRAm_MAX_CHARACTERS - text.length,
    discordCharacters: isNitro
      ? DISCORD_NITRO_CHARACTERS - text.length
      : DISCORD_MAX_CHARACTERS - text.length,
    discordLimit: isNitro ? DISCORD_NITRO_CHARACTERS : DISCORD_MAX_CHARACTERS,
  };

  const toggleNitro = () => setIsNitro(!isNitro);

  return (
    <main className='container px-4 mx-auto mb-12'>
      <div className='overflow-hidden bg-white rounded-lg shadow-lg'>
        <Textarea text={text} setText={setText} />
        <Stats stats={stats} isNitro={isNitro} toggleNitro={toggleNitro} />
      </div>
    </main>
  );
};

export default Container;
