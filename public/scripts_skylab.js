const modalView = document.querySelector('.modal-view')
const courses = document.querySelectorAll('.course')

//courses.map(course => course.addEventListener());
for (let course of courses) {
  course.addEventListener("click", function () {
    const courseId = course.getAttribute('id'); // or just: card.id
    modalView.classList.add('active');
    modalView.querySelector('iframe').src = `https://rocketseat.com.br/${courseId}`
  })
}

document.querySelector('.close-modal').addEventListener("click", function () {
  modalView.classList.remove('active')
  modalOverlay.querySelector('iframe').src = ""
})