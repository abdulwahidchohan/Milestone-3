let  myName:any   = document.getElementById("name") ;


let contNum:any = document.getElementById("cont-num") ;


let email:any = document.getElementById("email") ;



let skil1:any = document.getElementById("ski1") ;

let skil4 :any = document.getElementById("ski4") ;

let ski2:any = document.getElementById("ski2") ;


let ski3:any = document.getElementById("ski3") ;

let companyName:any = document.getElementById("comp-name") ;


let jobTit:any = document.getElementById("job-tit") ;


let jobDes:any = document.getElementById("job-des") ;

let startYr:any = document.getElementById("start-yr") ;

let endYr:any = document.getElementById("end-yr") ;

let workLoc:any = document.getElementById("work-loc") ;

let commentsonPre :any = document.getElementById("pre-comp") ;

let langOne:any = document.getElementById("lang-one") ;

let langTwo:any = document.getElementById("lang-two") ;

let achieveemnt1:any = document.getElementById("ahieve1") ;
let achieveemnt2:any = document.getElementById("ahieve2") ;
let achieveemnt3:any = document.getElementById("ahieve3") ;
let achieveemnt4:any = document.getElementById("ahieve4") ;

let eduMatric:any = document.getElementById("matric") ;
let interEdu:any = document.getElementById("inter-edu") ;
let higherEdu:any = document.getElementById("higher-ed") ;

const form = document.getElementById("form") ;
const btn = document.getElementById("gen-res-btn") ;

btn?.addEventListener("click", (e) => {
  e.preventDefault()

   
  localStorage.setItem("name", myName.value)
  localStorage.setItem("contnum", contNum.value)
  localStorage.setItem("email", email.value)
  localStorage.setItem("edumatric", eduMatric.value)
  localStorage.setItem("interedu", interEdu.value)
  localStorage.setItem("higeredu", higherEdu.value)
  localStorage.setItem("skil1", skil1.value)
  localStorage.setItem("ski2", ski2.value)
  localStorage.setItem("ski3", ski3.value)
  localStorage.setItem("jobtit", jobTit.value)
  localStorage.setItem("jobdis", jobDes.value)
  localStorage.setItem("startyr", startYr.value)
  localStorage.setItem("compNam", companyName)
  localStorage.setItem("endyr", endYr.value)
  localStorage.setItem("commnets", commentsonPre.value)
  localStorage.setItem("workloc", workLoc.value)
  localStorage.setItem("langone", langOne.value)
  localStorage.setItem("langtwo", langTwo.value)
  localStorage.setItem("achiement", achieveemnt1.value)
  localStorage.setItem("achiement2", achieveemnt2.value)
  localStorage.setItem("achiement3", achieveemnt3.value)
  localStorage.setItem("achiement4", achieveemnt4.value)
localStorage.setItem("companyNam", companyName.value)
localStorage.setItem("comments", commentsonPre.value)
  localStorage.setItem("edumatric", eduMatric.value)
  localStorage.setItem("interedu", interEdu.value)
  localStorage.setItem("higherEdu", higherEdu.value)
  localStorage.setItem("ski4", skil4.value)
console.log(localStorage.getItem("achiement2"))
console.log(localStorage.getItem("email"))

window.location.href = "./new.html";
console.log("script.....")
})
