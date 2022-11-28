import { render, screen } from '@testing-library/react';
import { LumaModal, LumaModalProps } from './LumaModal';

const modalRoot = document.createElement('div');
modalRoot.setAttribute('id', 'root');

describe('LumaModal', () => {
  const title = 'Dummy Hello';
  const modalArgs: LumaModalProps = {
    children: <p>{title}</p>,
    appElement: modalRoot,
    isOpen: true,
    onAfterOpen: jest.fn(),
    onAfterClose: jest.fn(),
  };
  document.body.appendChild(modalRoot);

  it('should render successfully', () => {
    render(<LumaModal {...modalArgs} />);
    expect(screen.getByText(title)).toBeTruthy();
  });
});
