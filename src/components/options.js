import React from 'react';

//Components
import Option from "./option";

const Options = props => (
    <div>
      {props.options.map(option => (
        <Option
          key={option}
          optionText={option}
          handleDeleteOption={props.handleDeleteOption}
        />
      ))}
      {props.options.length === 0 && (
        <p>Please add an option to get started!</p>
      )}
      <button onClick={props.handleDeleteOptions}>Remove All</button>
    </div>
  );

export default Options;
