import { FacebookLogo, InstagramLogo, WhatsappLogo, EnvelopeSimple } from 'phosphor-react'

export default function Social() {
    return (
        <nav className="flex justify-center bg-black p-2">
            <ol className="flex flex-row gap-4 text-white tracking-widest cursor-pointer">
                <li className="hover:text-yellow-400">
                    <FacebookLogo size={32} weight="thin" />
                </li>
                <li className="hover:text-yellow-400">
                    <InstagramLogo size={32} weight="thin" />
                </li>
                <li className="hover:text-yellow-400">
                    <WhatsappLogo size={32} weight="thin" />
                </li>
                <li className="hover:text-yellow-400">
                    <EnvelopeSimple size={32} weight="thin" />
                </li>
            </ol>
        </nav>
    )
}