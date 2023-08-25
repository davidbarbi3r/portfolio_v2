import david404 from '../../public/assets/david-404.svg';
import Image from "next/image";
import {useRouter} from "next/router";
import { FormattedMessage } from "react-intl";

function Custom404() {
    const { back } = useRouter();
    return (
        <>
            <div className="w-full mx-auto h-[100vh] flex items-center justify-center font-main">
                <Image src={david404} alt={"david404"} width={500} height={500} className="" />
                <div>
                    <h1 className="mx-auto text-4xl font-main">
                        <FormattedMessage defaultMessage={"404 - There's nothing to see here"} id="404.title" />
                    </h1>

                    <button onClick={() => back()} className="font-text">
                        <FormattedMessage defaultMessage={"Go back"} id="404.button" />
                    </button>
                </div>
            </div>
        </>
    );
}

export default Custom404;