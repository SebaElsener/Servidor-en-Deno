
const colorsInput = document.getElementById('colorsInput')
const colorsForm = document.getElementById('colorsForm')
const colorsArray = []

colorsForm.addEventListener('submit', async (e) => {
    e.preventDefault()
    await fetch('/',
        {
            method: 'POST',
            headers: {
                'Content-Type': 'json'
            },
            body: JSON.stringify(colorsInput.value)
        }
    )
    .then(res => res.json())
    .then(color => {
        colorsArray.push(color)
        showColors()
    })
})

const showColors = () => {
    const colorsContainer = document.getElementById('colorsContainer')
    const mappedColors = colorsArray.map(color => {
        return `
            <div class='colorBox' style='width: 100px; height: 100px; background-color: ${color}'>
                <p class='pColor' style='color: ${color}'>${color}</p>
            </div>
        `
    })
    colorsContainer.innerHTML = mappedColors.join('')
}