import { AbsoluteFill, Easing, Interactive, interpolate, useCurrentFrame } from "remotion";
import { Background, FooterMark, manrope, sora } from "../design";

export const IntroScene: React.FC = () => {
  const frame = useCurrentFrame();

  return (
    <AbsoluteFill>
      <Background />
      <div
        style={{
          position: "absolute",
          left: 720,
          top: 405,
          width: 700,
          height: 700,
          border: "1px solid rgba(197,169,255,0.14)",
          borderRadius: "50%",
          translate: "-350px -350px",
          rotate: interpolate(frame, [0, 78], ["-12deg", "8deg"], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
          }),
        }}
      >
        <div
          style={{
            position: "absolute",
            width: 14,
            height: 14,
            left: 75,
            top: 154,
            borderRadius: "50%",
            background: "#c5a9ff",
            boxShadow: "0 0 28px #9c72ff",
          }}
        />
      </div>
      <Interactive.Div
        name="Wordmark"
        style={{
          position: "absolute",
          left: 0,
          right: 0,
          top: 223,
          color: "#ffffff",
          fontFamily: manrope,
          fontSize: 214,
          fontWeight: 800,
          letterSpacing: "-0.07em",
          lineHeight: 1,
          textAlign: "center",
          opacity: interpolate(frame, [0, 19], [0, 1], {
            easing: Easing.bezier(0.16, 1, 0.3, 1),
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
          }),
          scale: interpolate(frame, [0, 24], [0.84, 1], {
            easing: Easing.spring({ damping: 200 }),
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            output: "perceptual-scale",
          }),
          translate: interpolate(frame, [0, 24], ["0px 38px", "0px 0px"], {
            easing: Easing.bezier(0.16, 1, 0.3, 1),
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
          }),
        }}
      >
        lean<span style={{ color: "#c5a9ff" }}>.</span>
      </Interactive.Div>
      <Interactive.Div
        name="Builder statement"
        style={{
          position: "absolute",
          left: 0,
          right: 0,
          top: 485,
          color: "#b8acc8",
          fontFamily: sora,
          fontSize: 31,
          fontWeight: 600,
          letterSpacing: "-0.025em",
          textAlign: "center",
          opacity: interpolate(frame, [16, 34], [0, 1], {
            easing: Easing.bezier(0.16, 1, 0.3, 1),
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
          }),
          translate: interpolate(frame, [16, 34], ["0px 20px", "0px 0px"], {
            easing: Easing.bezier(0.16, 1, 0.3, 1),
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
          }),
        }}
      >
        From fuzzy idea to dependable software.
      </Interactive.Div>
      <div
        style={{
          position: "absolute",
          left: 550,
          right: 550,
          top: 558,
          height: 2,
          background: "linear-gradient(90deg, transparent, #9c72ff, transparent)",
          opacity: interpolate(frame, [28, 46], [0, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
          }),
          scale: interpolate(frame, [28, 46], [0.1, 1], {
            easing: Easing.bezier(0.16, 1, 0.3, 1),
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            output: "perceptual-scale",
          }),
        }}
      />
      <FooterMark text="PRODUCT · SYSTEMS · NATIVE" />
    </AbsoluteFill>
  );
};
