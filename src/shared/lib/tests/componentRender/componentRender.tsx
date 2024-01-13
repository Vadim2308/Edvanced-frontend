import { render } from '@testing-library/react';
import { I18nextProvider } from 'react-i18next';
import React, { ReactNode } from 'react';
import { MemoryRouter } from 'react-router-dom';
import type { ReducersMapObject } from '@reduxjs/toolkit';
import { StateSchema, StoreProvider } from '@/app/providers/StoreProvider';
import i18nForTest from '@/shared/config/i18n/i18nForTest';
import { Theme } from '@/shared/const/theme';
import { ThemeProvider } from '../../../../app/providers/ThemeProvider';

export interface componentRenderOptions {
  route?: string;
  initialState?: DeepPartial<StateSchema>;
  asyncReducers?: DeepPartial<ReducersMapObject<StateSchema>>;
  theme?: Theme;
}

interface TestProviderProps {
  children: ReactNode;
  options?: componentRenderOptions;
}

// MemoryRouter хранит свои местоположения внутри массива. В отличие от <BrowserHistory>и <HashHistory>, он не привязан к внешнему источнику, например, к стеку истории в браузере. Это делает его идеальным для сценариев, где необходим полный контроль над стеком истории, например при тестировании.

export const TestProvider = (props: TestProviderProps) => {
  const { children, options = {} } = props;
  const {
    route = '/',
    initialState,
    asyncReducers,
    theme = Theme.LIGHT,
  } = options;
  return (
    <MemoryRouter initialEntries={[route]}>
      <StoreProvider asyncReducers={asyncReducers} initialState={initialState}>
        <I18nextProvider i18n={i18nForTest}>
          <ThemeProvider initialTheme={theme}>{children}</ThemeProvider>
        </I18nextProvider>
      </StoreProvider>
    </MemoryRouter>
  );
};

export function componentRender(
  component: ReactNode,
  options: componentRenderOptions = {},
) {
  return render(<TestProvider options={options}>{component}</TestProvider>);
}
