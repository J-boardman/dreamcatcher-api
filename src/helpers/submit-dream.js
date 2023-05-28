const dreamForm = document.querySelector("#new-dream-form")
const saveBtn = document.querySelector("[data-save_button]")
const savingBtn = document.querySelector("[data-saving_button]")

const toggleSaveBtns = () => [saveBtn, savingBtn].forEach(btn => btn.classList.toggle("hidden"))

const handleNewDreamSubmit = async(e) => {
  toggleSaveBtns()
  e.preventDefault()
  let formData = JSON.stringify({
    prompt: e.target[0].value,
    user: e.target[1].value
  });

  try {
    const res = await fetch("/dreams", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: formData
    })
    
    location.href = res.url
  } catch (error) {
    console.log(error)
  }

}

dreamForm.addEventListener("submit", handleNewDreamSubmit)