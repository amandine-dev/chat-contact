import React from "react";
import Contact from "../src/Components/Contact"

function App() {
  return (
    <div className="App">
      <Contact 
        name= "Buffy Summers"
        image= "https://i.skyrock.net/6567/71486567/pics/3220940811_1_3_7D9RlgbW.jpg"
        statustext = "offline"
        isOnline
        />
      <Contact 
      name= "Willow Rosenberg"
      image= "https://www.serieously.com/wp-content/uploads/2017/06/WILLOW.jpg"
      statustext = "online"
      />
      <Contact 
        name= "Rupert Giles"
        image="https://pausegeek.fr/img/persos/fictif/buffy-1997/rupert-giles.jpg"
        statustext = "online"
      />
    </div>
  );
}

export default App;
