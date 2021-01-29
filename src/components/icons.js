import React from 'react'
// Big
import { ReactComponent as SvgAttantion } from '../IMG/attantion.svg'
import { ReactComponent as SvgQuestion } from '../IMG/question.svg'
import { ReactComponent as SvgLoaderI } from '../IMG/loader-i.svg'
// App images
import ImgEmpty from '../IMG/images/no-image.png'
import ImgExtensions from '../IMG/images/extensions.jpg'
import ImgExtensions2 from '../IMG/images/extensions2.png'

export const IcoGet = ({ name }) => {
  switch (name) {
    case 'attantion': // Remove from Icon
      return <SvgAttantion />
    case 'question': // and place to DisplaySVG
      return <SvgQuestion />
    case 'loaderi':
      return <SvgLoaderI />
    default:
      return null
  }
}

export const DisplayImage = ({ name }) => {
  switch (name) {
    case 'extensions':
      return <img src={ImgExtensions} alt='extensions' />
    case 'extensions2':
      return <img src={ImgExtensions2} alt='extensions' />
    default:
      return <img src={ImgEmpty} alt='' />
  }
}
