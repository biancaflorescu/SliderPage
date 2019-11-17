$('.carousel').carousel({
  interval: 3000,
  pause: "hover",
  touch: true
});

// Opera 8.0+ (UA detection to detect Blink/v8-powered Opera)
isOpera = !!window.opera || navigator.userAgent.indexOf(' OPR/') >= 0;
// Firefox 1.0+
isFirefox = typeof InstallTrigger !== 'undefined';
// Safari 3.0+
isSafari = /constructor/i.test(window.HTMLElement) || (function (p) { return p.toString() === "[object SafariRemoteNotification]"; })(!window['safari'] || safari.pushNotification);
// Internet Explorer 6-11
isIE = /*@cc_on!@*/false || !!document.documentMode;
// Edge 20+
isEdge = !isIE && !!window.StyleMedia;
// Chrome 1+
isChrome = !!window.chrome;

function browserChange (textId, textContent) {
  document.getElementById(textId).textContent = textContent;
}

if (isChrome) {
  browserChange("browserChange1", "Athleisure is the trend that keeps giving, and its latest offering is as unexpected as it is stylish. The bike shorts were worn with blazerss by many style-savvy showgoerss this fashion month.");
  browserChange("browserChange2", "Patchwork is no longer just a craft that your grandma enjoys. It’s also one of fashion’s latest trends. Spotted on the streets outside fashion shows from Paris to New York, patchwork appeared on dresses, jumpsuits.");
} else 
if (isIE) {
  browserChange("browserChange1", "These outfits may not be appropriate for either the office or the gym, the outfit is perfect for strutting the streets or attending Sunday brunch with your best friends. So, don’t be afraid to try it for yourself.");
  browserChange("browserChange2", "As colourful as it is creative, the look sews together contrasting pieces of fabric to achieve an eclectic and eye-catching design. To rock the look yourself, allow your patchwork piece to be the focus of your outfit.");
} else if (isFirefox) {
  browserChange("browserChange1", "Arguably this season’s most unlikely match, fashion’s forward-thinkers are taking hi/lo dressing to another level and pairing their power blazers with cycling shorts. Seeing is believing, and this is one strong look.");
  browserChange("browserChange2", "At September’s New York Fashion Week, designers like Alice + Olivia, Diane Von Furstenberg and Libertine took patchwork clothes and elevated them, puting patchwork’s place in the realm of 2019 fashion trends.");
} else if (isOpera) {
  browserChange("browserChange1", "It’s all about balance, the blazer has to be oversized in order to offset those sporty, second-skin shorts, and the boxier the cut, the better. Color? Keep it monochrome. Accessories? Matrix-style sunglasses.");
  browserChange("browserChange2", "The trick of wearing patchwork is to keep your outfit fairly basic. Do not overdo your outfit. It's not the most easiest style to combine with your everyday clothes.");
} else if (isSafari) {
  browserChange("browserChange1", "Let this be the season we all try something a little new. Whether that be pairing bike shorts with a brightly colored blazer or denim cut-offs with a plaid one, let yourself mix and match this season.");
  browserChange("browserChange2", "As an expression of traditional crafts, patchwork and quilting add a rustic element to fashion. Designers have found new ways to incorporate the look, elevating the style to reflect the level of handiwork.");
} else if (isEdge) {
  browserChange("browserChange1", "With the right styling tricks, the bike short can just as easily be made to look elegant and polished as casual and cool. Look to the countless influencers and celebrities that are cosigning the trend for proof.");
  browserChange("browserChange2", "Patchwork squares appeared slapped on jeans and coats in paisley and herringbone, adding texture and patterns, quickly becoming one of the most surprising trends we’ve seen on the street this year.");
}
  else {
  browserChange("browserChange1", "If you're looking for the easiest way to wear the trend, an oversized blazer and bike shorts is a go-to combo for fashion girls now. Add a pair of low heels and it's practically office-appropriate.");
  browserChange("browserChange2", "If you want to get in on the patchwork penchant yourself, look to brands such as Sacai, Junya Watanabe, Kapital and Craig Green, who have all been doing it for ever.");
}