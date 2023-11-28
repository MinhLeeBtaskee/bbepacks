import _ from "lodash";
import { moment } from "@bbepacks/modules";
import { both } from "@bbepacks/constants";

const { FROM_PARTNER, SERVICE_TYPE, LIST_SERVICE_TYPE, PAYMENT_STATUS } = both;

export const LANGUAGES = ["vi", "en"];

const LANG = "lang";
const TIME_ZONE = "tz";

/**
 * Trim 2 decimal places and don't round number
 * @param {*} avgRating
 * @returns number
 */
export const roundRating = (avgRating) => Math.floor(avgRating * 100) / 100;

export const setLanguage = (value) => {
  localStorage.setItem(LANG, value);
  i18n.setLocale(value);
};

export const setTimezone = (value) => {
  localStorage.setItem(TIME_ZONE, value);
};

export const compareDateTime = (dateA, dateB, format = "DD/MM/YYYY") => {
  const momentA = moment(dateA, format);
  const momentB = moment(dateB, format);

  if (momentA > momentB) return 1;
  if (momentA < momentB) return -1;
  return 0;
};

export const getCardType = (type) => {
  switch (type) {
    case "mc":
      return "mastercard";
    case "visa":
      return "visa";
    case "discover":
      return "discover";
    case "diners":
      return "dinersclub";
    case "amex":
      return "amex";
    case "maestro":
      return "maestro";
    case "jcb":
      return "jcb";
    case "electron":
      return "visaelectron";
    case "dankort":
      return "dankort";
    case "cash":
      return "cash";
    default:
      return "unknown-type";
  }
};

export const getAskerCancellationReason = (content) => {
  const cancellationReasons = {
    ASKER_BUSY: "Asker busy",
    POSTED_WRONG_DATE: "Posted wrong date",
    TASKER_NOT_COME: "Tasker not come",
    CANCELLATION_REASON_TASKER_NOT_COME_WITH_ANNOUCEMENT:
      "Tasker can not come. (announced)",
    TASKER_NOT_COME_WITH_ANNOUCEMENT: "Tasker can not come. (announced)",
    ASKER_DONT_NEED_ANYMORE: "Asker cancel task",
    TASK_WAS_EXPIRED: "Task was expired",
    BACKEND_CANCEL: "by BACKEND",
    NO_TASKER_ACCEPT: "No accepted tasker yet",
  };

  if (!content) {
    return "(OTHER))";
  }
  if (content.cancellationText) return content.cancellationText;
  if (content.cancellationReason) {
    return (
      cancellationReasons[content.cancellationReason] ||
      `(OTHER) _ ${content.cancellationReason}`
    );
  }
  // Return a default value if none of the conditions above are met
  return "(OTHER)";
};

export const getTaskerCancellationReason = (taskerCancelHistory) => {
  if (!taskerCancelHistory) {
    return i18n.__("common", "TASKER_CANCEL_TASK");
  }
  switch (taskerCancelHistory.reason) {
    case "NEARBY_TASK_PLACE":
      return `Tasker canceled - ${i18n.__(
        "common",
        "CAN_NOT_CONTACT_TO_ASKER"
      )}`;
    case "SO_FAR_AWAY":
      return `Tasker canceled - ${i18n.__("common", "SO_FAR_AWAY")}`;
    case "WRONG_DATE":
      return `Tasker canceled - ${i18n.__("common", "WRONG_DATE")}`;
    case "OTHER_REASON":
      if (taskerCancelHistory.textDetail) {
        return `Tasker canceled - ${taskerCancelHistory.textDetail}`;
      }
      return "Tasker canceled - Acceptable reason";
    default:
      return "Tasker canceled";
  }
};

export const getAskerChangeKey = (key) => {
  switch (key) {
    case "updateLaundryDateTime":
      return "Update laundry date time";
    case "updateLaundryInfo":
      return "Update laundry info";
    case "askerRating":
      return "Tasker not come";
    case "UPDATE_DATE_TIME":
    case "updateDateTime":
      return "Update date time";
    case "repostExpiredTask":
      return "Repost expired task";
    case "chooseTasker":
      return "Choose tasker";
    case "cancelTask":
      return "Cancel task";
    case "updateExpiredTask":
      return "Update expired task";
    case "completeTask":
      return "Complete task";
    case "payOffTask":
      return "Payoff task";
    case "updateTaskNote":
      return "Update task note";
    default:
      return `${key}`;
  }
};

export const getCostColor = (payment) => {
  if (payment && payment.method) {
    switch (payment.method) {
      case "CARD":
        return "blue";
      case "CREDIT":
        return "darkorange";
      default:
        return "";
    }
  }
  return "";
};

export const getPaymentMethod = (payment) => {
  if (!payment) {
    return "CASH";
  }
  switch (payment.method) {
    case "CARD":
      if (payment.cardInfo) {
        return `Card ....${payment.cardInfo.number}`;
      }
      return "Card ....xxxx";
    case "CREDIT":
      return "bPay";
    case "PROMOTION":
      return "Promotion account";
    case "BANK_TRANSFER":
      return "Subscription";
    case "CASH":
    default:
      return "CASH";
  }
};

export const getLanguage = () => localStorage.getItem(LANG);

export const getDayFromDate = (arrayDate) => {
  if (!arrayDate || arrayDate.length === 0) {
    return [];
  }
  const weekday = arrayDate.map((date) => date.getDay());
  return _.uniq(weekday);
};

export const COMPENSATION_REASONS = {
  TASKER_SUPORT_GAS: "supporting fuel payment",
  TASKER_WRONG_REVIEW: "wrong asker review",
  TASKER_ASKER_WRONG_CANCELED_REASON: "wrong canceled reason",
  TASKER_OTHER: "otherTaskerReason",

  ASKER_COMPLAIN_SERVICE: "asker complain about service",
  ASKER_CANCEL_WRONG_REASON: "asker canceled task with wrong reason",
  ASKER_CANCEL_SUBSCRIPTION_TASK: "asker canceled a task-subscription",
  ASKER_OTHER: "otherAskerReason",
};

export const FINE_REASONS = {
  TASKER_LOW_QUALITY: "TASKER_LOW_QUALITY",
  TASKER_BAD_ATTITUDE: "TASKER_BAD_ATTITUDE",
  TASKER_NOT_ENOUGH_TIME: "TASKER_NOT_ENOUGH_TIME",
  TASKER_OTHER: "TASKER_OTHER",

  ASKER_CANCEL_TASK: "ASKER_CANCEL_TASK",
  ASKER_REFUSE_PAY: "ASKER_REFUSE_PAY",
  ASKER_NOT_PAID_ENOUGH: "ASKER_NOT_PAID_ENOUGH",
  ASKER_OTHER: "ASKER_OTHER",
};

export const FIRST_SHOT_VACCINE_COVID_19 = "first_vaccine";
export const SECOND_SHOT_VACCINE_COVID_19 = "second_vaccine";
export const THIRD_SHOT_VACCINE_COVID_19 = "third_vaccine";

export const getColorPaymentStatus = (status) => {
  let text = status;
  let color = "";
  switch (status) {
    case PAYMENT_STATUS.SENDING:
      color = "purple";
      text = "PAYMENT_STATUS_SENDING";
      break;
    case PAYMENT_STATUS.CHARGING:
      color = "yellow";
      text = "PAYMENT_STATUS_CHARGING";
      break;
    case PAYMENT_STATUS.NEW:
      color = "yellow";
      text = "PAYMENT_STATUS_CHARGING";
      break;
    case PAYMENT_STATUS.AUTHORISED:
      color = "yellow";
      text = "PAYMENT_STATUS_CHARGING";
      break;
    case PAYMENT_STATUS.RESPONSED:
      color = "green";
      text = "PAYMENT_STATUS_RESPONSED";
      break;
    case PAYMENT_STATUS.PAID:
      color = "green";
      text = "PAYMENT_STATUS_RESPONSED";
      break;
    case PAYMENT_STATUS.CANCELED:
      color = "red";
      break;
    case PAYMENT_STATUS.FAILED:
      color = "red";
      break;
    default:
      break;
  }
  return { text, color };
};

export const updateObject = (oldObject, updatedProperties) => ({
  ...oldObject,
  ...updatedProperties,
});

export const regexValidator = (text) => {
  if (text.match(/^.*?(?=[\^#%&$\\*:<>?/\\{\\|\\}]).*$/)) {
    return false;
  }
  return true;
};

export const randomCode = (type, length) => {
  if (type === "number") {
    const min = 10000000;
    const max = 99999999;
    return (Math.floor(Math.random() * (max - min + 1)) + min)
      .toString()
      .substr(1, length);
  }
  if (type === "character") {
    return Math.random()
      .toString(36)
      .replace(/[^a-z]+/g, "")
      .substr(1, length);
  }
  if (type === "both") {
    return Math.random().toString(36).replace(".", "").substr(1, length);
  }
  return "";
};

export const getDateFilter = (rangeDate) => {
  const filterWithCollectionDate = {
    // using index for better query performance
    date: {
      $gte: new Date(rangeDate.$gte.getTime() - 1000 * 60 * 60 * 24 * 7), // 7 days before
    },
    collectionDate: rangeDate,
    "serviceText.en": "Laundry",
  };

  if (rangeDate.$lte) {
    // eslint-disable-next-line max-len
    filterWithCollectionDate.date.$lte = new Date(
      rangeDate.$lte.getTime() + 1000 * 60 * 60 * 24 * 7
    ); // 7 days after
  }

  return filterWithCollectionDate;
};

// eslint-disable-next-line max-len
export const isPermittedAction = (userPermissions, requirePermission) => {
  if (_.isArray(requirePermission)) {
    return !_.isEmpty(_.intersection(userPermissions, requirePermission));
  }
  return (
    _.indexOf(userPermissions, requirePermission) > -1 ||
    requirePermission === false
  );
};

// eslint-disable-next-line arrow-body-style
export const isPermitted = (userPermissions, requirePermission) => {
  return (
    _.indexOf(userPermissions, requirePermission) > -1 ||
    requirePermission === false
  );
};

export const getTaskTipAndRequirementCost = (task) => {
  if (
    task &&
    task.costDetail &&
    task.costDetail.reason &&
    task.costDetail.reason.tipAndRequirementCost
  ) {
    return task.costDetail.reason.tipAndRequirementCost;
  }
  return 0;
};

export const getLang = () => {
  let lang = getLanguage();
  if (!lang || (lang !== "en" && lang !== "vi")) {
    lang =
      (navigator.languages && navigator.languages[0]) ||
      navigator.language ||
      navigator.browserLanguage ||
      navigator.userLanguage ||
      "en";
  }
  if (_.includes(LANGUAGES, lang)) {
    setLanguage(lang);
    return lang;
  }
  setLanguage("en");
  return "en";
};

export const transformSearchText = (searchText) => {
  // eslint-disable-next-line
  const sourceString = searchText.replace(
    /[`~!#$%^&*()|+\-=?;:'",<>\{\}\[\]\\\/]/gi,
    ""
  );
  const str = sourceString
    .toLowerCase()
    .replace(
      /(a|á|à|ả|ã|ạ|ă|ắ|ằ|ẳ|ẵ|ặ|â|ấ|ầ|ẩ|ẫ|ậ)/g,
      "(a|á|à|ả|ã|ạ|ă|ắ|ằ|ẳ|ẵ|ặ|â|ấ|ầ|ẩ|ẫ|ậ)"
    )
    .replace(/(d|đ)/g, "(d|đ)")
    .replace(/(e|é|è|ẻ|ẽ|ẹ|ê|ế|ề|ể|ễ|ệ)/g, "(e|é|è|ẻ|ẽ|ẹ|ê|ế|ề|ể|ễ|ệ)")
    .replace(/(i|í|ì|ỉ|ĩ|ị)/g, "(i|í|ì|ỉ|ĩ|ị)")
    .replace(
      /(o|ó|ò|ỏ|õ|ọ|ô|ố|ồ|ổ|ỗ|ộ|ơ|ớ|ờ|ở|ỡ|ợ)/g,
      "(o|ó|ò|ỏ|õ|ọ|ô|ố|ồ|ổ|ỗ|ộ|ơ|ớ|ờ|ở|ỡ|ợ)"
    )
    .replace(/(u|ú|ù|ủ|ũ|ụ|ư|ứ|ừ|ử|ữ|ự)/g, "(u|ú|ù|ủ|ũ|ụ|ư|ứ|ừ|ử|ữ|ự)")
    .replace(/(y|ý|ỳ|ỷ|ỹ|ỵ)/g, "(y|ý|ỳ|ỷ|ỹ|ỵ)");
  return new RegExp(str, "i");
};

export const getSkip = (pagination = {}) => {
  const pageNumber = parseInt(pagination.pageNumber || 1, 10);
  const pageSize = parseInt(pagination.pageSize || 10, 10);
  return pageSize * (pageNumber - 1);
};

export const getLimit = (pagination = {}) => {
  const pageSize = parseInt(pagination.pageSize || 10, 10);
  return pageSize;
};

export const getSort = (params = {}) => {
  const sort = {};

  if (params && params.orderBy) {
    sort[params.orderBy] = params.order === "asc" ? 1 : -1;
  }

  return sort;
};

export const getDateRange = (params) => {
  if (!params.fromDate && !params.toDate) {
    return {
      $gte: moment().subtract(6, "months").startOf("day").toDate(),
      $lte: moment().add(7, "days").endOf("day").toDate(),
    };
  }

  if (!params.fromDate && params.toDate) {
    return {
      $gte: moment().subtract(1, "d").startOf("day").toDate(),
      $lte: moment(params.toDate).endOf("day").toDate(),
    };
  }

  if (params && !params.toDate && params.fromDate) {
    return {
      $gte: moment(params.fromDate).startOf("day").toDate(),
    };
  }
  const dateRange = {};
  if (params && params.fromDate && params.toDate) {
    return {
      $gte: moment(params.fromDate).startOf("day").toDate(),
      $lte: moment(params.toDate).endOf("day").toDate(),
    };
  }

  return dateRange;
};

export const handleArrayEmail = (emails = []) =>
  emails.map((data) => `{${data.address} ${data.verified}`);

// Return array strings of devices
export const handleDevices = (devices = []) =>
  devices.map(
    (device) =>
      `Platform: ${device.platform} - Model: ${device.model} - Version: ${device.version}`
  );

// get an array of cities without dupliated city
export const getCities = (cities = []) => _.uniqWith(cities, _.isEqual);

export const a11yProps = (index) => ({
  id: `wrapped-tab-${index}`,
  "aria-controls": `wrapped-tabpanel-${index}`,
});

export const getDaysfromDates = (
  dates = [],
  format = "dddd",
  language = "en"
) => {
  const newSet = new Set();
  const newDates = _.cloneDeep(dates);
  const sortedDate = newDates.sort((a, b) => moment(a).day() - moment(b).day());
  _.forEach(sortedDate, (date) => {
    const value =
      format === "d"
        ? +moment(date).format(format)
        : moment(date).format(format);

    if (format === "dddd") {
      newSet.add(i18n.getTranslation(`common.${value}`, { _locale: language }));
    } else {
      newSet.add(value);
    }
  });
  return [...newSet];
};

export const getDateFromWeekday = (weekday, startDate, endDate, time) => {
  if (weekday && weekday.length > 0) {
    const result = [];
    let start = new Date(startDate);
    start.setHours(time.getHours());
    start.setMinutes(time.getMinutes());
    start.setSeconds(0);
    start.setMilliseconds(0);
    const endD = new Date(endDate);
    endD.setHours(time.getHours());
    endD.setMinutes(time.getMinutes());
    endD.setSeconds(0);
    endD.setMilliseconds(0);
    const end = endD.getTime();
    while (start.getTime() <= end) {
      if (weekday.indexOf(start.getDay()) >= 0) {
        result.push(start);
      }
      start = moment(start).add(1, "d").toDate();
    }
    return result;
  }
  return [];
};

export const getDayFromDate = (arrayDate) => {
  if (!arrayDate || arrayDate.length === 0) {
    return [];
  }
  const weekday = arrayDate.map((date) => date.getDay());
  return _.uniq(weekday);
};

export const getQueryServiceType = (serviceType) => {
  const queryServiceType = {
    $or: [],
  };

  if (!serviceType || serviceType.length === 0) {
    return {};
  }

  // Default case, only add query when choose filter with service type
  if (serviceType.length === LIST_SERVICE_TYPE.length) {
    return {};
  }

  if (serviceType.indexOf(SERVICE_TYPE.NORMAL) >= 0) {
    queryServiceType.$or.push({
      isTetBooking: { $exists: false },
      fromPartner: { $exists: false },
      isPremium: { $exists: false },
      subscriptionId: { $exists: false },
      scheduleId: { $exists: false },
    });
  }
  if (serviceType.indexOf(SERVICE_TYPE.TET_BOOKING) >= 0) {
    queryServiceType.$or.push({
      isTetBooking: { $exists: true },
    });
  }
  if (serviceType.indexOf(SERVICE_TYPE.PREMIUM) >= 0) {
    queryServiceType.$or.push({
      isPremium: { $exists: true },
    });
  }
  if (serviceType.indexOf(FROM_PARTNER.TIKI_MINI_APP) >= 0) {
    queryServiceType.$or.push({
      fromPartner: FROM_PARTNER.TIKI_MINI_APP,
    });
  }
  if (serviceType.indexOf(FROM_PARTNER.VN_PAY_MINI_APP) >= 0) {
    queryServiceType.$or.push({
      fromPartner: FROM_PARTNER.VN_PAY_MINI_APP,
    });
  }

  if (serviceType.indexOf(SERVICE_TYPE.SUBSCRIPTION_BOOKING) >= 0) {
    queryServiceType.$or.push({
      subscriptionId: { $exists: true },
    });
  }
  if (serviceType.indexOf(SERVICE_TYPE.SCHEDULE_BOOKING) >= 0) {
    queryServiceType.$or.push({
      scheduleId: { $exists: true },
    });
  }

  if (queryServiceType?.$or.length > 0) {
    return queryServiceType;
  }

  return {};
};
