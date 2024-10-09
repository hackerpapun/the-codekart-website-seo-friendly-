const RedirectToNewTab = ({url,children}) => {
  const hasProtocol = /^https?:\/\//i.test(url);

  const completeUrl = hasProtocol ? url : `https://${url}`;
  // return completeUrl
  return <a href={completeUrl} target="_blank">
    {children}
  </a>
  // window.open(completeUrl, "_blank");
};

export { RedirectToNewTab };