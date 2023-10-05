"use client";

import { useRouter } from "next/navigation";

export default function NotFound()
{
    const router = useRouter();
    
    return (
        <main className="bg-gray-200 py-36">
            <div className="bg-white rounded-lg shadow-xl p-8 mx-10 md:mx-20 lg:mx-40 text-center">
                <h2 className="text-primary text-4xl font-bold">404</h2>
                <p className="text-xl mt-4">Pagina pe care o căutați nu există sau nu poate fi găsită. Vă rugăm să verificați URL-ul și să încercați din nou.</p>
                <button 
                    className="mt-4 px-5 py-2 border-2 border-primary text-primary hover:bg-primary hover:text-white rounded"
                    onClick={() => router.push("/")}
                >
                    Înapoi Acasă
                </button>
            </div>
        </main>
    );
}