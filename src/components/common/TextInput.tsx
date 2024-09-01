interface TextInputProps {
  id: string;
  title: string;
  text: string;
  value: string;
  htmlFor: string;
  type?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onCheckChange?: () => void;
}
export function TextInput({
  id,
  title,
  text,
  value,
  htmlFor,
  type = text,
  onChange,
  onCheckChange,
}: TextInputProps) {
  return (
    <div className="flex flex-col items-start gap-1">
      <label htmlFor={htmlFor} className="ml-1">
        {title}
      </label>
      <input
        id={id}
        type={type}
        value={value}
        placeholder={text}
        onChange={onChange}
        className="
        w-full 
        px-5 
        py-3 
        rounded-2xl 
        border border-solid 
        border-gray-400 
        outline-none 
        text-sm"
      />
      {id === "password" && (
        <div>
          <label
            htmlFor="pwCheck"
            className="flex align-center ml-1 text-sm text-gray-700"
          >
            <input
              id="pwCheck"
              type="checkbox"
              className="accent-main mr-1"
              onChange={onCheckChange}
            />
            비밀번호 보기
          </label>
        </div>
      )}
    </div>
  );
}
