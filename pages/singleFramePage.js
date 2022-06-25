import { useState } from "react";
import axios from "axios";
import MainView from "../components/MainView";
import styles from "../styles/Home.module.css";

export default function Home() {
  const [transformedImg, setTransformedImg] = useState("");
  const [reqStatus, setReqStatus] = useState("");

  const getSingleFrame = async () => {
    setReqStatus("loading...");
    try {
      const response = await axios.get("/api/getSingleFrame");
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
      <h1>Get single frame</h1>
      <MainView
        reqStatus={reqStatus}
        transformedImg={transformedImg}
        callFunction={getSingleFrame}
        btnText="Get frame"
      />
    </main>
  );
}
