function Contact() {
  return (
    <section id="contact" className="container">
      <h2>Contato</h2>
      <p>Me envie uma mensagem pelo formulário abaixo:</p>
      <form>
        <input type="text" placeholder="Seu nome" />
        <input type="email" placeholder="Seu e-mail" />
        <textarea placeholder="Sua mensagem"></textarea>
        <button type="submit">Enviar</button>
      </form>
    </section>
  )
}

export default Contact
