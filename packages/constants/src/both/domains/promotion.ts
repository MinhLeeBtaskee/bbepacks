export const PROMOTION_TYPE = {
  BOTH: 'BOTH',
  CURRENT: 'CURRENT',
  NEW: 'NEW',
};

export const PROMOTION_BY = {
  BTASKEE: 'BTASKEE',
  TEASKER: 'TASKER',
};

export const PROMOTION_TARGET = {
  BOTH: 'BOTH',
  ASKER: 'ASKER',
  TASKER: 'TASKER',
};

export const PROMOTION_TYPE_OPTIONS = ['MONEY', 'PERCENTAGE'];
export const PROMOTION_TARGET_USER_OPTIONS = ['CURRENT', 'BOTH', 'NEW'];

// TODO add permission for each tab
// permission: actionPermissionsConstant.userManagement,
export const PROMOTION_TABS = [
  {
    label: 'Single promotion',
    value: '0',
  },
  {
    label: 'Promotion Series',
    value: '1',
  },
  {
    label: 'bRewards',
    value: '2',
  },
  {
    label: 'Campaign',
    value: '3',
  },
  {
    label: 'Combo vouchers',
    value: '4',
  },
];
