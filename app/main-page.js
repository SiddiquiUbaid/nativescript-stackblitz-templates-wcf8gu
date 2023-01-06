function onTap(args) {
  const button = args.object;
  const page = button.page;

  
   console.log('trying to open home page ')
   page.frame.navigate('home/home')
  //  {moduleName: 'home/home'}
  // page.frame.navigate('main-page');
}
exports.onTap = onTap;
