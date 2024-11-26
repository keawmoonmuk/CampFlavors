import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@radix-ui/react-label";
import { categories } from "@/utils/categories";

const CategoryInput = ({ defaultValue }: { defaultValue?: string }) => {
  const name = "category";

  return (
    <div className="w-full space-y-3">
      <Label
        htmlFor={name}
        className="block text-base font-semibold text-gray-800 dark:text-gray-200 md:text-lg"
      >
        Select Category
      </Label>
      <Select
        defaultValue={defaultValue || categories[0].label}
        name={name}
        required
      >
        <SelectTrigger className="w-full min-h-[48px] px-4 rounded-xl border-2 border-gray-200 dark:border-gray-700 focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-200 hover:border-primary dark:hover:border-primary md:min-h-[52px] lg:min-h-[56px]">
          <SelectValue
            className="text-base font-medium md:text-lg"
            placeholder="Choose a category"
          />
        </SelectTrigger>
        <SelectContent className="rounded-xl border-2 border-gray-300 dark:border-gray-700 shadow-xl md:max-h-none max-h-[350px] md:overflow-visible overflow-y-auto">
          {categories.map((item, index) => {
            return (
              <SelectItem
                key={index}
                value={item.label}
                className="cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-200 focus:bg-gray-50 dark:focus:bg-gray-800"
              >
                <span className="capitalize flex items-center gap-3 text-base md:text-lg py-2 px-1">
                  <item.icon className="w-5 h-5 md:w-6 md:h-6 text-primary" />
                  {item.label}
                </span>
              </SelectItem>
            );
          })}
        </SelectContent>
      </Select>
    </div>
  );
};
export default CategoryInput;
