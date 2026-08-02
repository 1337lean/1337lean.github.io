import { AbsoluteFill, Easing, Interactive, interpolate, useCurrentFrame } from "remotion";
import { Background, FooterMark, SceneLabel, manrope, sora } from "../design";

const tools = [
  ["dig", "DNS Lookup", "SERVER"],
  ["openssl", "SSL Checker", "SERVER"],
  ["jq", "JSON Formatter", "LOCAL"],
];

export const ToolsScene: React.FC = () => {
  const frame = useCurrentFrame();
  const typedLength = Math.max(0, Math.min(10, Math.floor((frame - 18) / 2)));

  return (
    <AbsoluteFill>
      <Background accent="purple" />
      <SceneLabel index="01">Open-web utility</SceneLabel>
      <div style={{ position: "absolute", left: 72, top: 205, width: 440 }}>
        <div style={{ color: "#c5a9ff", fontFamily: manrope, fontSize: 20, fontWeight: 700, marginBottom: 22 }}>
          buffer.lol
        </div>
        <Interactive.Div
          name="Tools headline"
          style={{
            color: "#ffffff",
            fontFamily: sora,
            fontSize: 72,
            fontWeight: 700,
            letterSpacing: "-0.055em",
            lineHeight: 1.05,
            opacity: interpolate(frame, [0, 18], [0, 1], {
              easing: Easing.bezier(0.16, 1, 0.3, 1),
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
            }),
            translate: interpolate(frame, [0, 18], ["-24px 0px", "0px 0px"], {
              easing: Easing.bezier(0.16, 1, 0.3, 1),
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
            }),
          }}
        >
          Find the right tool. Fast.
        </Interactive.Div>
        <div style={{ marginTop: 28, color: "#afa4bd", fontFamily: manrope, fontSize: 24, lineHeight: 1.55 }}>
          Network checks and developer utilities, clear about where the work runs.
        </div>
      </div>
      <Interactive.Div
        name="buffer.lol interface"
        style={{
          position: "absolute",
          left: 575,
          top: 142,
          width: 790,
          height: 520,
          border: "1px solid rgba(225,210,255,0.18)",
          borderRadius: 30,
          background: "rgba(14,10,23,0.88)",
          boxShadow: "0 35px 100px rgba(0,0,0,0.45), 0 0 70px rgba(156,114,255,0.08)",
          overflow: "hidden",
          opacity: interpolate(frame, [4, 24], [0, 1], {
            easing: Easing.bezier(0.16, 1, 0.3, 1),
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
          }),
          translate: interpolate(frame, [4, 24], ["60px 24px", "0px 0px"], {
            easing: Easing.bezier(0.16, 1, 0.3, 1),
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
          }),
          rotate: interpolate(frame, [4, 24], ["2.5deg", "0deg"], {
            easing: Easing.spring({ damping: 200 }),
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
          }),
        }}
      >
        <div style={{ height: 66, display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 26px", borderBottom: "1px solid rgba(225,210,255,0.11)" }}>
          <span style={{ color: "white", fontFamily: manrope, fontSize: 22, fontWeight: 800 }}>buffer<span style={{ color: "#c5a9ff" }}>.lol</span></span>
          <span style={{ color: "#85798f", fontFamily: manrope, fontSize: 13, letterSpacing: "0.08em" }}>NETWORKING · DEVELOPER · SEARCH</span>
        </div>
        <div style={{ padding: "36px 34px" }}>
          <div style={{ display: "flex", alignItems: "center", height: 78, padding: "0 24px", border: "1px solid rgba(197,169,255,0.32)", borderRadius: 18, background: "rgba(156,114,255,0.08)", boxShadow: "0 0 34px rgba(156,114,255,0.08)" }}>
            <span style={{ color: "#c5a9ff", fontFamily: manrope, fontSize: 28, marginRight: 18 }}>⌕</span>
            <span style={{ color: "#ffffff", fontFamily: manrope, fontSize: 23, fontWeight: 600 }}>
              {"dns lookup".slice(0, typedLength)}
              <span style={{ opacity: frame % 12 < 6 ? 1 : 0, color: "#c5a9ff" }}>│</span>
            </span>
            <span style={{ marginLeft: "auto", color: "#776d84", fontFamily: manrope, fontSize: 14 }}>⌘ K</span>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 14, marginTop: 26 }}>
            {tools.map(([command, title, locality], index) => (
              <div
                key={title}
                style={{
                  height: 228,
                  padding: 22,
                  border: "1px solid rgba(225,210,255,0.11)",
                  borderRadius: 18,
                  background: index === 0 ? "linear-gradient(145deg, rgba(156,114,255,0.18), rgba(20,14,34,0.7))" : "rgba(20,14,34,0.62)",
                  opacity: interpolate(frame, [30 + index * 7, 45 + index * 7], [0, 1], {
                    extrapolateLeft: "clamp",
                    extrapolateRight: "clamp",
                    easing: Easing.bezier(0.16, 1, 0.3, 1),
                  }),
                  translate: interpolate(frame, [30 + index * 7, 45 + index * 7], ["0px 24px", "0px 0px"], {
                    extrapolateLeft: "clamp",
                    extrapolateRight: "clamp",
                    easing: Easing.bezier(0.16, 1, 0.3, 1),
                  }),
                }}
              >
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <span style={{ color: "#c5a9ff", fontFamily: manrope, fontSize: 15, fontWeight: 700 }}>{command}</span>
                  <span style={{ color: locality === "LOCAL" ? "#81f3c5" : "#81758e", fontFamily: manrope, fontSize: 10, letterSpacing: "0.1em" }}>{locality}</span>
                </div>
                <div style={{ marginTop: 72, color: "white", fontFamily: sora, fontSize: 22, fontWeight: 600, lineHeight: 1.2 }}>{title}</div>
                <div style={{ marginTop: 14, width: 36, height: 2, background: index === 0 ? "#c5a9ff" : "rgba(225,210,255,0.2)" }} />
              </div>
            ))}
          </div>
        </div>
      </Interactive.Div>
      <FooterMark text="SEARCHABLE · LOCAL-AWARE" />
    </AbsoluteFill>
  );
};
