# Focus Tube: No Shorts

A small Chrome extension that removes Shorts from YouTube.

## Install (Chrome, Edge, Brave)

1. Unzip `focus-tube.zip`.
2. Open `chrome://extensions` and turn on **Developer mode** (top right).
3. Click **Load unpacked** and pick the unzipped `focus-tube` folder.
4. Open YouTube. Shorts are gone.

## What it does

- Hides the Shorts shelf, the Shorts button in the sidebar, the Shorts tab on channels, and any Short mixed into search, home or recommendations.
- Sends any `youtube.com/shorts/...` link to the YouTube home page instead of playing it.
- Study mode (click the extension icon): hide the home feed, and hide recommendations beside the video and on end screens.

## Notes

- YouTube changes its page markup from time to time. If a Short slips through, the selectors in `shorts.css` are the place to adjust.
- On a phone, Chrome for Android does not run extensions. Use Firefox for Android or Kiwi Browser, or the YouTube app's own timer settings.
