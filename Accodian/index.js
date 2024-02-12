
const data=[
    {
        id:1,
        question:"what are the accordion components",
        answer:
        "Accordion Components are User Interface Elements"
    },
    {
        id:2,
        question:"what are the Question they asked",
        answer:
        "Accordion which will be created for"
    },
    {
        id:3,
        question:"Accordian as a musical component",
        answer:
        " Components are User Interface Elements"
    },
    {
        id:4,
        question:"Vector as a musical component",
        answer:
        " Elements will be finalisedc dajnakc dajkaajk sallnqdnindeq sincscicc"
    },
    {
        id:5,
        question:"Cordinates as a musical component",
        answer:
        " Cordinates are User Interface Elements jnLNCLS lccpOK nips  "
    },

]

const accord=document.querySelector('.accordion')
 console.log(accord);

function Accordian(){
   
    accord.innerHTML=data.map( data => `
      <div class="accordion-item"/>
      <div class="accordion-title"/>
      <h3>${data.question}</h3>
      <i class="fa-solid fa-arrow-down"></i>
      </div>
      <div class="accordian_Content">
      <p>${data.answer}</p>
      </div>
      </div> `).join(" ")
}
Accordian()


const Accordian_title=document.querySelectorAll(".accordion-title");

Accordian_title.forEach((element)=>{
 element.addEventListener('click',()=>{
    if(element.classList.contains('active')){
        element.classList.remove('active')
    }else{
        let getALreadyAccordianActive=document.querySelectorAll('.active')
         getALreadyAccordianActive.forEach((currelement)=>
            currelement.classList.remove('active')
         )
       element.classList.add("active")
    }

   })   
})

