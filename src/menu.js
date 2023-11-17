class Menu {
    getMenu() {
        this.createElements()
        this.setClasses()
        this.setAttributes()
        this.bindNodes()
        return this.mainSection
    }

    createElements() {
        this.mainSection = document.createElement('main')
        this.heroSection = document.createElement('section')
        this.heroBody = document.createElement('div')
        this.container = document.createElement('div')
        this.heading = document.createElement('h1')
        this.columnSection = document.createElement('section')
        this.columns = document.createElement('div')
        this.column = document.createElement('div')
        this.card = document.createElement('div')
        this.cardImage = document.createElement('div')
        this.figure = document.createElement('figure')
        this.img = document.createElement("img")
        this.cardContent = document.createElement('div')
        this.cardTitle = document.createElement('h1')
        this.cardPrice = document.createElement('p')
        this.cardBody = document.createElement('p')
        this.cardFooter = document.createElement('div')
        this.cardFooterItem = document.createElement('a')
    }

    setClasses() {
        this.heroSection.classList.add("hero","has-background-dark","is-halfheight")
        this.heroBody.classList.add("hero-body")
        this.container.classList.add("container","has-text-centered")
        this.heading.classList.add("title","is-1","has-text-warning")
        this.columnSection.classList.add("section","has-background-light")
        this.columns.classList.add("columns", "is-centered", "is-multiline")
        this.column.classList.add("column","block","is-4")
        this.card.classList.add("card","has-background-warning")
        this.cardImage.classList.add("card-image","px-6")
        this.figure.classList.add("image","is-1by1","is-fullwidth")
        this.img.classList.add("is-rounded")
        this.cardContent.classList.add("card-content")
        this.cardTitle.classList.add("title","is-3")
        this.cardPrice.classList.add("subtitle")
        this.cardBody.classList.add("subtitle")
        this.cardFooter.classList.add("card-footer")
        this.cardFooterItem.classList.add("card-footer-item")
    }

    setAttributes() {
        this.heading.textContent = "MENU!"
        this.img.src = "./11787888_2450.jpg"
        this.img.alt = "Burger"
        this.cardTitle.textContent = "Punjabi Burger"
        this.cardPrice.textContent = "Rs. 5000"
        this.cardBody.textContent = "Embark on a culinary journey with our Punjabi Burger, a tantalizing fusion of robust Punjabi flavors and classic burger charm."
        this.cardFooterItem.textContent = "Buy now"
    }

    bindNodes() {
        this.mainSection.appendChild(this.heroSection)
        this.mainSection.appendChild(this.columnSection)
        this.heroSection.appendChild(this.heroBody)
        this.heroBody.appendChild(this.container)
        this.container.appendChild(this.heading)
        this.column.appendChild(this.card)
        this.card.appendChild(this.cardImage)
        this.card.appendChild(this.cardContent)
        this.card.appendChild(this.cardFooter)
        this.cardImage.appendChild(this.figure)
        this.figure.appendChild(this.img)
        this.cardContent.appendChild(this.cardTitle)
        this.cardContent.appendChild(this.cardPrice)
        this.cardContent.appendChild(this.cardBody)
        this.cardFooter.appendChild(this.cardFooterItem)
        for (let i=0; i<10;i++) {
            let cloneNode = this.column.cloneNode(true)
            this.columns.appendChild(cloneNode)
            this.column.classList.toggle("is-offset-1")
        }
        this.columnSection.appendChild(this.columns)
    }


}

export default function getMenu() {
    let menu = new Menu
    return menu.getMenu()
}