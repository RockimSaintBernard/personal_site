function convertHTMLtoPDF() {
    const { jsPDF } = window.jspdf;

    let doc = new jsPDF('l', 'mm', [1500, 1400]);
    let pdfjs = document.querySelector('.invoice-box');

    doc.html(pdfjs, {
        callback: function(doc) {
            doc.save("newpdf.pdf");
        },
        x: 12,
        y: 12
    }); 
}

const form = document.getElementById("form");
const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");


form.addEventListener("submit", function(event) {
    event.preventDefault();
    

    const firstNameValue = firstName.value;
const lastNameValue = lastName.value;


localStorage.setItem("first-name",firstNameValue);
localStorage.setItem("last-name", lastNameValue);

    window.location.href= "invoice.html"

});


