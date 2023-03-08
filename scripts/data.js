let data = {
    "currentDate": "2022-01-01",
    "events": [
      {
        _id: 1,
        "image":"https://i.postimg.cc/Fs03hQDt/Collectivities-Party.jpg",
        "name":"Collectivities Party",
        "date":"2021-12-12",
        "description":"Enjoy your favourite dishes, from different countries, in a unique event for the whole family.",
        "category":"Food Fair",
        "place":"Room A",
        "capacity":45000,
        "assistance":42756,
        "price":5
      },
      {
        _id: 2,
        "image":"https://i.postimg.cc/ZmD3Xf57/Korean-style.jpg",
        "name":"Korean style",
        "date":"2022-08-12",
        "description":"Enjoy the best Korean dishes, with international chefs and awesome events.",
        "category":"Food Fair",
        "place":"Room A",
        "capacity":45000,
        "assistance":42756,
        "price":10
      },
      {
        _id: 3,
        "image":"https://i.postimg.cc/GmHRkbNV/Jurassic-Park.jpg",
        "name":"Jurassic Park",
        "date":"2021-11-02",
        "description":"Let's go meet the biggest dinosaurs in the paleontology museum.",
        "category":"Museum",
        "place":"Field",
        "capacity":82000,
        "assistance":65892,
        "price":15
      },
      {
        _id: 4,
        "image":"https://i.postimg.cc/c4C2zXm8/Parisian-Museum.jpg",
        "name":"Parisian Museum",
        "date":"2022-11-02",
        "description":"A unique tour in the city of lights, get to know one of the most iconic places.",
        "category":"Museum",
        "place":"Paris",
        "capacity":8200,
        "estimate":8200,
        "price":3500
      },
      {
        _id: 5,
        "image":"https://i.postimg.cc/KYD0jMf2/comicon.jpg",
        "name":"Comicon",
        "date":"2021-02-12",
        "description":"For comic lovers, all your favourite characters gathered in one place.",
        "category":"Costume Party",
        "place":"Room C",
        "capacity":120000,
        "assistance":110000,
        "price":54
      },
      {
        _id: 6,
        "image":"https://i.postimg.cc/RZ9fH4Pr/halloween.jpg",
        "name":"Halloween Night",
        "date":"2022-02-12",
        "description":"Come with your scariest costume and win incredible prizes.",
        "category":"Costume Party",
        "place":"Room C",
        "capacity":12000,
        "estimate":9000,
        "price":12
      },
      {
        _id: 7,
        "image":"https://i.postimg.cc/PrMJ0ZMc/Metallica-in-concert.jpg",
        "name":"Metallica in concert",
        "date":"2022-01-22",
        "description":"The only concert of the most emblematic band in the world.",
        "category":"Music Concert",
        "place":"Room A"
        ,"capacity":138000,
        "estimate":138000,
        "price":150
      },
      {
        _id: 8,
        "image":"https://i.postimg.cc/KvsSK8cj/Electronic-Fest.jpg",
        "name":"Electronic Fest",
        "date":"2021-01-22",
        "description":"The best national and international DJs gathered in one place.",
        "category":"Music Concert",
        "place":"Room A",
        "capacity":138000,
        "assistance":110300,
        "price":250
        },
      {
        _id: 9,
        "image":"https://i.postimg.cc/fyLqZY9K/10-K-for-life.jpg",
        "name":"10K for life",
        "date":"2021-03-01",
        "description":"Come and exercise, improve your health and lifestyle.",
        "category":"Race",
        "place":"Soccer field",
        "capacity":30000,
        "assistance":25698,
        "price":3
      },
      {
        _id: 10,
        "image":"https://i.postimg.cc/zv67r65z/15kny.jpg",
        "name":"15K NY",
        "date":"2022-03-01",
        "description":"We'll be raising funds for hospitals and medical care in this unique event held in The Big Apple.",
        "category":"Race",
        "place":"New York",
        "capacity":3000000,
        "assistance":2569800,
        "price":3
        },
      {
        _id: 11,
        "image":"https://i.postimg.cc/Sst763n6/book1.jpg",
        "name":"School's book fair",
        "date":"2022-10-15",
        "description":"Bring your unused school book and take the one you need.",
        "category":"Book Exchange",
        "place":"Room D1",
        "capacity":150000,
        "estimate":123286,
        "price":1
      },
      {
        _id: 12,
        "image":"https://i.postimg.cc/05FhxHVK/book4.jpg",
        "name":"Just for your kitchen",
        "date":"2021-11-09",
        "description":"If you're a gastronomy lover come get the cookbook that best suits your taste and your family's.",
        "category":"Book Exchange",
        "place":"Room D6",
        "capacity":130000,
        "assistance":90000,
        "price":100
      },
      {
        _id: 13,
        "image":"https://i.postimg.cc/vH52y81C/cinema4.jpg",
        "name":"Batman",
        "date":"2021-03-11",
        "description":"Come see Batman fight crime in Gotham City.",
        "category":"Cinema",
        "place":"Room D1",
        "capacity":11000,
        "assistance":9300,
        "price":225
      },
      {
        _id: 14,
        "image":"https://i.postimg.cc/T3C92KTN/scale.jpg",
        "name":"Avengers",
        "date":"2022-10-15",
        "description":"Marvel's Avengers Premier in 3d, the start of an epic saga with your favourite superheroes.",
        "category":"Cinema",
        "place":"Room D1",
        "capacity":9000,
        "estimate":9000,
        "price":250
      }
    ]
  };

let eventos = data.events //arreglo de objetos

let currentDate = new Date(data.currentDate) //fecha de referencia en formato objet date

// Imprime cards a partir de un array
function makeCards(array) {

  let divBackground = document.getElementById('card-background')
  divBackground.innerHTML = ''
  divBackground.className = 'mt-10 mb-10 gap-4 flex flex-wrap justify-center'
  for (let evento of array) {
        let div = document.createElement('div')
        div.className = 'bg-neutral-400 flex justify-center ease-in duration-300 hover:p-4 hover:rounded-2xl hover:bg-gradient-to-r from-pink-900 to-pink-300'
        div.id = `${evento._id}`
        divBackground.appendChild(div)

        let divCont = document.createElement('div')
        divCont.id = 'card-container'
        divCont.className = 'bg-rose-300 w-80 rounded-full'
        div.appendChild(divCont);

        let figure = document.createElement('figure')
        figure.id = `img-container-${evento._id}`
        divCont.appendChild(figure)

        let img = document.createElement('img')
        img.src = evento.image
        figure.appendChild(img)
        let divInfo = document.createElement('div')
        divInfo.id = 'info'
        divInfo.className = 'flex flex-col items-center gap-3'
        divCont.appendChild(divInfo)

        let title = document.createElement('h3')
        title.id = 'title'
        title.className = 'text-2xl'
        title.innerHTML = evento.name
        divInfo.appendChild(title)
        let text = document.createElement('p')
        text.className = 'text-center mx-6'
        text.innerHTML = evento.description
        divInfo.appendChild(text)
        let divPm = document.createElement('div')
        divPm.id = 'price-more'
        divPm.className = 'flex justify-between items-center gap-4'
        divInfo.appendChild(divPm)

        let price = document.createElement('p')
        price.id = 'price'
        price.className = 'uppercase font-semibold text-xl'
        price.innerHTML = `$ ${evento.price}`
        divPm.appendChild(price)
        let link = document.createElement('a')
        link.id = 'more'
        link.href = `./details.html?id=${evento._id}`
        divPm.appendChild(link)

        let seeMore = document.createElement('p')
        seeMore.className = 'bg-stone-300 hover:bg-slate-800 ease-linear duration-300 hover:text-stone-300 rounded-full p-1'
        seeMore.innerHTML = 'See more'
        link.appendChild(seeMore)
  }
}

function makeCategoriesButtons(){

  let catContainer = document.getElementById('checkbox')

  for (let category of categories){
    
    let catLabel = document.createElement('label')
    catLabel.className = 'cat-label'

    let inputCheck = document.createElement('input')
    inputCheck.type = 'checkbox'
    inputCheck.className = 'cat-input'
    inputCheck.id = category.replace(' ','').toLowerCase()
    inputCheck.value = category
    catLabel.appendChild(inputCheck)

    let spanCat = document.createElement('span')
    spanCat.innerText = category
    catLabel.appendChild(spanCat)

    catContainer.appendChild(catLabel)
    
  }
}


function filtrar() {

  let acumulador = []
 
  arrCatInputs.map(input =>{
    if(input.checked){
      acumulador.push(input.value)
    }
  })

  let eventosFiltrados = []
  eventos.filter(evento => {
    if (acumulador.includes(evento.category)){
      eventosFiltrados.push(evento)
    }
  })
  
  
  
  if(acumulador.length > 0) {
    makeCards(eventosFiltrados)
  
  }else{
    makeCards(eventos)
  }

}

function search(e) {
  searchValue = e.target.value
  searchValue = searchValue.toLowerCase().trim().replace(' ','')
  if(e.target.value == ''){
    makeCards(eventos)
  }
}

function finalFilter() {

  let catChecked = []

  arrCatInputs.map(input =>{
    if(input.checked){
      catChecked.push(input.value)
    }
  })


  let filtradosUnicos = []
 
  if (catChecked.length && searchValue.length) {
    eventos.filter(evento => {
      if ((catChecked.includes(evento.category)) 
      && 
      (evento.name.toLowerCase().trim().replace(' ','').includes(searchValue) || evento.description.toLowerCase().trim().includes(searchValue))){
        filtradosUnicos.push(evento)
      }
    })

    console.log(filtradosUnicos);

    if(filtradosUnicos.length === 0){
      makeCards(eventos)
    }else{
      makeCards(filtradosUnicos)
    }
  }
  else if(catChecked.length && !searchValue.length) {

    eventos.filter(evento =>{
      if(catChecked.includes(evento.category)){
        filtradosUnicos.push(evento)
      }
    })
    console.log(filtradosUnicos);

    if(filtradosUnicos === 0){
      makeCards(eventos)
    }else{
      makeCards(filtradosUnicos)
    }
  
  }
  else if(!catChecked.length && searchValue.length) {

    eventos.filter(evento =>{
      if ((evento.name.toLowerCase().trim().replace(' ','').includes(searchValue)) || evento.description.toLowerCase().trim().includes(searchValue)) {
        filtradosUnicos.push(evento)
      }
    })
    console.log(filtradosUnicos);
    
    if(filtradosUnicos == 0){
      makeCards(eventos)
    }else{
      makeCards(filtradosUnicos)
    }
  }
}
