
const xususiyatlar = [
    {
        emoji: "💻",
        sarlavha: "Highly compatible",
        malumot: "Easy to use and works mall with all majors computer brends, gaming consoles and mobile devices. Plug & play, no instalitions or driver needed "
    },
    {
        emoji: "🔹",
        sarlavha: "Wireless with bluetooth",
        malumot: "Powerfull2.4G RF tecnologies allows you you to connect the cordless keyboard from up 30ft away. Simply plug the undifity reciever into your computer."
    },
    {
        emoji: "🔋",
        sarlavha: "High capasity battary",
        malumot: "Equqpped in along-lasting build-in batterry, you'll never have to spend a recailbel onece. Enjoy 40 hourse of usage time between charges.",
    },
    {
        emoji: "💡",
        sarlavha: "RGB backet modes",
        malumot: "CHoose form 4 backlights brightness leves and adjustable breathing speed. Each key glows intensely in the dark and you type in low hig conditions."
    }
];
 
const xususiyatlarHTML = document.getElementById("xususiyatlar");

document.addEventListener("DOMContentLoaded", () => {
    let natija = ""; 

    for (let i = 0; i < xususiyatlar.length; i++) {
   let shablon = `<article>
        <div class="icon">${xususiyatlar[i].emoji}</div>
        <h3>${xususiyatlar[i].sarlavha}</h3>
        <p>${xususiyatlar[i].malumot}</p>
    </article>` 
    natija += shablon;
   }

   xususiyatlarHTML.innerHTML = natija; 
});