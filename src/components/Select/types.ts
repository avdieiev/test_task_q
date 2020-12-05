export interface Option {
  label: string;
  value: string;
}

export interface SelectProps {
  options: Option[];
  onChange: (option: Option) => void;
  name?: string;
  selected?: string;
}
