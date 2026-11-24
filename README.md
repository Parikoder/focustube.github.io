# Focus Tube website

Landing page for the Focus Tube Chrome extension: video, download and four setup steps.

Static site, no build step. Deploy on Vercel with the framework preset "Other" and the root directory as the project root.

Add the demo video as `focus-tube-video.mp4` next to `index.html`. The page plays it first and falls back to a temporary link that expires.

## Extension source

The Chrome extension itself is in `extension/`. To try it without the zip, open `chrome://extensions`, turn on Developer mode, click Load unpacked and pick that folder.
