export function onPageLoaded(args) {
  console.log('Page Loaded');
   
}

export function onTap(args) {
  const button = args.object;
  const page = button.page;
  page.frame.navigate('main-page')

  console.log('going  back to main page' + page)


}


//exports.onTap = onTap;

// function onTap(args) {
//   const button = args.object;
//   const page = button.page;

  


//    console.log('trying to open home page: ' + page.frame.navigate({moduleName: 'main-page'}));
//   // page.frame.navigate('main-page');
// }

// hjjhj jhnjkhjl
