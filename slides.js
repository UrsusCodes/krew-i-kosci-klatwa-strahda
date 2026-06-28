/* Krew i Kości — The Amber Temple. Data for engine.js.
   AMBIENT = quiet, continuous background (does NOT reset on slide change).
   slide.narr = per-slide narration. */

const AMBIENT = 'audio/ambient.mp3';
const IMG = 'img/', AUD = 'audio/';
const A1 = 'The Amber Vaults';
const A2 = 'The Three Imprisoned Gods';

const SLIDES = [
  { kind:'title', act:'Curse of Strahd', dur:7000,
    title:'The Amber Temple', text:'Voices sealed in amber.' },

  { kind:'image', act:A1, image:IMG+'fekre.jpg',         narr:AUD+'fekre.mp3',         kb:'out', dur:60000, title:'Fekre',           text:'Queen of Poxes' },
  { kind:'image', act:A1, image:IMG+'zrin-hala.jpg',     narr:AUD+'zrin-hala.mp3',     kb:'out', dur:60000, title:'Zrin-Hala',       text:'The Howling Storm' },
  { kind:'image', act:A1, image:IMG+'sykane.jpg',        narr:AUD+'sykane.mp3',        kb:'out', dur:60000, title:'Sykane',          text:'The Soul Hungerer' },
  { kind:'image', act:A1, image:IMG+'savnok.jpg',        narr:AUD+'savnok.mp3',        kb:'out', dur:60000, title:'Savnok',          text:'The Inscrutable' },
  { kind:'image', act:A1, image:IMG+'tarakamedes.jpg',   narr:AUD+'tarakamedes.mp3',   kb:'out', dur:60000, title:'Tarakamedes',     text:'The Grave Wyrm' },
  { kind:'image', act:A1, image:IMG+'shami-amourae.jpg', narr:AUD+'shami-amourae.mp3', kb:'out', dur:60000, title:'Shami-Amourae',   text:'The Lady of Delights' },
  { kind:'image', act:A1, image:IMG+'drizlash.jpg',      narr:AUD+'drizlash.mp3',      kb:'out', dur:60000, title:'Drizlash',        text:'The Nine-Eyed Spider' },
  { kind:'image', act:A1, image:IMG+'dahlver-nar.jpg',   narr:AUD+'dahlver-nar.mp3',   kb:'out', dur:60000, title:'Dahlver-Nar',     text:'He of the Many Teeth' },
  { kind:'image', act:A1, image:IMG+'zantras.jpg',       narr:AUD+'zantras.mp3',       kb:'out', dur:60000, title:'Zantras',         text:'The Kingmaker' },
  { kind:'image', act:A1, image:IMG+'delban.jpg',        narr:AUD+'delban.mp3',        kb:'out', dur:60000, title:'Delban',          text:'The Star of Ice and Hate' },
  { kind:'image', act:A1, image:IMG+'khirad.jpg',        narr:AUD+'khirad.mp3',        kb:'out', dur:60000, title:'Khirad',          text:'The Star of Secrets' },
  { kind:'image', act:A1, image:IMG+'yrrga.jpg',         narr:AUD+'yrrga.mp3',         kb:'out', dur:60000, title:'Yrrga',           text:'The Eye of Shadows' },
  { kind:'image', act:A1, image:IMG+'taar-haak.jpg',     narr:AUD+'taar-haak.mp3',     kb:'out', dur:60000, title:'Great Taar Haak', text:'The Five-Headed Destroyer' },
  { kind:'image', act:A1, image:IMG+'gorthul.jpg',       narr:AUD+'gorthul.mp3',       kb:'out', dur:60000, title:'Gorthûl',         text:'The Unkillable' },
  { kind:'image', act:A1, image:IMG+'norganas.jpg',      narr:AUD+'norganas.mp3',      kb:'out', dur:60000, title:'Norganas',        text:'The Finger of Oblivion' },
  { kind:'image', act:A1, image:IMG+'vaund.jpg',         narr:AUD+'vaund.mp3',         kb:'out', dur:60000, title:'Vaund',           text:'The Evasive' },
  { kind:'image', act:A1, image:IMG+'seriach.jpg',       narr:AUD+'seriach.mp3',       kb:'out', dur:60000, title:'Seriach',         text:'The Hell Hound Whisperer' },
  { kind:'image', act:A1, image:IMG+'vampyr.jpg',        kb:'out', dur:15000,          title:'Vampyr',          text:'The shattered sarcophagus. Strahd\'s pact.' },

  { kind:'image', act:A2, image:IMG+'tenebrous.jpg',     narr:AUD+'tenebrous.mp3',     kb:'out', dur:60000, title:'Tenebrous',       text:'Magic and Immortality' },
  { kind:'image', act:A2, image:IMG+'zhudun.jpg',        narr:AUD+'zhudun.mp3',        kb:'out', dur:60000, title:'Zhudun',          text:'Life and Death · The Corpse Star' },
  { kind:'image', act:A2, image:IMG+'yog-sothoth.jpg',   narr:AUD+'yog-sothoth.mp3',   kb:'out', dur:60000, title:'Yog-Sothoth',     text:'Time and Space · The Key and the Gate' },

  { kind:'end', act:'Curse of Strahd', dur:9000,
    title:'Krew i Kości', text:'The Amber Temple' },
];
