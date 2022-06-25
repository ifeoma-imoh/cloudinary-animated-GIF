import styles from "../styles/Home.module.css";

export default function MainView({
  reqStatus,
  transformedImg,
  callFunction,
  btnText,
}) {
  const handleClick = () => {
    callFunction();
  };

  return (
    <div className={styles.container}>
      <div className={styles.input}>
        <div>
          <img
            src="https://res.cloudinary.com/ifeomaimoh/image/upload/v1656165531/giphy_nz4u8x.gif"
            alt="input-gif"
          />
        </div>
        <button onClick={handleClick} disabled={reqStatus === "loading..."}>
          {btnText}
        </button>
        <p>{reqStatus}</p>
      </div>
      <div className={styles.output}>
        {transformedImg && (
          <img
            src={transformedImg}
            alt="transformed-img"
            className={styles.full_width}
          />
        )}
      </div>
    </div>
  );
}
