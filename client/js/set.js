export function setBgColor(elem, colorA, colorB = "#000") {
  elem.style.background = `linear-gradient(to bottom, ${colorA}, ${colorB})`;
}

export function setImage(target, name, alt) {
  target.src = `./assets/${name}.jpeg`;
  target.alt = alt;
}

export function setNameText(target, name) {
  target.textContent = name;
}
