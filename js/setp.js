var form_1 = document.querySelector(".form_1");
var form_2 = document.querySelector(".form_2");
var form_3 = document.querySelector(".form_3");
var form_4 = document.querySelector(".form_4");

var form_1_btns = document.querySelector(".form_1_btns");
var form_2_btns = document.querySelector(".form_2_btns");
var form_3_btns = document.querySelector(".form_3_btns");
var form_4_btns = document.querySelector(".form_4_btns");

var form_1_next_btn = document.querySelector(".form_1_btns .btn_next");
var form_2_back_btn = document.querySelector(".form_2_btns .btn_back");
var form_2_next_btn = document.querySelector(".form_2_btns .btn_next");
var form_3_back_btn = document.querySelector(".form_3_btns .btn_back");
var form_3_next_btn = document.querySelector(".form_3_btns .btn_next");
var form_4_back_btn = document.querySelector(".form_4_btns .btn_back");

var form_2_progessbar = document.querySelector(".form_2_progessbar");
var form_3_progessbar = document.querySelector(".form_3_progessbar");
var form_4_progessbar = document.querySelector(".form_4_progessbar");

var btn_done = document.querySelector(".btn_done");
var modal_wrapper = document.querySelector(".modal_wrapper");
var shadow = document.querySelector(".shadow");

form_1_next_btn.addEventListener("click", function(){
    form_1.style.display = "none";
    form_2.style.display = "block";

    form_1_btns.style.display = "none";
    form_2_btns.style.display = "flex";

    form_2_progessbar.classList.add("active");
});

form_2_back_btn.addEventListener("click", function(){
    form_1.style.display = "block";
    form_2.style.display = "none";

    form_1_btns.style.display = "flex";
    form_2_btns.style.display = "none";

    form_2_progessbar.classList.remove("active");
});

form_2_next_btn.addEventListener("click", function(){
    form_2.style.display = "none";
    form_3.style.display = "block";

    form_3_btns.style.display = "flex";
    form_2_btns.style.display = "none";

    form_3_progessbar.classList.add("active");
});

form_3_back_btn.addEventListener("click", function(){
    form_2.style.display = "block";
    form_3.style.display = "none";

    form_3_btns.style.display = "none";
    form_2_btns.style.display = "flex";

    form_3_progessbar.classList.remove("active");
});

form_3_next_btn.addEventListener("click", function(){
    form_3.style.display = "none";
    form_4.style.display = "block";

    form_4_btns.style.display = "flex";
    form_3_btns.style.display = "none";

    form_4_progessbar.classList.add("active");
});

form_4_back_btn.addEventListener("click", function(){
    form_3.style.display = "block";
    form_4.style.display = "none";

    form_4_btns.style.display = "none";
    form_3_btns.style.display = "flex";

    form_4_progessbar.classList.remove("active");
});

btn_done.addEventListener("click", function(){
    modal_wrapper.classList.add("active");

});

shadow.addEventListener("click", function(){
    modal_wrapper.classList.remove("active");
});




const userTypeSelect = document.getElementById("user_type");
const userSexeInput = document.getElementById("user_sexe_input");
const userAgeInput = document.getElementById("user_age_input");
const userStatus = document.getElementById("user_status_input");
const userCompSizeInput = document.getElementById("user_comp_size_input");
const userServInput = document.getElementById("user_serv_input");
const userOrgtyp1 = document.getElementById("user_orgtyp1_input")
const userOrgtyp2 = document.getElementById("user_orgtyp2_input")
const userCom = document.getElementById("user_com_input")
const userMena1 = document.getElementById("user_mena1_input")
const userMena2 = document.getElementById("user_mena2_input")

// Fonction pour afficher ou masquer les éléments en fonction de l'option sélectionnée
function showInputFields(sexe, age, status, compSize, serv, orgtyp1, orgtyp2, com, mena1, mena2) {
    userSexeInput.style.display = sexe;
    userAgeInput.style.display = age;
    userStatus.style.display = status;
    userCompSizeInput.style.display = compSize;
    userServInput.style.display = serv;
    userOrgtyp1.style.display = orgtyp1;
    userOrgtyp2.style.display = orgtyp2;
	userCom.style.display = com;
	userMena1.style.display = mena1;
	userMena2.style.display = mena2;

}

// Définir les champs d'entrée par défaut lors du chargement de la page
showInputFields("block", "block", "block", "none", "none", "none", "none", "none", "none");

userTypeSelect.addEventListener("change", (event) => {
    const selectedOption = event.target.value;

    switch (selectedOption) {
        case "option1":
            showInputFields("block", "block", "block", "none", "none", "none", "none", "none", "none", "none");
            break;
        case "option2":
            showInputFields("none", "none", "none", "block", "none", "none", "none", "none", "none", "none");
            break;
        case "option3":
            showInputFields("none", "none", "none", "none", "block", "none", "none", "none", "none", "none");
            break;
        case "option4":
            showInputFields("none", "none", "none", "none", "none", "block", "block", "none", "none", "none");
            break;
		case "option5":
			showInputFields("none", "none", "none", "none", "none", "none", "none", "block", "none", "none");
		case "option6":
			showInputFields("none", "none", "none", "none", "none", "none", "none", "none", "block", "block")
        default:
            // Gérer d'autres options au besoin
    }
});
