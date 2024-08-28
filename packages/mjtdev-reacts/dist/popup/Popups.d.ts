export declare const Popups: {
    openPopup: (content: import("react").ReactNode, options?: Partial<{
        name: string;
        x: number;
        y: number;
        right: string;
        visible: boolean;
        showFrame: boolean;
    }>) => string;
    closePopup: (name: string) => void;
    calcCenterPopup: (w: number, h: number) => {
        x: number;
        y: number;
    };
    usePopupState: import("..").State<{
        popups: Record<string, Partial<import("./usePopupState").PopupState>>;
        x: number;
        y: number;
    }>;
    isPopupOpen: (name: string) => boolean;
    openCenteredPopup: (content: import("react").ReactNode, options?: Partial<{
        name: string;
        x: number;
        y: number;
        showFrame: boolean;
        onClose: () => void;
        escapeCloses: boolean;
    }>) => string;
    centerPopup: (name: string, container: HTMLElement) => void;
    isPopupVisible: (name: string) => boolean | undefined;
    hidePopup: (name: string) => void;
    showPopup: (name: string) => void;
};
//# sourceMappingURL=Popups.d.ts.map