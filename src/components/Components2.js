import React from "react";
import { Spring } from "react-spring/renderprops";
const Components2 = ({state,setState}) => {
  return (
    <Spring
      from={{ opacity: 0 }}
      to={{ opacity: 1 }}
      config={{ delay: 1200, duration: 1500 }}
    >
      {(props) => (
        <div style={props}>
          <div style={c2Style}>
            <h1>Component 2</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti
              nam molestias aperiam deserunt eum aut? Asperiores debitis
              incidunt nesciunt, doloribus similique illo harum quis cumque,
              placeat nobis corporis laudantium error!
            </p>
            <button onClick={()=>setState(!state)}>toggle Component</button>
          </div>
        </div>
      )}
    </Spring>
  );
};
const c2Style = {
  background: "slateblue",
  color: "white",
  padding: "1.5rem",
};

export default Components2;
