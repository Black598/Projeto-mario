const botaoTrailer = document.querySelector(".botao-trailer");
const exitModal = document.querySelector(".fechar-modal")

const modal = document.querySelector(".modal")
const Video = document.getElementById ("video")
const linkDoVideo = Video.src;

function alternarModal() {
    modal.classList.toggle("aberto")

}

botaoTrailer.addEventListener("click", ()=> {

    alternarModal();
    video.setAttribute("src", linkDoVideo);

})

exitModal.addEventListener("click", () =>{

    alternarModal();
    video.setAttribute("src", "")
    
})



