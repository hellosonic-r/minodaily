export interface IButtonProps {
  width: number;
  height: number;
  children: React.ReactNode;
  textColor: string;
  textSize?: string;
  textWeight?: string;
  backgroundColor: string;
  onClick: () => void;
}
