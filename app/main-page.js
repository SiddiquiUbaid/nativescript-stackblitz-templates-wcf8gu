const frameModule = require('ui/frame');

function onTap(args) {
  const button = args.object;
  const page = button.page;

  frameModule.topmost().navigate({
    moduleName: 'home/home',
    clearHistory: true,
  });

  // console.log('trying to open home page ' + page.frame.navigate('home/home'));
  // page.frame.navigate('main-page');
}
exports.onTap = onTap;
