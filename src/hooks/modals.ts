import { useSelector } from "react-redux";
import { RootState } from "../core/store";

export const useModal = () => {
  const { loginModal, registrationModal } = useSelector((state: RootState) => state.modals);
  return { loginModal, registrationModal };
};
