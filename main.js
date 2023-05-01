clear(); // Browser output clear

// Simple logging
const Log = {
    Info: function(c) { console.log(c) },
    Warn: function(w) { console.warn(w) },
    NonfatalError: function(e) { console.warn(`Nonfatal error: ${e}.`); },
    FatalError: function(e) { console.error(`Fatal error: ${e}.`); }
}

function DoSafely(FuncName, f) {
    try {
        f();
    } catch(e) {
        Log.FatalError(`Failed to run ${FuncName}. Check output: ${e}.`);
    }
}

// aria-label="Timeline: Your Home Timeline"
// div[aria-label='Timeline: Your Home Timeline']
const TimelineWindow = document.querySelector(`div[aria-label='Timeline: Your Home Timeline']`);
// const BottomDockBar = document.querySelector();
const FeedTabBar = {
    'ForYou': document.querySelectorAll(`div[role='presentation']`)[1],
    'Following': document.querySelectorAll(`div[role='presentation']`)[2]
}
// Create Mirrored View of Timeline, Load Separate feeds and implement swipe gestures left-to-right

function LoadFeed(FeedType) {
    DoSafely('LoadFeed', function () {
        FeedTabBar[FeedType].children[0].click();
    });
}

LoadFeed("Following")
