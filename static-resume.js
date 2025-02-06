document.addEventListener("DOMContentLoaded", () => {
  const fields = [
    "name",
    "email",
    "cont-num",
    "matric",
    "inter-edu",
    "higher-ed",
    "ski1",
    "ski2",
    "ski3",
    "ski4",
    "job-tit",
    "job-des",
    "pre-comp",
    "start-yr",
    "end-yr",
    "work-loc",
    "lang-one",
    "lang-two",
    "ahieve1",
    "ahieve2",
    "ahieve3",
    "ahieve4",
  ]

  fields.forEach((field) => {
    const element = document.getElementById(`res-${field}`)
    if (element) {
      element.textContent = localStorage.getItem(field) || ""
    }
  })

  // Special cases
  document.getElementById("comp-name").textContent = localStorage.getItem("comp-name") || ""
  document.getElementById("res-cont").textContent = localStorage.getItem("cont-num") || ""
  document.getElementById("res-edu1").textContent = localStorage.getItem("matric") || ""
  document.getElementById("res-edu2").textContent = localStorage.getItem("inter-edu") || ""
  document.getElementById("res-edu3").textContent = localStorage.getItem("higher-ed") || ""
  document.getElementById("res-workexp").textContent = localStorage.getItem("pre-comp") || ""
  document.getElementById("res-startyr").textContent = localStorage.getItem("start-yr") || ""
  document.getElementById("res-endyr").textContent = localStorage.getItem("end-yr") || ""
  document.getElementById("res-loc").textContent = localStorage.getItem("work-loc") || ""
  document.getElementById("res-langone").textContent = localStorage.getItem("lang-one") || ""
  document.getElementById("res-langtwo").textContent = localStorage.getItem("lang-two") || ""
  document.getElementById("res-ach1").textContent = localStorage.getItem("ahieve1") || ""
  document.getElementById("res-ach2").textContent = localStorage.getItem("ahieve2") || ""
  document.getElementById("res-ach3").textContent = localStorage.getItem("ahieve3") || ""
  document.getElementById("res-ach4").textContent = localStorage.getItem("ahieve4") || ""
})

