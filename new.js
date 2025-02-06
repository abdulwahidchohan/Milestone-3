window.addEventListener("load", function () {
    var _a, _b, _c, _d;
    var names = localStorage.getItem("name");
    var contnum = localStorage.getItem("contnum");
    var email = localStorage.getItem("email");
    var skil1 = localStorage.getItem("skil1");
    var ski2 = localStorage.getItem("ski2");
    var ski3 = localStorage.getItem("ski3");
    var ski4 = localStorage.getItem("ski4");
    var skilforExp = localStorage.getItem("skil1");
    var ski2forExp = localStorage.getItem("ski2");
    var ski3forExp = localStorage.getItem("ski3");
    var ski4forExp = localStorage.getItem("ski4");
    var compname = localStorage.getItem("companyNam");
    var jobtit = localStorage.getItem("jobtit");
    var jobdis = localStorage.getItem("jobdis");
    var jobdisTwo = localStorage.getItem("jobdis");
    var comments = localStorage.getItem("commnets");
    var startyr = localStorage.getItem("startyr");
    var endyr = localStorage.getItem("endyr");
    var workloc = localStorage.getItem("workloc");
    var langone = localStorage.getItem("langone");
    var langtwo = localStorage.getItem("langtwo");
    var achiement = localStorage.getItem("achiement");
    var achiement2 = localStorage.getItem("achiement2");
    var achiement3 = localStorage.getItem("achiement3");
    var achiement4 = localStorage.getItem("achiement4");
    var edumatr = localStorage.getItem("edumatric");
    var intered = localStorage.getItem("interedu");
    var highered = localStorage.getItem("higherEdu");
    console.log(workloc, "w");
    var resName = document.getElementById("res-name");
    resName.textContent = names;
    var achie1 = document.getElementById("res-ach1");
    achie1.textContent = achiement;
    console.log(achie1);
    var achie2 = document.getElementById("res-ach2");
    achie2.textContent = achiement2;
    console.log(achie2);
    var achie3 = document.getElementById("res-ach3");
    achie3.textContent = achiement3;
    var achie4 = document.getElementById("res-ach4");
    achie4.textContent = achiement4;
    var edu1 = document.getElementById("res-edu1");
    edu1.textContent = edumatr;
    var edu2 = document.getElementById("res-edu2");
    edu2.textContent = intered;
    var edu3 = document.getElementById("res-edu3");
    edu3.textContent = highered;
    var resSki1 = document.getElementById("res-ski1");
    resSki1.textContent = skil1;
    var resSki2 = document.getElementById("res-ski2");
    resSki2.textContent = ski2;
    var resSki3 = document.getElementById("res-ski3");
    resSki3.textContent = ski3;
    var resSki4 = document.getElementById("res-ski4");
    resSki4.textContent = ski4;
    var resemial = document.getElementById("res-email");
    resemial.textContent = email;
    var rescont = document.getElementById("res-cont");
    rescont.textContent = contnum;
    var reslangone = document.getElementById("res-langone");
    reslangone.textContent = langone;
    var reslangtwo = document.getElementById("res-langtwo");
    reslangtwo.textContent = langtwo;
    var resTittle = document.getElementById("res-tit");
    resTittle.textContent = jobtit;
    var resDescription = document.getElementById("res-des");
    resDescription.textContent = jobdis;
    var resWork = document.getElementById("res-workexp");
    resWork.textContent = comments;
    var resStart = document.getElementById("res-startyr");
    resStart.textContent = startyr;
    var resEnd = document.getElementById("res-endyr");
    resEnd.textContent = endyr;
    var resLoc = document.getElementById("res-loc");
    resLoc.textContent = workloc;
    var resCompName = document.getElementById("comp-name");
    resCompName.textContent = compname;
    var resCompDes = document.getElementById("res-des");
    resCompDes.textContent = jobdis;
    var resTwoSki1 = document.getElementById("res-two-ski1");
    resTwoSki1.textContent = skilforExp;
    var resTwoSki2 = document.getElementById("res-two-ski2");
    resTwoSki2.textContent = ski2forExp;
    var resTwoski3 = document.getElementById("res-two-ski3");
    resTwoski3.textContent = ski3forExp;
    var resTwoski4 = document.getElementById("res-two-ski4");
    resTwoski4.textContent = ski4forExp;
    var resCompdesTwo = document.getElementById("res-des-two");
    resCompdesTwo.textContent = jobdisTwo;
    var btnsDiv = document.getElementById("btns-cont");
    ////////////////////////////////////////edit btn//////////////////////////
    (_a = document.getElementById("editable")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", function () {
        window.history.back();
    });
    //////////////////////////print btn//////////////////////////
    (_b = document.getElementById("print")) === null || _b === void 0 ? void 0 : _b.addEventListener("click", function () {
        btnsDiv.classList.add("hide");
        setTimeout(function () {
            window.print();
            btnsDiv.classList.remove("hide");
        }, 100);
    });
    var skillSec = document.getElementsByClassName("hideit");
    var hideBtn = document.getElementById("hide-btn");
    hideBtn.addEventListener("click", function () {
        skillSec[1].classList.toggle("hide");
    });
    //////////////////////////////share btn/////////////////////
    (_c = document.getElementById("shareable")) === null || _c === void 0 ? void 0 : _c.addEventListener("click", function () {
        var anc = document.getElementById("anc");
        var names = localStorage.getItem("name") || "user";
        localStorage.setItem("name", names);
        btnsDiv.classList.add("hide");
        var shareUrl = "".concat(window.location.href, "?.username= ").concat(names);
        anc.setAttribute("href", shareUrl);
    });
    //%%%%%%%%%%%%%%%%copy link address%%%%%%%%%%%%%%%%%%%%%%%%5//
    (_d = document.getElementById("copy-address")) === null || _d === void 0 ? void 0 : _d.addEventListener("click", function () {
        navigator.clipboard.writeText(window.location.href).then(function () {
            alert("Link copied");
        });
    });
});
