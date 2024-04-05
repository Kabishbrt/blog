import Link from 'next/link';

export default function NotFound() {
  return (
    <div className='absolute inset-0'>
      <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
        <h2>404 Not Found</h2>
        <p>Could not find the requested resource</p>
        <Link href="/" className='text-primary'>Return Home</Link>
      </div>
    </div>
  );
}
