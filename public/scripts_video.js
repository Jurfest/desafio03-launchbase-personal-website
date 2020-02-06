const cards = document.querySelectorAll('.card')

// cards.map(card => card.addEventListener());
for (let card of cards) {
  card.addEventListener("click", function () {
    const videoId = card.getAttribute('id'); // or just: card.id
    window.location.href = `https://www.youtube.com/embed/${videoId}`
  })
}

