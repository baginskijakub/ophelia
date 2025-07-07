import React from 'react';
import styles from './container.module.css';
import clsx from 'clsx';

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> { }

export const Container = (props: ContainerProps) => {
  const { children, className, ...rest } = props;

  const containerClassName = clsx(className, styles.root);

  return (
    <div className={containerClassName} {...rest}>
      {children}
    </div>
  );
}
