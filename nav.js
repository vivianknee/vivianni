class MyHeader extends HTMLElement{
    connectedCallback() {
        this.innerHTML = `
        <nav>
            <ul>
                <li><a class="main-tab" href="index.html">Vivian Ni</a></li>
                <li><a class="tabs" href="tabs/campus-involvement.html" target="_blank" >Campus Involvement</a></li>
                <li><a class="tabs" href="tabs/professional-development.html" target="_blank" >Professional Development</a></li>
                <li><a class="tabs" href="tabs/projects.html" target="_blank" >Projects</a></li>
                <li><a class="tabs" href="index.html">Home</a></li>
                <button><a class="resume" href="Vivian Ni.pdf" target="_blank">Resume</a></button>
            </ul>
        </nav>
        `
    }
}

customElements.define('my-header', MyHeader)