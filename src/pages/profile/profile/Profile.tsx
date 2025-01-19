
import { useEffect, useState, ChangeEvent } from 'react';
import ProfileDetails from './ProfileDetails';
import ProfileEditForm from './ProfileEditForm';
import { useLogout } from '../../../api/hooks/useLogout';
import { fetchUser } from '../../../api/requests/getUserProfile';
import { updateUserProfile } from '../../../api/requests/updateUserProfile';

export default function Profile() {
  const [username, setUsername] = useState<string | null>(null);
  const [email, setEmail] = useState<string | null>(null);
  const [reputation, setReputation] = useState<number | null>(null);
  const [answeredQuestions, setAnsweredQuestions] = useState<number | null>(
    null
  );
  const [profilePhoto, setProfilePhoto] = useState<string>(
    'https://github.com/shadcn.png'
  );
  const [, setLoading] = useState<boolean>(true);
  const [, setError] = useState<string | null>(null);

  const [newUsername, setNewUsername] = useState<string>('');
  const [newEmail, setNewEmail] = useState<string>('');
  const [, setNewPassword] = useState<string>('');
  const [confirmDelete, setConfirmDelete] = useState<boolean>(false);

  const [editing, setEditing] = useState<boolean>(false);

  const { handleLogout } = useLogout();

  useEffect(() => {
    const getUserData = async () => {
      try {
        const userData = await fetchUser();
        setUsername(userData.username);
        setEmail(userData.email);
        setReputation(userData.reputation);
        setAnsweredQuestions(userData.answers_count);
        setProfilePhoto(
          userData.profilePhoto || 'https://github.com/shadcn.png'
        );
        setNewUsername(userData.username);
        setNewEmail(userData.email);
      } catch (error) {
        console.log(error);
        setError('Failed to load user data. Please try again.');
      } finally {
        setLoading(false);
      }
    };

    getUserData();
  }, []);

  const handleProfilePhotoChange = async (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const formData = new FormData();
    formData.append('profile_photo', file);

    try {
      await updateUserProfile(formData);
      const userData = await fetchUser();
      setProfilePhoto(userData.profilePhoto || '/icons/profilePhoto.svg');
    } catch (error) {
      if (error instanceof Error) {
        console.error('Failed to update profile photo:', error.message);
      } else {
        console.error('Failed to update profile photo:', error);
      }
    }
  };

  return (
    <div className="flex items-center justify-center">
      <div className="w-full max-w-screen-xl rounded-lg bg-white bg-opacity-50 p-4 shadow-none backdrop-blur-md md:p-5 lg:w-2/3 lg:p-6 xl:p-7 2xl:p-8">
        <h1 className="self-start text-lg font-bold md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl">
          Profile
        </h1>

        <ProfileDetails
          profilePhoto={profilePhoto}
          handleProfilePhotoChange={handleProfilePhotoChange}
          reputation={reputation}
          answeredQuestions={answeredQuestions}
          username={username}
          email={email}
        />

        <div className="lg:hidden">
          <div className="border-b border-gray-300 py-6">
            <button
              className="flex items-center text-gray-500 transition-colors duration-300"
              onClick={handleLogout}
            >
              <img
                src="/icons/logout.svg"
                alt="Log Out Icon"
                className="h-5 w-5 md:h-6 md:w-6"
              />
              <span className="ml-2 text-sm md:text-base">Log Out</span>
            </button>
          </div>
        </div>

        {editing ? (
          <ProfileEditForm
            setEditing={setEditing}
            newUsername={newUsername}
            setNewUsername={setNewUsername}
            newEmail={newEmail}
            setNewEmail={setNewEmail}
            setNewPassword={setNewPassword}
            confirmDelete={confirmDelete}
            setConfirmDelete={setConfirmDelete}
            setProfilePhoto={setProfilePhoto}
            setUsername={setUsername}
            setEmail={setEmail}
          />
        ) : (
          <div className="mt-4 text-center">
            <button
              className="text-xl text-blue-500"
              onClick={() => setEditing(true)}
            >
              Edit Profile
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
