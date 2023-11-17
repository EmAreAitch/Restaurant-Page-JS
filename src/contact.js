class ContactUs {
    getContact() {
        this.createDOM();
        return this.mainSection
    }

    createDOM() {
        this.mainSection = document.createElement('main');
        this.mainSection.classList.add('section', 'has-background-light');

        this.container = document.createElement('div');
        this.container.classList.add('container', 'has-background-warning', 'p-6');

        this.title = document.createElement('h1');
        this.title.classList.add('title', 'has-text-centered');
        this.title.textContent = 'Contact Us';

        this.columns = document.createElement('div');
        this.columns.classList.add('columns', 'is-centered');

        this.column = document.createElement('div');
        this.column.classList.add('column', 'is-half');

        this.form = document.createElement('form');

        const formFields = [
            { label: 'Name', type: 'text', placeholder: 'Your Name' },
            { label: 'Email', type: 'email', placeholder: 'Your Email' },
            { label: 'Phone', type: 'tel', placeholder: 'Your Phone' },
            { label: 'Message', type: 'textarea', placeholder: 'Your Message' },
        ];

        formFields.forEach((field) => {
            const fieldDiv = document.createElement('div');
            fieldDiv.classList.add('field');

            const label = document.createElement('label');
            label.classList.add('label');
            label.textContent = field.label;

            const control = document.createElement('div');
            control.classList.add('control');

            const inputElement = field.type === 'textarea' ? document.createElement('textarea') : document.createElement('input');
            inputElement.classList.add(field.type === 'textarea' ? 'textarea' : 'input');
            if (field.type !== 'textarea') {
                inputElement.type = field.type;
            }
            inputElement.placeholder = field.placeholder;

            control.appendChild(inputElement);
            fieldDiv.appendChild(label);
            fieldDiv.appendChild(control);
            this.form.appendChild(fieldDiv);
        });

        const submitButtonField = document.createElement('div');
        submitButtonField.classList.add('field');

        const submitButtonControl = document.createElement('div');
        submitButtonControl.classList.add('control');

        const submitButton = document.createElement('button');
        submitButton.classList.add('button', 'is-primary');
        submitButton.type = 'submit';
        submitButton.textContent = 'Submit';

        submitButtonControl.appendChild(submitButton);
        submitButtonField.appendChild(submitButtonControl);
        this.form.appendChild(submitButtonField);

        this.column.appendChild(this.form);
        this.columns.appendChild(this.column);
        this.container.appendChild(this.title);
        this.container.appendChild(this.columns);
        this.mainSection.appendChild(this.container);
    }

}

export default function getContactUs() {
    let contactUs = new ContactUs
    return contactUs.getContact()
}