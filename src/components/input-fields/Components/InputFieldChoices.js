import React, { useEffect } from 'react'
import { IcoGet } from '../../icons'

const InputFieldChoices = ({ dispay, choices, select, loading, close }) => {
  useEffect(() => {
    window.addEventListener('click', close)
    return () => {
      window.removeEventListener('click', close)
    }
    // eslint-disable-next-line
  }, [])

  if (!dispay) return null
  return (
    <div className='input-choices'>
      {loading ? (
        <div>Загрузка...</div>
      ) : !choices.length ? (
        <div>Нет доступных вариантов</div>
      ) : (
        choices.map((item) => (
          <ChoiceItem key={item.name} item={item} select={select} />
        ))
      )}
    </div>
  )
}

export default InputFieldChoices

const ChoiceItem = ({ item, select }) => {
  const itemProps = (x) => {
    if (x.active) return { className: 'active' }
    if (x.disabled) return { disabled: true }
    const onClick = (e) => {
      // e.stopPropagation()
      select(x.name, e)
    }
    return { onClick }
  }
  return (
    <div {...itemProps(item)}>
      {Boolean(item.icon) && <IcoGet name={item.icon} />}
      {item.name}
    </div>
  )
}
