var dragSrcEl = null;

function handleDragStart(e) {
  dragSrcEl = this;
  e.dataTransfer.effectAllowed = 'move';
  e.dataTransfer.setData("text", e.target.id);
}

function handleDragOver(e) {
  e.preventDefault();
  e.dataTransfer.dropEffect = 'move';
  return false;
}

function handleDragEnter(e) {
  this.classList.add('over');
}

function handleDragLeave(e) {
  this.classList.remove('over');
}

function handleDrop(e) {

  if (e.stopPropagation) {
    e.stopPropagation();
  }

  if (dragSrcEl != this) {
    var data = e.dataTransfer.getData("text");
    e.target.append(document.getElementById(data));
  }
  return false;
}

function handleDragEnd(e) {

  [].forEach.call(cols, function (col) {
    col.classList.remove('over');
  });
}

var cols = document.querySelectorAll('.list-cards');

[].forEach.call(cols, function(col) {
  col.addEventListener('dragstart', handleDragStart, false);
  col.addEventListener('dragenter', handleDragEnter, false);
  col.addEventListener('dragover', handleDragOver, false);
  col.addEventListener('dragleave', handleDragLeave, false);
  col.addEventListener('drop', handleDrop, false);
  col.addEventListener('dragend', handleDragEnd, false);
});
