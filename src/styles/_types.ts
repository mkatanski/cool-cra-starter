export type InteractiveElement = {
  default: string;
  hover?: string;
};

export type TextElement = {
  primary: string;
  secondary?: string;
  inverse?: string;
};

export type InputElement = {
  background: InteractiveElement;
  text: TextElement;
  focus?: string;
};

export type TableElement = {
  border: string;
  background: string;
  text: TextElement;
};

export type StyledTheme = {
  container: {
    background: string;
    text: TextElement;
  };

  button: {
    background: InteractiveElement;
    text: InteractiveElement;
  };

  input: InputElement;

  table: TableElement;
  tableHeader: TableElement;
  tableRowEven: TableElement;
  tableRowOdd: TableElement;
};
