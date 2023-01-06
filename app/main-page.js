function onTap(args) {
  const button = args.object;
  const page = button.page;
  page.frame.navigate("home");
}
exports.onTap = onTap;