const copyright = document.querySelector("#copyright");
copyright.textContent = `© ${new Date().getFullYear()}`


lastModified = new Date(document.lastModified);
document.getElementById('lastupdated').innerHTML = lastModified.toLocaleString();


