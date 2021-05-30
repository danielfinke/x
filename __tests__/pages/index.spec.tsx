import { render, screen } from '@testing-library/react';
import StyledApp from 'components/pages/StyledApp';
import { SessionProvider } from 'contexts/session';
import * as useFileInfoModule from 'hooks/useFileInfo';
import * as useFilesModule from 'hooks/useFiles';
import * as Router from 'next/router';
import Index from 'pages/index';

jest.mock('styles/themes');
jest.mock('utils/initialContextStates');

const useFileInfoSpy = jest.spyOn(useFileInfoModule, 'default');
useFileInfoSpy.mockReturnValue({
  icon: '/favicon.ico',
  pid: 'HelloWorld'
});

const useFilesSpy = jest.spyOn(useFilesModule, 'default');
useFilesSpy.mockImplementation((_, callback) =>
  ['/default/Hello World.url'].map(callback)
);

const useRouterSpy = jest.spyOn(Router, 'useRouter') as jest.SpyInstance<
  Record<string, unknown>,
  []
>;
useRouterSpy.mockReturnValue({});

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

test('renders HelloWorld app when desktop file entry clicked', () => {
  renderStyled(<Index />);

  screen
    .getByRole('button', {
      name: 'Hello World'
    })
    .click();

  expect(screen.getByText('Hello, world!')).toBeInTheDocument();
});

test('renders main role', () => {
  renderStyled(<Index />);

  expect(screen.getByRole('main')).toBeInTheDocument();
});
