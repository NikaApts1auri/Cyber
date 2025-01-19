import React, { ChangeEvent } from 'react';

interface ProfileDetailsProps {
  profilePhoto: string;
  handleProfilePhotoChange: (e: ChangeEvent<HTMLInputElement>) => void;
  reputation: number | null;
  answeredQuestions: number | null;
  username: string | null;
  email: string | null;
}

const ProfileDetails: React.FC<ProfileDetailsProps> = ({
  profilePhoto,
  handleProfilePhotoChange,
  reputation,
  answeredQuestions,
  username,
  email,
}) => {
  return (
    <div>
      <div className="relative mx-auto my-6 flex h-28 w-28 cursor-pointer items-center justify-center overflow-hidden rounded-full bg-gray-300 transition duration-300 hover:ring-2 hover:ring-gray-400 md:h-28 md:w-28 lg:h-28 lg:w-28 xl:h-32 xl:w-32 2xl:h-36 2xl:w-36">
        <label htmlFor="profilePhotoInput" className="relative cursor-pointer">
          <img
            id="profilePhoto"
            src={profilePhoto}
            alt="Profile"
            className="h-full w-full object-cover"
          />
          <input
            id="profilePhotoInput"
            type="file"
            accept="image/*"
            className="hidden"
            onChange={handleProfilePhotoChange}
          />
        </label>
      </div>

      <div className="mb-6 text-center">
        <h1 className="mt-3 text-lg font-semibold md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl">
          {username || 'Loading...'}
        </h1>
        <p className="text-base text-gray-500 md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl">
          {email || 'Loading...'}
        </p>
      </div>

      <div className="mt-6 w-full space-y-6">
        <h2 className="text-center text-lg font-semibold text-gray-400 md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl">
          INFORMATION
        </h2>
        <div className="flex justify-between border-b border-gray-300 py-6 text-gray-700">
          <span className="text-lg text-gray-400 md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl">
            Score
          </span>
          <span className="font-semibold text-gray-600 md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl">
            {reputation !== null ? reputation : 'Loading...'}
          </span>
        </div>
        <div className="flex justify-between border-b border-gray-300 pb-6 text-gray-700">
          <span className="text-lg text-gray-400 md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl">
            Answered Questions
          </span>
          <span className="font-semibold text-gray-600 md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl">
            {answeredQuestions !== null ? answeredQuestions : 'Loading...'}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProfileDetails;
