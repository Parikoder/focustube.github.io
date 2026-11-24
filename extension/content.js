// Focus Tube: keeps Shorts out of YouTube, including in-page navigation.

function leaveShorts() {
  if (/^\/shorts(\/|$)/.test(location.pathname)) {
    location.replace(location.origin + "/");
  }
}

// YouTube changes pages without reloading, so the redirect rule alone
// cannot catch every route into Shorts. Check on every navigation.
leaveShorts();
window.addEventListener("yt-navigate-start", leaveShorts);
window.addEventListener("yt-navigate-finish", leaveShorts);
window.addEventListener("popstate", leaveShorts);
setInterval(leaveShorts, 500);

// Study mode toggles
const DEFAULTS = { noHome: false, noRelated: false };

function applySettings(s) {
  const root = document.documentElement;
  root.classList.toggle("ft-no-home", !!s.noHome);
  root.classList.toggle("ft-no-related", !!s.noRelated);
}

chrome.storage.sync.get(DEFAULTS, applySettings);
chrome.storage.onChanged.addListener(() => {
  chrome.storage.sync.get(DEFAULTS, applySettings);
});
