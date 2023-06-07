import { useDispatch, useSelector } from "react-redux";
import { updateCall, updateDisplay } from "../redux/phone.slice";
import { AppDispatch, RootState } from "../../../core/store/store";

export function usePhone() {
  const phone = useSelector((state: RootState) => state.phone);

  const dispatch: AppDispatch = useDispatch();

  const handleUpdateCall = () => {
    dispatch(updateCall());
  };

  const handleUpdateDisplay = (item: string) => {
    dispatch(updateDisplay(item));
  };

  return {
    handleUpdateCall,
    handleUpdateDisplay,
    phone,
  };
}
