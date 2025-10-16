export class HousesFilter {
  #els = [...document.querySelectorAll('#houses-list input[name="house"]')];

  onChange(callback) {
    this.#els.forEach((input) => {
      input.addEventListener("change", callback);
    });
  }

  selectedHouses() {
    return this.#els
      .filter((input) => input.checked)
      .map((input) => input.value);
  }
}
