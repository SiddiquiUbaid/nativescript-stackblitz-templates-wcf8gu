export function onPageLoaded(args) {
  console.log('Page Loaded');
}

function onTap(args) {
  const button = args.object;
  const page = button.page;
  page.frame.goBack();
}
//exports.onTap = onTap;
