import { actionPermissionsConstant } from "../both/permissions";

export * from "./default-value";

// TODO
// import { TLanguage } from 'types-root/lang';
// import { IFilterTemplate } from 'types-root/notification';

type TLanguage = any;
type IFilterTemplate = any;

export const globalConstant = {
  TASKER_NOT_COME: "TASKER_NOT_COME",
  TASKER_NOT_COME_WITH_ANNOUCEMENT: "TASKER_NOT_COME_WITH_ANNOUCEMENT",
  ASKER_BUSY: "ASKER_BUSY",
  POSTED_WRONG_DATE: "POSTED_WRONG_DATE",
  ASKER_DONT_NEED_ANYMORE: "ASKER_DONT_NEED_ANYMORE",
  NO_TASKER_ACCEPT: "NO_TASKER_ACCEPT",
  NEARBY_TASK_PLACE: "NEARBY_TASK_PLACE",
  WRONG_DATE: "WRONG_DATE",
  SO_FAR_AWAY: "SO_FAR_AWAY",
  OTHER_REASON: "OTHER_REASON",
  CAN_NOT_CONTACT_TO_ASKER: "CAN_NOT_CONTACT_TO_ASKER",
  OTHER: "OTHER",
};

export const accountingPermissions = [
  actionPermissionsConstant.accountingCheckingExcel,
  actionPermissionsConstant.accountingReadCardTransaction,
];

const getSuitableY = (y: any, yArray = [], direction: any) => {
  let result = y;
  yArray.forEach((existedY) => {
    if (existedY - 14 < result && existedY + 14 > result) {
      if (direction === "right") {
        result = existedY + 14;
      } else {
        result = existedY - 14;
      }
    }
  });

  return result;
};
export const PLUGINS = [
  {
    afterDraw: (chart: any) => {
      const { ctx } = chart.chart;
      ctx.save();
      ctx.font = "18px 'Averta Std CY'";
      const leftLabelCoordinates: any = [];
      const rightLabelCoordinates: any = [];
      const chartCenterPoint = {
        x:
          (chart.chartArea.right - chart.chartArea.left) / 2 +
          chart.chartArea.left,
        y:
          (chart.chartArea.bottom - chart.chartArea.top) / 2 +
          chart.chartArea.top,
      };
      chart.config.data.labels.forEach((label: any, i: number) => {
        const meta = chart.getDatasetMeta(0);
        const arc = meta.data[i];
        const dataset = chart.config.data.datasets[0];

        // Prepare data to draw
        // important point 1
        const centerPoint = arc.getCenterPoint();
        /* eslint-disable no-underscore-dangle */
        const model = arc._model;
        let color = model.borderColor;
        const labelColor = "black";
        if (dataset?.backgroundColor[i]) {
          color = dataset?.backgroundColor[i];
          // labelColor = dataset?.backgroundColor[i];
        }

        const angle = Math.atan2(
          centerPoint.y - chartCenterPoint.y,
          centerPoint.x - chartCenterPoint.x
        );
        // important point 2, this point overlapsed with existed points
        // so we will reduce y by 14 if it's on the right
        // or add by 14 if it's on the left
        const point2X =
          chartCenterPoint.x + Math.cos(angle) * (model.outerRadius + 15);
        let point2Y =
          chartCenterPoint.y + Math.sin(angle) * (model.outerRadius + 15);

        let suitableY;
        if (point2X < chartCenterPoint.x) {
          // on the left
          suitableY = getSuitableY(point2Y, leftLabelCoordinates, "left");
        } else {
          // on the right

          suitableY = getSuitableY(point2Y, rightLabelCoordinates, "right");
        }

        point2Y = suitableY;

        let value = dataset.data[i];
        if (dataset.polyline && dataset.polyline.formatter) {
          value = dataset.polyline.formatter(value);
        }
        const edgePointX = point2X < chartCenterPoint.x ? 10 : chart.width - 10;

        if (point2X < chartCenterPoint.x) {
          leftLabelCoordinates.push(point2Y);
        } else {
          rightLabelCoordinates.push(point2Y);
        }
        // DRAW CODE
        // first line: connect between arc's center point and outside point
        ctx.strokeStyle = color;
        ctx.beginPath();
        ctx.moveTo(centerPoint.x, centerPoint.y);
        ctx.lineTo(point2X, point2Y);
        ctx.stroke();
        // second line: connect between outside point and chart's edge
        ctx.beginPath();
        ctx.moveTo(point2X, point2Y);
        ctx.lineTo(edgePointX, point2Y);
        ctx.stroke();
        // fill custom label
        const labelAlignStyle =
          edgePointX < chartCenterPoint.x ? "left" : "right";
        const labelX = edgePointX;
        const labelY = point2Y;
        ctx.textAlign = labelAlignStyle;
        ctx.textBaseline = "bottom";

        ctx.fillStyle = labelColor;
        ctx.fillText(value, labelX, labelY);
      });
      ctx.restore();
    },
  },
];

export const USER_STATUS = {
  ACTIVE: 'ACTIVE',
  DISABLED: 'DISABLED',
  INACTIVE: 'INACTIVE',
  IN_PROBATION: 'IN_PROBATION',
  LOCKED: 'LOCKED',
  UNVERIFIED: 'UNVERIFIED',
  UNLOCKED: 'UNLOCKED',
};

export const CHECKINPUT_TYPE_OF_TASKER = {
  TASKER_PASS: 'TASKER_PASS',
};

export const SOURCE_NAME_FA_TRANSACTION = {
  DEPOSIT: 'DEPOSIT',
  WITHDRAW: 'WITHDRAW',
  SYSTEM: 'SYSTEM',
};

export const ACCOUNT_TYPE = [
  { label: 'MAIN_ACCOUNT', value: 'M' },
  { label: 'PROMOTION_ACCOUNT', value: 'P' },
];

export const PAYMENT_METHOD = [
  { label: 'TRANSFER', value: 'transfer' },
  { label: 'CASH', value: 'cash' },
];

export const PAYMENT_REASON = [
  'DEPOSIT',
  'SYSTEM_ERROR',
  '1ST_DEPOSIT',
  '2ND_DEPOSIT',
  '3RD_DEPOSIT',
];

export const WITHDRAW_REASON = [
  'WITHDRAW',
  'SYSTEM_ERROR',
  '1ST_WITHDRAW',
  '2ND_WITHDRAW',
  '3RD_WITHDRAW',
];

export const QUIZZES_TYPE = {
  QUIZ: 'QUIZ',
  VIDEO: 'VIDEO',
};

export const ITEMS_LANGUAGE: Array<{ label: string; value: TLanguage }> = [
  {
    value: 'vi',
    label: '🇻🇳 Vietnamese',
  },
  {
    value: 'en',
    label: '🇺🇸 English',
  },
  {
    value: 'ko',
    label: '🇰🇷 Korean',
  },
  {
    value: 'th',
    label: '🇹🇭 Thai',
  },
  {
    value: 'id',
    label: '🇮🇩 Indonesian',
  },
];

export const EMPTY_LENGHT = 0;

export const MIN_VALUE_VALIDATOR_LENGTH = 3;

export const TASK_STATUS = {
  CONFIRMED: 'CONFIRMED',
  DONE: 'DONE',
  POSTED: 'POSTED',
  WAITING_ASKER_CONFIRMATION: 'WAITING_ASKER_CONFIRMATION',
  CANCELED: 'CANCELED',
  EXPIRED: 'EXPIRED',
};

// currently, by  default we have commission 20% for each task and subscription
export const COMMISSION_DEFAULT = 0.2;
export const DAILY_INCOME_DEFAULT_TIME = 17;

export const TYPE_BREWARDS = {
  LIST_BREWARDS: 'List bRewards',
  CATEGORIES: 'List category',
  FLASH_SALE: 'Flash sale',
  REFERRAL_CAMPAIGN: 'Referral campaign',
};

export const CATEGORIES_STATUS = {
  ACTIVE: 'ACTIVE',
  INACTIVE: 'INACTIVE',
};

export const ALLOWABLE_IMAGE_SIZE = 64; // Image size allow 64Kb;
export const COUNTRY = [
  {
    value: 'VN',
    text: 'Việt Nam',
    url: 'vietnam',
  },
  {
    value: 'TH',
    text: 'Thailand',
    url: 'thailand',
  },
  {
    value: 'ID',
    text: 'Indonesia',
    url: 'indonesia',
  },
];
export const PROMOTION_STATUS = {
  ACTIVE: 'ACTIVE',
  INACTIVE: 'INACTIVE',
};
export const ASKER_RANK = {
  ASKER_RANK_NAME_MEMBER: 1,
  ASKER_RANK_NAME_SILVER: 2,
  ASKER_RANK_NAME_GOLD: 3,
  ASKER_RANK_NAME_PLATINUM: 4,
};

export const PROMOTION_STATUS_ARRAY = Object.keys(PROMOTION_STATUS);

export const PROMOTION_USING_FROM = {
  SYSTEM: 'SYSTEM',
  SYSTEM_WITH_PARTNER: 'SYSTEM_WITH_PARTNER',
};
export const PROMOTION_USING_TYPE = {
  MONEY: 'MONEY',
  PERCENT: 'PERCENTAGE',
};
export const URL_LOGO_BTASKEE =
  'https://btaskee-stag.s3-ap-southeast-1.amazonaws.com/campaigns/LG99yorZLWWapC8Az';

export const PROMOTION_CODE_TYPE = {
  CODE_LIST: 'Code list',
  CODE_FROM_PARTNER: 'Code from partner',
  GIFT_INFO: 'Gift Information',
};
export const PROMOTION_USING_TYPE_OF_DUE_DATE = {
  NUMBER_OF_DAY_DUE_DATE: 'Number of day due date',
  EXPIRED_DATE: 'Expired date',
};

export const IMAGE_FALLBACK =
  'data:image/png;base64,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';

export const TEMPLATE_LANGUAGES = [
  {
    value: 'vi',
    label: 'Tiếng Việt',
  },
  {
    value: 'th',
    label: 'ไทย',
  },
];

export const TEMPLATE_TEAMS_MAP = {
  'customer-service': 'Customer Service',
  tasker: 'Tasker',
  marketing: 'Marketing',
};

export type TYPE_TEMPLATE_TEAMS_MAP = (keyof typeof TEMPLATE_TEAMS_MAP)[];

export const TEMPLATE_FILTER_DEFAULT: IFilterTemplate = {
  type: 301,
  country: 'all',
  city: 'all',
  district: ['all'],
  service: ['all'],
  status: 'all',
  phone: '',
};

export const NOTIFICATION_FILTER_TYPES = [
  {
    label: 'Bulk filter',
    value: 'filter',
  },
  {
    label: 'Phone filter',
    value: 'phone',
  },
];

export const LIST_USER_STATUS = [
  'ACTIVE',
  'DISABLED',
  'INACTIVE',
  'IN_PROBATION',
  'LOCKED',
  'UNVERIFIED',
];

export const TEXT_VIETNAMESE =
  /[a-z0-9A-ZÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ]/u;

export const PHONE_FORMAT = /[^\r\n]+/g;

export const MIN_SEARCH_LENGTH = 2;

export const FILE_TYPE_CSV =
  'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';

export const LEVEL_STARTER = 'LV1';
export const BREWARD = 'BREWARD';
export const TRAINING = 'TRAINING';

export const CHARS =
  'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

export const LANGUAGES = ['vi', 'en'];

export const COLORS = {
  BLUE: '#1070CA',
};

export const INCENTIVE_PARTNER_WOGI = 'WOGI';
export const MIN_LENGTH_PREFIX = 3;
export const MAX_LENGTH_PREFIX = 5;
export const REMOVE_TASKER = 'REMOVE_TASKER';

export const TYPE_REQUIRE_OFFICE_CLEANING = {
  CLEANING_GLASSES: 6,
  VACUUMING_OFFICE_CARPETS: 7,
};
export const NOTIFICATION_FROM_BE_TYPE = 37;

export const NOTIFICATION_CHARACTER_LIMIT = 50;

export const INCENTIVES_QUANTITY_CONSTRAINTS = {
  MIN: 3,
  MAX: 10,
};

export const SERVICE_TEXT_SUBSCRIPTION = {
  CHILD_CARE: 'Child Care',
  PATIENT_CARE: 'Patient Care',
  ELDERLY_CARE: 'Elderly Care',
};

export const PAYMENT_CARD_STATUS = {
  ACTIVE: 'ACTIVE',
  DISABLED: 'DISABLED',
  EXPIRED: 'EXPIRED',
};

export const STATUS_TRAINING = {
  PASS: 'PASS',
  FAILED: 'FAILED',
  WATCHED_VIDEOS: 'WATCHED_VIDEOS',
};

// TODO Indonesia
// Implement transaction ID later
export const LIST_TRANSACTION_PAYMENT = [
  {
    name: 'SHOPEE_PAY',
    value: 'SHOPEE_PAY',
    country: ['VN', 'TH'],
  },
  {
    name: 'ZALO_PAY',
    value: 'ZALO_PAY',
    country: ['VN'],
  },
  {
    name: 'MOMO',
    value: 'MOMO',
    country: ['VN'],
  },
  {
    name: 'CARD',
    value: 'CARD',
    country: ['VN', 'TH'],
  },
  {
    name: 'TRUE_MONEY',
    value: 'TRUE_MONEY',
    country: ['TH'],
  },
  {
    name: 'PROMPT_PAY',
    value: 'PROMPT_PAY',
    country: ['TH'],
  },
  {
    name: 'VN_PAY',
    value: 'VN_PAY',
    country: ['VN'],
  },
  {
    name: 'TIKI',
    value: 'TIKI',
    country: ['VN'],
  },
];

export const ACCOUNTING_INCOME_ASKER_CASES = [
  {
    activity: 'TOP_UP',
    channel: ['SHOPEE_PAY', 'ZALO_PAY', 'MOMO', 'CARD', 'VN_PAY', 'TIKI'],
  },
  {
    activity: 'REFUND',
    channel: [
      'SHOPEE_PAY',
      'ZALO_PAY',
      'MOMO',
      'CARD',
      'VN_PAY',
      'TIKI',
      'B_PAY',
    ],
  },
  {
    activity: 'COMPENSATION',
    channel: [],
  },
];

export const ACCOUNTING_INCOME_TASKER_CASES = [
  {
    activity: 'SERVICE_PAYMENT',
    channel: ['SHOPEE_PAY', 'ZALO_PAY', 'MOMO', 'CARD', 'VN_PAY', 'TIKI'],
  },
  {
    activity: 'TIP',
    channel: ['SHOPEE_PAY', 'ZALO_PAY', 'MOMO', 'CARD', 'VN_PAY', 'TIKI'],
  },
  {
    activity: 'REWARD',
    channel: [],
  },
  {
    activity: 'ONBOARD',
    channel: [],
  },
];

/**
 * The status of Tasker during the registration process
 * INPUT_OTP: status is INACTIVE
 * SELECT_PLACES_AND_SERVICES: status is UNVERIFIED and Tasker does not have workingPlaces
 * TRAINING: status is UNVERIFIED, Tasker has workingPlaces, checkInput is not TASKER_PASS
 * SEND_PROFILE: checkInput is TASKER_PASS and Tasker does not have profile in taskerProfile table
 */
export const TASKER_NEEDS_SUPPORT_REGISTRATION = {
  INPUT_OTP: 'INPUT_OTP',
  SELECT_PLACES_AND_SERVICES: 'SELECT_PLACES_AND_SERVICES',
  // TRAINING: 'TRAINING',
  // SEND_PROFILE: 'SEND_PROFILE',
};

export const REJECT_HOUSEHOLD_REASON: any = {
  NOT_CLEARLY_IMAGE: {
    vi: 'Hình ảnh còn mờ/chưa rõ nét. Bạn vui lòng chụp và nộp lại trên ứng dụng',
    en: 'Image is not clear enough, please kindly take another one and submit to the app',
    ko: 'Image is not clear enough, please kindly take another one and submit to the app',
    th: 'ภาพไม่ชัด กรุณาถ่ายภาพใหม่และส่งกลับมาลงทะเบียนที่แอปฯ อีกครั้ง',
    id: 'Gambar yang diunggah tidak jelas, mohon ambil ulang gambar dan masukkan unggah gambar di aplikasi',
  },
  EXPIRED_IDENTITY: {
    vi: 'Hồ sơ đã hết hạn sử dụng. Bạn vui lòng liên hệ công an địa phương để gia hạn và nộp lại trên ứng dụng',
    en: 'Profile has been expired, please kindly contact your local authority for extension and submit to the app',
    ko: 'Profile has been expired, please kindly contact your local authority for extension and submit to the app',
    th: 'ประวัติหมดอายุ กรุณาติดต่อหน่วยงานในพื้นที่ของคุณเพื่อขยายเวลาเอกสาร และส่งกลับมาลงทะเบียนที่แอปฯ อีกครั้ง',
    id: 'Dokumen profil sudah kadaluwarsa, mohon perbarui dokumen dan unggah kembali di aplikasi',
  },
  NOT_VERIFIED_BY_LOCALITY: {
    vi: 'Hồ sơ chưa được công chứng. CTV vui lòng công chứng hồ sơ và nộp lại trên ứng dụng',
    en: 'Profile has not been notarized, tasker must notarize the profile and submit to the app',
    ko: 'Profile has not been notarized, tasker must notarize the profile and submit to the app',
    th: 'ประวัติยังไม่ได้รับรอง เอกสารของคุณต้องมีการรับรองประวัติ และส่งกลับมาลงทะเบียนที่แอปฯ อีกครั้ง',
    id: 'Dokumen profil belum dilegalisir, mohon dilegalisir dahulu dan unggah ulang di aplikasi',
  },
};

export const FINE_REASONS_LANGUAGE = {
  TASKER_LOW_QUALITY: {
    vi: 'Chất lượng công việc thấp',
    en: 'Low quality service',
    ko: '작업의 품질이 좋지 않음',
    th: 'คุณภาพงานแย่',
    id: 'Kualitas buruk layanan',
  },
  TASKER_BAD_ATTITUDE: {
    vi: 'Thái độ không tốt',
    en: 'Bad attitude',
    ko: '나쁜 태도',
    th: 'คำพูด/ทัศนคติไม่ดี',
    id: 'Perilaku buruk',
  },
  TASKER_NOT_ENOUGH_TIME: {
    vi: 'Không làm đủ số giờ',
    en: 'Not enough working hours',
    ko: '근무 시간이 충분하지 않음',
    th: 'ทำงานไม่ครบเวลา',
    id: 'Jam kerja yang kurang',
  },
  ASKER_CANCEL_TASK: {
    vi: 'Asker hủy việc gấp',
    en: 'Asker cancels urgently',
    ko: '작업이 급히 취소되었습니다',
    th: 'ลูกค้ายกเลิกงานกะทันหัน',
    id: 'Asker membatalkan karena keadaan darurat',
  },
  ASKER_REFUSE_PAY: {
    vi: 'Asker từ chối thanh toán',
    en: 'Asker refuses to pay',
    ko: '지불을 거부되었습니다',
    th: 'ลูกค้าปฏิเสธการจ่ายเงิน',
    id: 'Asker menolak untuk membayar',
  },
  ASKER_NOT_PAID_ENOUGH: {
    vi: 'Asker không thanh toán đủ số tiền',
    en: 'Asker does not pay enough',
    ko: '작업이 충분히 지불되지 않습니다',
    th: 'ลูกค้าจ่ายเงินไม่ครบ',
    id: 'Asker tidak cukup membayar',
  },
};

export const TASKER_REGISTER_SERVICES = {
  CLEANING: 'cleaning',
  COOKING: 'cooking',
  HOSTEL: 'hostel',
  AIR_CONDITIONAL: 'airConditioner',
  LAUNDRY: 'laundry',
};

export const DEFAULT_TASKER_RATING = 5;
