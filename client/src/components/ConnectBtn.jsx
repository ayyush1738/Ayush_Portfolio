import { createThirdwebClient } from "thirdweb";

import { ThirdwebProvider, ConnectButton } from "thirdweb/react";

const client = createThirdwebClient({ clientId: "1722754e7fec787bc3f173489b199c78" });

export default function App() {
  return (
    <ThirdwebProvider>
      <ConnectButton client={client} />
    </ThirdwebProvider>
  );
}
