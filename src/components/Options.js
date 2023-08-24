import React from 'react'

const Options = ({name}) => {
    return (
        <form>
          <input type="checkbox" id={`${name} option`}
          />{" "}
          <label htmlFor={`${name} option`}></label>
        </form>
      )
}

export default Options