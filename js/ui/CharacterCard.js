export const CharacterCard = (character) => {
  const element = document.createElement("div");

  if (character.house) element.classList.add(character.house.toLowerCase());

  const img = document.createElement("img");
  img.src = character.image;
  img.alt = "";

  element.appendChild(img);

  const a = document.createElement("a");
  a.href = `/details.html?id=${character.id}`;
  a.innerText = character.name;

  const p = document.createElement("p");
  p.appendChild(a);

  element.appendChild(p);

  return element;
};
