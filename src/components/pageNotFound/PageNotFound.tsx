import { Configuration, OpenAIApi} from "openai";
import React from "react";
import {useAsync} from "react-async"
// import "../App.css";

export default function PageNotFound() {
    const retrieveSkiMage = async() => {
        console.log(process.env.OPENAI_API_KEY)
        const config = new Configuration({
            apiKey:process.env.OPENAI_API_KEY
        });
        const openai = new OpenAIApi(config)
        const response = await openai.createImage({
            prompt: "blue line art wizard on skiis doodle with confetti", 
            n:1,
            size: "512x512"
        });
        const imageUrl = response.data.data[0].url;
        return imageUrl
    }
    const {data, error} = useAsync({promiseFn: retrieveSkiMage})
  return (
    <div>
      <div>
        <img
          src={`${data}`}
          alt="ski mage img"
        />
      </div>
    </div>
  );
}
