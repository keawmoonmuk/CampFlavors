import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import FormInput from "@/components/form/FormInput";

const CreateProfilePage = () => {
  const createProfileAction = async (formData: FormData) => {
    "use server";
    const firstName = formData.get("firstName") as string;
    const lastName = formData.get("lastName") as string;
    const email = formData.get("email") as string;
    const phoneNumber = formData.get("phoneNumber") as string;
    console.log("Form data:", { firstName, lastName, email, phoneNumber });
  };

  return (
    <div className="container mx-auto py-10">
      <Card className="max-w-2xl mx-auto">
        <CardHeader>
          <h1 className="text-3xl font-bold text-center">Create Profile</h1>
          <p className="text-muted-foreground text-center">
            Please fill in your information below
          </p>
        </CardHeader>
        <CardContent>
          <form action={createProfileAction} className="space-y-4">
            <div>
              <FormInput
                name="firstName"
                label="First Name"
                type="text"
                placeholder="John"
              />
              <FormInput
                name="lastName"
                label="Last Name"
                type="text"
                placeholder="Doe"
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

            <Button type="submit" className="w-full">
              Create Profile
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};
export default CreateProfilePage;
