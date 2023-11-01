
import {NextUIProvider} from "@nextui-org/react";
import {PropsWithChildren} from "react";

export default function UIProvider({ children }: PropsWithChildren) {
    return (
        return (
            <NextUIProvider>
                { children }
            </NextUIProvider>
        )
    )
};
