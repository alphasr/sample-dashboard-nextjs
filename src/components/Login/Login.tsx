import Button from "@mui/material/Button";
import { signIn, signOut, useSession } from "next-auth/react";

const Login = () => {
  const { data: session } = useSession();

  if (session) {
    return (
      <>
        <Button variant={"contained"} color={"error"} onClick={() => signOut()}>
          Sign Out
        </Button>
      </>
    );
  }
  return (
    <>
      Please Sign In <br />
      <Button variant={"contained"} color={"success"} onClick={() => signIn()}>
        Sign In
      </Button>
    </>
  );
};

export default Login;
