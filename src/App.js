import React from "react";

import Form1 from "./registration_form/Form1";
import Child from "./State_lifting/Child";

export default function App() {
  const parentdata = "This data is the parent data @ App js";

  const OnChildData = (childData) => {
    console.log(childData);
    console.log("Data from child to parent ");
  };

  return (
    <div>
      <div>
        <Form1 />
      </div>

      <br />
      <br />
      <br />
      <div>
        <Child
          name={"Samrat"}
          parentData={parentdata}
          handleChild={OnChildData} //props use to get child data in parent
        />
      </div>
    </div>
  );
}
