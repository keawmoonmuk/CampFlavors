import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import FormInput from "@/components/form/FormInput";
import { SubmitButton } from "@/components/form/Buttons";
import FormContainer from "@/components/form/FormContainer";
import { createProfileAction } from "@/actions/action";
import { actionFunction } from "@/utils/types";
import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

const CreateProfilePage = async() => {

  const user = await currentUser();
  if(user?.privateMetadata.hashProfile) redirect('/')

  return (
    <div className="container mx-auto py-10">
      <Card className="max-w-2xl mx-auto shadow-lg">
        <CardHeader>
          <h1 className="text-3xl font-bold text-center">Create Profile</h1>
          <p className="text-muted-foreground text-center">
            Please fill in your information below
          </p>
        </CardHeader>
        <CardContent>

          <FormContainer action={createProfileAction as actionFunction}>
            <div className="space-y-4">
              <FormInput
                name="firstName"
                label="First Name"
                type="text"
                placeholder="John"
                required
              />
              <FormInput
                name="lastName"
                label="Last Name"
                type="text"
                placeholder="Doe"
                required
              />
              <FormInput
                name="userName"
                label="User Name"
                type="text"
                placeholder="johndoe"
                required
              />
              <FormInput
                name="email"
                label="Email"
                type="email"
                placeholder="john@doe.com"
                
              />
              <FormInput
                name="phoneNumber"
                label="Phone Number"
                type="tel"
                placeholder="1234567890"
              />
            </div>

            <div className="mt-6 flex justify-center">
              <SubmitButton text="Create Profile" size="default" className="w-full md:w-auto" />
            </div>
          </FormContainer>

        </CardContent>
      </Card>
    </div>
  );
};
export default CreateProfilePage;
