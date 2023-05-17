const form = document.querySelector("form")
const main = document.querySelector("main")
const spinner = document.querySelector(".spinner")
const textWarning = document.querySelector(".text-length")

const toggleSpinner = async() => {
  spinner.classList.toggle("hidden")
  spinner.classList.toggle("h-0")
}

const handleSubmit = async(e) => {
  main.textContent = ""
  const prompt = {
    prompt: e.target[0].value
  }
  e.preventDefault();
  
  try {
    toggleSpinner()
    const response = await fetch("/dreams", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(prompt)
    })

    const data = await response.json()
    const { message } = data
    message.replace(".\n", "")
    toggleSpinner()
    main.textContent = message
  } catch (error) {
    console.log(error)
    main.textContent = "Error encountered."
  } finally {
    form.reset()
    textWarning.textContent = "0/80"
  }
}

const checkTextLength = (e) => {
  const maxLength = 80
  const characterCount = e.target.value.length
  characterCount == maxLength
    ? textWarning.classList.add('text-red-500')
    : textWarning.classList.remove('text-red-500')
  textWarning.textContent = `${characterCount}/${maxLength}`
}

form.addEventListener("submit", handleSubmit)
form.addEventListener("keydown", checkTextLength)