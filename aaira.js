function sendWhatsAppMessage() {
    let name = document.querySelector('input[name="data[Name]"]').value;
    let mobile = document.querySelector('input[name="data[Mobile]"]').value;

    let message = `Hello ${name}, thank you for ordering from AAIRA! We will contact you soon.`;

    let whatsappURL = `https://wa.me/91${mobile}?text=${encodeURIComponent(message)}`;
    window.open(whatsappURL, '_blank');

    return true; // allow form to continue submitting
}