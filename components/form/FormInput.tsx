import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Card, CardHeader, CardContent } from "@/components/ui/card";

type FormInputProps = {
  type: string;
  name: string;
  label: string;
  placeholder: string;
  defaultValue?: string;
  required? : boolean;
  inputProps?: React.InputHTMLAttributes<HTMLInputElement>;
};

const FormInput = (props: FormInputProps) => {
  //console.log(props);
  const { type, name, label, placeholder, defaultValue ,required ,inputProps} = props;

  return (
    <div className="space-y-2 mb-4">
        <label 
            htmlFor={name} 
            className="block text-sm font-medium text-gray-700 mb-1"
        >
            {label}
            {required && <span className="text-red-500 ml-1">*</span>}
        </label>
        <Input
            id={name}
            name={name}
            type={type}
            placeholder={placeholder}
            defaultValue={defaultValue}
            required={required}
            {...inputProps}
            className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
        />
    </div>
  );
};
export default FormInput;
