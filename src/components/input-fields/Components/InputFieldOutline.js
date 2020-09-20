import React, { useEffect } from "react"

const InputFieldOutline = ({ label, color }) => {
  useEffect(() => {
    console.log("RENDER: Outline")
  })
  if (!color) return null
  const _className = () => {
    switch (color) {
      case "error":
        return { className: "error" }
      case "warning":
        return { className: "warning" }
      case "success":
        return { className: "success" }
      // case "disabled":
      //   return { className: "disabled" }
      default:
        return
    }
  }
  return (
    <>
      {Boolean(label) && <label>{label}</label>}
      <fieldset {..._className()}>
        <legend>{Boolean(label) && <span>{label}</span>}</legend>
      </fieldset>
    </>
  )
}

export default InputFieldOutline
