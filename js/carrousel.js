(function () {
  console.log('Début du carrousel')
  let carrousel__ouvrir = document.querySelector('.wp-block-gallery')

  let carrousel = document.querySelector('.carrousel')
  let carrousel__x = document.querySelector('.carrousel__x')
  let carrousel__figure = document.querySelector('.carrousel__figure')
  let carrousel__form = document.querySelector('.carrousel__form')

  let galerie = document.querySelector('.blocflex__galerie')
  let galerie__img = galerie.querySelectorAll('img')

  let index = 0
  let ancien_index = -1
  let position = 0

  carrousel__ouvrir.addEventListener('mousedown', function () {
    window.scrollTo(0, 0)
    carrousel.classList.add('carrousel--activer')
    ajouter_les_images_de_galerie()
  })

  carrousel__x.addEventListener('mousedown', function () {
    carrousel.classList.remove('carrousel--activer')
  })

  function ajouter_les_images_de_galerie() {
    for (const elem of galerie__img) {
      elem.dataset.index = position
      elem.addEventListener('mousedown', function () {
        index = this.dataset.index
        afficher_image(index)
      })

     
      creation_carrousel_avec_images_de_galerie(elem)
      creation_boutons_radio_carrousel()
    }
  }

  function creation_carrousel_avec_images_de_galerie(elem) {
    let img = document.createElement('img')
    img.classList.add('carrousel__img')
    img.src = elem.src
    carrousel__figure.appendChild(img);
    carrousel__figure.children[index].classList.add('carrousel__img--activer')
  }

  function creation_boutons_radio_carrousel() {
    let radio = document.createElement('input')
    console.log(radio.tagName)
    radio.setAttribute('type', 'radio')
    radio.setAttribute('name', 'carrousel__radio')
    radio.classList.add('carrousel__radio')
    radio.dataset.index = position
    position = position + 1
    carrousel__form.appendChild(radio)
    radio.addEventListener('mousedown', function () {
      index = this.dataset.index
      afficher_image(index)
    })
    console.log('index :' + index)

  }

  function afficher_image(index) {
    if (ancien_index != -1) {
      // carrousel__figure.children[ancien_index].style.opacity = 0  
      carrousel__figure.children[ancien_index].classList.remove('carrousel__img--activer')
      //carrousel__form.children[ancien_index].checked 
    }
    // carrousel__figure.children[index].style.opacity = 1
    carrousel__figure.children[index].classList.add('carrousel__img--activer')
    ancien_index = index
  }


})()