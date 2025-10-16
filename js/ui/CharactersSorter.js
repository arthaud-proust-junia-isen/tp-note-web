export class CharactersSorter {
  #els = [
    ...document.querySelectorAll('#characters-sorter input[name="sortby"]'),
  ];

  onChange(callback) {
    this.#els.forEach((input) => {
      input.addEventListener("change", callback);
    });
  }

  getSortBy() {
    const { value } = this.#els.find((input) => input.checked);

    return value === "none" ? null : value;
  }
}
