chrome.alarms.onAlarm.addListener((alarm) => {

    // https://developer.chrome.com/docs/extensions/reference/api/action
    chrome.action.setBadgeTextColor({ color: "#FFFFFF" });
    chrome.action.setBadgeBackgroundColor({ color: "#4287f5" });
    chrome.action.setBadgeText({ text: "NOW" });
    console.log(alarm);
});