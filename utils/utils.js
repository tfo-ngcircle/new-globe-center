export function navigateFullpage(e, path) {
  e.preventDefault();
  window.window.fullpage_api.moveTo(path, 0);
}
