import React from 'react'
// App icons
import { ReactComponent as SvgAddCircle } from '../IMG/add_circle_out.svg'
import { ReactComponent as SvgApartment } from '../IMG/apartment.svg'
import { ReactComponent as SvgArrDown } from '../IMG/arr-dropdown.svg'
import { ReactComponent as SvgArrows } from '../IMG/arrows.svg'
import { ReactComponent as SvgCloudIn } from '../IMG/backup.svg'
import { ReactComponent as SvgCheck } from '../IMG/check.svg'
import { ReactComponent as SvgClose } from '../IMG/close.svg'
import { ReactComponent as SvgDescr } from '../IMG/description.svg'
import { ReactComponent as SvgDocument } from '../IMG/document.svg'
import { ReactComponent as SvgError } from '../IMG/error.svg'
import { ReactComponent as SvgFolder } from '../IMG/folder.svg'
import { ReactComponent as SvgFolderOut } from '../IMG/folder_out.svg'
import { ReactComponent as SvgLanguage } from '../IMG/language.svg'
import { ReactComponent as SvgLoader } from '../IMG/loader.svg'
import { ReactComponent as SvgLogin } from '../IMG/login.svg'
import { ReactComponent as SvgLogout } from '../IMG/logout.svg'
import { ReactComponent as SvgMenu } from '../IMG/menu.svg'
import { ReactComponent as SvgMore } from '../IMG/more.svg'
import { ReactComponent as SvgInfo } from '../IMG/notification.svg'
import { ReactComponent as SvgRefNet } from '../IMG/referal-net.svg'
import { ReactComponent as SvgSearch } from '../IMG/search.svg'
import { ReactComponent as SvgSettings } from '../IMG/settings.svg'
import { ReactComponent as SvgSettingsMob } from '../IMG/settings-mob.svg'
import { ReactComponent as SvgSorting } from '../IMG/sorting.svg'
import { ReactComponent as SvgStatistic } from '../IMG/statistic.svg'
import { ReactComponent as SvgSummary } from '../IMG/storage.svg'
import { ReactComponent as SvgSubject } from '../IMG/subject.svg'
import { ReactComponent as SvgSuccess } from '../IMG/success.svg'
import { ReactComponent as SvgTultip } from '../IMG/tultip.svg'
import { ReactComponent as SvgUser } from '../IMG/user.svg'
import { ReactComponent as SvgWarning } from '../IMG/warning.svg'
import { ReactComponent as SvgWork } from '../IMG/work.svg'
import { ReactComponent as SvgWorkOut } from '../IMG/work_out.svg'
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
