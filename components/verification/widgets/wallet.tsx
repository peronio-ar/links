import { useQRCode } from "next-qrcode";
import { UserData } from "../../../types/request";

interface WalletProps {
  user: UserData;
}

export const Wallet = ({ user }: WalletProps) => {
  const { Canvas } = useQRCode();

  return (
    <div>
      <div>
        <div className='flex flex-col'>
          <a
            className='my-4 inline-flex items-center space-x-1 justify-center rounded-md border border-transparent bg-blue-100 px-6 py-4 text-md font-medium text-blue-900/50 hover:bg-blue-200 active:bg-blue-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2'
            href={user.walletUrl}
            target='_blank'
            rel='noreferrer'
          >
            Ver Wallet
          </a>
        </div>

        <div className='flex flex-col justify-center mt-4 text-2xl'>
          <h4 className='text-center'>LNHub</h4>

          <div className='flex flex-row justify-center'>
            <Canvas
              text={`lndhub://${user.lndhub.login}:${user.lndhub.password}@${user.lndhub.url}`}
              options={{
                level: "M",
                margin: 3,
                scale: 4,
                width: 350,
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Wallet;
