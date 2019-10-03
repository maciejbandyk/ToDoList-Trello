let SortableLists = document.getElementById("board-canvas-ins");
new Sortable(SortableLists, {
  group: 'shared-list',
  animation: 150
});

function getEventsSortable (id) {
  let newContainer = document.getElementById(id);
  new Sortable(newContainer, {
    group: 'shared-events',
    animation: 150
  });
}