clear(); // Browser output clear

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
    FeedTabBar[FeedType].children[0].click(); // <a>.click();
}

LoadFeed("Following")
