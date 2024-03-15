import { signupFormFields } from "@/constants";
import { UniversalFormikForm } from "../../form";

import { useGlobalContext } from "@/context/GlobalContext";
import * as Yup from "yup";
import { Button, Input } from "@/components";
import LocalStorageManager from "@/utils/localStorage";
import { User } from "@/types/core";
import { updateById } from "@/utils";
import Swal from "sweetalert2";
import { isValidPhoneNumber } from "@/utils/key_functions";

const validationSchema = Yup.object().shape({
  name: Yup.string().required("Full Name is required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),

  businessName: Yup.string().required("Field is required"),
  vendor: Yup.string().required("Field is required"),

  phone: Yup.string()
    .required("Field is required")
    .test("checkValidity", "Invalid Phone Number ", function (value: any) {
      return isValidPhoneNumber(value);
    }),
  whatsappNumber: Yup.string()
    .required("Field is required")
    .test("checkValidity", "Invalid Phone Number ", function (value: any) {
      return isValidPhoneNumber(value);
    }),
});

const updateProfile = async (data: User, handleReset: any = null) => {
  const { _id, password, vendor, confirmPassword, ...formData } = data;
  let status = false;
  try {
    let res = await updateById(`/api/user/${_id}`, formData);
    console.log({ res });
    if (!res.success) throw new Error("Could not update Profile. Try again");
    status = true;
    Swal.fire("Success", "Profile updated successfully");
  } catch (error: any) {
    console.log({ error });
    Swal.fire("Error", error.message);
  }

  handleReset && status && handleReset();
};

const ProfileSettings = ({ handleRefresh }: any) => {
  const { data: globalData, setData } = useGlobalContext();

  return (
    <UniversalFormikForm
      handleSubmit={(values) =>
        updateProfile(values, () => {
          setData({ ...globalData, user: values });
          LocalStorageManager.set("user", values);
          handleRefresh();
        })
      }
      initialValues={globalData.user || LocalStorageManager.get("user")}
      validationSchema={validationSchema}
    >
      {signupFormFields
        .filter((field) => !field.name.toLowerCase().includes("password"))
        .map(
          (
            field: { name: string; type: string; label: string },
            indx: number
          ) =>
            ["vendor", "businesscode"].includes(
              field.name.toLocaleLowerCase()
            ) ? (
              <Input
                key={indx}
                {...{ ...field, disabled: true }}
                labeled={true}
              />
            ) : (
              <Input key={indx} {...field} labeled={true} />
            )
        )}

      <div className="w-full my-3 flex items-center justify-center">
        <Button
          type="submit"
          className="w-[96%] mx-auto bg-product-blue text-xl font-bold"
          onClick={() => console.log("hello")}
        >
          Update Info
        </Button>
      </div>
    </UniversalFormikForm>
  );
};

export default ProfileSettings;
