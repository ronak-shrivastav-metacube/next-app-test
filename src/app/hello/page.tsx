'use client'
import  {useRouter} from 'next/navigation';

export default function Hello() {
    const router = useRouter();
    return (
        <>
            <button onClick={() => router.push('/')} className="bg-red-400 p-5 rounded m-3">Home</button>
        </>
    )
}