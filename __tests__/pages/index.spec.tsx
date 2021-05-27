import { render, screen } from '@testing-library/react';
import StyledApp from 'components/pages/StyledApp';
import { SessionProvider } from 'contexts/session';
import Index from 'pages/index';

jest.mock('styles/themes');

type ExtraRenderParams = Parameters<typeof render>;
/**
 * Wrap testing library `render` to always render the app using the default styling
 *
 * @param param0 arguments normally provided to `render`
 * @returns normal `render` return value
 */
const renderStyled = (...[children, ...args]: ExtraRenderParams) =>
  render(
    <SessionProvider>
      <StyledApp>{children}</StyledApp>
    </SessionProvider>,
    ...args
  );

test('renders index page', () => {
  renderStyled(<Index />);

  expect(screen.getByText('Hello, world!')).toBeInTheDocument();
});

test('renders main role', () => {
  renderStyled(<Index />);

  expect(screen.getByRole('main')).toBeInTheDocument();
});
