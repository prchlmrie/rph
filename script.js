window.onload = function() {
    // Check if we're coming from a direct link
    if (sessionStorage.getItem('directAccess') === 'true') {
        hideLanding();
        sessionStorage.removeItem('directAccess');
    }
}

function hideLanding() {
    document.getElementById("landingOverlay").style.display = "none";
    let mainContent = document.getElementById("mainContent");
    mainContent.style.display = "block";
    mainContent.classList.add("visible"); // Ensures the transition effect applies
    document.body.style.overflowY = "auto"; // Enables scrolling
}


const text = "GROUP 3 PRESENTS";
const typewriter = document.getElementById('typewriter');
let i = 0;

function type() {
    if (i < text.length) {
        typewriter.textContent += text.charAt(i);
        i++;
        setTimeout(type, 100);
    } else {
        setTimeout(erase, 1000); // Wait 1 second before erasing
    }
}

function erase() {
    if (i > 0) {
        typewriter.textContent = text.substring(0, i-1);
        i--;
        setTimeout(erase, 50);
    } else {
        setTimeout(type, 500); // Wait half second before typing again
    }
}

type(); // Start the loop

const kiplingPoem = `<p>If you can <span>keep</span> your head...`;
