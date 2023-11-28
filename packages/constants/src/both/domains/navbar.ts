import { ACTION_PERMISSION_CONSTANTS, ACCOUNTING_PERMISSION } from "../permissions";

export const LHS_MODULES = [
  {
    value: "asker",
    label: "ASKER",
    requiredPermission: ACTION_PERMISSION_CONSTANTS.readAskersSearch,
    extends: [
      {
        value: "phone",
        label: "Phone",
      },
      {
        value: "name",
        label: "Name",
      },
      {
        value: "referralCode",
        label: "Referral Code",
      },
      {
        value: "friendCode",
        label: "Friend Code",
      },
      {
        value: "all",
        label: "All",
      },
    ],
  },
  {
    value: "tasker",
    label: "TASKER",
    requiredPermission: ACTION_PERMISSION_CONSTANTS.readTaskerSearch,
    extends: [
      {
        value: "phone",
        label: "Phone",
      },
      {
        value: "name",
        label: "Name",
      },
      {
        value: "referralCode",
        label: "Referral Code",
      },
      {
        value: "friendCode",
        label: "Friend Code",
      },
      {
        value: "all",
        label: "All",
      },
    ],
  },
  {
    value: "task",
    label: "TASK",
    requiredPermission: ACTION_PERMISSION_CONSTANTS.readTaskSearch,
    extends: [
      {
        value: "asker",
        label: "Asker",
      },
      {
        value: "tasker",
        label: "Tasker",
      },
    ],
  },
  {
    value: "grocery",
    label: "GROCERY",
    requiredPermission: ACTION_PERMISSION_CONSTANTS.readGrocery,
  },
  {
    value: "schedule",
    label: "SCHEDULE",
    requiredPermission: ACTION_PERMISSION_CONSTANTS.readTaskSchedulesSearch,
    extends: [
      {
        value: "asker",
        label: "Asker",
      },
      {
        value: "tasker",
        label: "Tasker",
      },
    ],
  },
  {
    value: "subscription",
    label: "SUBSCRIPTION",
    requiredPermission: ACTION_PERMISSION_CONSTANTS.readSubscriptionSearch,
    extends: [
      {
        value: "asker",
        label: "Asker",
      },
      {
        value: "tasker",
        label: "Tasker",
      },
    ],
  },
  {
    value: "marketing",
    label: "MARKETING",
    requiredPermission: ACTION_PERMISSION_CONSTANTS.readPromotion,
  },
  {
    value: "report",
    label: "REPORT",
    requiredPermission: false,
  },
  {
    value: "others",
    label: "OTHERS",
    requiredPermission: false,
  },
  {
    value: "settings",
    label: "SETTING",
    requiredPermission: [
      ACTION_PERMISSION_CONSTANTS.userManagement,
      ACTION_PERMISSION_CONSTANTS.managerEmployee,
    ],
  },
  {
    value: "accounting",
    label: "ACCOUNTING",
    requiredPermission: ACCOUNTING_PERMISSION,
  },
  {
    value: "users-deleted",
    label: "USERS_DELETED",
    requiredPermission: ACTION_PERMISSION_CONSTANTS.USERS_DELETED_GET_LIST,
  },
  {
    value: "tasker-report",
    label: "TASKER_REPORT",
    requiredPermission: false,
  },
];
