import { useState } from "react";
import axios from "axios";
import styles from "../styles/Home.module.css";

export default function Home() {
  const [transformedImg, setTransformedImg] = useState("");
  const [reqStatus, setReqStatus] = useState("");

  const handleClick = () => {
    convertGif();
  };

  const convertGif = async () => {
    setReqStatus("loading...");
    try {
      const response = await axios.get("/api/gifToVideo");
      const mp4Url = /https?[^<>]*?\.mp4/.exec(response.data)[0];
      setTransformedImg(mp4Url);
      setReqStatus("Done..");
    } catch (error) {
      setReqStatus("An error occurred");
      console.log(error);
    }
  };

  return (
    <main className={styles.main}>
      <h1>Transform GIF to Video</h1>
      <div className={styles.container}>
        <div className={styles.input}>
          <div>
            <img
              src="https://res.cloudinary.com/ifeomaimoh/image/upload/v1656165531/giphy_nz4u8x.gif"
              alt="input-gif"
            />
          </div>
          <button onClick={handleClick} disabled={reqStatus === "loading..."}>
            Convert to video
          </button>
          <p>{reqStatus}</p>
        </div>
        <div className={styles.output}>
          {transformedImg && (
            <video controls className={styles.full_width}>
              <source src={transformedImg} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          )}
        </div>
      </div>
    </main>
  );
}
