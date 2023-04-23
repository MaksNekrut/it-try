import colors from '@/json.constants/colors.json';
import indents from '@/json.constants/indents.json';
import textSizes from '@/json.constants/textSizes.json';
import borders from '@/json.constants/borders.json';
import textWeight from '@/json.constants/textWeight.json';

export interface IButton {
    width?: string;
    background?: keyof typeof colors;
    indent?: keyof typeof indents;
    color?: keyof typeof colors;
    radius?: keyof typeof borders;
    align?: 'start' | 'center' | 'end';
    size?: keyof typeof textSizes;
    weight?: keyof typeof textWeight
    margin?: string;
    onClick?: () => void;
}

export interface IFlexContainer {
    direction?: 'row' | 'column';
    align?: string;
    justify?: string;
    wrap?: 'wrap' | 'nowrap';
    background?: keyof typeof colors;
    gap?: keyof typeof indents;
    radius?: keyof typeof borders;
    margin?: keyof typeof indents;
    padding?: keyof typeof indents;
}

export interface ICommonText {
    text: string
}

export interface IText {
    color?: keyof typeof colors;
    align?: 'start' | 'center' | 'end';
    size?: keyof typeof textSizes;
    weight?: keyof typeof textWeight
}

export interface IInput {
    width: string;
    border: string;
}

export interface IFolderWrapper {
    width: string;
    height: string;
    radius: keyof typeof borders;
    background: keyof typeof colors;

}

export interface ICourse {
    id: number;
    direction: string;
    subdirection: string;
    school: string;
    title: string;
    description:string;
    skills: string;
    price: number;
    duration: string;
    online: boolean;
    city: string;
    levels: string;
    certificate: boolean;
    isfree: boolean;
    languages: string;
    url: string;
}

export interface ICoursesData {
    courses: ICourse[]
}
