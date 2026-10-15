// The main site's app bar: no sign-in of its own. The shared chadmurchison.com cookies
// (chadm-session.js, never tokens) say whether someone is signed in on this browser; Log in,
// Sign up and Sign out go through the library (see the *-href attributes in index.html).
import './chadm-appbar.js';
import { sharedSession } from './chadm-session.js';

function render() {
  const s = sharedSession();
  for (const bar of document.querySelectorAll('chadm-appbar')) {
    try {
      bar.configure({
        user: s.signedIn ? { email: s.email || 'your chadmurchison.com account' } : null,
        items: s.signedIn ? [
          { label: "Alexandrea's Library", href: 'https://library.chadmurchison.com/' },
          { label: 'Duki', href: 'https://duki.chadmurchison.com/' },
        ] : [],
      });
    } catch (e) { console.error('app bar', e); }
  }
}
render();
// Signed in or out in another tab/app meanwhile
document.addEventListener('visibilitychange', () => { if (!document.hidden) render(); });
