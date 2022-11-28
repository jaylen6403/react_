import type { CSSProperties } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconName } from '@fortawesome/fontawesome-svg-core';
import { findIconDefinition, icon } from '@fortawesome/fontawesome-svg-core';
import { library } from '@fortawesome/fontawesome-svg-core';

/**
 * In order to reduce bundle size, each icon needed must be specified and imported
 * below, for each of the relevant font-awesome prefixes (light, regular, strong)
 */
import {
  faAngleDown,
  faAngleLeft,
  faAngleDoubleLeft,
  faAngleRight,
  faAngleDoubleRight,
  faAngleUp,
  faBars,
  faCheck,
  faCheckCircle,
  faCheckSquare,
  faChevronDoubleRight,
  faChevronDown,
  faChevronLeft,
  faChevronRight,
  faChevronUp,
  faEnvelope,
  faExclamationCircle,
  faFileAlt,
  faFilePdf,
  faFileSpreadsheet,
  faHouse,
  faInfoCircle,
  faPhoneAlt,
  faPlus,
  faQuestionCircle,
  faRetweet,
  faRetweetAlt,
  faSearch,
  faSquare,
  faStopwatch,
  faTimes,
  faTimesCircle,
  faUser,
  faUserFriends,
  faUserPlus,
  faUsers,
  faScaleBalanced,
  faMoneyCheckEditAlt,
  faCalendar,
  faStar,
  faClock,
} from '@fortawesome/pro-light-svg-icons';
import {
  faAngleDown as farAngleDown,
  faAngleUp as farAngleUp,
  faBars as farBars,
  faCalendarPlus as farCalendarPlus,
  faCalendar as farCalendar,
  faCheckCircle as farCheckCircle,
  faPlus as farPlus,
  faTimes as farTimes,
  faSearch as farSearch,
  faSpinner as farSpinner,
  faExclamationCircle as farExclamationCircle,
  faFilePdf as farFilePdf,
  faFileArrowUp as farFileArrowUp,
  faHouse as farHouse,
  faFileExcel as farFileExcel,
  faSquareCheck as farSquareCheck,
  faUserFriends as farUserFriends,
  faFilter as farFilter,
  faUserClock as farUserClock,
  faArrowsRotate as farArrowsRotate,
  faEnvelope as farEnvelope,
  faFileLines as farFileLines,
  faCheck as farCheck,
  faFileArrowDown,
} from '@fortawesome/pro-regular-svg-icons';
import {
  faExclamation as fasExclamation,
  faFile as fasFile,
  faRetweet as fasRetweet,
  faStar as fasStar,
  faUser as fasUser,
  faXmark as fasXmark,
  faUserClock as fasUserClock,
  faFileArrowDown as fasFileArrowDown,
  faCheck as fasCheck,
  faFileInvoiceDollar as fasFileInvoiceDollar,
  faLayerGroup as fasLayerGroup,
  faCalendar as fasCalendar,
  faCalendarAlt as fasCalendarAlt,
  faMoneyCheckEditAlt as fasMoneyCheckEditAlt,
  faLayerGroup as fasLayerGroupMinus,
  faScaleBalanced as fasScaleBalanced,
  faRefresh as fasRefresh,
  faCheckCircle as fasCheckCircle,
  faExclamationCircle as fasExclamationCircle,
  faArrowRightLong as fasArrowRightLong,
  faArrowLeftLong as fasArrowLeftLong,
  faChevronUp as fasChevronUp,
} from '@fortawesome/pro-solid-svg-icons';

export type IconCode = IconName;

export interface IconProps {
  /**
   * Class name for the top level svg element.
   */
  className?: string;
  /**
   * Icon code corresponding to an SVG.
   */
  iconCode: IconCode;
  /**
   * Rotate icon in degrees.
   */
  rotate?: number;
  /**
   * CSS properties.
   */
  style?: CSSProperties;
  /**
   * prefix for icons, fal = light, far = regular, fas = strong
   */
  prefix?: 'fal' | 'fas' | 'far';
}

//there is an open issue in the pro-regualr-svg-icons library that is causing a type issue, this is a fix until issue if addressed
// eslint-disable-next-line @typescript-eslint/no-explicit-any
// (library.add as any)(fal, far, fas);
library.add(
  farSpinner,
  fasXmark,
  faAngleDown,
  farAngleDown,
  faAngleLeft,
  faAngleDoubleLeft,
  faAngleRight,
  faAngleDoubleRight,
  faAngleUp,
  farAngleUp,
  faBars,
  farBars,
  faCalendar,
  farCalendarPlus,
  faCheck,
  farCheck,
  fasCheck,
  faCheckCircle,
  faCheckSquare,
  faChevronDoubleRight,
  faChevronDown,
  faChevronLeft,
  faChevronRight,
  faChevronUp,
  fasChevronUp,
  faClock,
  faEnvelope,
  fasExclamation,
  faExclamationCircle,
  farExclamationCircle,
  faFileAlt,
  fasFileInvoiceDollar,
  fasLayerGroup,
  fasCalendar,
  fasCalendarAlt,
  fasMoneyCheckEditAlt,
  fasLayerGroupMinus,
  fasScaleBalanced,
  faFilePdf,
  farFilePdf,
  farFileArrowUp,
  faFileSpreadsheet,
  farFileExcel,
  faHouse,
  farHouse,
  faInfoCircle,
  faMoneyCheckEditAlt,
  faPhoneAlt,
  faPlus,
  farPlus,
  faQuestionCircle,
  faRetweet,
  faRetweetAlt,
  faScaleBalanced,
  faSearch,
  farSearch,
  faSquare,
  farSquareCheck,
  faStar,
  faStopwatch,
  faTimes,
  farTimes,
  faTimesCircle,
  faUser,
  fasUser,
  faUserFriends,
  farUserFriends,
  faUserPlus,
  farFilter,
  farAngleDown,
  farAngleUp,
  farBars,
  farCalendarPlus,
  farCalendar,
  farCheckCircle,
  fasCheckCircle,
  farPlus,
  farSpinner,
  farTimes,
  fasFileArrowDown,
  fasExclamation,
  fasExclamationCircle,
  fasFile,
  fasRetweet,
  fasStar,
  fasUser,
  faUsers,
  faScaleBalanced,
  faMoneyCheckEditAlt,
  faCalendar,
  farSearch,
  farExclamationCircle,
  fasXmark,
  farUserClock,
  fasUserClock,
  farArrowsRotate,
  farEnvelope,
  fasFileArrowDown,
  farFileLines,

  fasRefresh,
  faFileArrowDown,
  fasArrowRightLong,
  fasArrowLeftLong
);

export const Icon = ({
  className,
  iconCode,
  style,
  rotate,
  prefix = 'fal',
}: IconProps) => {
  const image = findIconDefinition({
    prefix: prefix,
    iconName: iconCode,
  });
  return image ? (
    <FontAwesomeIcon
      className={className}
      icon={icon(image)}
      style={style}
      transform={rotate ? { rotate } : undefined}
    />
  ) : null;
};
