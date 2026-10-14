import {mkdirSync,writeFileSync} from 'node:fs';
const destination = "https://ksantiagobah.github.io/mass-adventure/rosary/";
mkdirSync('dist',{recursive:true});
writeFileSync('dist/index.html',`<!doctype html><html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1"><title>Rosary — New location</title><link rel="canonical" href="${destination}"><meta name="description" content="Pray the Rosary and Divine Mercy Chaplet with guided narration, sacred videos, and prayer text. A quiet space for prayer, one bead at a time."/>
<meta property="og:type" content="website"/>
<meta property="og:site_name" content="Rosary &amp; Divine Mercy"/>
<meta property="og:title" content="Rosary &amp; Divine Mercy — A quiet space for prayer"/>
<meta property="og:description" content="Guided prayer, sacred videos, and reflections. Walk with Mary and rest in His mercy, one prayer at a time."/>
<meta property="og:url" content="https://ksantiagobah.github.io/mass-adventure/rosary/"/>
<meta property="og:image" content="https://ksantiagobah.github.io/mass-adventure/rosary/share-card.png"/>
<meta property="og:image:type" content="image/png"/>
<meta property="og:image:width" content="1200"/>
<meta property="og:image:height" content="630"/>
<meta property="og:image:alt" content="Rosary and Divine Mercy: A quiet space for prayer, beside sacred artwork of the Annunciation and a gold rosary motif."/>
<meta name="twitter:card" content="summary_large_image"/>
<meta name="twitter:title" content="Rosary &amp; Divine Mercy — A quiet space for prayer"/>
<meta name="twitter:description" content="Guided prayer, sacred videos, and reflections. One prayer at a time."/>
<meta name="twitter:image" content="https://ksantiagobah.github.io/mass-adventure/rosary/share-card.png"/>
<meta name="twitter:image:alt" content="Rosary and Divine Mercy: A quiet space for prayer, beside sacred artwork of the Annunciation and a gold rosary motif."/><meta http-equiv="refresh" content="0;url=${destination}"><script>location.replace(${JSON.stringify(destination)}+location.search+location.hash);</script></head><body><h1>Rosary has moved</h1><p><a href="${destination}">Continue to Rosary</a></p><nav><a href="https://ksantiagobah.github.io/mass-adventure/">Mass Adventure</a> · <a href="https://ksantiagobah.github.io/mass-adventure/at-the-table/">At the Table</a></nav></body></html>`);
