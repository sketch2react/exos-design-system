import { ReactNode, SyntheticEvent } from 'react'
import styles from './button.module.scss';

export interface ButtonProps {
  secondary?: boolean;
  onClick: (e:SyntheticEvent) => void;
  children: ReactNode;
  label: string; 
}

export const Button = ({secondary, onClick, label}:ButtonProps) => {
  const classes = `${!!secondary ? styles.secondary : ''} ${styles.button}`;
  return(<button className={classes} onClick={onClick}>{label}</button>)
}