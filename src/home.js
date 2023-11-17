class Home {
    getHome() {
        this.createElements()
        this.setClasses()
        this.setAttributes()
        this.bindNodes()
        return this.section
    }

    createElements() {
        this.section = document.createElement('main')
        this.heroBody = document.createElement('div')
        this.columns = document.createElement('div')
        this.column1 = document.createElement('div')
        this.column2 = document.createElement('div')
        this.title = document.createElement('p')
        this.subtitle = document.createElement('p')
        this.box = document.createElement('div')
        this.figure = document.createElement("figure")
        this.img = document.createElement("img")
    }

    setClasses() {
        this.section.classList.add("hero", "is-warning", "is-fullheight-with-navbar", "p-0")
        this.heroBody.classList.add("hero-body", "py-0")
        this.columns.classList.add("columns", "is-vcentered")
        this.column1.classList.add("column")
        this.column2.classList.add("column")
        this.title.classList.add("title", "is-size-1")
        this.subtitle.classList.add("subtitle")
        this.box.classList.add("box", "has-background-warning")
        this.figure.classList.add("image", "is-fullwidth")
        this.img.classList.add("is-rounded")
    }

    setAttributes() {
        this.title.textContent = "Welcome to our restaurant!"
        this.img.src = "./11787888_2450.jpg"
        this.img.alt = "Burger"
        this.subtitle.textContent = "Discover a world of flavors..."
    }

    bindNodes() {
        this.section.appendChild(this.heroBody)
        this.heroBody.appendChild(this.columns)
        this.columns.appendChild(this.column1)
        this.columns.appendChild(this.column2)
        this.column1.appendChild(this.title)
        this.column1.appendChild(this.subtitle)
        this.column2.appendChild(this.box)
        this.box.appendChild(this.figure)
        this.figure.appendChild(this.img)
    }


}

export default function getHome() {
    let home = new Home
    return home.getHome()
}