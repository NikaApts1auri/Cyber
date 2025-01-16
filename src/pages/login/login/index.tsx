import React from "react";
import { useNavigate } from "react-router-dom";
// import { FieldValues, RegisterOptions, useForm, UseFormRegisterReturn } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "../../../ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "../../../ui/card";
import PasswordField from "../../../Form Components/PasswordField";
import { useLogin } from "../../../api/hooks/useLogin";
import { useForm } from "react-hook-form";
import  FormInput  from "../../../Form Components/FormInput";


export const mobileStylesForForms = `border-white sm:border-neutral-200 shadow-none sm:shadow-lg`;

// ვალიდაციის სქემა zod-ით
const validationSchema = z.object({
  identifier: z
    .string()
    .nonempty("Username or email is required")
    .email("Please enter a valid email"),
  password: z.string().nonempty("Password is required"),
});

type FormData = z.infer<typeof validationSchema>;

const Login: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(validationSchema),
  });

  const { loginUser, isLoading } = useLogin();
  const navigate = useNavigate();

  const onSubmit = async (data: FormData) => {
    await loginUser(data, () => navigate("/"));
  };

  return (
    <div className="mt-60 flex items-center justify-center font-anek-devanagari sm:mt-45">
    <form className="w-full max-w-xl" onSubmit={handleSubmit(onSubmit)}>
      <Card className={`flex flex-col gap-5 p-8 ${mobileStylesForForms}`}>
        <CardHeader>
          <CardTitle className="mt-3 self-start text-5xl sm:self-center sm:text-2xl">
            Login
          </CardTitle>
        </CardHeader>
  
        <CardContent className="sm:pb-0">
          <FormInput
            label="Username or Email"
            type="text"
            placeholder="Username or Email"
            register={register("identifier")}
            error={errors.identifier?.message}
          />
  
          <PasswordField
            label="Password"
            register={register}
            name="password"
            error={errors.password?.message}
            showSignUpLink={true}
          />
        </CardContent>
  
        <Button
          className="w-[90%] self-center py-9 sm:py-5"
          variant="default"
          type="submit"
          disabled={isLoading}
        >
          Log In
        </Button>
      </Card>
    </form>
  </div>
  
  );
};

export default Login;
