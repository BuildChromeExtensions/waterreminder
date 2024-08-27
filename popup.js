// when the page is open remove the badge text
chrome.action.setBadgeText({ text: "" })

document.querySelector('form').onsubmit = (e) => {
    e.preventDefault();
    const start = e.target.start.value;
    const repeat = e.target.repeat.value;

    // validation check
    if (!start || !repeat) return alert('Please set start time and repeat interval');

    const date = new Date(start);
    const periodInMinutes = parseInt(repeat);
    const when = date.getTime();

    // if you want it to run once do NOT include 'periodInMinutes'
    chrome.alarms.create('water', { when: when, periodInMinutes: periodInMinutes }, () => alert('Water Reminder Set'));
}

// clearing alarm
document.getElementById('clear').onclick = (e) => {
    chrome.alarms.clear('water', (wasCleared) => {
        if (wasCleared) {
            // https://developer.chrome.com/docs/extensions/reference/api/action
            chrome.action.setBadgeText({ text: "" })
        }
    });
}