import type { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { Icon } from './Icon';
import './Button.css';

type IconName = Parameters<typeof Icon>[0]['name'];

type BaseProps = {
  variant?: 'primary' | 'secondary';
  icon?: IconName;
  children: ReactNode;
  className?: string;
};

type ButtonProps = BaseProps &
  (
    | { to: string; href?: never; onClick?: never; type?: never }
    | { href: string; to?: never; onClick?: never; type?: never }
    | { onClick: () => void; to?: never; href?: never; type?: 'button' | 'submit' }
  );

export function Button({ variant = 'primary', icon, children, className = '', ...rest }: ButtonProps) {
  const classes = `btn ${variant} label ${className}`.trim();
  const content = (
    <>
      {icon ? <Icon name={icon} /> : null}
      {children}
    </>
  );

  if ('to' in rest && rest.to) {
    return (
      <Link className={classes} to={rest.to}>
        {content}
      </Link>
    );
  }

  if ('href' in rest && rest.href) {
    return (
      <a className={classes} href={rest.href}>
        {content}
      </a>
    );
  }

  return (
    <button className={classes} type={('type' in rest && rest.type) || 'button'} onClick={'onClick' in rest ? rest.onClick : undefined}>
      {content}
    </button>
  );
}
