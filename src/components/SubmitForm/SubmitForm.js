import "../App/App.css";

export default function SubmitForm() {
  return (
    <form className="form">
      <input
        className="form__input"
        name="text"
        type="text"
        required
        minLength="1"
        placeholder="Введите текст сообщения"
      />
      <button className="form__submit">Отправить</button>
    </form>
  );
}
