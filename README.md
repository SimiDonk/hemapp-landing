# HEMApp OnePage – végleges változat

## Indítás
Az `index.html` önállóan megnyitható böngészőben, vagy feltölthető bármely statikus webszerverre.

## Beállítandó adatok
Az `index.html` végén található `SITE_CONFIG` objektumban módosítható:

```js
const SITE_CONFIG = {
  demoUrl: "https://demo.hemapp.hu/",
  contactEmail: "info@hemapp.hu"
};
```

- `demoUrl`: a teljes demo-adatbázissal működő kivitelezői demórendszer címe.
- `contactEmail`: a kapcsolatfelvételi űrlap címzettje.

A kapcsolatfelvételi űrlap jelenleg e-mail-tervezetet nyit meg. Éles környezetben CRM-hez, API-hoz vagy szerveroldali űrlapfeldolgozáshoz kapcsolható.

## Mobilalkalmazások
A Google Play és App Store elemek jelenleg „Hamarosan” állapotú, nem kattintható jelölések. A publikálást követően ezekhez külön áruházi URL-ek adhatók.

## A végleges változat fő módosításai
- a nyitóüzenet a lakossági leadtől a HEM megvalósításáig pozicionálja a platformot;
- az EKR/HEM magyarázat egyetlen összefüggő bekezdés lett;
- részletes építőanyag-kereskedői és white-label leadgenerálási értékajánlat;
- szabályozható saját termékkör és zárt kivitelezői ajánlattétel;
- auditor → első számú jogosult/szervező → kivitelező szerepkör-sorrend;
- nyolclépéses folyamat a MEKH-bejegyzésig;
- teljes, szerepkörönként bontott funkciókatalógus;
- opcionális oktatási, bevezetési és operatív support;
- teljesen végigkattintható kivitelezői demórendszer kommunikációja;
- hamarosan elérhető Android- és iOS-alkalmazások jelölése.

## Jogi megjegyzés
A szabályozási összefoglaló 2026. júliusi állapot szerint készült. Éles publikálás előtt és ezt követően rendszeresen célszerű ellenőrizni a hivatalos MEKH- és Nemzeti Jogszabálytár-forrásokat.
