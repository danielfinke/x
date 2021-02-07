import { render } from '@testing-library/react';
import Index from 'pages/index';
import { ThemeProvider } from 'styled-components';
import defaultTheme from 'themes/default.json';

type ExtraRenderParams = Parameters<typeof render>;
/**
 * Wrap testing library `render` to always provide the default styled components theme
 *
 * @param param0 arguments normally provided to `render`
 * @returns normal `render` return value
 */
const renderWithTheme = (...[children, ...args]: ExtraRenderParams) =>
  render(
    <ThemeProvider theme={defaultTheme}>{children}</ThemeProvider>,
    ...args
  );

test('renders index page', () => {
  const { getByText } = renderWithTheme(<Index />);
  const helloWorldElement = getByText('Hello, world!');

  expect(helloWorldElement).toBeInTheDocument();
});
