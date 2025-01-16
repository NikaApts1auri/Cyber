import viewIcon from '@/assets/view.png';
import fieye from '@/assets/hide.png';

interface PasswordToggleProps {
  isVisible: boolean;
  toggleVisibility: () => void;
}

export const PasswordToggle: React.FC<PasswordToggleProps> = ({
  isVisible,
  toggleVisibility,
}) => (
  <div onClick={toggleVisibility} className="cursor-pointer">
    <img
      src={isVisible ? viewIcon : fieye}
      alt="Toggle Password Visibility"
      className="ml-3 h-4 w-4"
    />
  </div>
);
