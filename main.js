// Twitter logging kill (disable if having issues)
var log = console.log.bind({});
var warn = console.warn.bind({});
var error = console.error.bind({});
console.log = function() {};
console.warn = function() {};
console.error = function() {};

// Simple logging
var Log = {
    Info: function(c) { log(c) },
    Warn: function(w) { warn(w) },
    NonfatalError: function(e) { warn(`Nonfatal error: ${e}.`); },
    FatalError: function(e) { error(`Fatal error: ${e}.`); }
}

function DoSafely(FuncName, f) {
    try {
        f();
    } catch(e) {
        // Can indicate breaking changes
        Log.FatalError(`Failed to run ${FuncName}. Check output: ${e}.`);
    }
}

// aria-label="Timeline: Your Home Timeline"
// div[aria-label='Timeline: Your Home Timeline']
var TimelineWindow = document.querySelector(`div[aria-label='Timeline: Your Home Timeline']`);
// var BottomDockBar = document.querySelector();
var FeedTabBar = {
    'ForYou': document.querySelectorAll(`div[role='presentation']`)[1],
    'Following': document.querySelectorAll(`div[role='presentation']`)[2]
}
// Create Mirrored View of Timeline, Load Separate feeds and implement swipe gestures left-to-right

var TwitterWeb = {
    Settings: {
        DefaultFeedEnabled: false,
        DefaultFeed: "Following"
    }
}

TwitterWeb.Functions = {
    LoadFeed: function (FeedType) { // FeedType: ForYou/Following
        DoSafely('LoadFeed', function () {
            FeedTabBar[FeedType].children[0].click();
        });
    }
}

// Initialize
function Initialize() {

    window.clear();

    if (TwitterWeb.Settings.DefaultFeedEnabled) {
        TwitterWeb.Functions.LoadFeed(TwitterWeb.Settings.DefaultFeed)
    }

    Log.Info("Loaded TwitterWeb.");

}
Initialize();
