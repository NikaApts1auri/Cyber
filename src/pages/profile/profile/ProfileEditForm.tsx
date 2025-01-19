import React from 'react';
import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';
import { updateUserProfile } from '../../../api/requests/updateUserProfile';
import { validationSchema } from './validationSchema';
import { deleteUserProfile } from '../../../api/requests/deleteUserProfile';


interface ProfileEditFormProps {
  newUsername: string;
  setNewUsername: React.Dispatch<React.SetStateAction<string>>;
  newEmail: string;
  setNewEmail: React.Dispatch<React.SetStateAction<string>>;
  setNewPassword: React.Dispatch<React.SetStateAction<string>>;
  confirmDelete: boolean;
  setConfirmDelete: React.Dispatch<React.SetStateAction<boolean>>;
  setEditing: React.Dispatch<React.SetStateAction<boolean>>;
  setProfilePhoto: React.Dispatch<React.SetStateAction<string>>;
  setUsername: React.Dispatch<React.SetStateAction<string | null>>;
  setEmail: React.Dispatch<React.SetStateAction<string | null>>;
}

const ProfileEditForm: React.FC<ProfileEditFormProps> = ({
  newUsername,
  setNewUsername,
  newEmail,
  setNewEmail,
  setNewPassword,
  confirmDelete,
  setConfirmDelete,
  setEditing,
  setProfilePhoto,
  setUsername,
  setEmail,
}) => {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      username: newUsername,
      email: newEmail,
      password: '',
    },
    validationSchema: validationSchema,
    onSubmit: async (values: { username: string; email: string; password: string; }) => {
      const formData = new FormData();
      formData.append('username', values.username);
      formData.append('email', values.email);
      if (values.password) {
        formData.append('password', values.password);
      }

      const fileInput = document.getElementById(
        'profilePhotoInput'
      ) as HTMLInputElement;
      if (fileInput && fileInput.files && fileInput.files[0]) {
        formData.append('profile_photo', fileInput.files[0]);
      }

      try {
        const updatedUserData = await updateUserProfile(formData);
        setProfilePhoto(
          updatedUserData.profile_photo || '/icons/profilePhoto.svg'
        );
        setUsername(updatedUserData.username);
        setEmail(updatedUserData.email);
        setEditing(false);
      } catch (error) {
        console.error('Failed to update profile:', error);
      }
    },
  });

  const handleDeleteProfile = async () => {
    try {
      await deleteUserProfile();
      console.log('Profile deleted successfully');
      // Remove tokens from local storage
      localStorage.removeItem('accessToken');
      localStorage.removeItem('refreshToken');
      // Navigate to login page
      navigate('/login');
    } catch (error) {
      console.error('Failed to delete profile:', error);
    }
  };

  return (
    <form className="mt-4" onSubmit={formik.handleSubmit}>
      <div className="mb-6">
        <label
          className="block text-lg font-medium text-gray-600"
          htmlFor="username"
        >
          Change Username
        </label>
        <input
          id="username"
          name="username"
          type="text"
          value={formik.values.username}
          onChange={(e) => {
            formik.handleChange(e);
            setNewUsername(e.target.value);
            setUsername(e.target.value);
          }}
          onBlur={formik.handleBlur}
          className="mt-2 block w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-lg shadow-sm focus:border-blue-500 focus:outline-none focus:ring focus:ring-blue-500 focus:ring-opacity-50"
        />
        {formik.touched.username && formik.errors.username ? (
          <div className="mt-1 text-red-500">{formik.errors.username}</div>
        ) : null}
      </div>

      <div className="mb-6">
        <label
          className="block text-lg font-medium text-gray-600"
          htmlFor="email"
        >
          Change Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          value={formik.values.email}
          onChange={(e) => {
            formik.handleChange(e);
            setNewEmail(e.target.value);
            setEmail(e.target.value);
          }}
          onBlur={formik.handleBlur}
          className="mt-2 block w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-lg shadow-sm focus:border-blue-500 focus:outline-none focus:ring focus:ring-blue-500 focus:ring-opacity-50"
        />
        {formik.touched.email && formik.errors.email ? (
          <div className="mt-1 text-red-500">{formik.errors.email}</div>
        ) : null}
      </div>

      <div className="mb-6">
        <label
          className="block text-lg font-medium text-gray-600"
          htmlFor="password"
        >
          New Password
        </label>
        <input
          id="password"
          name="password"
          type="password"
          value={formik.values.password}
          onChange={(e) => {
            formik.handleChange(e);
            setNewPassword(e.target.value);
          }}
          onBlur={formik.handleBlur}
          className="mt-2 block w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-lg shadow-sm focus:border-blue-500 focus:outline-none focus:ring focus:ring-blue-500 focus:ring-opacity-50"
        />
        {formik.touched.password && formik.errors.password ? (
          <div className="mt-1 text-red-500">{formik.errors.password}</div>
        ) : null}
      </div>

      <div className="mt-6 flex justify-between space-x-4">
        <button
          type="submit"
          className="w-full rounded-md bg-blue-500 px-6 py-3 text-lg text-white shadow-sm hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Update Profile
        </button>
        <button
          type="button"
          className="w-full rounded-md bg-gray-300 px-6 py-3 text-lg text-black shadow-sm hover:bg-gray-400 focus:outline-none"
          onClick={() => {
            setEditing(false);
            setConfirmDelete(false);
          }}
        >
          Cancel
        </button>
      </div>

      <div className="mt-8 flex justify-center space-x-4">
        <button
          type="button"
          className="rounded-md bg-red-500 px-6 py-3 text-lg text-white shadow-sm hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500"
          onClick={(e) => {
            e.stopPropagation();
            setConfirmDelete(!confirmDelete);
          }}
        >
          Delete Profile
        </button>
      </div>

      {confirmDelete && (
        <div className="mt-4 text-center">
          <p className="text-lg text-red-500">
            Are you sure you want to delete your profile?
          </p>
          <div className="mt-4 flex justify-center space-x-4">
            <button
              className="rounded-md bg-red-500 px-6 py-3 text-lg text-white shadow-sm hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-green-500"
              onClick={handleDeleteProfile}
            >
              Yes, Delete
            </button>
            <button
              className="rounded-md bg-gray-300 px-6 py-3 text-lg text-black shadow-sm hover:bg-gray-400 focus:outline-none"
              onClick={() => setConfirmDelete(false)}
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </form>
  );
};

export default ProfileEditForm;
