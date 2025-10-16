export class CharactersFilterer {
  #els = [
    ...document.querySelectorAll('#characters-filterer input[name="filterby"]'),
  ];

  onChange(callback) {
    this.#els.forEach((input) => {
      input.addEventListener("change", callback);
    });
  }

  getFilterBy() {
    return this.#els
      .filter((input) => input.checked)
      .map((input) => input.value);
  }
}
