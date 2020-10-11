'use strict'


function getCoords(elem) {
  let box = elem.getBoundingClientRect();

  return {
    top: box.top + pageYOffset,
    left: box.left + pageXOffset,
  };
}

    function positionAt(anchor, position, elem) {
      
      
    
      let anchorCoords =  getCoords(anchor);
      
      if (position == "bottom-out"){
        elem.style.left = anchorCoords.left + "px";
        elem.style.top = anchorCoords.top + anchor.offsetHeight + "px";
      }
      else if (position == "top-out"){
        elem.style.left = anchorCoords.left + "px";
        elem.style.top = anchorCoords.top - elem.offsetHeight + "px";
      }
      else if (position == "right-out"){
        elem.style.left = anchorCoords.left + anchor.offsetWidth + "px";
        elem.style.top = anchorCoords.top + "px";
      }
      else if (position == "top-in"){
        elem.style.left = anchorCoords.left + "px";
        elem.style.top = anchorCoords.top + "px";
      }
      else if (position == "right-in"){
        elem.style.width = '150px';
        elem.style.left = anchorCoords.left + anchor.offsetWidth - elem.offsetWidth + "px";
        elem.style.top = anchorCoords.top + "px";
      }
      else if (position == "bottom-in"){
        elem.style.left = anchorCoords.left + "px";
        elem.style.top = anchorCoords.top + anchor.offsetHeight - elem.offsetHeight + "px";
      }
      return elem;
      }
  
      /**
       * Показывает заметку с заданным содержимым на заданной позиции
       * относительно элемента anchor.
       */
      function showNote(anchor, position, html) {
        let note = document.createElement('div');
        note.className = "note";
        note.innerHTML = html;
        document.body.append(note);
  
        positionAt(anchor, position, note);
      }
  
      // test it
      let blockquote = document.querySelector('blockquote');
  
      showNote(blockquote, "top-out", "note above");
      showNote(blockquote, "right-out", "note at the right");
      showNote(blockquote, "bottom-out", "note below");
      showNote(blockquote, "top-in", "note in");
      showNote(blockquote, "right-in",  "note in at the right");
      showNote(blockquote, "bottom-in",  "note below in");
