import { fireEvent, render, screen } from '@testing-library/react';
import { ValueTypes } from '../../../../../../../../../redux/src';
import DropdownWrapper from './DropdownWrapper';

describe('DropdownWrapper', () => {
  const paramNameMock = 'testParamName';
  const onChangeMock = jest.fn();
  const onValidationMock = jest.fn();
  const valueMock = {
    type: ValueTypes.Enum,
    label: 'testLabel',
    id: 'testId',
  };
  const constraintsMock = {
    [paramNameMock]: {
      type: ValueTypes.Enum,
      availableValues: [
        valueMock,
        {
          type: ValueTypes.Enum,
          label: 'testLabel2',
          id: 'testId2',
        },
      ],
    },
  };

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should render properly', () => {
    const { baseElement } = render(
      <DropdownWrapper
        paramName={paramNameMock}
        id="testId"
        value={valueMock}
        isDisabled={false}
        onChange={onChangeMock}
        onValidation={onValidationMock}
        constraints={constraintsMock}
      />
    );
    expect(baseElement).toBeInTheDocument();
  });

  it('should render properly disabled', () => {
    render(
      <DropdownWrapper
        paramName={paramNameMock}
        id="testId"
        value={valueMock}
        isDisabled={true}
        onChange={onChangeMock}
        onValidation={onValidationMock}
        constraints={undefined}
      />
    );
    const input = screen.getByRole('textbox');
    expect(input).toHaveProperty('disabled', true);
  });

  it('should trigger change callbacks', () => {
    render(
      <DropdownWrapper
        paramName={paramNameMock}
        id="testId"
        value={valueMock}
        isDisabled={false}
        onChange={onChangeMock}
        onValidation={onValidationMock}
        constraints={constraintsMock}
        readOnly={false}
      />
    );
    const input = screen.getByRole('textbox');
    fireEvent.click(input);
    const listAfterClick = screen.getAllByRole('option');
    fireEvent.click(listAfterClick[1]);
    expect(onChangeMock).toBeCalledTimes(1);
    expect(onValidationMock).toBeCalledTimes(1);
  });
});
