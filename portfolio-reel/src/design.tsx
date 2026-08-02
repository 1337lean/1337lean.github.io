import { loadFont as loadManrope } from "@remotion/google-fonts/Manrope";
import { loadFont as loadSora } from "@remotion/google-fonts/Sora";
import { AbsoluteFill, interpolate, useCurrentFrame } from "remotion";

export const { fontFamily: manrope } = loadManrope("normal", {
  weights: ["400", "500", "600", "700", "800"],
  subsets: ["latin"],
});

export const { fontFamily: sora } = loadSora("normal", {
  weights: ["500", "600", "700", "800"],
  subsets: ["latin"],
});

const particles = [
  [110, 140, 4], [220, 665, 3], [345, 92, 2], [480, 720, 4], [620, 155, 3],
  [765, 690, 2], [910, 108, 4], [1040, 735, 3], [1195, 175, 2], [1320, 622, 4],
  [75, 420, 2], [1370, 320, 3], [545, 400, 2], [835, 350, 3], [1135, 485, 2],
];

export const Background: React.FC<{ accent?: "purple" | "blue" | "mint" }> = ({ accent = "purple" }) => {
  const frame = useCurrentFrame();
  const glow = accent === "blue" ? "#5575ff" : accent === "mint" ? "#56e4b0" : "#8f5cff";

  return (
    <AbsoluteFill
      name="Atmosphere"
      style={{
        backgroundColor: "#08050e",
        backgroundImage:
          "linear-gradient(rgba(225,210,255,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(225,210,255,0.035) 1px, transparent 1px), radial-gradient(circle at 50% 46%, rgba(84,48,148,0.2), transparent 55%)",
        backgroundSize: "72px 72px, 72px 72px, auto",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "absolute",
          width: 720,
          height: 720,
          left: -210,
          top: -260,
          borderRadius: "50%",
          background: glow,
          filter: "blur(150px)",
          opacity: 0.16,
          translate: interpolate(frame, [0, 100], ["0px 0px", "70px 45px"], {
            extrapolateLeft: "clamp",
            extrapolateRight: "extend",
          }),
        }}
      />
      <div
        style={{
          position: "absolute",
          width: 620,
          height: 620,
          right: -170,
          bottom: -250,
          borderRadius: "50%",
          background: accent === "mint" ? "#537dff" : "#5e72ff",
          filter: "blur(145px)",
          opacity: 0.12,
          translate: interpolate(frame, [0, 100], ["0px 0px", "-55px -35px"], {
            extrapolateLeft: "clamp",
            extrapolateRight: "extend",
          }),
        }}
      />
      {particles.map(([left, top, size], index) => (
        <div
          key={`${left}-${top}`}
          style={{
            position: "absolute",
            left,
            top,
            width: size,
            height: size,
            borderRadius: "50%",
            background: index % 3 === 0 ? "#c5a9ff" : "#ffffff",
            boxShadow: index % 3 === 0 ? "0 0 18px #9c72ff" : "none",
            opacity: interpolate(frame, [0, 22 + index, 52 + index], [0.08, 0.55, 0.16], {
              extrapolateLeft: "clamp",
              extrapolateRight: "extend",
            }),
          }}
        />
      ))}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: "radial-gradient(rgba(255,255,255,0.12) 0.55px, transparent 0.7px)",
          backgroundSize: "5px 5px",
          opacity: 0.08,
        }}
      />
    </AbsoluteFill>
  );
};

export const SceneLabel: React.FC<{ index: string; children: React.ReactNode }> = ({ index, children }) => (
  <div
    style={{
      position: "absolute",
      top: 60,
      left: 72,
      display: "flex",
      alignItems: "center",
      gap: 16,
      color: "#b8acc8",
      fontFamily: manrope,
      fontSize: 17,
      fontWeight: 700,
      letterSpacing: "0.12em",
      textTransform: "uppercase",
    }}
  >
    <span style={{ color: "#c5a9ff" }}>{index}</span>
    <span style={{ width: 42, height: 1, background: "rgba(225,210,255,0.28)" }} />
    {children}
  </div>
);

export const FooterMark: React.FC<{ text: string }> = ({ text }) => (
  <div
    style={{
      position: "absolute",
      right: 72,
      bottom: 48,
      color: "rgba(225,210,255,0.45)",
      fontFamily: manrope,
      fontSize: 15,
      fontWeight: 600,
      letterSpacing: "0.08em",
    }}
  >
    {text}
  </div>
);
