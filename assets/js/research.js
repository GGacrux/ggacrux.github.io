(() => {
  const list = document.querySelector("#publication-list");
  if (!list) return;
  const search = document.querySelector("#journal-search");
  const buttons = [...document.querySelectorAll(".filter")];
  const empty = document.querySelector("#no-results");
  let category = "all";
  const apply = () => {
    const q = (search?.value || "").trim().toLowerCase();
    let count = 0;
    list.querySelectorAll(".publication").forEach((item) => {
      const show = (category === "all" || item.dataset.category === category) && (!q || (item.dataset.search || "").includes(q));
      item.hidden = !show;
      if (show) count++;
    });
    if (empty) empty.hidden = count !== 0;
  };
  buttons.forEach((button) => button.addEventListener("click", () => {
    category = button.dataset.filter || "all";
    buttons.forEach((b) => { const active = b === button; b.classList.toggle("active", active); b.setAttribute("aria-pressed", String(active)); });
    apply();
  }));
  search?.addEventListener("input", apply);
})();