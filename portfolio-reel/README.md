# lean portfolio reel

The editable Remotion source for the twelve-second systems reel embedded on
the portfolio home page. The composition uses the portfolio's Sora/Manrope
typography, purple visual system, and real IP Lens and Neon Tether assets.

## Storyboard

1. `lean.` brand reveal
2. buffer.lol search and tool results
3. 7331.cloud upload and CLI response
4. IP Lens and Neon Tether native-app showcase
5. Useful digital products closing lockup

The scene components live in `src/scenes/` and are also registered separately
in Remotion Studio for easier editing. `PortfolioReel` is 1440 × 810, 30 fps,
and 360 frames.

## Preview

```console
npm install
npm run dev
```

Open `http://localhost:3000/PortfolioReel`.

## Render site assets

```console
npm run render:site
```

This writes the H.264 fallback, VP9 WebM, and poster image to
`../assets/reel/`. The portfolio embeds those outputs with a native `<video>`
element; it does not ship React or the Remotion runtime.

Run `npm run lint` after editing the composition.
