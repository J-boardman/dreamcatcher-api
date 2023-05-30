const dreamForm = document.querySelector("#new-dream-form")
const saveBtn = document.querySelector("[data-save_button]")
const progressLabel = document.getElementById("progress-label")
const progressBar = document.getElementById("progress-bar")
const progressSpan = document.getElementById("progress-span")
const progressSpinner = document.getElementById("progress-spinner")
const recordNew =document.getElementById("record-new")

const handleNewDreamSubmit = async(e) => {
  saveBtn.classList.toggle("hidden")
  progressBar.classList.remove("hidden")
  progressSpan.classList.remove("hidden")
  progressSpan.classList.add("flex")
  e.preventDefault()
  let formData = JSON.stringify({
    prompt: e.target[0].value,
    user: e.target[1].value
  });

  try {
    const dreamGeneration = await fetch("/dreams", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: formData
    })

    const dreamData = await dreamGeneration.json()

    const responseArticle = document.querySelector("#dream-interpretation")
    responseArticle.innerText = dreamData.dream.response

    if(!e.target[2].checked){
      console.log("finished")
      progressBar.value = 100
      progressLabel.innerText = "All done!!!"
      progressSpinner.classList.add("hidden")
      recordNew.classList.remove("hidden")
      return
    }

    progressBar.value = 66
    progressLabel.innerText = "Generating a bedtime story..."
    
    const storyGeneration = await fetch("/stories", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        prompt: dreamData.dream.prompt,
        dreamID: dreamData.dream._id
      })
    })

    const story = await storyGeneration.json()
    console.log(story)

    progressBar.value = 100
    progressLabel.innerText = "All done!!!"
    progressSpinner.classList.add("hidden")
    
    const storyLink = document.getElementById("story-link")
    storyLink.href = `/story/${story.story._id}`
    storyLink.innerText = `Read ${story.story.title}`
    storyLink.classList.remove("hidden")
    recordNew.classList.remove("hidden")

    
  } catch (error) {
    console.log(error)
  }

}

dreamForm.addEventListener("submit", handleNewDreamSubmit)