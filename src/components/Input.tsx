import { FC, InputHTMLAttributes } from "react";

type Props = {
  label: string;
  id: string;
} & InputHTMLAttributes<HTMLInputElement>;

export const Input: FC<Props> = ({ label, id, type, ...props }) => {
  const isPassword = type === "password";

  return (
    <div>
      <label className="label-text" htmlFor={id}>
        {label}
      </label>
      <div className="input">
        <input id={id} type={type} {...props} />
        {isPassword && (
          <button
            type="button"
            data-toggle-password={`{ "target": "#${id}" }`}
            className="block cursor-pointer"
            aria-label="password toggle"
          >
            <span className="icon-[tabler--eye] text-base-content/80 password-active:block hidden size-5 shrink-0"></span>
            <span className="icon-[tabler--eye-off] text-base-content/80 password-active:hidden block size-5 shrink-0"></span>
          </button>
        )}
      </div>
    </div>
  );
};
