import { render, screen, fireEvent } from '@testing-library/react';
import { LumaDatePicker, DatePickerProps } from './LumaDatePicker';

describe('LumaDatePicker', () => {
  const datePickerLabel = 'Field Title';
  const dateInDatePicker = new Date(2022, 0, 2);
  const dateFormats = [
    '01/02/2022',
    '02/01/2022',
    '01-02-2022',
    '02-01-2022',
    '2022-02-01',
    '2022-01-02',
    '2022/02/01',
    '2022/01/02',
  ];
  const DatePickerArgs: DatePickerProps = {
    id: 'Date Picker',
    label: datePickerLabel,
    defaultValue: dateInDatePicker,
  };

  it('should render successfully', () => {
    const { baseElement } = render(<LumaDatePicker {...DatePickerArgs} />);
    expect(baseElement).toBeTruthy();
  });

  it('should have label', () => {
    render(<LumaDatePicker {...DatePickerArgs} />);
    screen.getByText(datePickerLabel);
  });

  it(`should render date format MM/dd/yyyy`, () => {
    render(<LumaDatePicker {...DatePickerArgs} inputFormat="MM/dd/yyyy" />);
    screen.getByDisplayValue(dateFormats[0]);
  });

  it(`should render date format dd/MM/yyyy`, () => {
    render(<LumaDatePicker {...DatePickerArgs} inputFormat="dd/MM/yyyy" />);
    screen.getByDisplayValue(dateFormats[1]);
  });

  it(`should render date format MM-dd-yyyy`, () => {
    render(<LumaDatePicker {...DatePickerArgs} inputFormat="MM-dd-yyyy" />);
    screen.getByDisplayValue(dateFormats[2]);
  });

  it(`should render date format dd-MM-yyyy`, () => {
    render(<LumaDatePicker {...DatePickerArgs} inputFormat="dd-MM-yyyy" />);
    screen.getByDisplayValue(dateFormats[3]);
  });

  it(`should render date format yyyy-dd-MM`, () => {
    render(<LumaDatePicker {...DatePickerArgs} inputFormat="yyyy-dd-MM" />);
    screen.getByDisplayValue(dateFormats[4]);
  });

  it(`should render date format yyyy-MM-dd`, () => {
    render(<LumaDatePicker {...DatePickerArgs} inputFormat="yyyy-MM-dd" />);
    screen.getByDisplayValue(dateFormats[5]);
  });

  it(`should render date format yyyy/dd/MM`, () => {
    render(<LumaDatePicker {...DatePickerArgs} inputFormat="yyyy/dd/MM" />);
    screen.getByDisplayValue(dateFormats[6]);
  });

  it(`should render date format yyyy/MM/dd`, () => {
    render(<LumaDatePicker {...DatePickerArgs} inputFormat="yyyy/MM/dd" />);
    screen.getByDisplayValue(dateFormats[7]);
  });

  it('should be disabled', () => {
    render(<LumaDatePicker {...DatePickerArgs} disabled={true} />);
    const datePicker = screen.getByRole('textbox') as HTMLInputElement;
    expect(datePicker).toHaveProperty('disabled', true);
  });

  it('should render list with choosen month name and year', () => {
    render(<LumaDatePicker {...DatePickerArgs} isOpen={true} />);
    const monthName = dateInDatePicker.toLocaleString('en-GB', {
      month: 'long',
    });
    const year = dateInDatePicker.getFullYear();
    screen.getByText(`${monthName} ${year}`);
  });

  it('should render list with choosen month name and year', () => {
    render(<LumaDatePicker {...DatePickerArgs} isOpen={true} />);
    const monthName = dateInDatePicker.toLocaleString('en-GB', {
      month: 'long',
    });
    const year = dateInDatePicker.getFullYear();
    screen.getByText(`${monthName} ${year}`);
  });

  it('should change displayed months', () => {
    render(<LumaDatePicker {...DatePickerArgs} isOpen={true} />);
    const newDate = dateInDatePicker;
    const nextMonth = dateInDatePicker.getMonth() + 1;
    newDate.setMonth(nextMonth);
    const monthName = newDate.toLocaleString('en-GB', { month: 'long' });
    const year = newDate.getFullYear();
    const button = screen.getByTestId('button-next_month');
    fireEvent.click(button);
    screen.getByText(`${monthName} ${year}`);
  });

  it('should change displayed year', () => {
    render(<LumaDatePicker {...DatePickerArgs} isOpen={true} />);
    const newDate = dateInDatePicker;
    const nextYear = newDate.getFullYear() + 1;
    newDate.setFullYear(nextYear);
    const monthName = newDate.toLocaleString('en-GB', { month: 'long' });
    const year = newDate.getFullYear();
    const button = screen.getByTestId('button-next_year');
    fireEvent.click(button);
    screen.getByText(`${monthName} ${year}`);
  });

  it('should change displayed months to the previous', () => {
    render(<LumaDatePicker {...DatePickerArgs} isOpen={true} />);
    const newDate = dateInDatePicker;
    const nextMonth = dateInDatePicker.getMonth() - 1;
    newDate.setMonth(nextMonth);
    const monthName = newDate.toLocaleString('en-GB', { month: 'long' });
    const year = newDate.getFullYear();
    const button = screen.getByTestId('button-prev_month');
    fireEvent.click(button);
    screen.getByText(`${monthName} ${year}`);
  });

  it('should change displayed year to the previous', () => {
    render(<LumaDatePicker {...DatePickerArgs} isOpen={true} />);
    const newDate = dateInDatePicker;
    const nextYear = newDate.getFullYear() - 1;
    newDate.setFullYear(nextYear);
    const monthName = newDate.toLocaleString('en-GB', { month: 'long' });
    const year = newDate.getFullYear();
    const button = screen.getByTestId('button-prev_year');
    fireEvent.click(button);
    screen.getByText(`${monthName} ${year}`);
  });

  it('should change date after clicking', () => {
    render(
      <LumaDatePicker
        {...DatePickerArgs}
        isOpen={true}
        inputFormat="dd/MM/yyyy"
      />
    );
    const selectedDay = 20;
    const dayFromDatePicker = screen.getByText(selectedDay);
    fireEvent.click(dayFromDatePicker);
    const newDate = dateInDatePicker;
    newDate.setDate(selectedDay);
    const result = newDate.toLocaleDateString('en-GB', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
    });
    screen.getByDisplayValue(result);
  });

  it('should show error', () => {
    const helperText = 'Error message';
    render(
      <LumaDatePicker
        {...DatePickerArgs}
        isOpen={true}
        inputFormat="dd/MM/yyyy"
        error={true}
        helperText={helperText}
      />
    );
    screen.getByText(helperText);
  });
});
