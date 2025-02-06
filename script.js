document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("form")
  const generateStaticBtn = document.getElementById("gen-res-btn")
  const generatePdfBtn = document.getElementById("gen-pdf-btn")

  function saveFormData() {
    const formData = new FormData(form)
    for (const [key, value] of formData.entries()) {
      localStorage.setItem(key, value)
    }
  }

  generateStaticBtn.addEventListener("click", (e) => {
    e.preventDefault()
    saveFormData()
    window.location.href = "./static-resume.html"
  })

  generatePdfBtn.addEventListener("click", (e) => {
    e.preventDefault()
    saveFormData()
    generatePDF()
  })

  function generatePDF() {
    const { jsPDF } = window.jspdf
    const doc = new jsPDF()

    doc.setFontSize(20)
    doc.text("Futuristic Resume", 105, 15, null, null, "center")

    doc.setFontSize(12)
    let yPos = 30

    // Personal Information
    doc.setFont(undefined, "bold")
    doc.text("Personal Information", 20, yPos)
    yPos += 10
    doc.setFont(undefined, "normal")
    doc.text(`Name: ${localStorage.getItem("name")}`, 20, yPos)
    yPos += 7
    doc.text(`Phone: ${localStorage.getItem("cont-num")}`, 20, yPos)
    yPos += 7
    doc.text(`Email: ${localStorage.getItem("email")}`, 20, yPos)
    yPos += 10

    // Education
    doc.setFont(undefined, "bold")
    doc.text("Education", 20, yPos)
    yPos += 10
    doc.setFont(undefined, "normal")
    doc.text(`Matriculation: ${localStorage.getItem("matric")}`, 20, yPos)
    yPos += 7
    doc.text(`Intermediate: ${localStorage.getItem("inter-edu")}`, 20, yPos)
    yPos += 7
    doc.text(`Higher Education: ${localStorage.getItem("higher-ed")}`, 20, yPos)
    yPos += 10

    // Skills
    doc.setFont(undefined, "bold")
    doc.text("Skills", 20, yPos)
    yPos += 10
    doc.setFont(undefined, "normal")
    doc.text(`1. ${localStorage.getItem("ski1")}`, 20, yPos)
    yPos += 7
    doc.text(`2. ${localStorage.getItem("ski2")}`, 20, yPos)
    yPos += 7
    doc.text(`3. ${localStorage.getItem("ski3")}`, 20, yPos)
    yPos += 7
    doc.text(`4. ${localStorage.getItem("ski4")}`, 20, yPos)
    yPos += 10

    // Job Information
    doc.setFont(undefined, "bold")
    doc.text("Job Information", 20, yPos)
    yPos += 10
    doc.setFont(undefined, "normal")
    doc.text(`Title: ${localStorage.getItem("job-tit")}`, 20, yPos)
    yPos += 7
    doc.text(`Company: ${localStorage.getItem("comp-name")}`, 20, yPos)
    yPos += 7
    const jobDesc = doc.splitTextToSize(`Description: ${localStorage.getItem("job-des")}`, 170)
    doc.text(jobDesc, 20, yPos)
    yPos += jobDesc.length * 7 + 10

    // Work Experience
    doc.setFont(undefined, "bold")
    doc.text("Work Experience", 20, yPos)
    yPos += 10
    doc.setFont(undefined, "normal")
    const workExp = doc.splitTextToSize(`${localStorage.getItem("pre-comp")}`, 170)
    doc.text(workExp, 20, yPos)
    yPos += workExp.length * 7 + 7
    doc.text(`Start Date: ${localStorage.getItem("start-yr")}`, 20, yPos)
    yPos += 7
    doc.text(`End Date: ${localStorage.getItem("end-yr")}`, 20, yPos)
    yPos += 7
    doc.text(`Location: ${localStorage.getItem("work-loc")}`, 20, yPos)
    yPos += 10

    // Languages
    doc.setFont(undefined, "bold")
    doc.text("Languages", 20, yPos)
    yPos += 10
    doc.setFont(undefined, "normal")
    doc.text(`1. ${localStorage.getItem("lang-one")}`, 20, yPos)
    yPos += 7
    doc.text(`2. ${localStorage.getItem("lang-two")}`, 20, yPos)
    yPos += 10

    // Achievements
    doc.setFont(undefined, "bold")
    doc.text("Achievements", 20, yPos)
    yPos += 10
    doc.setFont(undefined, "normal")
    doc.text(`1. ${localStorage.getItem("ahieve1")}`, 20, yPos)
    yPos += 7
    doc.text(`2. ${localStorage.getItem("ahieve2")}`, 20, yPos)
    yPos += 7
    doc.text(`3. ${localStorage.getItem("ahieve3")}`, 20, yPos)
    yPos += 7
    doc.text(`4. ${localStorage.getItem("ahieve4")}`, 20, yPos)

    doc.save("futuristic-resume.pdf")
  }
})

