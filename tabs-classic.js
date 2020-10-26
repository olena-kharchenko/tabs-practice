const controls = document.querySelector('#tabs-1 [data-controls]');
const panes = document.querySelector('#tabs-1 [data-panes]');

controls.addEventListener('click', onControlsClick);

function onControlsClick(evt) {
  evt.preventDefault(); //отмена перехода по ссылке

  if (evt.target.nodeName !== 'A') {
    console.log('Кликнули не в ссылку!');
    return;
  }

  const currentActiveControl = controls.querySelector(
    '.controls__item--active',
  );

  if (currentActiveControl) {
    currentActiveControl.classList.remove('controls__item--active');

    const paneId = getPaneId(currentActiveControl);
    const pane = getPaneById(paneId);
    pane.classList.remove('pane--active');
  }

  const controlItem = evt.target;
  controlItem.classList.add('controls__item--active');

  const paneId = getPaneId(controlItem);
  const pane = getPaneById(paneId);
  pane.classList.add('pane--active');

  console.log(panes.querySelector(`#${paneId}`));
}

function getPaneId(control) {
  return control.getAttribute('href').slice(1);
}

function getPaneById(id) {
  return panes.querySelector(`#${id}`);
}
