function printContent() {
    // Save the original HTML so we can restore it after printing
    const originalContent = document.body.innerHTML;
    const contentToPrint = document.querySelector('.content').outerHTML;

    // Add custom styles for A4 printing with no margins
    const style = `
        <style>
            @page {
                size: A4;
                margin: 0;
            }
            body, .content {
                width: 210mm; /* A4 width */
                height: 297mm; /* A4 height */
                margin: 0;
                padding: 0;
            }
            .content {
                overflow: visible;
            }
        </style>
    `;

    // Set up the page with only the content to be printed and add custom styles
    document.body.innerHTML = style + contentToPrint;

    // Trigger print dialog
    window.print();

    // Restore original HTML
    document.body.innerHTML = originalContent;

    // Reload styles and scripts if needed
    window.location.reload();
}

// Attach the print function to your button or event
document.getElementById("printBtn").addEventListener("click", printContent);
