$(document).ready(() => {
  console.log(movie_collection)
})

const suggestMovie = () => {
  let filtered = []
  const filter = $('#movie_input').val()
  console.log(filter)
  $.each(movie_collection, (idx, ele) => {
    if (ele.toLowerCase().indexOf(filter.toLowerCase()) > -1) filtered.push(ele)
  })
  $('#show_movies').html('')
  $.each(filtered, (idx, ele) => {
    $('#show_movies').append(`<p>${ele}</p>`)
  })
  if (filter === '') $('#show_movies').html('')
}
