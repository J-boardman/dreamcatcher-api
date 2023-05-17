const dreamListSection = document.getElementById("dream_list")
const modal = document.querySelector("dialog")

const renderTemplate = (dream) => {
  const date = new Date(dream[0].date)
  const dreamDate = new Intl.DateTimeFormat("en-AU").format(date)
  modal.showModal()
  modal.querySelector("[data-dream_heading").textContent = dreamDate
  modal.querySelector("[data-dream_body").textContent = dream[0].response
}

const fetchDreams = async() => {
  const response = await fetch("/dreams")
  const data = await response.json()
  return data
}


const removeDream = async(e) => {
  const response = await fetch(`/dreams/${e.target.value}`, {
    method: "delete",
    headers: {
      "Content-Type": "application/json"
    }
  })
  listDreams()
}

const readDream = async(e) => {
  const response = await fetch(`/dreams/${e.target.value}`)
  const data = await response.json()
  renderTemplate(data)
}

const listDreams = async() => {
  const dreams = await fetchDreams()

  dreamListSection.innerHTML = null

  dreamListSection.innerHTML += `
    <div class="hidden pb-2 md:block border-b-2 border-gray-300">Prompt</div>
    <div class="hidden pb-2 md:block border-b-2 border-gray-300">Response</div>
    <div class="hidden pb-2 md:block border-b-2 border-gray-300">Actions</div>
  `

  const mappedDreams = dreams.map(dream => {
    const {id, prompt, response} = dream
    return (
      `
      <div class="my-4">${prompt}</div>
      <button 
        data-read
        class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
        value="${id}"
      >
        Read
      </button>
      <button 
        data-delete
        class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-red-300 font-medium rounded-lg text-sm p-2 w-24 m-auto"
        value=${id}
      >
        Delete
      </button>
      `
    )
  }).reduce((a,b) => a+b)

  dreamListSection.innerHTML += mappedDreams

  const readBtns = dreamListSection.querySelectorAll("[data-read]")
  readBtns.forEach(btn => btn.addEventListener('click', readDream))
  
  const deleteBtns = dreamListSection.querySelectorAll('[data-delete]')
  deleteBtns.forEach(btn => btn.addEventListener("click", removeDream))

  document.querySelector("[data-close_modal]").addEventListener("click", () => {
    modal.close()
  })
}

listDreams()