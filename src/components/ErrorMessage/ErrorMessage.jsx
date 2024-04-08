import style from "./ErrorMessage.module.css";

const ErrorMessage = () => {
  return (
    <div>
      <p className={style.errorMessage}>Unfortunately, there was nothing found on such query. Try again or check out something else!</p>
    </div>
  );
};

export default ErrorMessage;