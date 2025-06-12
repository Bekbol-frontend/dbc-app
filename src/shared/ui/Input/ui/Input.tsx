import { clsx } from "@/shared/lib/clsx";
import styles from "./Input.module.scss";
import { Flex } from "../../Flex";

interface IProps extends React.InputHTMLAttributes<HTMLInputElement> {
  addClass?: string;
  label?: string;
  error?: string;
  phone?: boolean;
}

function Input(props: IProps) {
  const {
    label,
    addClass = "",
    error = "",
    phone = false,
    ...otherProps
  } = props;
  const { type = "text", id } = otherProps;

  return (
    <Flex
      flexDirection="column"
      gap={5}
      addClass={clsx([styles.block, addClass])}
    >
      {label && (
        <label className={styles.label} htmlFor={id}>
          {label}
        </label>
      )}
      <div
        className={clsx([styles.inputWrapper], {
          [styles.phoneInputWrapper]: phone,
          [styles.errorInputWrapper]: Boolean(error),
        })}
      >
        {phone && <span className={styles.phoneSpan}>+998</span>}
        <input
          type={type}
          {...otherProps}
          className={clsx([styles.input], {
            [styles.errorInput]: Boolean(error),
            [styles.phoneInput]: phone,
          })}
        />
      </div>
      {error && <span className={styles.errorSpan}>{error}</span>}
    </Flex>
  );
}

export default Input;
