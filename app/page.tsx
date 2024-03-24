import { getFrameMetadata } from '@coinbase/onchainkit';
import type { Metadata } from 'next';

const frameMetadata = getFrameMetadata({
  buttons: [
    {
      label: "Begin"
    }
  ],
  image: `${process.env.NEXT_PUBLIC_GATEWAY_URL}/ipfs/QmRwQh27QXKigRxUCRvsxXDaJaaYwJKnbLWhps7yo5WU4j/1.png`,
  post_url: `${process.env.NEXT_PUBLIC_BASE_URL}/api/frame?id=1`,
});

export const metadata: Metadata = {
  title: 'Cats',
  description: 'A frame showing cats',
  openGraph: {
    title: 'Cats',
    description: 'A frame showing cats',
    images: [`${process.env.NEXT_PUBLIC_GATEWAY_URL}/ipfs/QmRwQh27QXKigRxUCRvsxXDaJaaYwJKnbLWhps7yo5WU4j/1.png`],
  },
  other: {
    ...frameMetadata,
    'of:accepts:xmtp': '2024-02-01', 
  },
};

export default function Page() {
  return (
    <>
      <h1>Cats</h1>
    </>
  );
}
