import { AbsoluteFill, Easing, Interactive, interpolate, useCurrentFrame } from "remotion";
import { Background, FooterMark, SceneLabel, manrope, sora } from "../design";

export const CloudScene: React.FC = () => {
  const frame = useCurrentFrame();

  return (
    <AbsoluteFill>
      <Background accent="blue" />
      <SceneLabel index="02">Image-hosting platform</SceneLabel>
      <Interactive.Div
        name="7331.cloud upload interface"
        style={{
          position: "absolute",
          left: 72,
          top: 148,
          width: 755,
          height: 518,
          border: "1px solid rgba(225,210,255,0.17)",
          borderRadius: 30,
          background: "rgba(11,9,20,0.9)",
          boxShadow: "0 36px 110px rgba(0,0,0,0.45), 0 0 80px rgba(83,117,255,0.08)",
          overflow: "hidden",
          opacity: interpolate(frame, [0, 20], [0, 1], {
            easing: Easing.bezier(0.16, 1, 0.3, 1),
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
          }),
          translate: interpolate(frame, [0, 20], ["-50px 20px", "0px 0px"], {
            easing: Easing.bezier(0.16, 1, 0.3, 1),
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
          }),
        }}
      >
        <div style={{ height: 68, display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 28px", borderBottom: "1px solid rgba(225,210,255,0.1)" }}>
          <span style={{ color: "white", fontFamily: manrope, fontSize: 22, fontWeight: 800 }}>7331<span style={{ color: "#88a2ff" }}>.cloud</span></span>
          <span style={{ color: "#817891", fontFamily: manrope, fontSize: 13, letterSpacing: "0.08em" }}>UPLOAD · CLI · SECURITY</span>
        </div>
        <div style={{ padding: "32px 34px" }}>
          <div style={{ height: 260, border: "1px dashed rgba(136,162,255,0.45)", borderRadius: 22, background: "radial-gradient(circle at 50% 50%, rgba(83,117,255,0.12), transparent 64%)", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
            <div
              style={{
                width: 66,
                height: 66,
                borderRadius: 20,
                background: "linear-gradient(145deg, #91a8ff, #8e5cff)",
                display: "grid",
                placeItems: "center",
                color: "white",
                fontFamily: manrope,
                fontSize: 34,
                fontWeight: 500,
                boxShadow: "0 18px 46px rgba(83,117,255,0.27)",
                translate: interpolate(frame, [8, 30], ["0px -62px", "0px 0px"], {
                  easing: Easing.spring({ damping: 180 }),
                  extrapolateLeft: "clamp",
                  extrapolateRight: "clamp",
                }),
                rotate: interpolate(frame, [8, 30], ["-10deg", "0deg"], {
                  easing: Easing.spring({ damping: 180 }),
                  extrapolateLeft: "clamp",
                  extrapolateRight: "clamp",
                }),
              }}
            >
              +
            </div>
            <div style={{ color: "white", fontFamily: sora, fontSize: 24, fontWeight: 600, marginTop: 20 }}>Drop. Share. Done.</div>
            <div style={{ color: "#8f849d", fontFamily: manrope, fontSize: 15, marginTop: 10 }}>image.png · 2.4 MB</div>
            <div style={{ width: 390, height: 5, marginTop: 24, borderRadius: 999, background: "rgba(225,210,255,0.1)", overflow: "hidden" }}>
              <div
                style={{
                  width: `${interpolate(frame, [24, 50], [0, 100], { extrapolateLeft: "clamp", extrapolateRight: "clamp", easing: Easing.bezier(0.16, 1, 0.3, 1) })}%`,
                  height: "100%",
                  borderRadius: 999,
                  background: "linear-gradient(90deg, #8e5cff, #91a8ff)",
                  boxShadow: "0 0 18px #6d7cff",
                }}
              />
            </div>
          </div>
          <div style={{ height: 94, marginTop: 22, padding: "0 22px", borderRadius: 17, border: "1px solid rgba(225,210,255,0.12)", background: "#08070d", display: "flex", flexDirection: "column", justifyContent: "center" }}>
            <span style={{ color: "#716a7d", fontFamily: manrope, fontSize: 12, letterSpacing: "0.08em" }}>7331 CLI · GO</span>
            <code style={{ color: "#ddd2ec", fontFamily: "SFMono-Regular, Menlo, monospace", fontSize: 16, marginTop: 12 }}>
              <span style={{ color: "#88a2ff" }}>$</span> 7331 upload image.png
              <span style={{ marginLeft: 18, color: "#81f3c5", opacity: interpolate(frame, [47, 58], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" }) }}>↗ i.7331.cloud/a8F3k.png</span>
            </code>
          </div>
        </div>
      </Interactive.Div>
      <div style={{ position: "absolute", left: 900, top: 225, width: 445 }}>
        <div style={{ color: "#88a2ff", fontFamily: manrope, fontSize: 20, fontWeight: 700, marginBottom: 22 }}>7331.cloud</div>
        <Interactive.Div
          name="Cloud headline"
          style={{
            color: "white",
            fontFamily: sora,
            fontSize: 70,
            fontWeight: 700,
            letterSpacing: "-0.055em",
            lineHeight: 1.07,
            opacity: interpolate(frame, [10, 28], [0, 1], {
              easing: Easing.bezier(0.16, 1, 0.3, 1),
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
            }),
            translate: interpolate(frame, [10, 28], ["28px 0px", "0px 0px"], {
              easing: Easing.bezier(0.16, 1, 0.3, 1),
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
            }),
          }}
        >
          Upload once. Share anywhere.
        </Interactive.Div>
        <div style={{ marginTop: 28, color: "#afa4bd", fontFamily: manrope, fontSize: 24, lineHeight: 1.55 }}>
          Durable storage, direct links, and a cross-platform terminal workflow.
        </div>
      </div>
      <FooterMark text="FAST · EXPLICIT · EPHEMERAL" />
    </AbsoluteFill>
  );
};
