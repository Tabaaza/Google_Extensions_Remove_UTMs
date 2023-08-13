function removeUTMs(url) {
    const utmParams = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content'];
    const urlObject = new URL(url);
  
    utmParams.forEach(param => {
      urlObject.searchParams.delete(param);
    });
  
    return urlObject.toString();
  }
  
  // Get the current URL of the redirected page
  const currentUrl = window.location.href;
  
  // Remove UTMs from the current URL
  const cleanedUrl = removeUTMs(currentUrl);
  
  // Redirect the user to the cleaned URL
  window.location.href = cleanedUrl;