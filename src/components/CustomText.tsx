import React, {FC} from 'react';
import {Text, TextStyle} from 'react-native';
import {colors} from '../utils/colors';

type Props = {
  children: string | number | (string | number)[];
  fontSize: number;
  center?: boolean;
  color?: string;
  style?: TextStyle;
};

const CustomText: FC<Props> = (props: Props) => {
  const {
    fontSize,
    children,
    color = colors.black,
    center = false,
    style,
  } = props;

  const customStyles: TextStyle = {
    fontSize,
    color,
    textAlign: center ? 'center' : undefined,
    ...style,
  };

  return (
    <Text allowFontScaling={false} style={customStyles}>
      {children}
    </Text>
  );
};

export default CustomText;
