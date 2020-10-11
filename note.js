'use strict'


function getCoords(elem) {
  let box = elem.getBoundingClientRect();

  return {
    top: box.top + pageYOffset,
    left: box.left + pageXOffset
  };
}

    function positionAt(anchor, position, elem) {
      
      
    
      let anchorCoords =  getCoords(anchor);
      
      if (position == "bottom"){
        elem.style.left = anchorCoords.left + "px";
        elem.style.top = anchorCoords.top + anchor.offsetHeight + "px";
      }
      else if (position == "top"){
        elem.style.left = anchorCoords.left + "px";
        elem.style.top = anchorCoords.top - elem.offsetHeight + "px";
      }
      else if (position == "right"){
        elem.style.left = anchorCoords.left + anchor.offsetWidth + "px";
        elem.style.top = anchorCoords.top + "px";
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
  
      showNote(blockquote, "top", "note above");
      showNote(blockquote, "right", "note at the right");
      showNote(blockquote, "bottom", "note below");
