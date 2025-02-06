window.addEventListener("load", () => {
 let names =  localStorage.getItem("name");
 let contnum =   localStorage.getItem("contnum");
 let email = localStorage.getItem("email");
 
 let skil1 =  localStorage.getItem("skil1");
 let ski2 =  localStorage.getItem("ski2");
 let ski3 =  localStorage.getItem("ski3");
 let ski4 =  localStorage.getItem("ski4");

 let skilforExp =  localStorage.getItem("skil1");
 let ski2forExp =  localStorage.getItem("ski2");
 let ski3forExp =  localStorage.getItem("ski3");
 let ski4forExp =  localStorage.getItem("ski4");

 let compname = localStorage.getItem("companyNam")
  let jobtit =  localStorage.getItem("jobtit");
 let jobdis =  localStorage.getItem("jobdis");

 let jobdisTwo =  localStorage.getItem("jobdis");
 let comments = localStorage.getItem("commnets")
 let startyr =  localStorage.getItem("startyr");
let endyr =   localStorage.getItem("endyr");
 let workloc =  localStorage.getItem("workloc");
 let langone =  localStorage.getItem("langone");
let langtwo =   localStorage.getItem("langtwo");
 let achiement =  localStorage.getItem("achiement");
 let achiement2 =  localStorage.getItem("achiement2");
 let achiement3 =  localStorage.getItem("achiement3");
 let achiement4 =  localStorage.getItem("achiement4");

 let edumatr = localStorage.getItem("edumatric")
 let intered = localStorage.getItem("interedu")
 let highered = localStorage.getItem("higherEdu")
 console.log(workloc, "w")

let resName: any = document.getElementById("res-name");
  resName.textContent = names;

  
 let achie1: any = document.getElementById("res-ach1");
  achie1.textContent = achiement;
  console.log(achie1)

  let achie2: any = document.getElementById("res-ach2");
  achie2.textContent = achiement2;
  console.log(achie2)

  let achie3: any = document.getElementById("res-ach3");
  achie3.textContent = achiement3;

  let achie4: any = document.getElementById("res-ach4");
  achie4.textContent = achiement4;

  let edu1: any = document.getElementById("res-edu1");
  edu1.textContent = edumatr;

  let edu2: any = document.getElementById("res-edu2");
  edu2.textContent = intered;

  let edu3: any = document.getElementById("res-edu3");
  edu3.textContent = highered;

  let resSki1 : any = document.getElementById("res-ski1");
  resSki1.textContent = skil1;

  let resSki2 : any = document.getElementById("res-ski2");
  resSki2.textContent = ski2;

  let resSki3 : any = document.getElementById("res-ski3");
  resSki3.textContent = ski3;

  let resSki4 : any = document.getElementById("res-ski4");
  resSki4.textContent = ski4;

  let resemial : any = document.getElementById("res-email");
  resemial.textContent = email;

  let rescont : any = document.getElementById("res-cont");
  rescont.textContent = contnum;

  let reslangone : any = document.getElementById("res-langone");
  reslangone.textContent = langone;

  let reslangtwo : any = document.getElementById("res-langtwo");
  reslangtwo.textContent = langtwo;

  let resTittle : any = document.getElementById("res-tit");
  resTittle.textContent = jobtit;

  let resDescription : any = document.getElementById("res-des");
  resDescription.textContent = jobdis;

  let resWork : any = document.getElementById("res-workexp");
  resWork.textContent = comments;

  let resStart : any = document.getElementById("res-startyr");
  resStart.textContent = startyr;

  let resEnd : any = document.getElementById("res-endyr");
  resEnd.textContent = endyr;

  let resLoc : any = document.getElementById("res-loc");
  resLoc.textContent = workloc; 

  let resCompName: any = document.getElementById("comp-name");
  resCompName.textContent = compname; 

  let resCompDes: any = document.getElementById("res-des");
  resCompDes.textContent = jobdis; 

  let resTwoSki1 : any = document.getElementById("res-two-ski1");
  resTwoSki1.textContent = skilforExp; 

  let resTwoSki2: any = document.getElementById("res-two-ski2");
  resTwoSki2.textContent = ski2forExp; 

  let resTwoski3: any = document.getElementById("res-two-ski3");
  resTwoski3.textContent = ski3forExp; 

  let resTwoski4: any = document.getElementById("res-two-ski4");
  resTwoski4.textContent = ski4forExp; 

  let resCompdesTwo: any = document.getElementById("res-des-two");
  resCompdesTwo.textContent = jobdisTwo; 
  const btnsDiv = document.getElementById("btns-cont") as HTMLDivElement;

  ////////////////////////////////////////edit btn//////////////////////////
  document.getElementById("editable")?.addEventListener("click", () => {
    window.history.back()

});
 
//////////////////////////print btn//////////////////////////
document.getElementById("print")?.addEventListener("click", () => {
    
    btnsDiv.classList.add("hide");
    
    setTimeout(() => {
      window.print();

      btnsDiv.classList.remove("hide");

    }, 100)
});



const skillSec = document.getElementsByClassName("hideit") as HTMLCollection ;

const hideBtn = document.getElementById("hide-btn") as HTMLButtonElement;
hideBtn.addEventListener("click",  () => {
   skillSec[1].classList.toggle("hide");
})

//////////////////////////////share btn/////////////////////
document.getElementById("shareable")?.addEventListener("click", () => {
  let anc =   document.getElementById("anc") as HTMLAnchorElement;
    let names:string  =  localStorage.getItem("name") || "user";
    localStorage.setItem("name", names)
  btnsDiv.classList.add("hide");

  let shareUrl = `${window.location.href}?.username= ${names}`;

  anc.setAttribute("href", shareUrl);
})


//%%%%%%%%%%%%%%%%copy link address%%%%%%%%%%%%%%%%%%%%%%%%5//
document.getElementById("copy-address")?.addEventListener("click", () => {
navigator.clipboard.writeText(window.location.href).then(() => {
  alert("Link copied")
})

})
});
