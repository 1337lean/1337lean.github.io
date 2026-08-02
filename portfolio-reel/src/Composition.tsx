import { Composition, Folder } from "remotion";
import { TransitionSeries, linearTiming } from "@remotion/transitions";
import { fade } from "@remotion/transitions/fade";
import { IntroScene } from "./scenes/IntroScene";
import { ToolsScene } from "./scenes/ToolsScene";
import { CloudScene } from "./scenes/CloudScene";
import { NativeScene } from "./scenes/NativeScene";
import { OutroScene } from "./scenes/OutroScene";

export const PortfolioReel: React.FC = () => {
  return (
    <TransitionSeries>
      <TransitionSeries.Sequence durationInFrames={78} premountFor={30} name="Brand reveal">
        <IntroScene />
      </TransitionSeries.Sequence>
      <TransitionSeries.Transition presentation={fade()} timing={linearTiming({ durationInFrames: 15 })} />
      <TransitionSeries.Sequence durationInFrames={82} premountFor={30} name="buffer.lol">
        <ToolsScene />
      </TransitionSeries.Sequence>
      <TransitionSeries.Transition presentation={fade()} timing={linearTiming({ durationInFrames: 15 })} />
      <TransitionSeries.Sequence durationInFrames={82} premountFor={30} name="7331.cloud">
        <CloudScene />
      </TransitionSeries.Sequence>
      <TransitionSeries.Transition presentation={fade()} timing={linearTiming({ durationInFrames: 15 })} />
      <TransitionSeries.Sequence durationInFrames={92} premountFor={30} name="Native iPhone apps">
        <NativeScene />
      </TransitionSeries.Sequence>
      <TransitionSeries.Transition presentation={fade()} timing={linearTiming({ durationInFrames: 15 })} />
      <TransitionSeries.Sequence durationInFrames={86} premountFor={30} name="Closing lockup">
        <OutroScene />
      </TransitionSeries.Sequence>
    </TransitionSeries>
  );
};

export const ReelCompositions: React.FC = () => {
  return (
    <>
      <Composition id="PortfolioReel" component={PortfolioReel} durationInFrames={360} fps={30} width={1440} height={810} />
      <Folder name="Scenes">
        <Composition id="BrandReveal" component={IntroScene} durationInFrames={78} fps={30} width={1440} height={810} />
        <Composition id="BufferTools" component={ToolsScene} durationInFrames={82} fps={30} width={1440} height={810} />
        <Composition id="CloudUpload" component={CloudScene} durationInFrames={82} fps={30} width={1440} height={810} />
        <Composition id="NativeApps" component={NativeScene} durationInFrames={92} fps={30} width={1440} height={810} />
        <Composition id="ClosingLockup" component={OutroScene} durationInFrames={86} fps={30} width={1440} height={810} />
      </Folder>
    </>
  );
};
