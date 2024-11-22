import {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface I18nState {
  module1: string;
  module2: string;
  module3: string;
  module4: string;
}

const initialState: I18nState = {
  module1: 'en',
  module2: 'en',
  module3: 'en',
  module4: 'en',
};

const i18nSlice = createSlice({
  name: 'i18n',
  initialState,
  reducers: {
    setModuleLanguage: (
      state,
      action: PayloadAction<{module: keyof I18nState; language: string}>,
    ) => {
      const {module, language} = action.payload;
      state[module] = language;
    },
  },
});

export const {setModuleLanguage} = i18nSlice.actions;
export default i18nSlice.reducer;
