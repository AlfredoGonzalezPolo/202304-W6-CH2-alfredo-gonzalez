// import { PhoneState, phoneReducer } from "../reducer/phone.reducer";
// import * as ac from "../reducer/phone.actions.creator";

import { useDispatch, useSelector } from "react-redux";
import { updateCall } from "../redux/phone.slice";
import { AppDispatch, RootState } from "../../../core/store/store";

export function usePhone() {
  const phone = useSelector((state: RootState) => state.phone);
  const dispatch: AppDispatch = useDispatch();
  const handleUpdateCall = () => {
    dispatch(updateCall());
  };
  //   const keyValue = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "delete"];

  //   const [phoneState, dispatch] = useReducer(phoneReducer, initialState);

  //   function handleAddNumber(value: string) {
  //     if (phoneState.phoneNumber.length < 9) {
  //       dispatch(ac.addNumberToDisplayAction(value));
  //     }
  //   }

  //   function handleDelete() {
  //     dispatch(ac.removeNumberFromDisplayAction());
  //   }

  //   function handleCall() {
  //     if (phoneState.phoneNumber.length === 9) {
  //       dispatch(ac.toggleCallAction());
  //     }
  //   }

  //   function handleHang() {
  //     if (phoneState.calling) {
  //       dispatch(ac.toggleCallAction());
  //     }
  //   }

  //   useEffect(() => {
  //     if (!phoneState.calling) {
  //       if (phoneState.calling) {
  //         setTimeout(() => {
  //           dispatch(ac.toggleCallAction());
  //         }, 2000);
  //       }
  //     }
  //   }, [phoneState.calling]);

  return {
    handleUpdateCall,
    phone,
  };
  // }
}
