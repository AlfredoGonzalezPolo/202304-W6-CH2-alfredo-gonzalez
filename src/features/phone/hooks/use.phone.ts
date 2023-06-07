import { useDispatch, useSelector } from "react-redux";
import { updateCall } from "../redux/phone.slice";
import { AppDispatch, RootState } from "../../../core/store/store";

export function usePhone() {
  const phone = useSelector((state: RootState) => state.phone);
  const dispatch: AppDispatch = useDispatch();
  const handleUpdateCall = () => {
    dispatch(updateCall());
  };

  return {
    handleUpdateCall,
    phone,
  };
}
