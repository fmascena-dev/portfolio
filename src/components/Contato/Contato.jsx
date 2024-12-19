import './ContatoStyles.scss';

export default function Contato() {
  return (
    <main id='contato'>
      <div className="form-container">
        <form className="form">
          <div className="form-group">
            <label htmlFor="name">Nome completo:</label>
            <input required name="Nome completo" id="name" type="text" />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input required name="email" id="email" type="text" />
          </div>
          <div className="form-group">
            <label htmlFor="tel">Telefone:</label>
            <input required name="telefone" id="tel" type="tel" />
          </div>
          <div className="form-group">
            <label htmlFor="message">Título da mensagem:</label>
            <input required name="message" id="message" type="text" />
          </div>
          <div className="form-group">
            <label htmlFor="textarea">Digite sua mensagem:</label>
            <textarea
              required
              cols={50}
              rows={10}
              id="textarea"
              name="textarea"
              defaultValue={'          '}
            />
          </div>
          <button type="submit" className="form-submit-btn">
            Submit
          </button>
        </form>
      </div>
    </main>
  );
}
