import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import FormInput from "@/components/form/FormInput";
import { SubmitButton } from "@/components/form/Buttons";
import FormContainer from "@/components/form/FormContainer";
import { createLandMarkAction, createProfileAction } from "@/actions/action";
import { actionFunction } from "@/utils/types";
import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import CategoryInput from "@/components/form/CategoryInput";
import TextAreaInput from "@/components/form/TextAreaInput";
import ProvincesInput from "@/components/form/ProvincesInput";
import MapLandmrk from "@/components/map/MapLandmrk";

const CreateLandMarkPage = async () => {
  return (
    <div className="container mx-auto py-10">
      <Card className="max-w-2xl mx-auto shadow-lg">
        <CardHeader>
          <h1 className="text-3xl font-bold text-center">Create LandMark</h1>
          <p className="text-muted-foreground text-center">
            Please fill in your information below
          </p>
        </CardHeader>
        <CardContent>
          <FormContainer action={createLandMarkAction as actionFunction}>
            <div className="space-y-4">
              <FormInput
                name="name"
                label="LandMark Name"
                type="text"
                placeholder="LandMark Name"
                required
              />
            </div>

            <div className="mt-4">
              {/* สำหรับcategory input */}
              <CategoryInput />
            </div>

            {/* สำหรับ text area input */}
            <TextAreaInput
              name="description"
              labelText="Description"
              defaultValue=""
            />

            <div className="space-y-4">
              <FormInput
                name="price"
                label="Price"
                type="number"
                placeholder="Price"
                required
                inputProps={{ min: 0 }}
              />

              {/* สำหรับ provinces input */}
              <ProvincesInput />
            </div>

            {/* สำหรับ map input */}
            <MapLandmrk location={{lat:14,lng:101}} />

            <div className="mt-6 flex justify-center">
              <SubmitButton
                text="Create LandMark"
                size="default"
                className="w-full md:w-auto"
              />
            </div>
          </FormContainer>
        </CardContent>
      </Card>
    </div>
  );
};
export default CreateLandMarkPage;
