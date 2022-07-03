import { forwardRef, ForwardRefRenderFunction } from 'react';
import { FieldError } from 'react-hook-form';
import {
  FormLabel,
  FormControl,
  FormErrorMessage,
  Switch as ChakraSwitch,
  SwitchProps as ChakraSwitchProps,
} from '@chakra-ui/react'

interface SwitchProps extends ChakraSwitchProps {
  name: string;
  isChecked?: boolean;
  value?: string;
  label?: string;
  colorScheme?: string;
  error?: FieldError;
}

const SwitchBase: ForwardRefRenderFunction<HTMLInputElement, SwitchProps> =
  ({ name, label, isChecked, value, colorScheme, error = null, ...rest }, ref) => {


  return (
    <FormControl display='flex' alignItems='center'>
      {!!label &&
        <FormLabel
          mb='0'
          htmlFor={name}
        >
          {label}
        </FormLabel>
      }
      <ChakraSwitch
        id={name}
        name={name}
        ref={ref}
        size='lg'
        isChecked={isChecked}
        value={value}
        colorScheme={colorScheme}
        {...rest}
      />
      <FormErrorMessage>
        {!!error &&
          (error.message)
        }
      </FormErrorMessage>
    </FormControl>
  )
}

export const Switch = forwardRef(SwitchBase);
