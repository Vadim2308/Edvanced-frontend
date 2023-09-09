import { render } from '@testing-library/react';
import { I18nextProvider } from 'react-i18next';
import i18nForTest from 'shared/config/i18n/i18nForTest';
import React, { ReactNode } from 'react';
import { MemoryRouter } from 'react-router-dom';

export interface componentRenderOptions {
  route?: string;
}

// MemoryRouter хранит свои местоположения внутри массива. В отличие от <BrowserHistory>и <HashHistory>, он не привязан к внешнему источнику, например, к стеку истории в браузере. Это делает его идеальным для сценариев, где необходим полный контроль над стеком истории, например при тестировании.

export const componentRender = (
  component: ReactNode,
  options: componentRenderOptions = {},
) => {
  const { route = '/' } = options;
  return render(
    <MemoryRouter initialEntries={[route]}>
      <I18nextProvider i18n={i18nForTest}>{component}</I18nextProvider>
    </MemoryRouter>,
  );
};
