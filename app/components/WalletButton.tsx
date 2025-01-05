"use client";

import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import { useWallet } from "@solana/wallet-adapter-react";

export function WalletButton() {
  const { wallet } = useWallet();

  return (
    <WalletMultiButton className="!rounded-xl !px-6 !py-3 !font-medium !text-base" />
  );
}
