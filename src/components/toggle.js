import React from "react"

const Toggle = ({ checked, onChange }) => (
  <div className="toggle-box">
    <input
      type="checkbox"
      name="checkbox1"
      id="toggle-box-checkbox"
      checked={checked}
      onChange={onChange}
    />
    <label htmlFor="toggle-box-checkbox" className="toggle-box-label-left" />
    <label htmlFor="toggle-box-checkbox" className="toggle-box-label" />
  </div>
)

export default Toggle
