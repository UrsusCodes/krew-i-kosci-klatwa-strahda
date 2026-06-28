/* Krew i Kości: Klątwa Strahda — Bursztynowa Świątynia.
   Dane dla engine.js. AMBIENT = ciche tło ciągłe; slide.narr = narracja per slajd. */

const AMBIENT = 'audio/ambient.mp3';
const IMG = 'img/', AUD = 'audio/';
const A1 = 'Bursztynowe Więzienia';
const A2 = 'Trzej Uwięzieni Bogowie';

const SLIDES = [
  { kind:'title', act:'Amber Temple', dur:7000,
    title:'Bursztynowa Świątynia', text:'Głosy uwięzione w bursztynie.' },

  { kind:'image', act:A1, image:IMG+'fekre.jpg',         narr:AUD+'fekre.mp3',         kb:'out', dur:60000, title:'Fekre',          text:'Królowa Zaraz' },
  { kind:'image', act:A1, image:IMG+'zrin-hala.jpg',     narr:AUD+'zrin-hala.mp3',     kb:'out', dur:60000, title:'Zrin-Hala',      text:'Wyjąca Burza' },
  { kind:'image', act:A1, image:IMG+'sykane.jpg',        narr:AUD+'sykane.mp3',        kb:'out', dur:60000, title:'Sykane',         text:'Pożeracz Dusz' },
  { kind:'image', act:A1, image:IMG+'savnok.jpg',        narr:AUD+'savnok.mp3',        kb:'out', dur:60000, title:'Savnok',         text:'Nieprzenikniony' },
  { kind:'image', act:A1, image:IMG+'tarakamedes.jpg',   narr:AUD+'tarakamedes.mp3',   kb:'out', dur:60000, title:'Tarakamedes',    text:'Grobowy Wąż' },
  { kind:'image', act:A1, image:IMG+'shami-amourae.jpg', narr:AUD+'shami-amourae.mp3', kb:'out', dur:60000, title:'Shami-Amourae',  text:'Pani Rozkoszy' },
  { kind:'image', act:A1, image:IMG+'drizlash.jpg',      narr:AUD+'drizlash.mp3',      kb:'out', dur:60000, title:'Drizlash',       text:'Dziewięciooki Pająk' },
  { kind:'image', act:A1, image:IMG+'dahlver-nar.jpg',   narr:AUD+'dahlver-nar.mp3',   kb:'out', dur:60000, title:'Dahlver-Nar',    text:'Ten o Wielu Zębach' },
  { kind:'image', act:A1, image:IMG+'zantras.jpg',       narr:AUD+'zantras.mp3',       kb:'out', dur:60000, title:'Zantras',        text:'Czyniciel Królów' },
  { kind:'image', act:A1, image:IMG+'delban.jpg',        narr:AUD+'delban.mp3',        kb:'out', dur:60000, title:'Delban',         text:'Gwiazda Lodu i Nienawiści' },
  { kind:'image', act:A1, image:IMG+'khirad.jpg',        narr:AUD+'khirad.mp3',        kb:'out', dur:60000, title:'Khirad',         text:'Gwiazda Sekretów' },
  { kind:'image', act:A1, image:IMG+'yrrga.jpg',         narr:AUD+'yrrga.mp3',         kb:'out', dur:60000, title:'Yrrga',          text:'Oko Cieni' },
  { kind:'image', act:A1, image:IMG+'taar-haak.jpg',     narr:AUD+'taar-haak.mp3',     kb:'out', dur:60000, title:'Great Taar Haak', text:'Pięciogłowy Niszczyciel' },
  { kind:'image', act:A1, image:IMG+'gorthul.jpg',       narr:AUD+'gorthul.mp3',       kb:'out', dur:60000, title:'Gorthûl',        text:'Niezniszczalny' },
  { kind:'image', act:A1, image:IMG+'norganas.jpg',      narr:AUD+'norganas.mp3',      kb:'out', dur:60000, title:'Norganas',       text:'Palec Zapomnienia' },
  { kind:'image', act:A1, image:IMG+'vaund.jpg',         narr:AUD+'vaund.mp3',         kb:'out', dur:60000, title:'Vaund',          text:'Wymijający' },
  { kind:'image', act:A1, image:IMG+'seriach.jpg',       narr:AUD+'seriach.mp3',       kb:'out', dur:60000, title:'Seriach',        text:'Zaklinacz Ogarów Piekieł' },
  { kind:'image', act:A1, image:IMG+'vampyr.jpg',        kb:'out', dur:15000,          title:'Vampyr',         text:'Roztrzaskany sarkofag. Pakt Strahda.' },

  { kind:'image', act:A2, image:IMG+'tenebrous.jpg',     narr:AUD+'tenebrous.mp3',     kb:'out', dur:60000, title:'Tenebrous',      text:'Magia i Nieśmiertelność' },
  { kind:'image', act:A2, image:IMG+'zhudun.jpg',        narr:AUD+'zhudun.mp3',        kb:'out', dur:60000, title:'Zhudun',         text:'Życie i Śmierć · Trupia Gwiazda' },
  { kind:'image', act:A2, image:IMG+'yog-sothoth.jpg',   narr:AUD+'yog-sothoth.mp3',   kb:'out', dur:60000, title:'Yog-Sothoth',    text:'Czas i Przestrzeń · Klucz i Brama' },

  { kind:'end', act:'Amber Temple', dur:9000,
    title:'Krew i Kości', text:'Klątwa Strahda' },
];
