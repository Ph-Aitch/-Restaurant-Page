export function signup() {
    const signBtn = document.querySelector(".signup")
    const dialog = document.querySelector("#signup")
    signBtn.addEventListener("click" , ()=>{
        dialog.showModal()
        document.body.style.overflow = "hidden"
    })
    dialog.addEventListener("click", (e)=>{
        if (e.target === dialog) {
            dialog.close()
            document.body.style = ``
        }
    })
}

export function form() {
    const form = document.querySelector("form")
    const dialog = document.querySelector("#signup")
    form.addEventListener("submit", (e)=>{
        e.preventDefault()
        form.reset()
        dialog.close()
        document.body.style = ``
    })
}