# HEMApp landing (hemapp.hu)

A HEMApp publikus bemutatkozó oldala. **Statikus HTML — nincs build, nincs
dependency.** Aki HTML-t és CSS-t ír, az tudja szerkeszteni.

```
index.html        egyoldalas landing (a navigáció ugyanezen az oldalon ugrik)
docs/index.html   dokumentáció és segédletek (/docs)
style.css         a teljes megjelenés
site.js           mobil menü + cookie hozzájárulás (~90 sor)
assets/           logó
vercel.json       tiszta URL-ek, cache- és security headerek
robots.txt, sitemap.xml
```

## Szerkesztés és közzététel

```sh
git clone https://github.com/SimiDonk/hemapp-landing.git
cd hemapp-landing
python3 -m http.server 4321      # majd http://localhost:4321
```

A `file://` megnyitás nem jó: az oldal abszolút útvonalakra hivatkozik
(`/style.css`), ezért kell a helyi szerver.

Ami a `main` ágra kerül, azt a Vercel magától kiteszi a `hemapp.hu`-ra — külön
telepítési lépés nincs, a build egy-két perc.

## Kapcsolódó címek

| Cím | Mi van ott |
| --- | --- |
| `hemapp.hu` | ez az oldal |
| `app.hemapp.hu` | a HEMApp alkalmazás (másik repóban) |
| `demo.hemapp.hu` | a bemutató környezet — ide mutatnak a „Demó" gombok |

## Amit érdemes tudni szerkesztés előtt

- **A tartalom a HTML-ben van, nem adatbázisban.** Amit átírsz, az azonnal
  látszik — nincs mögötte CMS.
- **Az oldal magyar**, nincs nyelvváltás. Angol verzió külön fájlkészletet
  jelentene.
- **A `/docs` oldal a `docs/index.html`-ben él**, és a `vercel.json` egy rewrite
  szabállyal szolgálja ki a `/docs` címen. Új aloldal ugyanígy: mappa +
  `index.html` + egy rewrite sor. (Enélkül a `cleanUrls` egy `docs.html` nevű
  fájlt keresne, és 404-et adna.)
- **A cookie-sáv** (`site.js`) csak a hozzájárulás tényét tárolja a böngészőben.
  Mérőkódot kizárólag a `loadMeasurement()` függvénybe szabad tenni — így
  hozzájárulás nélkül nem futhat. Jelenleg nincs benne semmi.
- **Jogi szövegek**: az adatkezelési tájékoztató és az ÁSZF szakasza a
  `docs/index.html`-ben jelölten előkészítés alatt áll. A cookie-tájékoztató
  viszont valós szöveg, mert a sáv arra hivatkozik.

## Nyitott pont

`og:image`: jelenleg a négyzetes logó. Egy 1200×630-as változat jobban mutatna
a közösségi megosztásokban.
