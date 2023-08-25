"use client";
import { useEffect, useState } from "react";
import {useRouter} from "next/router";


function LangSwitch() {
    const [mounted, setMounted] = useState(false);
    // When mounted on client, now we can show the UI
    useEffect(() => setMounted(true), []);
    const { locale, push, asPath } = useRouter();
    const otherLocales = useRouter().locales.filter(l => l !== locale);

    return (
        <div className="flex items-center justify-center">
            <button
                aria-label="Toggle locale"
                type="button"
                className="w-10 h-10 ml-3 rounded text-lg hover:bg-slate-100 dark:hover:text-[#397497]"
                onClick={() => push(asPath, asPath, { locale: otherLocales[0] })}
            >
                {otherLocales.filter(l => l !== locale)[0].toLocaleUpperCase()}
            </button>
        </div>
    );
}

export default LangSwitch;
