'use client'
import  {useRouter} from 'next/navigation';
export default function Contact() {
    let router = useRouter();
    return(
        <>
        <div>
            <label>Name</label>
            <input type="text" name="name" placeholder="Enter your name"/>
        </div>
        </>
    );
}