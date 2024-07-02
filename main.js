var div_video = document.querySelector(".video_div");
function open_close() {
  div_video.classList.toggle("active")
}


var div_Links = document.querySelector(".links");
function open_close_Menu() {
  div_Links.classList.toggle("active")
}

window.addEventListener("scroll", () => {
  div_Links.classList.remove("active")
  div_video.classList.remove("active")
})

fetch('team.json')
            .then(response => response.json())
            .then(allTeam => {
     
  
              console.log(allTeam);
                const Team_cards = document.getElementById('cards');
         
                allTeam.forEach(card => {
                  
                     const job_title = card.job ? `<h4>${card.job}</h4>` : '';
                
                    Team_cards.innerHTML +=`
                    <div class="card">
                    <img src="${card.img}" alt="">

                    <div class="text">
                        ${job_title}
                    <h2>${card.name}</h2>
                    <p>${card.p_english}</p>
                    </div>
                </div>
                    
                    `
    
                });
                

         
            });









var swiper = new Swiper(".mySwiper", {
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  effect: "fade",
  loop: true,
  });