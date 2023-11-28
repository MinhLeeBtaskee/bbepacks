import {
  FetchAllowTaskerDoAdditionalTestParams,
  FetchAllowTaskerDoTrainingTestAgainParams,
  FetchGetStatusTaskerTrainingParams,
  FetchUpdateTaskerProfileParams,
  FetchSendNotificationParams,
} from "../api-services";
import { IUserType } from "../accounting";
import { E_REFUND_STATUS } from "../accounting-report";
import { IIsoCode, IOption, IRangeDate } from "../common";
import { OnChangeDateTimePickerOptionalProp } from "../date-time-picker";
import { ITextLang, ITextLangRelease, TLanguage } from "../lang";
import {
  IAskerFlashSaleForm,
  IAskerReferralCampaignData,
  IAskerReferralCampaignForm,
  IComboVoucherForm,
} from "../marketing";
import {
  IConditionsGetBonusByTraining,
  IQuizzesTrainingJourney,
  ITrainingJourney,
  ITrainingSetting,
} from "../tasker-journey";
import { IStatusTaskerProfile } from "../tasker-profile";
import { ITaskerCampaignData, ITaskerCampaignForm } from "../taskerMarketing";
import { ITaskerNeedsSupportRegistration } from "../taskerNeedsSupportRegistration";
import { IViewedTasker } from "../viewed-tasker";
import { IFilter, IPagination, ISort } from "../pagination";

// TODO Indonesia typing
export interface MeteorMethod extends MeteorMethodPaginationAndFilter {
  "tasker.getTaskerProfileDetail": {
    params: [string];
    return: {
      _id: string;
      tasker: {
        _id: string;
        phone: number;
        username: string;
        name: string;
        avatar: string;
        address: string;
        gender: string;
      };
      updatedAt: Date;
      identityCard: {
        images: [string, string];
        status: IStatusTaskerProfile;
      };
      appointmentInfo: {
        address: string;
        city: string;
        name: string;
        phoneNumber: string;
        date: Date;
      };
      confirmationConduct: {
        images: [string, string];
      };
      household: {
        images: [string, string];
        status: IStatusTaskerProfile;
      };
      curriculumVitae: {
        images: [string, string];
      };
    };
  };
  "notification.send.v2": {
    params: [
      FetchSendNotificationParams & {
        isSendNotificationId?: boolean;
        locale: TLanguage;
      },
    ];
    return: Promise<any>;
  };
  "tasker.allowTaskerDoAdditionalTest": {
    params: [FetchAllowTaskerDoAdditionalTestParams];
    return: Promise<any>;
  };
  "tasker.allowTaskerDoTrainingAgain": {
    params: [FetchAllowTaskerDoTrainingTestAgainParams];
    return: Promise<any>;
  };
  "tasker.getStatusTaskerProfileByKey": {
    params: [string, string];
    return: IStatusTaskerProfile | null;
  };
  "accounting.getIncomeByParams": {
    params: [
      {
        filter: {
          rangeDate?: IRangeDate;
          "user.phone"?: string;
          "user.name"?: string;
        };
        type: IUserType;
      },
    ];
    return: {
      total: number;
      data: Array<{
        _id: string;
        phone: string;
        name: string;
        transactions: {
          _id: string;
          amount: number;
          type: "C" | "D";
          date: Date;
        };
      }>;
    };
  };
  "accounting.geAmountInPastByUserId": {
    params: [
      {
        userId: string;
        toDate: Date | null;
      },
    ];
    return: {
      value: number;
    };
  };
  "accounting.getTotalAmountAllUsers": {
    params: [
      {
        rangeDate: Date | IRangeDate | null;
        type: IUserType;
      },
    ];
    return: {
      value: number;
    };
  };
  "tasker.updateStatusTaskerProfile": {
    params: [{ profileId: string; status?: IStatusTaskerProfile }];
    return: { message: "done" };
  };
  "tasker.updateTaskerProfile": {
    params: [
      Omit<FetchUpdateTaskerProfileParams, "isoCode"> & {
        taskerId: string;
      },
    ];
    return: Promise<any>;
  };
  "users_deleted.getByPagination": {
    params: [IPagination, ISort, IFilter];
    return: {
      total: number;
      data: Array<{
        name: string;
        phone: string;
        address: string;
        type: string;
        avatar: string;
        _id: string;
      }>;
    };
  };
  "accounting.payouts": {
    params: [Array<string>, boolean | undefined];
    return: {
      fail: any;
      success: any;
    };
  };
  "accounting.deletePayout": {
    params: [string];
    return: undefined;
  };
  "asker.searchSinglePromotion": {
    params: [
      {
        pagination: IPagination;
        filter: {
          search?: { value: string; option: string };
        };
      },
    ];
    return: {
      total: number;
      currency: string;
      data: Array<{
        code: string;
        description: string;
        typeOfPromotion: string;
        value: number;
        startDate: Date;
        endDate: Date;
        limit: number;
        createdAt: Date;
        numberOfUsed: number;
      }>;
    };
  };
  "accounting.getAllWeeklyPayout": {
    params: [
      {
        "user.phone"?: string;
        "user.name"?: string;
        rangeDate?: Array<Date>;
        payoutNotSupport?: Array<any>;
      },
    ];
    return: {
      totalMoney: number;
      total: number;
      data: Array<{
        name: string;
        phone: string;
        city: string;
        createdAt: Date;
        taskerId: string;
        amount: number;
        payoutAmount?: number;
        statusLocked?: string;
        status: string;
        updatedAt: Date;
        avatar: string;
        isoCode: string;
        user: {
          status: string;
        };
        isLockedOfViolate: boolean;
        TCBankNumber: string;
      }>;
    };
  };
  "accounting.revertPayout": {
    params: [string];
    return: Promise<any>;
  };
  "tasker.getFeedbackByPagination": {
    params: [
      {
        pagination: IPagination;
        filter: {
          minStar: number;
          maxStar: number;
          city: Array<string>;
          rangeDate?: Array<Date>;
          "tasker.phone"?: string;
          "tasker.name"?: string;
        };
      },
    ];
    return: {
      total: number;
      data: Array<{
        tasker: {
          _id: string;
          avatar: string;
          phone: string;
          name: string;
        };
        taskId: string;
        city: string;
        createdAt: Date;
        review: string;
        rate: number;
        feedBack: Array<string>;
      }>;
    };
  };
  "refundRequest.updateRefund": {
    params: [
      string,
      {
        newRefundAmount: number;
        reason: string;
      },
    ];
    return: Promise<any>;
  };
  "task.getAllTaskUsePromotionCode": {
    params: [
      {
        rangeDate?: IRangeDate;
        search: { value: string; option: string };
      },
    ];
    return: Array<{
      _id: string;
      "costDetail.cost": number;
      "costDetail.finalCost": number;
      createdAt: Date;
      "originCurrency.sign": string;
      promotionCode: string;
      promotionValue: {
        type: string;
        value: number;
        maxValue: number;
      };
      users: {
        name: string;
        phone: string;
      };
    }>;
  };
  "tasker.getJourneySetting": {
    params: [string];
    return: {
      _id: string;
      cityName: string;
      status: string;
      taskerId: string;
      isTesting: boolean;
      createdAt: Date;
      levels: Array<{
        name: string;
        title: {
          vi: string;
          en: string;
          th: string;
          id: string;
        };
        text: {
          vi: string;
          en: string;
          th: string;
          id: string;
        };
        conditions: Array<{
          name: string;
          text: {
            vi: string;
            en: string;
            th: string;
            id: string;
          };
          target: number;
          icon: string;
          avgRating?: number;
          training?: Array<{
            name: string;
            text: {
              vi: string;
              en: string;
              th: string;
              id: string;
            };
          }>;
          taskInMonth?: number;
        }>;
        bonus: Array<{
          id?: string;
          name: string;
          text?: {
            vi: string;
            en: string;
            th: string;
            id: string;
          };
          image?: string;
          amount?: number;
          detail?: Array<{
            name: string;
            text: {
              vi: string;
              en: string;
              th: string;
              id: string;
            };
            numberOfDay: number;
            numberOfTask: number;
            bPoint: number;
          }>;
        }>;
        icon: string;
        reward?: Array<{
          name: string;
          text: {
            vi: string;
            en: string;
            th: string;
            id: string;
          };
          point: { percentage: number };
        }>;
        missions?: Array<{
          text: {
            vi: string;
            en: string;
            th: string;
            id: string;
          };
        }>;
      }>;
      rewards: Array<{
        name: string;
        title: {
          vi: string;
          en: string;
          th: string;
          id: string;
        };
        text: {
          vi: string;
          en: string;
          th: string;
          id: string;
        };
        conditions: Array<{
          name: string;
          text: {
            vi: string;
            en: string;
            th: string;
            id: string;
          };
          target: number;
          icon: string;
          avgRating?: number;
          training?: Array<{
            name: string;
            text: {
              vi: string;
              en: string;
              th: string;
              id: string;
            };
          }>;
        }>;
        bonus: Array<{
          id: string;
          name: string;
          text: {
            vi: string;
            en: string;
            th: string;
            id: string;
          };
          image: string;
          isReceived: boolean;
          receivedAt: string;
        }>;
        icon: string;
      }>;
      trainingCompleted: Array<{
        name: string;
        text: {
          vi: string;
          en: string;
          th: string;
          id: string;
        };
      }>;
      trainingNotCompleted: Array<{
        name: string;
        text: {
          vi: string;
          en: string;
          th: string;
          id: string;
        };
      }>;
    };
  };
  "vat.updateStatus": {
    params: [
      {
        vatRequestId?: string;
        filter: { rangeDate: IRangeDate | null };
        status: string;
        vatInvoice?: string;
      },
    ];
    return: { message: "Successful"; status?: string; vatRequestId?: string };
  };
  "tasker.updateBonusJourney": {
    params: [
      string,
      {
        id: string;
        name: string;
        text: ITextLang;
        image: string;
      },
      number,
    ];
    return: void;
  };
  "tasker.updateTrainingJourney": {
    params: [
      string,
      {
        name: string;
        text: ITextLang;
      },
      string,
    ];
    return: void;
  };
  "tasker.getSchedule": {
    params: [
      string,
      {
        startDate: Date;
        endDate: Date;
      },
    ];
    return: any;
  };
  "userCarAdvertising.getList": {
    params: [
      {
        referralCode: string;
        rangeDate: Date[];
      },
    ];
    return: {
      data: Array<{
        referralCode: string;
        countAsker: number;
        countTasker: number;
        countEnteredCodeUser: number;
      }>;
      total: number;
    };
  };
  "promotion.deleteCombo": {
    params: [string];
    return: void;
  };
  "promotion.updateCombo": {
    params: [IComboVoucherForm & { _id: string }];
    return: void;
  };
  "promotion.insertCombo": {
    params: [IComboVoucherForm];
    return: void;
  };
  "user.getActionPermissionOfUser": {
    params: [string];
    return: any;
  };
  "services.getAllServices": {
    params: [];
    return: any;
  };
  "users.getCities": {
    params: [string];
    return: {
      cities: Array<string>;
      isoCode?: IIsoCode;
      teams: Array<any>;
    };
  };
  "promotion.getListComboWithPagination": {
    params: [IPagination];
    return: { data: any; total: number };
  };
  "users_deleted.revert": {
    params: [{ userId: string; option?: IOption; reason?: string }];
    return: Promise<any>;
  };
  "users.searching": {
    params: [
      {
        [searchBy: string]: string;
        type: IUserType;
      },
    ];
    return: Array<{
      avatar: string;
      name: string;
      phone: string;
      _id: string;
    }>;
  };
  "tasker.getTrainingTaskerHistory": {
    params: [
      {
        pagination: IPagination;
        taskerId: string;
        filter: {
          type: string;
        };
      },
    ];
    return: {
      total: number;
      data: Array<{
        _id: string;
        type: string;
        status: string;
        createdAt: Date;
        listTraining: {
          title: string;
          _id: string;
        };
      }>;
    };
  };
  "settings.getSettingCountry": {
    params: [];
    return: any;
  };
  "userCarAdvertising.exportUsers": {
    params: [string[], Date[]];
    return: Array<{
      _id: string;
      referralCode: string;
      phone: string;
      name: string;
      createdAt: Date;
    }>;
  };
  "refundRequest.doRefund": {
    params: [string];
    return: any;
  };
  "notification.sendByListUserIds": {
    params: [
      {
        schedule?: Date;
        templateId: string;
        users: Array<{ _id: string; language: string }>;
      },
    ];
    return: any;
  };
  "tasker.getTaskersByServicesAndAreas": {
    params: [
      {
        city?: Array<string>;
        service?: Array<string>;
        status?: string;
        district?: Array<string>;
      },
    ];
    return: any;
  };
  "tasker.getTaskersByPhone": {
    params: [{ phone: string }];
    return: {
      data: Array<{
        _id: string;
        phone: string;
        name: string;
        username: string;
        language: ITextLang;
      }>;
      total: number;
    };
  };
  "service.getServicesByCities": {
    params: [Array<string>];
    return: Array<{ _id: string; text: ITextLang }>;
  };
  "workingPlaces.getAllCities": {
    params: [];
    return: Array<any>;
  };
  "tasker.getAppointmentsApplyProfile": {
    params: [];
    return: { data: Array<string> };
  };
  "askers.insertNote": {
    params: [string, string];
    return: { data: Array<string> };
  };
  "tasker.updateBReward": {
    params: [string, any];
    return: any;
  };
  "taskerDetail.redeemGiftCode": {
    params: [string, string];
    return: any;
  };
  "tasker.getBRewardById": {
    params: [string];
    return: any;
  };
  "tasker.getAllCategories": {
    params: [];
    return: any;
  };
  "promotion.createWithBRewards": {
    params: [any];
    return: any;
  };
  "tasker.deleteBReward": {
    params: [string];
    return: any;
  };
  "promotion.deleteBRewards": {
    params: [string];
    return: any;
  };
  "promotion.getBRewardById": {
    params: [string];
    return: any;
  };
  "promotion.getAllCategories": {
    params: [];
    return: any;
  };
  "tasker.insertBReward": {
    params: [any];
    return: any;
  };
  "promotion.updateBRewards": {
    params: [string, any];
    return: any;
  };
  "tasker.getStatusTaskerTraining": {
    params: [FetchGetStatusTaskerTrainingParams];
    return: {
      TRAINING_ADVANCED: string;
      TRAINING_BASIC: string;
      TRAINING_INPUT: string;
      TRAINING_QUALITY: string;
      TRAINING_REGULATIONS: string;
    };
  };
  "tasker.getAllService": {
    params: [string];
    return: {
      services: {
        _id: string;
        isSupply: boolean;
        text: {
          vi: string;
          en: string;
          ko: string;
          th: string;
        };
        isSubscription: boolean;
        name: string;
      }[];
      taskerServices: string[];
      user: {
        _id: string;
        cleaningOption: {
          hasKitBag: boolean;
          hasCleaningKit: boolean;
        };
      };
    };
  };
  "task.addTaskerToOfficeCleaning": {
    params: [string, string];
    return: { message: string };
  };
  "task.replaceTaskerOfficeCleaning": {
    params: [
      {
        taskId: string;
        taskerPhone: string;
        removeTaskerId: string;
        reason: string;
        chargeTaskerCancelFee: boolean;
      },
    ];
    return: { message: string };
  };
  "task.getWashingMachine": {
    params: [string];
    return: {
      _id: string;
      taskService: {
        name: string;
        text: ITextLang;
        type: {
          name: string;
          text: ITextLang;
          options?: { name: string; text: ITextLang }[];
        }[];
      }[];
      taskPlace: {
        city: string;
        country: string;
        district: string;
      };
      date: Date;
      duration: number;
      autoChooseTasker: boolean;
      isoCode: string;
      serviceId: string;
      serviceName: string;
      homeType: string;
      detailWashingMachine: {
        name: string;
        text: ITextLang;
        type: {
          name: string;
          text: ITextLang;
          options?: { name: string; text: ITextLang }[];
        };
      }[];
      askerId: string;
      createdAt: Date;
    };
  };
  "task.calculateWashingMachinePrice": {
    params: [
      {
        detailWashingMachine: {
          name: string;
          text: ITextLang;
          type: {
            name: string;
            text: ITextLang;
            options?: { name: string; text: ITextLang }[];
          };
        }[];
        task: {
          _id: string;
          date: Date;
          taskPlace: {
            country: string;
            city: string;
            district: string;
          };
          serviceId: string;
          duration: number;
          autoChooseTasker: boolean;
          isoCode: string;
          askerId: string;
          homeType: string;
          createdAt: Date;
        };
      },
    ];
    return: {
      finalCost: number;
      currency: {
        sign: string;
      };
    };
  };
  "task.updateWashingMachine": {
    params: [
      {
        detailWashingMachine: {
          name: string;
          text: ITextLang;
          type: {
            name: string;
            text: ITextLang;
            options?: { name: string; text: ITextLang }[];
          };
        }[];
        taskId: string;
      },
    ];
    return: {
      message: string;
    };
  };
  "asker.insertFlashSale": {
    params: [IAskerFlashSaleForm];
    return: {
      message: string;
    };
  };
  "asker.updateFlashSale": {
    params: [IAskerFlashSaleForm & { _id: string }];
    return: {
      message: string;
    };
  };
  "asker.getFlashSaleById": {
    params: [string];
    return: any;
  };
  "promotion.getIncentivePagination": {
    params: [
      {
        pagination: IPagination;
        filter: IFilter;
        sort: ISort;
      },
    ];
    return: {
      total: number;
      currency: string;
      data: Array<any>;
    };
  };
  "tasker.taskerJourney.getJourney": {
    params: [string];
    return: {
      _id: string;
      avgRating: number;
      nDoneTaskInMonth: number;
      taskDone: number;
      journeyInfo: any;
    };
  };
  "settings.getAllLevelJourney": {
    params: [string];
    return: Array<{
      name: string;
      text: ITextLang;
    }>;
  };
  "asker.paymentCard.updatePaymentCardStatus": {
    params: [{ paymentCardId: string }];
    return: { message: string };
  };
  "tasker.taskerJourney.insertBonusJourney": {
    params: [
      {
        taskerId: string;
        values: {
          name: string;
          bonus: Array<{ text: ITextLang }>;
        };
      },
    ];
    return: { message: string };
  };
  "tasker.taskerJourney.getListLevels": {
    params: [
      {
        cityName: ITrainingSetting["cityName"];
      },
    ];
    return: Array<{
      name: ITrainingSetting["levels"][0]["name"];
      text: ITrainingSetting["levels"][0]["text"];
    }>;
  };
  "tasker.taskerJourney.getCitiesSetting": {
    params: [];
    return: Array<ITrainingSetting["cityName"]>;
  };
  "tasker.taskerJourney.getTrainingToBonus": {
    params: [
      {
        levelName: ITrainingSetting["levels"][0]["name"];
        cityName: ITrainingSetting["cityName"];
      },
    ];
    return: IConditionsGetBonusByTraining["training"];
  };
  "tasker.taskerJourney.insertTrainingIntoSetting": {
    params: [
      {
        title: ITrainingJourney["title"];
        name: ITrainingJourney["name"];
        target: ITrainingJourney["target"];
        quizzes: Array<
          Pick<IQuizzesTrainingJourney, "question" | "answers" | "rightAnswer">
        >;
        videos: Array<
          Pick<
            IQuizzesTrainingJourney,
            "question" | "content" | "youtubeVideoId"
          >
        >;
        readingTime: ITrainingJourney["readingTime"];
        targetCity: ITrainingSetting["cityName"];
        levelName: ITrainingSetting["levels"][0]["name"];
        isTesting: ITrainingJourney["isTesting"];
      },
    ];
    return: { message: string };
  };
  "tasker.taskerJourney.removeTraining": {
    params: [
      {
        trainingId: ITrainingJourney["_id"];
        targetCity: ITrainingSetting["cityName"];
        levelName: ITrainingSetting["levels"][0]["name"];
      },
    ];
    return: { message: string };
  };
  "tasker.taskerJourney.updateTrainingInformation": {
    params: [
      {
        name: ITrainingJourney["name"];
        target: ITrainingJourney["target"];
        readingTime: ITrainingJourney["readingTime"];
        trainingId: ITrainingJourney["_id"];
        isTesting: ITrainingJourney["isTesting"];
      },
    ];
    return: { message: string };
  };
  "tasker.taskerJourney.updateTrainingTitle": {
    params: [
      {
        title: ITextLangRelease;
        trainingId: ITrainingJourney["_id"];
        targetCity: ITrainingSetting["cityName"];
        levelName: ITrainingSetting["levels"][0]["name"];
      },
    ];
    return: { message: string };
  };
  "tasker.taskerJourney.getTrainingById": {
    params: [
      {
        trainingId: ITrainingJourney["_id"];
      },
    ];
    return: {
      _id: ITrainingJourney["_id"];
      name: ITrainingJourney["name"];
      target: ITrainingJourney["target"];
      readingTime: ITrainingJourney["readingTime"];
      title: ITextLangRelease;
      quizzes: Array<
        Pick<
          IQuizzesTrainingJourney,
          "_id" | "question" | "answers" | "rightAnswer" | "createdAt"
        >
      >;
      videos: Array<
        Pick<
          IQuizzesTrainingJourney,
          "_id" | "question" | "content" | "youtubeVideoId" | "createdAt"
        >
      >;
      isTesting: ITrainingJourney["isTesting"];
    };
  };
  "tasker.taskerJourney.updateQuizzesInTraining": {
    params: [
      {
        quizId: IQuizzesTrainingJourney["_id"];
        params: Pick<
          Partial<IQuizzesTrainingJourney>,
          "answers" | "rightAnswer" | "content" | "youtubeVideoId"
        > &
          Pick<IQuizzesTrainingJourney, "question">;
      },
    ];
    return: { message: string };
  };
  "tasker.taskerJourney.insertQuizzesInTraining": {
    params: [
      {
        trainingId: ITrainingJourney["_id"];
        quizzes: Array<
          Pick<IQuizzesTrainingJourney, "question" | "answers" | "rightAnswer">
        >;
        videos: Array<
          Pick<
            IQuizzesTrainingJourney,
            "question" | "content" | "youtubeVideoId"
          >
        >;
      },
    ];
    return: { message: string };
  };
  "tasker.taskerJourney.removeQuizzesInTraining": {
    params: [
      {
        trainingId: ITrainingJourney["_id"];
        quizId: IQuizzesTrainingJourney["_id"];
      },
    ];
    return: { message: string };
  };
  "tasker.taskerJourney.addTrainingIntoSetting": {
    params: [
      {
        idTraining: string;
        title: ITrainingJourney["title"];
        targetCity: ITrainingSetting["cityName"];
        levelName: ITrainingSetting["levels"][0]["name"];
      },
    ];
    return: { message: string };
  };
  "tasker.taskerJourney.insertTraining": {
    params: [
      {
        title: ITrainingJourney["title"];
        name: ITrainingJourney["name"];
        target: ITrainingJourney["target"];
        quizzes: Array<
          Pick<IQuizzesTrainingJourney, "question" | "answers" | "rightAnswer">
        >;
        videos: Array<
          Pick<
            IQuizzesTrainingJourney,
            "question" | "content" | "youtubeVideoId"
          >
        >;
        readingTime: ITrainingJourney["readingTime"];
        levelName: ITrainingSetting["levels"][0]["name"];
        isTesting: ITrainingJourney["isTesting"];
      },
    ];
    return: string;
  };
  "asker.askerReferralCampaign.insertReferralCampaign": {
    params: [IAskerReferralCampaignForm];
    return: {
      message: string;
    };
  };
  "asker.askerReferralCampaign.updateReferralCampaign": {
    params: [IAskerReferralCampaignForm & { _id: string }];
    return: {
      message: string;
    };
  };
  "asker.askerReferralCampaign.getReferralCampaignById": {
    params: [string];
    return: any;
  };
  "tasker.getAllTaskHistory": {
    params: [
      string,
      {
        rangeDate: {
          $gte: Date;
          $lte: Date;
        };
        filterDateBy: string | null;
        status: string[];
        isApplyFilter: boolean;
        services: any[];
        serviceType?: any[] | null;
        cities: string | string[];
      },
    ];
    return: { _id: string; duration: number }[];
  };
  "tasker.campaign.insertCampaign": {
    params: [ITaskerCampaignForm];
    return: { message: string };
  };
  "tasker.campaign.getCampaignById": {
    params: [string];
    return: any;
  };
  "tasker.campaign.updateCampaign": {
    params: [ITaskerCampaignData];
    return: { message: string };
  };
  "task.getTaskersViewed": {
    params: [{ taskId: string; viewedAt: 1 | -1 }];
    return: IViewedTasker[];
  };
  "tasker.taskerProfile.updateAppointmentSchedule": {
    params: [{ taskerProfileId: string; appointmentSchedule: Date }];
    return: {
      message: string;
    };
  };
  "tasker.updateBankAccountNumber": {
    params: [{ taskerId: string; TCBankNumber: string }];
    return: {
      message: string;
    };
  };
  "bEmployee.getTeams": {
    params: [];
    return: {
      teams: string[];
    };
  };
}

export interface MeteorMethodPaginationAndFilter {
  "tasker.getTaskerProfileByPagination": {
    params: [
      {
        pagination: IPagination;
        filter: {
          rangeDate?: IRangeDate;
          search: { value: string; option: string };
          districts: Array<string>;
          status?: IStatusTaskerProfile;
          appointmentAt: OnChangeDateTimePickerOptionalProp;
        };
      },
    ];
    return: {
      total: number;
      data: Array<{
        _id: string;
        status: string;
        tasker: {
          _id: string;
          phone: number;
          username: string;
          name: string;
          avatar: string;
          address: string;
          gender: string;
          type: string;
          status: string;
        };
        createdAt: Date;
        updatedAt: Date;
      }>;
    };
  };
  "vat.getVatByBulkFilter": {
    params: [
      {
        pagination: IPagination;
        filter: {
          rangeDate: IRangeDate | null;
          status?: string;
          typeVat: "task" | "subscription";
        };
        vatId?: string;
        isTask?: boolean;
      },
    ];
    return: any;
  };
  "task.taskUsePromotionCode": {
    params: [
      {
        pagination: IPagination;
        filter: {
          rangeDate?: IRangeDate;
          search: {
            value: string;
            option: string;
          };
        };
      },
    ];
    return: {
      data: Array<{
        _id: string;
        promotionCode: string;
        promotionValue: {
          type: string;
          value: number;
          maxValue: number;
        };
        createdAt: Date;
        "costDetail.cost": number;
        "costDetail.finalCost": number;
        "originCurrency.sign": string;
        users: {
          name: string;
          phone: string;
        };
      }>;
      total: number;
    };
  };
  "accounting.getWeeklyPayout": {
    params: [
      {
        pagination: IPagination;
        filter: {
          rangeDate: IRangeDate;
          "user.phone": string;
          "user.name": string;
        };
      },
    ];
    return: {
      total: number;
      totalMoney: number;
      data: Array<{
        _id: string;
        name: string;
        phone: string;
        city: string;
        createdAt: Date;
        taskerId: string;
        amount: number;
        payoutAmount?: number;
        statusLocked?: string;
        status: string;
        updatedAt: Date;
        bankInfo: any;
        tasker: {
          avatar: string;
          status: string;
          isoCode: string;
          isLockedOfViolate: boolean;
          isIndefiniteLocking: boolean;
        };
      }>;
    };
  };
  "taskerReport.getSupportGasByPagination": {
    params: [
      {
        pagination: IPagination;
        filter: {
          rangeDate: IRangeDate;
        };
      },
    ];
    return: {
      total: number;
      currency: string;
      totalAmount: number;
      data: Array<{
        _id: string;
        amount: number;
        reason: string;
        tasker: {
          _id: string;
          phone: string;
          name: string;
        };
        createdAt: Date;
        updatedAt: Date;
      }>;
    };
  };
  "taskerReport.getCancellationFee": {
    params: [
      {
        pagination: IPagination;
        filter: {
          rangeDate: IRangeDate;
        };
      },
    ];
    return: {
      total: number;
      currency: string;
      totalAmount: number;
      data: Array<{
        _id: string;
        amount: number;
        tasker: {
          _id: string;
          phone: string;
          name: string;
        };
        date: Date;
        reason: string;
      }>;
    };
  };
  "taskerReport.getReferralMoney": {
    params: [
      {
        pagination: IPagination;
        filter: {
          rangeDate: IRangeDate;
        };
      },
    ];
    return: {
      total: number;
      currency: string;
      totalAmount: number;
      data: Array<{
        _id: string;
        amount: number;
        tasker: {
          _id: string;
          phone: string;
          name: string;
        };
        date: Date;
        reason: string;
      }>;
      filter: IFilter;
    };
  };
  "accounting.getHistoryPayoutToTasker": {
    params: [
      {
        pagination: IPagination;
        filter: {
          date: string;
          rangeDate: IRangeDate;
        };
        sort: ISort;
      },
    ];
    return: {
      data: Array<{
        name: string;
        phone: string;
        city: string;
        createdAt: Date;
        taskerId: string;
        amount: number;
        status: string;
        updatedAt: Date;
        tasker: {
          avatar: string;
          isoCode: string;
          status: string;
          TCBankNumber: string;
        };
      }>;
      total: number;
      totalAmount: number;
      currency: string;
    };
  };
  "accounting.report.getHistoryIncome": {
    params: [
      {
        pagination: IPagination;
        filter: {
          rangeDate: IRangeDate | null;
        };
      },
    ];
    return: {
      currency: string;
      total: number;
      totalIncome: number;
      totalTransaction: number;
      data: Array<{
        _id: string;
        date: Date;
        amount: number;
      }>;
    };
  };
  "notification.getNotificationByUserId": {
    params: [
      {
        userId: string;
        pagination: IPagination;
        filter: {
          rangeDate: IRangeDate | null; // createdAt in DB, mean sentAt
        };
      },
    ];
    return: any;
  };
  "asker.getFlashSale": {
    params: [
      {
        pagination: IPagination;
        filter: {
          status: string;
          rangeDate: IRangeDate | null;
        };
      },
    ];
    return: any;
  };
  "tasker.getPointTransactionByTaskerId": {
    params: [
      {
        userId: string;
        pagination: IPagination;
        filter: {
          rangeDate: IRangeDate | null;
          type: string;
        };
      },
    ];
    return: any;
  };
  "tasker.taskerJourney.getTrainingHistoryById": {
    params: [
      {
        taskerId: string;
        pagination: IPagination;
        filter: {
          level: string;
        };
      },
    ];
    return: {
      total: number;
      data: Array<{
        _id: string;
        createdAt: Date;
        level: string;
        title: ITextLang;
        status: string;
        name: ITextLang;
      }>;
    };
  };
  "tasker.taskerJourney.getBonusHistory": {
    params: [
      {
        taskerId: string;
        pagination: IPagination;
        filter: {
          level: string;
        };
      },
    ];
    return: {
      total: number;
      data: Array<{
        receivedAt: Date;
        level: string;
        levelText: ITextLang;
        name: string;
        text: ITextLang;
      }>;
    };
  };
  "userHistory.getAdminHistoryByBulkFilter": {
    params: [
      {
        pagination: IPagination;
        filter: {
          rangeDate: IRangeDate | null;
          search: {
            option: string;
            value: string;
          };
        };
      },
    ];
    return: {
      data: Array<{
        _id: string;
        userId: string;
        username: string;
        action: string;
        detail: any;
        createdAt: Date;
      }>;
      total: number;
    };
  };
  "asker.paymentCard.getPaymentCardById": {
    params: [
      {
        askerId: string;
        pagination: IPagination;
        filter: {
          rangeDate: IRangeDate | null;
          search: {
            option: string;
            value: string;
          };
        };
      },
    ];
    return: {
      total: number;
      data: Array<{
        _id: string;
        status: string;
        createdAt: Date;
        userId: string;
        number: number;
        expiryMonth: string;
        expiryYear: string;
        holderName: string;
        type: string;
        disabled?: boolean;
        updatedAt?: Date;
      }>;
    };
  };
  "asker.askerReferralCampaign.getReferralCampaign": {
    params: [
      {
        pagination: IPagination;
        filter: {
          status: string;
          rangeDate: IRangeDate | null;
        };
      },
    ];
    return: {
      total: number;
      data: Array<IAskerReferralCampaignData>;
    };
  };
  "tasker.taskerReport.getUsedCodesForBRewardOfTasker": {
    params: [
      {
        pagination: IPagination;
        filter: {
          rangeDate: IRangeDate | null;
          search: {
            option: string;
            value: string;
          };
          city: string;
          codeType: string;
        };
      },
    ];
    return: {
      data: Array<any>;
      total: number;
    };
  };
  "tasker.taskerBReward.getListOfRedeemedCodes": {
    params: [
      {
        bRewardId: string;
        pagination: IPagination;
        filter: {
          rangeDate: IRangeDate | null;
        };
      },
    ];
    return: {
      total: number;
      data: Array<{
        _id: string;
        promotionCode: string;
        createdAt: Date;
        updatedAt: Date;
        tasker: {
          _id: string;
          name: string;
          phone: string;
          workingPlaces: {
            city: string;
          };
        };
      }>;
    };
  };
  "accounting.income.getRefundTransactionByThirdParty": {
    params: [
      {
        pagination: IPagination;
        filter: {
          rangeDate: IRangeDate | null;
          paymentMethod: string;
          refundStatus: `${E_REFUND_STATUS}`;
        };
      },
    ];
    return: {
      total: number;
      paidMoney: number;
      paymentFailedMoney: number;
      totalMoney: number;
      data: Array<{
        _id: string;
        status: string;
        createdAt: Date;
        askerId: string;
      }>;
    };
  };
  "accounting.getTransactionsByBPay": {
    params: [
      {
        pagination: IPagination;
        filter: {
          sourceName?: Array<string>;
          userType?: string;
          type?: string | Array<string>;
          accountType?: string;
          search: { value: string; option: string };
          rangeDate: IRangeDate | null;
          groupTypeAndSourceName?: Array<{
            type: Array<string>;
            "source.name": string;
          }>;
        };
      },
    ];
    return: {
      total: number;
      data: Array<{
        _id: string;
        data: Date;
        amount: number;
        source: any;
      }>;
    };
  };
  "accounting.getTransactionCash": {
    params: [
      {
        pagination: IPagination;
        filter: {
          rangeDate: IRangeDate;
          search: { value: string; option: string };
          userType: string;
        };
      },
    ];
    return: {
      total: number;
      data: Array<any>;
    };
  };
  "accounting.report.getServicePaymentTransactionByThirdParty": {
    params: [
      {
        pagination: IPagination;
        filter: {
          rangeDate: IRangeDate;
          search: { value: string; option: string };
          paymentMethod: Array<string>;
          userType: string;
        };
      },
    ];
    return: {
      total: number;
      data: Array<any>;
    };
  };
  "taskerDetail.historyRedeemGiftCode": {
    params: [{ pagination: IPagination; filter: IFilter; taskerId: string }];
    return: {
      total: number;
      data: Array<{
        _id: string;
        tasker: {
          _id: string;
          name: string;
          phone: string;
          city: string;
        };
        promotionCode: string;
        responsiblePerson: string;
        usedAt: Date;
        incentive: {
          title: {
            vi: string;
            en: string;
            ko: string;
            th: string;
            id: string;
          };
        };
      }>;
    };
  };
  "tasker.getTaskerNeedsSupportRegistration": {
    params: [
      {
        pagination: IPagination;
        filter: {
          rangeDate: IRangeDate | null;
          option?: string;
          value?: string;
          unfinishedScreen: string;
          cities: string[];
        };
        name?: any;
        createdAt?: any;
      },
    ];
    return: {
      data: ITaskerNeedsSupportRegistration[];
    };
  };
  "tasker.campaign.getCampaign": {
    params: [
      {
        pagination: IPagination;
        filter: {
          rangeDate: IRangeDate | null;
          search: {
            option: string;
            value: string;
          };
          status: string;
        };
      },
    ];
    return: {
      total: number;
      data: Array<any>;
    };
  };
  "tasker.taskerHaveTaskNoChat.getListTaskerHaveTaskNoChat": {
    params: [
      {
        pagination: IPagination;
        filter: {
          rangeDate: IRangeDate | null;
          search: {
            option: string;
            value: string;
          };
        };
      },
    ];
    return: {
      total: number;
      data: Array<any>;
    };
  };
}

export type IQueryName = keyof MeteorMethod;
export type IQueryNamePaginationAndFilter =
  keyof MeteorMethodPaginationAndFilter;
