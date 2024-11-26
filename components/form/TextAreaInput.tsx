import { Textarea } from "@/components/ui/textarea";
import { Label } from "@radix-ui/react-label";

const TextAreaInput = ({
  name,
  labelText,
  defaultValue,
}: {
  name: string;
  labelText?: string;
  defaultValue?: string;
}) => {
  return (
    <div className="w-full space-y-3">
      <Label 
        htmlFor={name}
        className="block text-base font-semibold text-gray-800 dark:text-gray-200 md:text-lg"
      >
        {labelText || name}
      </Label>
      <Textarea 
        id={name} 
        name={name} 
        defaultValue={defaultValue} 
        rows={5}
        required
        className=" w-full min-h-[120px] px-4 py-3 rounded-xl border-2 border-gray-300 dark:border-gray-700 focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-200 hover:border-primary dark:hover:border-primary text-base md:text-lg resize-y"
        placeholder={`Enter ${labelText || name}...`}
      />
    </div>
  );
};
export default TextAreaInput;
