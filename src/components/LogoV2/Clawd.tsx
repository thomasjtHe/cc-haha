import * as React from "react";
import { Box, Text } from "../../ink.js";

export type ClawdPose = "default" | "look-left" | "look-right";

const SMALL_DUCK = [
  "                                ",
  "             ░░░░░              ",
  "           █▒░   ░░░░           ",
  "         ███  ░█    ░█          ",
  "        ▒██▓ ▒  ░▒▒▒░░░░        ",
  "        ▒█▓█████▓▒       ░▒     ",
  "        ▒█▓▓███████████████     ",
  "        ████▒ ▒████████▒        ",
  "        █▒░░                    ",
  "     ▒▒▒▒░░  ░░░░░░░░░░░░       ",
  "   ░░░    ░▓  ░░░░░░   ░░░░░    ",
  " ▒░░▒░▒▒░  ░              ░░░   ",
  " █▒▒▒░░░                    ░░  ",
  " ██▓▓▓▒▓▓░ ▒░ ░░░░░░░░░░░░░▒█▒  ",
  " ███████████▓▒▒▓▓▓▓▓▓▓██████    ",
  "  ████▓▓▓██████████████████     ",
  "                                "
];

type Props = {
  pose?: ClawdPose;
};

export function Clawd({ pose = "default" }: Props) {
  let lines = SMALL_DUCK;

  // Placeholder for pose changes
  if (pose === "look-left") {
    // Modify lines to show duck looking left
  } else if (pose === "look-right") {
    // Modify lines to show duck looking right
  }

  return (
    <Box flexDirection="column">
      {lines.map((line, i) => (
        <Text key={i} color="yellow">
          {line}
        </Text>
      ))}
    </Box>
  );
}