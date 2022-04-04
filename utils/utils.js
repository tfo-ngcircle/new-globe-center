export function navigateFullpage(e, handle = "landing") {
  const target = e.target.getAttribute("href");
  e.preventDefault();
  window.window.fullpage_api.moveTo(target?.slice(2) || handle, 0);
}
