import React from 'react'
// App icons
import { ReactComponent as SvgAddCircle } from '../IMG/ico/add_circle_out.svg'
import { ReactComponent as SvgApartment } from '../IMG/ico/apartment.svg'
import { ReactComponent as SvgArrDown } from '../IMG/ico/arr-dropdown.svg'
import { ReactComponent as SvgArrows } from '../IMG/ico/arrows.svg'
import { ReactComponent as SvgCloudIn } from '../IMG/ico/backup.svg'
import { ReactComponent as SvgCheck } from '../IMG/ico/check.svg'
import { ReactComponent as SvgClose } from '../IMG/ico/close.svg'
import { ReactComponent as SvgDescr } from '../IMG/ico/description.svg'
import { ReactComponent as SvgDocument } from '../IMG/ico/document.svg'
import { ReactComponent as SvgError } from '../IMG/ico/error.svg'
import { ReactComponent as SvgFolder } from '../IMG/ico/folder.svg'
import { ReactComponent as SvgFolderOut } from '../IMG/ico/folder_out.svg'
import { ReactComponent as SvgLanguage } from '../IMG/ico/language.svg'
import { ReactComponent as SvgLoader } from '../IMG/ico/loader.svg'
import { ReactComponent as SvgLogin } from '../IMG/ico/login.svg'
import { ReactComponent as SvgLogout } from '../IMG/ico/logout.svg'
import { ReactComponent as SvgMenu } from '../IMG/ico/menu.svg'
import { ReactComponent as SvgMore } from '../IMG/ico/more.svg'
import { ReactComponent as SvgInfo } from '../IMG/ico/notification.svg'
import { ReactComponent as SvgRefNet } from '../IMG/ico/referal-net.svg'
import { ReactComponent as SvgSearch } from '../IMG/ico/search.svg'
import { ReactComponent as SvgSettings } from '../IMG/ico/settings.svg'
import { ReactComponent as SvgSettingsMob } from '../IMG/ico/settings-mob.svg'
import { ReactComponent as SvgSorting } from '../IMG/ico/sorting.svg'
import { ReactComponent as SvgStatistic } from '../IMG/ico/statistic.svg'
import { ReactComponent as SvgSummary } from '../IMG/ico/storage.svg'
import { ReactComponent as SvgSubject } from '../IMG/ico/subject.svg'
import { ReactComponent as SvgSuccess } from '../IMG/ico/success.svg'
import { ReactComponent as SvgTultip } from '../IMG/ico/tultip.svg'
import { ReactComponent as SvgUser } from '../IMG/ico/user.svg'
import { ReactComponent as SvgWarning } from '../IMG/ico/warning.svg'
import { ReactComponent as SvgWork } from '../IMG/ico/work.svg'
import { ReactComponent as SvgWorkOut } from '../IMG/ico/work_out.svg'
// Big
import { ReactComponent as SvgAttantion } from '../IMG/attantion.svg'
import { ReactComponent as SvgQuestion } from '../IMG/question.svg'
// Lang icons
import { ReactComponent as SvgWorld } from '../IMG/lang/world.svg'
import { ReactComponent as SvgRussian } from '../IMG/lang/russian.svg'
import { ReactComponent as SvgEnglish } from '../IMG/lang/english.svg'
import { ReactComponent as SvgGerman } from '../IMG/lang/german.svg'
import { ReactComponent as SvgChinese } from '../IMG/lang/chinese.svg'
import { ReactComponent as SvgSpanish } from '../IMG/lang/spanish.svg'
// App images
import ImgEmpty from '../IMG/images/no-image.png'
import ImgExtensions from '../IMG/images/extensions.jpg'
import ImgExtensions2 from '../IMG/images/extensions2.png'

export const IcoGet = ({ name }) => {
  switch (name) {
    case 'loader':
      return <SvgLoader />
    case 'success':
      return <SvgSuccess />
    case 'warning':
      return <SvgWarning />
    case 'error':
      return <SvgError />
    case 'info':
      return <SvgInfo />
    case 'close':
      return <SvgClose />
    case 'document':
      return <SvgDocument />
    case 'refnet':
      return <SvgRefNet />
    case 'sorting':
      return <SvgSorting />
    case 'statistic':
      return <SvgStatistic />
    case 'tultip':
      return <SvgTultip />
    case 'check':
      return <SvgCheck />
    case 'arrdown':
      return <SvgArrDown />
    case 'arrows':
      return <SvgArrows />
    case 'login':
      return <SvgLogin />
    case 'logout':
      return <SvgLogout />
    case 'menu':
      return <SvgMenu />
    case 'more':
      return <SvgMore />
    case 'settings':
      return <SvgSettings />
    case 'settingsmob':
      return <SvgSettingsMob />
    case 'subject':
      return <SvgSubject />
    case 'apartment':
      return <SvgApartment />
    case 'cloudin':
      return <SvgCloudIn />
    case 'descr':
      return <SvgDescr />
    case 'folder':
      return <SvgFolder />
    case 'foldero':
      return <SvgFolderOut />
    case 'language':
      return <SvgLanguage />
    case 'search':
      return <SvgSearch />
    case 'summary':
      return <SvgSummary />
    case 'work':
      return <SvgWork />
    case 'worko':
      return <SvgWorkOut />
    case 'user':
      return <SvgUser />
    case 'attantion': // Remove from Icon
      return <SvgAttantion />
    case 'question': // and place to DisplaySVG
      return <SvgQuestion />
    case 'addcircle':
      return <SvgAddCircle /> // and this
    default:
      return null
  }
}
export const IcoLang = ({ name }) => {
  switch (name) {
    case 'german':
      return <SvgGerman />
    case 'english':
      return <SvgEnglish />
    case 'spanish':
      return <SvgSpanish />
    case 'russian':
      return <SvgRussian />
    case 'chinese':
      return <SvgChinese />
    default:
      return <SvgWorld />
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
