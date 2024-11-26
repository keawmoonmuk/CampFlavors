import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@radix-ui/react-label";
import { provinces } from "@/utils/provinces";
import { MapPin } from "lucide-react";

const ProvincesInput = ({ defaultValue }: { defaultValue?: string }) => {
  const name = "province";

  return (
    <div className="w-full space-y-3">
      <Label
        htmlFor={name}
        className="text-base font-semibold text-gray-800 dark:text-gray-200 md:text-lg flex items-center gap-2"
      >
        {/* <MapPin className="w-5 h-5 text-primary" /> */}
        Select Province
      </Label>
      <Select
        defaultValue={defaultValue || provinces[0].PROVINCE_NAME}
        name={name}
        required
      >
        <SelectTrigger className="w-full min-h-[48px] px-4 rounded-xl border-2 border-gray-200 dark:border-gray-700 focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-200 hover:border-primary dark:hover:border-primary md:min-h-[52px] lg:min-h-[56px] bg-white dark:bg-gray-900">
          <SelectValue
            className="text-base font-medium md:text-lg"
            placeholder="เลือกจังหวัด..."
          />
        </SelectTrigger>
        <SelectContent className="rounded-xl border-2 border-gray-300 dark:border-gray-700 shadow-xl max-h-[350px] overflow-y-auto bg-white dark:bg-gray-900">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-1 p-2">
            {provinces.map((item) => {
              return (
                <SelectItem
                  key={item.PROVINCE_ID}
                  value={item.PROVINCE_NAME}
                  className="cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-200 focus:bg-gray-50 dark:focus:bg-gray-800 rounded-lg"
                >
                  <span className="flex items-center gap-2 text-base md:text-lg py-2 px-3">
                    <MapPin className="w-4 h-4 text-primary" />
                    {item.PROVINCE_NAME}
                  </span>
                </SelectItem>
              );
            })}
          </div>
        </SelectContent>
      </Select>
    </div>
  );
};
export default ProvincesInput;
