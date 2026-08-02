import { AbsoluteFill, Easing, Img, Interactive, interpolate, staticFile, useCurrentFrame } from "remotion";
import { Background, FooterMark, SceneLabel, manrope, sora } from "../design";

export const NativeScene: React.FC = () => {
  const frame = useCurrentFrame();

  return (
    <AbsoluteFill>
      <Background accent="mint" />
      <SceneLabel index="03">Native iPhone products</SceneLabel>
      <Interactive.Div
        name="Native headline"
        style={{
          position: "absolute",
          left: 72,
          top: 156,
          width: 560,
          color: "white",
          fontFamily: sora,
          fontSize: 67,
          fontWeight: 700,
          letterSpacing: "-0.052em",
          lineHeight: 1.06,
          opacity: interpolate(frame, [0, 18], [0, 1], {
            easing: Easing.bezier(0.16, 1, 0.3, 1),
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
          }),
          translate: interpolate(frame, [0, 18], ["-28px 0px", "0px 0px"], {
            easing: Easing.bezier(0.16, 1, 0.3, 1),
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
          }),
        }}
      >
        Serious tools. Playful physics.
      </Interactive.Div>
      <div style={{ position: "absolute", left: 76, top: 420, width: 405, color: "#afa4bd", fontFamily: manrope, fontSize: 23, lineHeight: 1.6 }}>
        Privacy-minded utilities and one-thumb gameplay—built natively for the device in your hand.
      </div>
      <svg width="820" height="620" viewBox="0 0 820 620" style={{ position: "absolute", right: -30, top: 100, overflow: "visible" }}>
        <ellipse cx="410" cy="310" rx="340" ry="210" fill="none" stroke="rgba(129,243,197,0.16)" strokeWidth="2" transform="rotate(-12 410 310)" />
        <ellipse cx="410" cy="310" rx="255" ry="145" fill="none" stroke="rgba(197,169,255,0.16)" strokeWidth="2" transform="rotate(18 410 310)" />
        <circle cx="89" cy="393" r="7" fill="#81f3c5" style={{ filter: "drop-shadow(0 0 12px #81f3c5)" }} />
        <circle cx="636" cy="185" r="6" fill="#c5a9ff" style={{ filter: "drop-shadow(0 0 12px #9c72ff)" }} />
      </svg>
      <Interactive.Div
        name="IP Lens phone"
        style={{
          position: "absolute",
          left: 654,
          top: 165,
          width: 252,
          height: 546,
          padding: 7,
          borderRadius: 48,
          border: "1px solid rgba(225,210,255,0.24)",
          background: "#08070d",
          boxShadow: "0 32px 80px rgba(0,0,0,0.5), 0 0 50px rgba(129,243,197,0.08)",
          overflow: "hidden",
          opacity: interpolate(frame, [5, 24], [0, 1], {
            easing: Easing.bezier(0.16, 1, 0.3, 1),
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
          }),
          translate: interpolate(frame, [5, 24], ["0px 72px", "0px 0px"], {
            easing: Easing.spring({ damping: 180 }),
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
          }),
          rotate: interpolate(frame, [5, 24], ["-5deg", "-2deg"], {
            easing: Easing.spring({ damping: 180 }),
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
          }),
        }}
      >
        <Img name="IP Lens screen" src={staticFile("ip-lens/ip-lookup.png")} style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: 40 }} />
      </Interactive.Div>
      <Interactive.Div
        name="Neon Tether phone"
        style={{
          position: "absolute",
          left: 1002,
          top: 145,
          width: 264,
          height: 571,
          padding: 7,
          borderRadius: 50,
          border: "1px solid rgba(225,210,255,0.24)",
          background: "#08070d",
          boxShadow: "0 32px 80px rgba(0,0,0,0.5), 0 0 58px rgba(156,114,255,0.1)",
          overflow: "hidden",
          opacity: interpolate(frame, [14, 33], [0, 1], {
            easing: Easing.bezier(0.16, 1, 0.3, 1),
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
          }),
          translate: interpolate(frame, [14, 33], ["0px 80px", "0px 0px"], {
            easing: Easing.spring({ damping: 180 }),
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
          }),
          rotate: interpolate(frame, [14, 33], ["5deg", "2.5deg"], {
            easing: Easing.spring({ damping: 180 }),
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
          }),
        }}
      >
        <Img name="Neon Tether screen" src={staticFile("neon-tether/menu.png")} style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: 42 }} />
      </Interactive.Div>
      <div
        style={{
          position: "absolute",
          left: 578,
          top: 505,
          display: "flex",
          alignItems: "center",
          gap: 12,
          padding: "10px 16px 10px 11px",
          border: "1px solid rgba(129,243,197,0.25)",
          borderRadius: 18,
          background: "rgba(8,7,13,0.9)",
          opacity: interpolate(frame, [32, 48], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" }),
        }}
      >
        <Img src={staticFile("ip-lens/app-icon.png")} style={{ width: 42, height: 42, borderRadius: 11 }} />
        <span style={{ color: "white", fontFamily: manrope, fontSize: 15, fontWeight: 700 }}>IP Lens</span>
      </div>
      <div
        style={{
          position: "absolute",
          left: 1198,
          top: 240,
          display: "flex",
          alignItems: "center",
          gap: 12,
          padding: "10px 16px 10px 11px",
          border: "1px solid rgba(197,169,255,0.25)",
          borderRadius: 18,
          background: "rgba(8,7,13,0.9)",
          opacity: interpolate(frame, [42, 58], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" }),
        }}
      >
        <Img src={staticFile("neon-tether/app-icon.png")} style={{ width: 42, height: 42, borderRadius: 11 }} />
        <span style={{ color: "white", fontFamily: manrope, fontSize: 15, fontWeight: 700 }}>Neon Tether</span>
      </div>
      <FooterMark text="SWIFTUI · SPRITEKIT · LOCAL-FIRST" />
    </AbsoluteFill>
  );
};
