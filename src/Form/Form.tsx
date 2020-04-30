import React, { createRef } from 'react';
import cx from 'classnames';
import './Form.css';

interface iLabelProps {
  props: React.HTMLProps<HTMLLabelElement>;
}

interface iInputProps extends React.HTMLProps<HTMLInputElement> {
  name?: string;
}

interface iRequiredProps {
  message?: string;
}

interface iTextAreaProps {
  props: React.HTMLProps<HTMLTextAreaElement>;
}

export function Label(props: iLabelProps) {
  return <label className={cx('Label')} {...props} />;
}

export function Input(props: iInputProps) {
  return <input className={cx('Input')} {...props} />;
}

export function Required(props: iRequiredProps) {
  return (
    <span className={cx('Required')} {...props}>
      &#42;
    </span>
  );
}

export function Textarea(props: iTextAreaProps) {
  return <textarea className={cx('Textarea')} {...props} />;
}
