import { Actions } from "../../features/phone/components/actions/actions";
import { Info } from "../../features/phone/components/info/info";
import { Keyboard } from "../../features/phone/components/keyboard/keyboard";

export function App() {
  return (
    <>
      <Info></Info>
      <main className="phone">
        <Keyboard></Keyboard>
        <Actions></Actions>
      </main>
    </>
  );
}
