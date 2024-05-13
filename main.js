const circles = document.querySelectorAll('.circle')
const links = document.querySelectorAll('#circle-wrapper a')

// Function to update which card and circle are active
function updateActiveElements() {
    const hash = window.location.hash
    links.forEach((link, index) => {
        if (link.getAttribute('href') === hash) {
            circles[index].classList.add('active')
            document.querySelector(hash).style.display = 'block'
        } else {
            circles[index].classList.remove('active')
            document.querySelector(link.getAttribute('href')).style.display = 'none'
        }
    })
}

// Event listener for hash change to handle browser navigation and direct URL entry
window.addEventListener('hashchange', updateActiveElements)

// Set the initial state on page load
window.addEventListener('load', () => {
    if (!window.location.hash) {
        window.location.hash = '#breath-box' // Default to first tab
    } else {
        updateActiveElements() // Ensure correct tab is active if there's already a hash
    }
})
// window.addEventListener('load', () => {    
//         window.location.hash = '#breath-box' // Default to first tab    
//         updateActiveElements() // Ensure correct tab is active if there's already a hash    
// })



