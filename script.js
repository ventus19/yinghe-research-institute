const header = document.querySelector(".site-header");
const form = document.querySelector(".lead-form");

function syncHeader() {
  header.dataset.scrolled = window.scrollY > 8 ? "true" : "false";
}

window.addEventListener("scroll", syncHeader, { passive: true });
syncHeader();

form?.addEventListener("click", (event) => {
  if (event.target.matches("button")) {
    const note = form.querySelector(".form-note");
    note.textContent = "已记录为演示需求。接入真实后端后可发送给课程顾问。";
  }
});
