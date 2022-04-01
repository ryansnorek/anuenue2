function Contact() {
  const copyToClipboard = () => {
    const copyText = document.getElementById("email");
    copyText.focus();
    copyText.select();
    copyText.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(copyText.value);
    alert(`Copied ${copyText.value} to clipboard`);
  };
  return (
    <section className="contact">
      <div className="info">
        <input
          readOnly={true}
          id="email"
          value="anuenue@pepe.com"
          onClick={copyToClipboard}
        ></input>
      </div>
    </section>
  );
}
export default Contact;
