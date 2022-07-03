import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input as ChakraInput,
  InputProps as ChakraInputProps
} from "@chakra-ui/react";
import { FieldError } from 'react-hook-form';
import { forwardRef, ForwardRefRenderFunction } from "react";

interface InputProps extends ChakraInputProps {
  name: string;
  value?: string;
  label?: string;
  error?: FieldError;
}

const InputBase: ForwardRefRenderFunction<HTMLInputElement, InputProps> =
  ({ name, label, value, error = null, ...rest }, ref) => {

    return (
      <FormControl isInvalid={!!error}>
        {!!label && <FormLabel
          htmlFor={name}
        >
          {label}
        </FormLabel>}

        <ChakraInput
          id={name}
          name={name}
          value={value}
          backgroundColor="gray.900"
          focusBorderColor="pink.500"
          variant="filled"
          _hover={{
            backgroundColor: 'gray.900'
          }}
          size="lg"
          ref={ref}
          {...rest}
        />
        <FormErrorMessage>
          {!!error &&
            (error.message)
          }
        </FormErrorMessage>
      </FormControl>
    );
  }

export const Input = forwardRef(InputBase);
