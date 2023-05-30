const userModal = document.getElementById("user-modal");

const handleRegisterSubmit = async(e) => {
  e.preventDefault()
  let formData = JSON.stringify(Object.fromEntries(new FormData(e.target)));
  let warningMessage = document.getElementById("register-warning")
  let usernameInput = document.getElementById("username-input")
  warningMessage.classList.add("hidden")
  usernameInput.classList.remove("input-error")
  
  const duplicateUsername = await fetch("/users/" + e.target.username.value)
  console.log(formData)

  if(duplicateUsername.status == 409){
    warningMessage.classList.remove("hidden")
    usernameInput.classList.add("input-error")
    return
  }

  const res = await fetch("/register", {
    method: "POST",
    headers: {
      'Content-Type': 'application/json'
    },
    body: formData
  })

  const autoLogin = await fetch("/log-in", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: formData
  })

  location.href = res.url
}

const renderUserModal = (form = "log-in-form") => {
  const template = document.getElementById(form)
  
  userModal.innerHTML = null
  userModal.appendChild(template.content.cloneNode(true))
  
  const modalSwitch = document.querySelector("[data-modal_switcher]")
  modalSwitch.addEventListener("click", (e) => renderUserModal(e.target.value))
  
  const registerForm = document.getElementById("registration-form")
  registerForm?.addEventListener("submit", handleRegisterSubmit)
}

renderUserModal()

const handleDreamDelete = async(e) => {
  console.log(e.target.parentElement.parentElement.remove())
  await fetch("/dreams/" + e.target.value, {
    method: "DELETE"
  })
}

const deleteDreamBtns = document.querySelectorAll("[data-delete_dream]")
deleteDreamBtns.forEach(btn => btn.addEventListener("click", handleDreamDelete))

