import {
  Alignments,
  LibrarySmells,
  MagentaSynth,
  SeasonalWheel,
  TheCrushMap,
} from "@images";

export const projects = [
  {
    name: "alignments",
    fileName: "alignments.md",
    type: "personal",
    stack: ["React", "Firebase", "Material UI"],
    description:
      "This is a simple web app that allows you to create and share custom alignment charts.",
    moreDetails:
      "During school, my friends and I would constantly make these silly alignment charts where we would create coordinate planes labelling the x and y axes things like extrovert/introvert + vampire/werewolf and then place ourselves somewhere along this plane. Now that we've graduated, I decided to make this alignment chart creator so we could continue sending them to each other for the lols.",
    link: "https://support.glitch.com/t/alignment-chart-maker/63001",
    image: Alignments,
    refName: "alignments",
  },
  {
    name: "the crush map.",
    fileName: "the_crush_map.md",
    type: "personal",
    description:
      "This is a simple web app for visualizing student crushes in the CU community.",
    stack: ["React", "Bootstrap", "CytoscapeJS", "Firebase"],
    image: TheCrushMap,
    link: "https://github.com/vanessa-vasquez/the-crush-map",
    refName: "crush",
  },
  {
    name: "Library Smells",
    fileName: "library_smells.md",
    type: "personal",
    description:
      "This is a silly web app meant to track what different CU libraries smell like at the moment.",
    stack: [
      "React",
      "Bootstrap",
      "Firebase",
      "Sightengine Text Moderation API",
    ],
    image: LibrarySmells,
    link: "https://github.com/vanessa-vasquez/Library-Smells",
    refName: "library",
  },
  {
    name: "magenta-synth",
    fileName: "magenta_synth.md",
    description:
      "magenta-synth is a basic synthesizer where users are able to create simple musical pieces and choose sections of these pieces to artificially compose using machine learning. It is a project which combines digital signal processing and automated composition.",
    type: "school",
    stack: ["JavaScript", "Web Audio API", "Magenta"],
    image: MagentaSynth,
    link: "https://github.com/vanessa-vasquez/magenta-synth",
    refName: "magenta",
  },
  {
    name: "Seasonal Wheel",
    fileName: "seasonal_wheel.md",
    description: "An electric paint project!",
    moreDetails:
      "This project utilizes the TTGO T-Display, electric paint, and an LED ring to make an interactive wall art display that toggles between different seasonal images. Interacting with the electrically painted carvings — the interactive surfaces — changes the image on the ESP32 display and the surrounding LED lights to those corresponding to that season. I use the PNGdec and Adafruit Neopixel libraries in order to program images onto the ESP32 and alter the lighting of the LED ring in the back.",
    type: "school",
    stack: ["C"],
    image: SeasonalWheel,
    link: "https://github.com/vanessa-vasquez/seasonal-wheel",
    refName: "seasonal",
  },
];
