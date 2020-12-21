function _load() {

  /*A feladatokat mindig a lehető legkisebb egységekre bontva, logikailag helytálló formában érdemes leírni, mielőtt bármit csinálnánk. 
  Egy jól megtervezett, felvázolt és részegységekre bontott terv már fél siker a projekt befejezéséhez.*/

  /*Kódokat másolni nem érdemes, ha még erre is kerülni sor, részenként a tulajdonságokat, funkciókat megértve és egyenként értelmezve célszerű alkalmazni.*/

  /*A megfelelő írásjeleket, zárójeleket időben, már a kódok írása során ki kell tenni, nem szabad részleteket lezárások nélkül félbenhagyni. A JS, CSS és HTML
  dokumentumok tagolása során figyelni kell a tabolásra*/


  //Kommentek példákkal

  //HTML
  //1. A JavaScript fájl  egy console.log(), a CSS-t pl: background property beállításával érdemes ellenőrizni
  //2. A képek és egyéb linkelt dokumentumok hivatkozását ellenőrizni kell pl. ./img/pink.png vagy  pink.png
  //3. A class-okat több elemnek, míg az id-kat csak egy elemnek lehet megadni. 

  //JS
  //1. A többsoros beillesztendő elemeknél `` használata szükséges, nem pedig ''. 
  //2. Egy függvényt nemcsak deklarálni szükséges, hanem meg is kell hívni. 
  //3. A getElementBy.. helyett a querySelector() vagy querySelectorAllt ()[], érdemes használni.


  //CSS és SCSS
  //1. egyes elemeket a HTML-ben található sorrend szerint tüntessek fel, így elkerülhető a kódba történő belekeveredés
  //2. position relative,az elem standard helyzethez való elhelyezkedését jelenti, míg az absolute az első  pozicionált "ancestor"-hoz képest állít. (ami nem statikus)
  //3. az Animation-t keyframeben határozom meg, majd pedig az aimálni kívánt elemnél tudom "meghívni" (animation-name:) pl: @keyframes move {from {top:20px;} to {top: 50px;}}, button {animation-name: move;}


  let rootE = document.getElementById("root");

  let notes = [];
  //Első 3.
  notes.push({
    tag: "div",
    content: `
    😎 A feladatokat mindig a lehető legkisebb egységekre bontva, logikailag helytálló formában érdemes leírni, mielőtt bármit csinálnánk. 
    Egy jól megtervezett, felvázolt és részegységekre bontott terv már fél siker a projekt befejezéséhez.  
    `,
  });

  notes.push({
    tag: "div",
    content: `
    😎 Kódokat másolni nem érdemes, ha még erre is kerülni sor, részenként a tulajdonságokat, funkciókat megértve és egyenként értelmezve célszerű alkalmazni.
    `,
  });

  notes.push({
    tag: "div",
    content: `
    😎 A megfelelő írásjeleket, zárójeleket időben, már a kódok írása során ki kell tenni, nem szabad részleteket lezárások nélkül félbenhagyni. A JS, CSS és HTML
    dokumentumok tagolása során figyelni kell a tabolásra.
    `,
  });

  //3 HTML "szabály"

  notes.push({
    tag: "div",
    content: `
    👊🏻 A JavaScript fájl  egy console.log(), a CSS-t pl: background property beállításával érdemes ellenőrizni
    `,
  });

  notes.push({
    tag: "div",
    content: `
    👊🏻 A képek és egyéb linkelt dokumentumok hivatkozását ellenőrizni kell pl. ./img/pink.png vagy  pink.png
    `,
  });

  notes.push({
    tag: "div",
    content: `
    👊🏻 A class-okat több elemnek, míg az id-kat csak egy elemnek lehet megadni. 
    `,
  });

  //3 CSS szabály

  notes.push({
    tag: "div",
    content: `
    🤨 Az egyes elemeket a HTML-ben található sorrend szerint tüntessek fel, így elkerülhető a kódba történő belekeveredés
  `,
  });

  notes.push({
    tag: "div",
    content: `
    🤨 A position relative,az elem standard helyzethez való elhelyezkedését jelenti, míg az absolute az első  pozicionált "ancestor"-hoz képest állít. (ami nem statikus)
  `,
  });

  notes.push({
    tag: "div",
    content: `
    🤨 az Animation-t keyframeben határozom meg, majd pedig az aimálni kívánt elemnél tudom "meghívni" (animation-name:) pl: @keyframes move {from {top:20px;} to {top: 50px;}}, button {animation-name: move;}
  `,
  });





  //3 JavaScript

  notes.push({
    tag: "code",
    content: `
    🌸 A scriptünket mindig úgy kezdjük, hogy létrehozzuk a load esemény hatására meghívandó függvényt. 
    Majd a load esemény hatására meghívjuk. 
    
    function _load() {
      //console.log(mukodik);
    }
      
    window.addEventListener("load", _load);
    `,
  });

  notes.push({
    tag: "div",
    content: `
    🌸 Egy függvényt nemcsak deklarálni szükséges, hanem meg is kell hívni. 
    `,
  });

  notes.push({
    tag: "div",
    content: `
    🌸A getElementBy.. helyett a querySelector() vagy querySelectorAllt ()[], érdemes használni.
    `,
  });


  //console.log(notes);

  rootE.insertAdjacentHTML('afterbegin', `
  <div><h1>Golden Rules for Front-End Development</h1></div>
  `);


  for (note of notes) {
    //console.log(myObject.tag);
    //root id elemhez, olyan tag passzítása, elementet, aminek a tagje 

    rootE.insertAdjacentHTML("beforeend", `
         <${note.tag} class="lines"> ${note.content}</${note.tag}>
    `);

  }

}
window.addEventListener("load", _load);



/*document.addEventListener('DOMContentLoaded', (event) => {
  document.querySelectorAll('pre code').forEach((block) => {
    hljs.highlightBlock(block);
  });
});
document.addEventListener('DOMContentLoaded', (event) => {
  document.querySelectorAll('code').forEach((block) => {
    hljs.highlightBlock(block);
  });
});
____________________
hljs.highlightBlock(block);*/

/*<link rel="stylesheet"
      href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/10.4.1/styles/default.min.css">
<script src="//cdnjs.cloudflare.com/ajax/libs/highlight.js/10.4.1/highlight.min.js"></script>
*/