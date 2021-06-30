export type ToggleProps = {
    isOpen: boolean;
    toggleState: () => void;
};

export enum SectionIconsEnum {
    app = 'APPS',
    view = 'viewList',
    logout = 'PowerSettingsNewIcon',
}

export type Section = {
    title: string;
    icon: SectionIconsEnum;
};
