import { useState } from "react";
import axios from "axios";
import MainView from "../components/MainView";
import styles from "../styles/Home.module.css";

export default function Home() {
  const [transformedImg, setTransformedImg] = useState("");
  const [reqStatus, setReqStatus] = useState("");

  const setGifDelay = async () => {
    setReqStatus("loading...");
    try {
      const response = await axios.get("/api/setGifDelay");
      const imgUrl = /'(.+)'/.exec(response.data)[1];
      setTransformedImg(imgUrl);
      setReqStatus("Done..");
    } catch (error) {
      setReqStatus("An error occurred");
      console.log(error);
    }
  };

  return (
    <main className={styles.main}>
      <h1>Change delay between frames</h1>
      <MainView
        reqStatus={reqStatus}
        transformedImg={transformedImg}
        callFunction={setGifDelay}
        btnText="Set delay"
      />
    </main>
  );
}
