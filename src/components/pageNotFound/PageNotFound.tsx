import { Configuration, OpenAIApi} from "openai";
import React from "react";
import {useAsync,Async} from "react-async"
// import "../App.css";


export default function PageNotFound() {
    const retrieveSkiMage = async() => {
        const config = new Configuration({
            apiKey:""
        });
        const openai = new OpenAIApi(config)
        const response = await openai.createImage({
            prompt: "blue line art wizard on skiis doodle with confetti", 
            n:1,
            size: "512x512"
        });
        const imageUrl = response.data.data[0].url;
        console.log(imageUrl)
        return new Promise((resolve) => {
          resolve( imageUrl ) 
      })
    }
    //const {data, error} = useAsync({promiseFn: retrieveSkiMage})

    //console.log(data)
  //   <div>
  //   <div>
  //     <img
  //       src={`${data}`}
  //       alt="ski mage img"
  //     />
  //   </div>
  // </div>
  return (
    <Async promiseFn={ retrieveSkiMage}>
      <Async.Pending></Async.Pending>
      <Async.Fulfilled>
        {data => (
           <div>
              <div>
                <img
                 src={`${data}`}
                  alt="ski mage img"
                />
              </div>
            </div>
        )}
      </Async.Fulfilled>
      <Async.Rejected></Async.Rejected>
    </Async>
  
  );
    
}

