import { AbsoluteFill, Easing, Interactive, interpolate, useCurrentFrame } from "remotion";
import { Background, manrope, sora } from "../design";

const projects = [
  ["buffer.lol", 170, 168],
  ["7331.cloud", 1040, 185],
  ["IP Lens", 195, 610],
  ["Neon Tether", 1025, 615],
] as const;

export const OutroScene: React.FC = () => {
  const frame = useCurrentFrame();

  return (
    <AbsoluteFill style={{ opacity: interpolate(frame, [0, 12, 72, 85], [0, 1, 1, 0], { extrapolateLeft: "clamp", extrapolateRight: "clamp" }) }}>
      <Background />
      {projects.map(([project, left, top], index) => (
        <div
          key={project}
          style={{
            position: "absolute",
            left,
            top,
            padding: "12px 19px",
            border: "1px solid rgba(225,210,255,0.18)",
            borderRadius: 999,
            color: index === 2 ? "#81f3c5" : index === 1 ? "#88a2ff" : "#c5a9ff",
            background: "rgba(14,10,23,0.8)",
            fontFamily: manrope,
            fontSize: 16,
            fontWeight: 700,
            opacity: interpolate(frame, [4 + index * 5, 20 + index * 5], [0, 1], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
            }),
            translate: interpolate(frame, [4 + index * 5, 40 + index * 4], [index % 2 === 0 ? "-35px 0px" : "35px 0px", "0px 0px"], {
              easing: Easing.spring({ damping: 190 }),
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
            }),
          }}
        >
          {project}
        </div>
      ))}
      <Interactive.Div
        name="Closing headline"
        style={{
          position: "absolute",
          left: 190,
          right: 190,
          top: 245,
          color: "white",
          fontFamily: sora,
          fontSize: 96,
          fontWeight: 700,
          letterSpacing: "-0.06em",
          lineHeight: 1.04,
          textAlign: "center",
          opacity: interpolate(frame, [10, 28], [0, 1], {
            easing: Easing.bezier(0.16, 1, 0.3, 1),
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
          }),
          scale: interpolate(frame, [10, 28], [0.9, 1], {
            easing: Easing.spring({ damping: 200 }),
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            output: "perceptual-scale",
          }),
        }}
      >
        Useful digital products<span style={{ color: "#c5a9ff" }}>.</span>
      </Interactive.Div>
      <div
        style={{
          position: "absolute",
          left: 0,
          right: 0,
          top: 500,
          color: "#aaa0b7",
          fontFamily: manrope,
          fontSize: 25,
          fontWeight: 500,
          textAlign: "center",
          opacity: interpolate(frame, [25, 43], [0, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
          }),
        }}
      >
        Product engineering · web systems · native iPhone
      </div>
      <div
        style={{
          position: "absolute",
          left: 0,
          right: 0,
          bottom: 64,
          color: "white",
          fontFamily: manrope,
          fontSize: 30,
          fontWeight: 800,
          letterSpacing: "-0.05em",
          textAlign: "center",
        }}
      >
        lean<span style={{ color: "#c5a9ff" }}>.</span>
      </div>
    </AbsoluteFill>
  );
};
