import WebFont from 'webfontloader';
const fontUrl = require('./assets/font.css');
// require();
// alert(fontUrl);

// alert(font)
// // WebFontConfig = {
// //   custom: {
// //     families: ['My Font', 'My Other Font:n4,i4,n7'],
// //     urls: ['/fonts.css']
// //   }
// // };
WebFont.load({
  custom: {
    families: ['My Font', 'My Other Font:n4,i4,n7'],
    urls: [fontUrl]
    // urls: ['/fonts.css']
  }
});
