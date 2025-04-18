import Link from "next/link";

export default function Studentlist() {
    return(
        <div>
            <ul>
                <li><Link href="/studentlist/Ronak">Ronak</Link></li>
                <li><Link href="/studentlist/Nikita">Nikita</Link></li>
                <li><Link href="/studentlist/Naresh">Naresh</Link></li>
                <li><Link href="/studentlist/Nitendra">Nitendra</Link></li>
            </ul>
        </div>
    );
}