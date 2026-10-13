import { Pressable, PressableProps, Text } from 'react-native';

interface Props extends PressableProps {
  children: string;
  variant?: 'primary' | 'secondary' | 'tertiary';
  className?: string;
  textOnly?: boolean;
}

export const CustomButton = ({
  children,
  variant = 'primary',
  onPress,
  onLongPress,
  className = '',
  textOnly = false,
}: Props) => {
  const btnColor = {
    primary: 'bg-primary',
    secondary: 'bg-secondary',
    tertiary: 'bg-tertiary',
  }[variant];

  const textColor = {
    primary: 'text-primary',
    secondary: 'text-secondary',
    tertiary: 'text-tertiary',
  }[variant];

  return (
    <Pressable
      className={`p-3 ${!textOnly && btnColor} ${!textOnly && ' shadow-lg'}  rounded-xl active:shadow-none  active:opacity-80  ${className}`}
      onPress={onPress}
      onLongPress={onLongPress}
    >
      <Text
        className={`${!textOnly ? 'text-white' : textColor}  text-center font-work-medium text-lg`}
      >
        {children}
      </Text>
    </Pressable>
  );
};
