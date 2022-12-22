import { SkipBack, SkipForward } from 'phosphor-react'

export default function Navigation() {
    return (
        <div className="flex justify-center">
            <nav className="mt-24">
                <ol className="flex flex-row gap-4 text-red-600 tracking-widest cursor-pointer">
                    <li className="border-2 border-red-600 bg-black w-28 flex justify-center">INICIO</li>
                    <li className="border-2 border-red-600 bg-black w-28 flex justify-center">SOBRE NÓS</li>
                    <li className="border-2 border-red-600 bg-black w-28 flex justify-center">GALERIA</li>
                    <li className="border-2 border-red-600 bg-black w-28 flex justify-center">CONTATO</li>
                </ol>
            </nav>
        </div>
    )
}