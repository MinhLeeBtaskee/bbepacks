export default {
  // TODO: Each country will have each API, will be handled in the future
  PAYOUT: 'v2/backend-user/payout',
  REVERT_PAYOUT: 'v2/backend-user/revert-payout',
  GET_SUBSCRIPTION_V2: 'v2/backend-subscription/get-subscription-data',
  GET_SUBSCRIPTION_V3: 'v2/backend-subscription/get-subscription-data',
  UPDATE_REFUND_AMOUNT: null, // TODO: Need to handle later
  PAYMENT_REFUND: 'v3/payment-indo/refund',
  CREATE_REFUND_REQUEST: 'v2/backend-task/create-refund-request', // Will be implement later
  CANCEL_AND_REBOOK_TASK: 'v3/booking-indo/cancel-and-rebook-task',
  PUSH_NOTIFICATION: 'v3/push-notification-indo/send',
  DELETE_ASKER: 'v2/backend-user/delete-asker',
  EMAIL_RECEIPT: 'v3/email-indo/receipt',
  PUSH_NOTIFICATION_NEW_TASK: 'v3/send-task-indo/new-task',
  PUSH_NOTIFICATION_NEW_TASK_BY_LEVEL: 'v3/send-task-indo',
  WEBSOCKET_SEND_MESSAGE_NOTIFICATION:
    'v3/websocket-indo/send-message-notification',
  WEBSOCKET_SEND_MESSAGE_TASK: 'v3/websocket-indo/send-message-task',
  PRICING_RE_CALCULATE: 'v3/pricing-indo/re-calculate',
  PRICING_AIR_CONDITIONER: 'v3/pricing-indo/air-conditioner',
  PROMOTION_CHECK: 'v3/promotion-indo/check',
  REVERT_USER_DELETED: 'v2/backend-user/revert-users-deleted',
  SMS_SERVICE_SEND: 'v3/sms-indo/send',
  ALLOW_TASKER_DO_TRAINING_TEST_AGAIN:
    'v2/backend-user/allow-tasker-do-training-test-again',
  FORCE_TASKER_DO_ADDITIONAL_TEST:
    'v2/backend-user/force-tasker-do-additional-test',
  GET_TASKER_TRAINING_STATUS: 'v2/backend-user/get-tasker-training-status',
  UPDATE_TASKER_PROFILE: 'v2/backend-user/update-tasker-profile',
  GET_TASKER_MONEY: 'v2/backend-user/get-tasker-money',
  DELETE_TASKER: 'v2/backend-user/delete-tasker',
  PRICING_SOFA: 'v3/pricing-indo/sofa',
  PRICING: 'v3/pricing-indo',
  BOOKING_SUBSCRIPTION: 'v3/booking-indo/subscription',
  PAUSE_SUBSCRIPTION: null, // TODO: Need to handle later
  REACTIVE_SUBSCRIPTION: null, // TODO: Need to handle later
  RENEW_SUBSCRIPTION: 'v3/email-indo/renew-subscription',
  SUBSCRIPTION_ORDER: 'v3/email-indo/subscription-order',
  RECEIPT_SUBSCRIPTION: 'v3/email-indo/receipt-subscription',
  UPDATE_BOOKING_SUBSCRIPTION: 'v2/backend-subscription/update-subscription',
  CANCEL_BOOKING_SUBSCRIPTION: 'v3/cancel-task-indo/subscription',
  DONE_BOOKING_PARTNER_DONE: 'v3/done-task-indo/partner-done',
  UPDATE_BOOKING_INCREASE_DURATION: 'v2/backend-task/increase-duration',
  BACKEND_CANCEL_TASK: 'v3/cancel-task-indo/backend-cancel-task',
  CANCEL_TASK_SUBSCRIPTION: 'v3/cancel-task-indo/cancel-task-subscription',
  UPDATE_BOOKING_LAUNDRY: null, // TODO: Need to handle later
  UPDATE_BOOKING_DEEP_CLEANING: 'v3/update-task-indo/deep-cleaning',
  UPDATE_PREPAY_TASK: 'v2/backend-task/update-prepay-task',
  UPDATE_TASK_DURATION: 'v2/backend-task/update-task-duration',
  UPDATE_TASK_DATE: 'v2/backend-task/update-task-date',
  ACCEPT_BOOKING_DEEP_CLEANING: 'v3/accept-task-indo/accept',
  GET_CHAT_HISTORY: 'v2/backend-task/get-chat-history',
  ADD_CLEANING_TOOL: 'v3/update-task-indo/add-cleaning-tool',
  REMOVE_CLEANING_TOOL: 'v3/update-task-indo/remove-cleaning-tool',
  SET_EXPIRED_TASK: 'v2/backend-task/set-expired-task',
  ADD_NEW_ACCEPTED_TASKER: 'v3/accept-task-indo/add-new-accepted-tasker',
  REPLACE_TASKER_DEPP_CLEANING:
    'v2/backend-api-service/replace-tasker-deep-cleaning',
  UPDATE_TASK_DETAIL: 'v2/backend-task/update-task-detail',
  REMOVE_ACCEPTED_TASKER: 'v2/backend-task/remove-accepted-tasker',
  CONFIRMED_TASKER: 'v2/backend-task/confirmed-tasker',
  GET_TASKS_POTENTIAL_TASKER: 'v2/backend-task/get-tasks-potential-tasker',
  UPDATE_SOFA_QUANTITY: 'v2/backend-task/update-sofa-quantity',
  UPDATE_TASK_NOTE: 'v2/backend-task/update-task-note',
  PRICING_SUBSCRIPTION: 'v3/pricing-indo/subscription',
  V3_BOOKING_SUBSCRIPTION: 'v3/booking-indo/subscription',
  PRICING_SUBSCRIPTION_ELDERLY_CARE:
    'v3/pricing-indo/subscription-elderly-care',
  BOOKING_SUBSCRIPTION_ELDERLY_CARE:
    'v3/booking-indo/subscription-elderly-care',
  PRICING_SUBSCRIPTION_PATIENT_CARE:
    'v3/pricing-indo/subscription-patient-care',
  BOOKING_SUBSCRIPTION_PATIENT_CARE:
    'v3/booking-indo/subscription-patient-care',
  PRICING_SUBSCRIPTION_CHILD_CARE: 'v3/pricing-indo/subscription-child-care',
  BOOKING_SUBSCRIPTION_CHILD_CARE: 'v3/booking-indo/subscription-child-care',
  APPLY_PROMOTION: 'v2/backend-task/apply-promotion',
  BOOK_FIRST_TASK_SUBSCRIPTION: null,
};
