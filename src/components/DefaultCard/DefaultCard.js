import "../App/App.css";
// import { messageList } from "../../utils/constants";

export default function DefaultCard() {
  return (
    <div className="card-template card-template_type_default">
      <div className="card">
        <img src="https://code.s3.yandex.net/web-code/card__image.jpg" alt="Аватар пользователя" className="card__avatar" />
        <div className="card__text">
          <p className="card__paragraph">ответ</p>
        </div>
      </div>
    </div>
  );
}
