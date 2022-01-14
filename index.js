let emailCollectorForm = document.getElementById("Email_collector")
emailCollectorForm.addEventListener("submit", event => {
    event.preventDefault()
    let ourFormData = new FormData(event.target)
    let userFirstName = ourFormData.get("first name")
    let userEmailAdress = ourFormData.get("email adress")
    let updatedHtmlContent = `
        <h2>Congratulations, ${userFirstName}</h2>
        <p>You're on your way to becoming a BBQ master!</p>
        <p class="fine_print">You will get weekly BBQ tips sent to ${userEmailAdress}</p>
        `
    let ourMainContent = document.getElementById("Main_content")
    ourMainContent.innerHTML = updatedHtmlContent
})