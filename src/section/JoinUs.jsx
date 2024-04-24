//put all the buttons here//
import { Button } from "../component/Button";

export const JoinUs = () => {
  return (
    <>
      <Button onClick={console.log('clicked')} label="Join us"></Button>
      <Button onClick={console.log('clicked')} label="Who are we"></Button>
      <Button onClick={console.log('clicked')} label="Our trainer"></Button>
      <Button onClick={console.log('clicked')} label="Health benefits"></Button>
      <Button onClick={console.log('clicked')} label="Membership card"></Button>
      <Button onClick={console.log('clicked')} label="Book a private session"></Button>
      <Button onClick={console.log('clicked')} label="45 minutes"></Button>
      <Button onClick={console.log('clicked')} label="3 sessions"></Button>
      <Button onClick={console.log('clicked')} label="Heart rate monitor"></Button>
    </>
  );
};
