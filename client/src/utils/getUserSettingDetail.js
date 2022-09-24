import { getUserSetting } from '../services/account';

export const getUserSettingDetail = async uuid => {
  const res = await getUserSetting();
  const settings = res.data.filter(setting => setting.uuid === uuid)[0];
  return {
    allow_invest_push: settings?.allow_invest_push,
    allow_marketing_push: settings?.allow_marketing_push,
    is_active: settings?.is_active,
    is_staff: settings?.is_staff,
  };
};
