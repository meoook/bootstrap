import React from "react"
import { IcoGet } from "../../icons"

const InputFieldChoices = ({ dispay, choices, select, loading }) => {
  if (!dispay) return null
  return (
    <div className='input-choices'>
      {loading ? (
        <div>Загрузка...</div>
      ) : !choices.length ? (
        <div>Нет доступных вариантов</div>
      ) : (
        choices.map((item) => <ChoiceItem key={item.name} item={item} select={select.bind(this, item.name)} />)
      )}
    </div>
  )
}

export default InputFieldChoices

const ChoiceItem = ({ item, select }) => {
  const itemProps = (item) => {
    if (item.active) return { className: "active" }
    if (item.disabled) return { disabled: true }
    const onClick = () => select(item.name)
    return { onClick }
  }
  return (
    <div {...itemProps}>
      {Boolean(item.icon) && <IcoGet name={item.icon} />}
      {item.name}
    </div>
  )
}