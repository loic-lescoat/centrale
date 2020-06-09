import React from "react";
import { withKnobs } from "@storybook/addon-knobs";

// reference: https://reactjs.org/docs/uncontrolled-components.html

export default {
  title: "Fetching data",
  decorators: [withKnobs],
};

export const SubmitEventStory = () => {
  const input = React.createRef();

  const handleSubmit = (event) => {
    alert("A name was submitted: " + input.current.value);
    event.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" ref={input} />
      </label>
      <input type="submit" value="Submit" />
    </form>
  );
};