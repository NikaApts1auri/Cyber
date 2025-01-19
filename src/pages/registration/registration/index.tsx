// src/pages/register/Register.tsx
import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod'; 
import { useNavigate } from 'react-router-dom';
import { Label } from '@radix-ui/react-label';
import { Link } from 'react-router-dom';
import PasswordField from '../../../Form Components/PasswordField';
import { mobileStylesForForms } from '../../login/login';
import { validationSchema } from '../validation/validationSchema';
import { useRegister } from '../../../api/hooks/useRegister';
import { Button } from '../../../ui/button';
import { Card, CardHeader, CardTitle, CardContent } from '../../../ui/card';
import FormInput from '../../../Form Components/FormInput';

interface FormData {
  username: string;
  email: string;
  password: string;
  repeat_password: string;
}

const Register: React.FC = () => {
 const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(validationSchema), 
  });

  const { registerUser, isLoading } = useRegister();
  const navigate = useNavigate();

  const onSubmit = async (data: FormData) => {
    console.log(data); // ფორმის მონაცემები
    console.log(errors); // შეცდომები
    try {
      await registerUser(data); // რეგისტრაციისთვის დავუძახებთ ჰუკს
      navigate('/login'); // წარმატების შემდეგ გადავიტანთ login-ზე
    } catch (error) {
      console.error("Registration Error:", error.message);
      alert("Error occurred during registration. Please try again.");
    }
  };

  return (
    <div className="mt-10 flex items-center justify-center font-anek-devanagari sm:mt-28">
      <form className="w-full max-w-md" onSubmit={handleSubmit(onSubmit)}>
        <Card className={`flex flex-col gap-3 p-5 ${mobileStylesForForms}`}>
          <CardHeader>
            <CardTitle className="mt-2 self-start text-3xl sm:self-center sm:text-xl">
              Sign Up
            </CardTitle>
          </CardHeader>

          <CardContent>
            <FormInput
              label="Email"
              type="email"
              placeholder="Enter your email"
              register={register("email")} 
              error={errors.email?.message}
            />

            <PasswordField
              label="Password"
              register={register}
              name="password"
              error={errors.password?.message}
            />
            <PasswordField
              label="Repeat Password"
              register={register}
              name="repeat_password"
              error={errors.repeat_password?.message}
            />
            <div className="mt-4 flex items-baseline justify-between">
              <Label className="text-[14px] text-[gray]">
                already have an account?
              </Label>
              <Link to={'/login'} className="font-anek-devanagari text-primary">
                Sign In
              </Link>
            </div>
          </CardContent>

          <Button
            className="w-[87%] self-center p-6"
            variant="default"
            type="submit"
            disabled={isLoading}
          >
            Sign Up
          </Button>
        </Card>
      </form>
    </div>
  );
};

export default Register;
