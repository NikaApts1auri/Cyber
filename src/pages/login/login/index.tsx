import React from "react";
import { useNavigate } from "react-router-dom";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "../../../ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "../../../ui/card";
import PasswordField from "../../../Form Components/PasswordField";
import { useForm } from "react-hook-form";
import FormInput from "../../../Form Components/FormInput";
import { validationSchema } from "./validation";
import { useLogin } from "../../../api/hooks/useLogin"; 

export const mobileStylesForForms = `border-white sm:border-neutral-200 shadow-none sm:shadow-lg`;

type FormData = z.infer<typeof validationSchema>;

const Login: React.FC = () => {
  const navigate = useNavigate();


  const { loginUser, isLoading } = useLogin();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(validationSchema),
  });

  const onSubmit = (data: FormData) => {
    console.log("Form Data:", data);
    loginUser(data, () => {
      navigate("/"); // Navigate to home after successful login
    });
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
              label="Email"
              type="email"
              placeholder="Enter your email"
              register={register("identifier")}
              error={errors.identifier?.message}
            />
            <PasswordField
              label="Password"
              name="password"
              register={register}
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
            {isLoading ? "Logging in..." : "Log In"}
          </Button>
        </Card>
      </form>
    </div>
  );
};

export default Login;
