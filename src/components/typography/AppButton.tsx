import React, { FC } from 'react';
import { colors, MouseClick } from 'common/commontypes';

interface Iprops extends MouseClick{
    color: colors,
    text: any,
}

const AppButton:FC<Iprops> = ({ color = 'primary', text, onClickHandler }) => (
  <button type="button" className={`btn btn-${color}`} onClick={onClickHandler}>{text}</button>
);

export default AppButton;
