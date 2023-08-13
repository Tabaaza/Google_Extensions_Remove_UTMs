// popup.js

document.getElementById('removeUTMs').addEventListener('click', async function() {
  const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

  // Inject the content script into the active tab
  await chrome.scripting.executeScript({
    target: { tabId: tab.id },
    function: removeUTMs
  });
});

// The removeUTMs function should be defined here as well
function removeUTMs() {
  const utmParams = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content', 'utm_name'];
  const urlObject = new URL(window.location.href);

  utmParams.forEach(param => {
    urlObject.searchParams.delete(param);
  });

  return urlObject.toString();
}
