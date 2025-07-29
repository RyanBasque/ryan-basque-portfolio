export interface InputProps {
  type?: "text" | "email" | "password" | "tel" | "url" | "number";
  placeholder?: string;
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
  onFocus?: (event: React.FocusEvent<HTMLInputElement>) => void;
  disabled?: boolean;
  required?: boolean;
  name?: string;
  id?: string;
  className?: string;
  error?: boolean;
  errorMessage?: string;
  label?: string;
  fullWidth?: boolean;
}

export interface StyledInputProps {
  $error?: boolean;
  $fullWidth?: boolean;
}
